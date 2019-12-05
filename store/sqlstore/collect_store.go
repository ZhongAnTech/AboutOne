package sqlstore

import (
	"fmt"
	"net/http"
	"strings"
	"sync"
	"za-white-screen/einterfaces"
	"za-white-screen/mlog"
	"za-white-screen/model"
	"za-white-screen/store"
	"za-white-screen/utils"
)

type SqlCollectStore struct {
	SqlStore
	metrics           einterfaces.MetricsInterface
	maxCollectMsgSizeOnce   sync.Once
	maxCollectMsgSizeCached int
}

func NewSqlCollectStore(sqlStore SqlStore,metrics einterfaces.MetricsInterface) store.CollectStore {
	s := &SqlCollectStore{
		SqlStore:          sqlStore,
		metrics:           metrics,
		maxCollectMsgSizeCached: model.POST_MESSAGE_MAX_RUNES_V1,
	}

	for _, db := range sqlStore.GetAllConns() {
		table := db.AddTableWithName(model.Collect{}, "Collect").SetKeys(false, "Id")
		table.ColMap("Id").SetMaxSize(26)
		table.ColMap("Collector").SetMaxSize(26)
		table.ColMap("UserId").SetMaxSize(26)
		table.ColMap("ChannelId").SetMaxSize(26)
		table.ColMap("PostId").SetMaxSize(26)
		table.ColMap("PostIds").SetMaxSize(1024)
		table.ColMap("FileIds").SetMaxSize(512)
		table.ColMap("Title").SetMaxSize(256)
		table.ColMap("Message").SetMaxSize(model.POST_MESSAGE_MAX_BYTES_V2)
	}
	return s
}

func (s *SqlCollectStore) CreateIndexesIfNotExists() {
	s.CreateCompositeIndexIfNotExists("idx_collect_collector_postid", "Collect", []string{"Collector", "PostId"})
	s.CreateFullTextIndexIfNotExists("idx_collect_message_txt", "Collect", "Message")
}

func (s *SqlCollectStore) Insert(collect *model.Collect) (*model.Collect, *model.AppError) {

	if len(collect.Id) > 0 {
		return nil, model.NewAppError("SqlCollectStore.Save", "store.sql_collect.insert.existing.app_error", nil, "id="+collect.Id, http.StatusBadRequest)
	}

	maxPostSize := s.getMaxPostSize()
	collect.PreSave()
	if err := collect.IsValid(maxPostSize); err != nil {
		return nil, err
	}

	if err := s.GetMaster().Insert(collect); err != nil {
		return nil, model.NewAppError("SqlCollectStore.Save", "store.sql_collect.insert.app_error", nil, "id="+collect.Id+", "+err.Error(), http.StatusInternalServerError)
	}

	return  collect,nil
}

func (s *SqlCollectStore) SearchMerg(collector string,postIds string,offset int, limit int) ([]*model.Collect, *model.AppError) {
	var collect []*model.Collect

	queryParams := map[string]interface{}{
		"Collector": collector,
		"PostIds": postIds,
		"Offset": offset,
		"Limit": limit,
	}

	searchQuery := `SELECT
				Collect.*
			FROM
				Collect
			WHERE
				Collect.PostId = ""
				And Collect.Collector = :Collector
				POST_IDS_FILTER
			ORDER BY Collect.CreateAt DESC
			LIMIT :Limit OFFSET :Offset`

	if len(postIds) > 1{
		searchQuery = strings.Replace(searchQuery, "POST_IDS_FILTER", "AND Collect.PostIds = :PostIds", 1)
	}else {
		searchQuery = strings.Replace(searchQuery, "POST_IDS_FILTER", "AND 1=1", 1)
	}

	_,err := s.GetSearchReplica().Select(&collect,searchQuery,queryParams)
	if err != nil {
		return nil, model.NewAppError("SqlCollectStore.Search",
			"store.collect_store.search.app_error", nil, "searchQuery="+searchQuery+", "+err.Error(), http.StatusInternalServerError)
	}
	return collect, nil
}


func (s *SqlCollectStore) Search(collector string,postId string,postIds string,term string,offset int, limit int) ([]*model.Collect, *model.AppError) {
	var collect []*model.Collect

	queryParams := map[string]interface{}{
		"Collector": collector,
		"PostId": postId,
		"PostIds": postIds,
		"Term": "%"+term +"%",
		"Offset": offset,
		"Limit": limit,
	}

	searchQuery := `SELECT
				Collect.*
			FROM
				Collect
			WHERE
				Collect.Collector = :Collector
				MESSAGE_FILTER
				POST_ID_FILTER
				POST_IDS_FILTER
			ORDER BY Collect.CreateAt DESC
			LIMIT :Limit OFFSET :Offset`

	if len(term) > 1{
		searchQuery = strings.Replace(searchQuery, "MESSAGE_FILTER", "AND Collect.Message like :Term", 1)
	}else {
		searchQuery = strings.Replace(searchQuery, "MESSAGE_FILTER", "AND 1=1", 1)
	}

	if len(postId) >1 {
		searchQuery = strings.Replace(searchQuery, "POST_ID_FILTER", "AND Collect.PostId = :PostId", 1)
	}else {
		searchQuery = strings.Replace(searchQuery, "POST_ID_FILTER", "AND 1=1", 1)
	}

	if len(postIds) > 1{
		searchQuery = strings.Replace(searchQuery, "POST_IDS_FILTER", "AND Collect.PostIds = :PostIds", 1)
	}else {
		searchQuery = strings.Replace(searchQuery, "POST_IDS_FILTER", "AND 1=1", 1)
	}

	_,err := s.GetSearchReplica().Select(&collect,searchQuery,queryParams)
	if err != nil {
		return nil, model.NewAppError("SqlCollectStore.Search",
			"store.collect_store.search.app_error", nil, "searchQuery="+searchQuery+", "+err.Error(), http.StatusInternalServerError)
	}
	return collect, nil
}

func (s *SqlCollectStore) Get(id string) (*model.Collect, *model.AppError) {
	var collect model.Collect
	err := s.GetReplica().SelectOne(&collect, "SELECT * FROM Collect WHERE Id = :Id ", map[string]interface{}{"Id": id})
	if err != nil {
		return nil, model.NewAppError("SqlCollectStore.Get", "store.collect_store.get.app_error", nil, "id="+id+err.Error(), http.StatusNotFound)
	}
	return &collect, nil
}


func (s *SqlCollectStore) DeleteById(id string) *model.AppError {
	query :=
		`DELETE FROM Collect
		WHERE
			Id = :Id`

	_, err := s.GetMaster().Exec(query, map[string]interface{}{"Id": id})

	if err != nil {
		return model.NewAppError("SqlCollectStore.Delete", "store.collect_store.delete_by_id.app_error", nil, err.Error(), http.StatusInternalServerError)
	}

	return nil
}

func (s *SqlCollectStore) getMaxPostSize() int {
	s.maxCollectMsgSizeOnce.Do(func() {
		s.maxCollectMsgSizeCached = s.determineMaxCollectMsgSize()
	})
	return s.maxCollectMsgSizeCached
}

func (s *SqlCollectStore) determineMaxCollectMsgSize() int {
	var maxPostSize int = model.POST_MESSAGE_MAX_RUNES_V1
	var maxPostSizeBytes int32

	if s.DriverName() == model.DATABASE_DRIVER_POSTGRES {
		// The Post.Message column in Postgres has historically been VARCHAR(4000), but
		// may be manually enlarged to support longer posts.
		if err := s.GetReplica().SelectOne(&maxPostSizeBytes, `
			SELECT
				COALESCE(character_maximum_length, 0)
			FROM
				information_schema.columns
			WHERE
				table_name = 'collect'
			AND	column_name = 'message'
		`); err != nil {
			mlog.Error(utils.T("store.sql_post.query_max_collect_message_size.error") + err.Error())
		}
	} else if s.DriverName() == model.DATABASE_DRIVER_MYSQL {
		// The Post.Message column in MySQL has historically been TEXT, with a maximum
		// limit of 65535.
		if err := s.GetReplica().SelectOne(&maxPostSizeBytes, `
			SELECT
				COALESCE(CHARACTER_MAXIMUM_LENGTH, 0)
			FROM
				INFORMATION_SCHEMA.COLUMNS
			WHERE
				table_schema = DATABASE()
			AND	table_name = 'Collect'
			AND	column_name = 'Message'
			LIMIT 0, 1
		`); err != nil {
			mlog.Error(utils.T("store.sql_post.query_max_collect_message_size.error") + err.Error())
		}
	} else {
		mlog.Warn("No implementation found to determine the maximum supported post size")
	}

	// Assume a worst-case representation of four bytes per rune.
	maxPostSize = int(maxPostSizeBytes) / 4

	// To maintain backwards compatibility, don't yield a maximum post
	// size smaller than the previous limit, even though it wasn't
	// actually possible to store 4000 runes in all cases.
	if maxPostSize < model.POST_MESSAGE_MAX_RUNES_V1 {
		maxPostSize = model.POST_MESSAGE_MAX_RUNES_V1
	}

	mlog.Info(fmt.Sprintf("Post.Message supports at most %d characters (%d bytes)", maxPostSize, maxPostSizeBytes))

	return maxPostSize
}


