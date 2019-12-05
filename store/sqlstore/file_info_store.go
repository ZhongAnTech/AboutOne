


package sqlstore

import (
	"database/sql"
	"net/http"
	"strconv"
	"strings"

	"za-white-screen/einterfaces"
	"za-white-screen/model"
	"za-white-screen/store"
	"za-white-screen/utils"
)

type SqlFileInfoStore struct {
	SqlStore
	metrics einterfaces.MetricsInterface
}

const (
	FILE_INFO_CACHE_SIZE = 25000
	FILE_INFO_CACHE_SEC  = 1800 // 30 minutes
)

var fileInfoCache *utils.Cache = utils.NewLru(FILE_INFO_CACHE_SIZE)

func (fs SqlFileInfoStore) ClearCaches() {
	fileInfoCache.Purge()
	if fs.metrics != nil {
		fs.metrics.IncrementMemCacheInvalidationCounter("File Info Cache - Purge")
	}
}

func NewSqlFileInfoStore(sqlStore SqlStore, metrics einterfaces.MetricsInterface) store.FileInfoStore {
	s := &SqlFileInfoStore{
		SqlStore: sqlStore,
		metrics:  metrics,
	}

	for _, db := range sqlStore.GetAllConns() {
		table := db.AddTableWithName(model.FileInfo{}, "FileInfo").SetKeys(false, "Id")
		table.ColMap("Id").SetMaxSize(26)
		table.ColMap("CreatorId").SetMaxSize(26)
		table.ColMap("PostId").SetMaxSize(26)
		table.ColMap("Path").SetMaxSize(512)
		table.ColMap("ThumbnailPath").SetMaxSize(512)
		table.ColMap("PreviewPath").SetMaxSize(512)
		table.ColMap("Name").SetMaxSize(256)
		table.ColMap("Extension").SetMaxSize(64)
		table.ColMap("MimeType").SetMaxSize(256)
		table.ColMap("Hash").SetMaxSize(128)
		table.ColMap("Classification").SetMaxSize(16)
	}

	return s
}

func (fs SqlFileInfoStore) CreateIndexesIfNotExists() {
	fs.CreateIndexIfNotExists("idx_fileinfo_update_at", "FileInfo", "UpdateAt")
	fs.CreateIndexIfNotExists("idx_fileinfo_create_at", "FileInfo", "CreateAt")
	fs.CreateIndexIfNotExists("idx_fileinfo_delete_at", "FileInfo", "DeleteAt")
	fs.CreateIndexIfNotExists("idx_fileinfo_postid_at", "FileInfo", "PostId")
}

func (fs SqlFileInfoStore) Save(info *model.FileInfo) (*model.FileInfo, *model.AppError) {
	info.PreSave()
	if err := info.IsValid(); err != nil {
		return nil, err
	}

	if err := fs.GetMaster().Insert(info); err != nil {
		return nil, model.NewAppError("SqlFileInfoStore.Save", "store.sql_file_info.save.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	return info, nil
}
func (fs SqlFileInfoStore) Update(Id, path, channelId string) (*model.AppError) {
	_, err := fs.GetMaster().Exec("UPDATE fileinfo SET ChannelId = :ChannelId ,Path = :Path WHERE Id = :Id", map[string]interface{}{"Id": Id, "Path": path, "ChannelId": channelId})

	if err != nil {
		if err == sql.ErrNoRows {
			return model.NewAppError("SqlFileInfoStore.Update", "store.sql_file_info.update.app_error", nil, "id="+Id+", "+err.Error(), http.StatusNotFound)
		}
		return model.NewAppError("SqlFileInfoStore.Update", "store.sql_file_info.update.app_error", nil, "id="+Id+", "+err.Error(), http.StatusInternalServerError)
	}

	return nil
}
func (fs SqlFileInfoStore) UpdateImagePath(Id, path, channelId,previewPath,thumbnailPath string) (*model.AppError) {
	_, err := fs.GetMaster().Exec("UPDATE fileinfo SET ChannelId = :ChannelId ,Path = :Path ,PreviewPath = :PreviewPath, ThumbnailPath = :ThumbnailPath WHERE Id = :Id",
		map[string]interface{}{"Id": Id, "Path": path, "ChannelId": channelId, "PreviewPath": previewPath, "ThumbnailPath": thumbnailPath})

	if err != nil {
		if err == sql.ErrNoRows {
			return model.NewAppError("SqlFileInfoStore.Update", "store.sql_file_info.update.app_error", nil, "id="+Id+", "+err.Error(), http.StatusNotFound)
		}
		return model.NewAppError("SqlFileInfoStore.Update", "store.sql_file_info.update.app_error", nil, "id="+Id+", "+err.Error(), http.StatusInternalServerError)
	}

	return nil
}

func (fs SqlFileInfoStore) Get(id string) (*model.FileInfo, *model.AppError) {
	info := &model.FileInfo{}

	if err := fs.GetReplica().SelectOne(info,
		`SELECT
			*
		FROM
			FileInfo
		WHERE
			Id = :Id
			AND DeleteAt = 0`, map[string]interface{}{"Id": id}); err != nil {
		if err == sql.ErrNoRows {
			return nil, model.NewAppError("SqlFileInfoStore.Get", "store.sql_file_info.get.app_error", nil, "id="+id+", "+err.Error(), http.StatusNotFound)
		}
		return nil, model.NewAppError("SqlFileInfoStore.Get", "store.sql_file_info.get.app_error", nil, "id="+id+", "+err.Error(), http.StatusInternalServerError)
	}
	return info, nil
}

func (fs SqlFileInfoStore) GetContainDeleted(id string) (*model.FileInfo, *model.AppError) {
	info := &model.FileInfo{}

	if err := fs.GetReplica().SelectOne(info,
		`SELECT
			*
		FROM
			FileInfo
		WHERE
			Id = :Id`, map[string]interface{}{"Id": id}); err != nil {
		if err == sql.ErrNoRows {
			return nil, model.NewAppError("SqlFileInfoStore.GetContainDeleted", "store.sql_file_info.get_contain_deleted.app_error", nil, "id="+id+", "+err.Error(), http.StatusNotFound)
		}
		return nil, model.NewAppError("SqlFileInfoStore.GetContainDeleted", "store.sql_file_info.get_contain_deleted.app_error", nil, "id="+id+", "+err.Error(), http.StatusInternalServerError)
	}
	return info, nil
}

func (fs SqlFileInfoStore) GetByPath(path string) (*model.FileInfo, *model.AppError) {
	info := &model.FileInfo{}

	if err := fs.GetReplica().SelectOne(info,
		`SELECT
				*
			FROM
				FileInfo
			WHERE
				Path = :Path
				AND DeleteAt = 0
			LIMIT 1`, map[string]interface{}{"Path": path}); err != nil {
		return nil, model.NewAppError("SqlFileInfoStore.GetByPath", "store.sql_file_info.get_by_path.app_error", nil, "path="+path+", "+err.Error(), http.StatusInternalServerError)
	}
	return info, nil
}

func (fs SqlFileInfoStore) InvalidateFileInfosForPostCache(postId string) {
	fileInfoCache.Remove(postId)
	if fs.metrics != nil {
		fs.metrics.IncrementMemCacheInvalidationCounter("File Info Cache - Remove by PostId")
	}
}

func (fs SqlFileInfoStore) GetForPost(postId string, readFromMaster bool, allowFromCache bool) ([]*model.FileInfo, *model.AppError) {
	if allowFromCache {
		if cacheItem, ok := fileInfoCache.Get(postId); ok {
			if fs.metrics != nil {
				fs.metrics.IncrementMemCacheHitCounter("File Info Cache")
			}

			return cacheItem.([]*model.FileInfo), nil
		}
		if fs.metrics != nil {
			fs.metrics.IncrementMemCacheMissCounter("File Info Cache")
		}
	} else {
		if fs.metrics != nil {
			fs.metrics.IncrementMemCacheMissCounter("File Info Cache")
		}
	}

	var infos []*model.FileInfo

	dbmap := fs.GetReplica()

	if readFromMaster {
		dbmap = fs.GetMaster()
	}

	if _, err := dbmap.Select(&infos,
		`SELECT
				*
			FROM
				FileInfo
			WHERE
				PostId = :PostId
				AND DeleteAt = 0
			ORDER BY
				CreateAt`, map[string]interface{}{"PostId": postId}); err != nil {
		return nil, model.NewAppError("SqlFileInfoStore.GetForPost",
			"store.sql_file_info.get_for_post.app_error", nil, "post_id="+postId+", "+err.Error(), http.StatusInternalServerError)
	}
	if len(infos) > 0 {
		fileInfoCache.AddWithExpiresInSecs(postId, infos, FILE_INFO_CACHE_SEC)
	}

	return infos, nil
}

//cml-20191017 分页查询classification为空
func (fs SqlFileInfoStore) GetAllByClassificationIsEmpty(offset int, limit int) ([]*model.FileInfo, *model.AppError) {
	var infos []*model.FileInfo

	dbmap := fs.GetReplica()

	if _, err := dbmap.Select(&infos,
		`SELECT
				FileInfo.*
			FROM
				FileInfo
			WHERE
				FileInfo.Classification = ""
			ORDER BY
				FileInfo.CreateAt DESC
			LIMIT :Limit OFFSET :Offset`, map[string]interface{}{"Offset": offset, "Limit": limit}); err != nil {
		return nil, model.NewAppError("SqlFileInfoStore.GetAllPage",
			"store.sql_file_info.get_all_page.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	return infos, nil
}

//cml-20191105分页查询
func (fs SqlFileInfoStore) GetAll(offset int, limit int) ([]*model.FileInfo, *model.AppError) {
	var infos []*model.FileInfo

	dbmap := fs.GetReplica()

	if _, err := dbmap.Select(&infos,
		`SELECT
				FileInfo.*
			FROM
				FileInfo
			ORDER BY
				FileInfo.CreateAt ASC
			LIMIT :Limit OFFSET :Offset`, map[string]interface{}{"Offset": offset, "Limit": limit}); err != nil {
		return nil, model.NewAppError("SqlFileInfoStore.GetAll",
			"store.sql_file_info.get_all.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	return infos, nil
}

//cml-20190903 根据channelId获取文件信息-分页-可查询到无postId
func (fs SqlFileInfoStore) GetForChannelIdAll(channelId string, offset int, limit int) ([]*model.FileInfoForDisk, *model.AppError) {
	var infos []*model.FileInfoForDisk

	dbmap := fs.GetReplica()

	if _, err := dbmap.Select(&infos,
		`SELECT
				FileInfo.*,
				Users.Username as Username
			FROM
				FileInfo
			LEFT JOIN
			    Users ON FileInfo.CreatorId = Users.Id
			WHERE
				FileInfo.ChannelId = :ChannelId
			ORDER BY
				FileInfo.CreateAt DESC
			LIMIT :Limit OFFSET :Offset`, map[string]interface{}{"ChannelId": channelId, "Offset": offset, "Limit": limit}); err != nil {
		return nil, model.NewAppError("SqlFileInfoStore.GetForPost",
			"store.sql_file_info.get_for_channel_id.app_error", nil, "channel_id="+channelId+", "+err.Error(), http.StatusInternalServerError)
	}

	return infos, nil
}

//cml-20190903 条件查询分channel查询统计记录数
func (fs SqlFileInfoStore) SearchFileCountByChannels(channelIds []string,term string) (model.SearchChatCountRows, *model.AppError) {
	var rows model.SearchChatCountRows

	queryParams := map[string]interface{}{
		"Term": "%"+term +"%",
	}

	searchQuery := `SELECT
				FileInfo.ChannelId ChannelId,
				Count(FileInfo.Id) Count
			FROM
				FileInfo
			WHERE
				CHANNEL_FILTER
				AND FileInfo.PostId != ""
				AND FileInfo.Name like :Term
			GROUP BY
				FileInfo.ChannelId`

	if len(channelIds) > 1 {
		inClause := ":InChannel0"
		for i := 0; i < len(channelIds); i++ {
			paramName := "InChannel" + strconv.FormatInt(int64(i), 10)
			inClause += ", :" + paramName
			queryParams[paramName] = channelIds[i]
		}
		searchQuery = strings.Replace(searchQuery, "CHANNEL_FILTER", "FileInfo.ChannelId IN ("+inClause+")", 1)
	}else if len(channelIds) == 1  {
		queryParams["InChannel"] = channelIds[0]
		searchQuery = strings.Replace(searchQuery, "CHANNEL_FILTER", "FileInfo.ChannelId = :InChannel", 1)
	}else{
		searchQuery = strings.Replace(searchQuery, "CHANNEL_FILTER", "1=1", 1)
	}

	_,err := fs.GetSearchReplica().Select(&rows,searchQuery,queryParams)
	if err != nil {
		return nil, model.NewAppError("SqlFileInfoStore.GetForPost",
			"store.sql_file_info.search_file_by_channel_count.app_error", nil, "searchQuery="+searchQuery+", "+err.Error(), http.StatusInternalServerError)
	}
	return rows, nil
}

//cml-20190903 条件查询分channel查询统计记录数
func (fs SqlFileInfoStore) SearchFileByChannels(channelIds []string,term string,offset int, limit int) ([]*model.FileInfoForDisk, *model.AppError) {
	var infos []*model.FileInfoForDisk

	queryParams := map[string]interface{}{
		"Term": "%"+term +"%",
		"Offset": offset,
		"Limit": limit,
	}

	searchQuery := `SELECT
				FileInfo.*,
				Users.Username as Username
			FROM
				FileInfo
			LEFT JOIN
			    Users ON FileInfo.CreatorId = Users.Id
			WHERE
				CHANNEL_FILTER
				AND FileInfo.PostId != ""
				AND FileInfo.Name like :Term
			ORDER BY
				FileInfo.CreateAt DESC
			LIMIT :Limit OFFSET :Offset`

	if len(channelIds) > 1 {
		inClause := ":InChannel0"
		for i := 0; i < len(channelIds); i++ {
			paramName := "InChannel" + strconv.FormatInt(int64(i), 10)
			inClause += ", :" + paramName
			queryParams[paramName] = channelIds[i]
		}
		searchQuery = strings.Replace(searchQuery, "CHANNEL_FILTER", "FileInfo.ChannelId IN ("+inClause+")", 1)
	}else if len(channelIds) == 1  {
		queryParams["InChannel"] = channelIds[0]
		searchQuery = strings.Replace(searchQuery, "CHANNEL_FILTER", "FileInfo.ChannelId = :InChannel", 1)
	}else{
		searchQuery = strings.Replace(searchQuery, "CHANNEL_FILTER", "1=1", 1)
	}

	_,err := fs.GetSearchReplica().Select(&infos,searchQuery,queryParams)
	if err != nil {
		return nil, model.NewAppError("SqlFileInfoStore.GetForPost",
			"store.sql_file_info.search_file_by_channel_count.app_error", nil, "searchQuery="+searchQuery+", "+err.Error(), http.StatusInternalServerError)
	}
	return infos, nil
}

//cml-20191016 分类查询文件信息-分页
func (fs SqlFileInfoStore) ClassificationQuery(fileClassificationReq *model.FileClassificationReq) ([]*model.FileInfo, *model.AppError) {
	var infos []*model.FileInfo

	queryParams := map[string]interface{}{
		"ChannelId": fileClassificationReq.ChannelId,
		"Term": "%"+fileClassificationReq.Term +"%",
		"Classification": fileClassificationReq.Classification,
		"Offset": fileClassificationReq.PerPage*fileClassificationReq.Page,
		"Limit": fileClassificationReq.PerPage,
	}

	searchQuery :=`SELECT
				FileInfo.*
			FROM
				FileInfo
			WHERE
				FileInfo.ChannelId = :ChannelId
			    AND FileInfo.PostId != ""
				CLASSIFICATION_REQLACE_STRING
				TERM_REQLACE_STRING
			ORDER BY `+
				`FileInfo.`+fileClassificationReq.OrderByField + ` ` + fileClassificationReq.SortType + ` ` +
			`LIMIT :Limit OFFSET :Offset`

	if fileClassificationReq.Classification == ""{
		searchQuery = strings.Replace(searchQuery,"CLASSIFICATION_REQLACE_STRING","",1)
	}else {
		searchQuery = strings.Replace(searchQuery,"CLASSIFICATION_REQLACE_STRING","And FileInfo.Classification = :Classification",1)
	}

	if fileClassificationReq.Term == ""{
		searchQuery = strings.Replace(searchQuery,"TERM_REQLACE_STRING","",1)
	}else{
		searchQuery = strings.Replace(searchQuery,"TERM_REQLACE_STRING","AND FileInfo.Name like :Term",1)
	}


	dbmap := fs.GetReplica()

	if _, err := dbmap.Select(&infos, searchQuery, queryParams); err != nil {
		return nil, model.NewAppError("SqlFileInfoStore.ClassificationQuery",
			"store.sql_file_info.classification_query.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	return infos, nil
}

//cml-20191016 分类查询文件信息-总条数
func (fs SqlFileInfoStore) ClassificationQueryCount(fileClassificationReq *model.FileClassificationReq) (int64, *model.AppError) {
	queryParams := map[string]interface{}{
		"ChannelId": fileClassificationReq.ChannelId,
		"Term": "%"+fileClassificationReq.Term +"%",
		"Classification": fileClassificationReq.Classification,
		"Offset": fileClassificationReq.PerPage*fileClassificationReq.Page,
		"Limit": fileClassificationReq.PerPage,
	}

	searchQuery :=`SELECT
				COUNT(*)
			FROM
				FileInfo
			WHERE
				FileInfo.ChannelId = :ChannelId
			    AND FileInfo.PostId != ""
				CLASSIFICATION_REQLACE_STRING
				TERM_REQLACE_STRING
			ORDER BY `+
		`FileInfo.`+fileClassificationReq.OrderByField + ` ` + fileClassificationReq.SortType + ` ` +
		`LIMIT :Limit OFFSET :Offset`

	if fileClassificationReq.Classification == ""{
		searchQuery = strings.Replace(searchQuery,"CLASSIFICATION_REQLACE_STRING","",1)
	}else {
		searchQuery = strings.Replace(searchQuery,"CLASSIFICATION_REQLACE_STRING","And FileInfo.Classification = :Classification",1)
	}

	if fileClassificationReq.Term == ""{
		searchQuery = strings.Replace(searchQuery,"TERM_REQLACE_STRING","",1)
	}else{
		searchQuery = strings.Replace(searchQuery,"TERM_REQLACE_STRING","AND FileInfo.Name like :Term",1)
	}

	dbmap := fs.GetReplica()

	v, err := dbmap.SelectInt(searchQuery,queryParams)
	if err != nil {
		return 0, model.NewAppError("SqlFileInfoStore.ClassificationQueryCount",
			"store.sql_file_info.classification_query_count.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	return v, nil
}


//cml-20190729 根据channelId获取文件信息-分页
func (fs SqlFileInfoStore) GetForChannelId(channelId string, offset int, limit int) ([]*model.FileInfoForDisk, *model.AppError) {
	var infos []*model.FileInfoForDisk

	dbmap := fs.GetReplica()

	if _, err := dbmap.Select(&infos,
		`SELECT
				FileInfo.*,
				Users.Username as Username
			FROM
				FileInfo
			LEFT JOIN
			    Users ON FileInfo.CreatorId = Users.Id
			WHERE
				FileInfo.ChannelId = :ChannelId
			    AND FileInfo.PostId != ""
			ORDER BY
				FileInfo.CreateAt DESC
			LIMIT :Limit OFFSET :Offset`, map[string]interface{}{"ChannelId": channelId, "Offset": offset, "Limit": limit}); err != nil {
		return nil, model.NewAppError("SqlFileInfoStore.GetForPost",
			"store.sql_file_info.get_for_channel_id.app_error", nil, "channel_id="+channelId+", "+err.Error(), http.StatusInternalServerError)
	}

	return infos, nil
}

//cml-20190731 根据channelId获取-总记录数
func (fs SqlFileInfoStore) GetForChannelIdCount(channelId string) (int64, *model.AppError) {
	dbmap := fs.GetReplica()
	query :=
		`SELECT 
			COUNT(*)
		FROM
			FileInfo
		WHERE
			FileInfo.ChannelId = :ChannelId
 			AND FileInfo.PostId != ""`

	v, err := dbmap.SelectInt(query, map[string]interface{}{"ChannelId": channelId})
	if err != nil {
		return 0, model.NewAppError("SqlFileInfoStore.GetForPost",
			"store.sql_file_info.get_for_channel_id_count.app_error", nil, "channel_id="+channelId+", "+err.Error(), http.StatusInternalServerError)
	}
	return v, nil
}

//cml-20190902 根据channelIds以及name(模糊)获取文件信息-分页
func (fs SqlFileInfoStore) GetForChannelIdsForName(channelIds []string,name string,offset int, limit int) ([]*model.FileInfoForDisk, *model.AppError) {
	var infos []*model.FileInfoForDisk

	queryParams := map[string]interface{}{
		"Name": "%"+name +"%",
		"Offset": offset,
		"Limit": limit,
	}
	searchQuery := `SELECT
				FileInfo.*,
				Users.Username as Username
			FROM
				FileInfo
			LEFT JOIN
			    Users ON FileInfo.CreatorId = Users.Id
			WHERE
				CHANNEL_FILTER
			    AND FileInfo.PostId != ""
				AND FileInfo.Name like :Name
			ORDER BY
				FileInfo.CreateAt DESC
			LIMIT :Limit OFFSET :Offset`

	if len(channelIds) > 1 {
		inClause := ":InChannel0"
		for i := 0; i < len(channelIds); i++ {
			paramName := "InChannel" + strconv.FormatInt(int64(i), 10)
			inClause += ", :" + paramName
			queryParams[paramName] = channelIds[i]
		}
		searchQuery = strings.Replace(searchQuery, "CHANNEL_FILTER", "FileInfo.ChannelId IN ("+inClause+")", 1)
	}else if len(channelIds) == 1  {
		queryParams["InChannel"] = channelIds[0]
		searchQuery = strings.Replace(searchQuery, "CHANNEL_FILTER", "FileInfo.ChannelId = :InChannel", 1)
	}else{
		searchQuery = strings.Replace(searchQuery, "CHANNEL_FILTER", "1=1", 1)
	}

	_,err := fs.GetSearchReplica().Select(&infos,searchQuery,queryParams)
	if err != nil {
		return nil, model.NewAppError("SqlFileInfoStore.GetForPost",
			"store.sql_file_info.get_for_channel_ids_for_name.app_error", nil, "searchQuery="+searchQuery+", "+err.Error(), http.StatusInternalServerError)
	}
	return infos, nil
}

//cml-20190902 根据channelId和文件名(模糊)获取-总记录数
func (fs SqlFileInfoStore) GetForChannelIdForNameCount(channelIds []string,name string) (int64, *model.AppError) {
	queryParams := map[string]interface{}{
		"Name": "%"+name +"%",
	}

	dbmap := fs.GetReplica()
	searchQuery :=
		`SELECT
			COUNT(*)
		FROM
			FileInfo
		WHERE
			CHANNEL_FILTER
 			AND FileInfo.PostId != ""
			AND FileInfo.Name like :Name`

	if len(channelIds) > 1 {
		inClause := ":InChannel0"
		for i := 0; i < len(channelIds); i++ {
			paramName := "InChannel" + strconv.FormatInt(int64(i), 10)
			inClause += ", :" + paramName
			queryParams[paramName] = channelIds[i]
		}
		searchQuery = strings.Replace(searchQuery, "CHANNEL_FILTER", "FileInfo.ChannelId IN ("+inClause+")", 1)
	}else if len(channelIds) == 1  {
		queryParams["InChannel"] = channelIds[0]
		searchQuery = strings.Replace(searchQuery, "CHANNEL_FILTER", "FileInfo.ChannelId = :InChannel", 1)
	}else{
		searchQuery = strings.Replace(searchQuery, "CHANNEL_FILTER", "1=1", 1)
	}
	v, err := dbmap.SelectInt(searchQuery, queryParams)
	if err != nil {
		return 0, model.NewAppError("SqlFileInfoStore.GetForPost",
			"store.sql_file_info.get_for_channel_id_for_term_count.app_error", nil, "searchQuery="+searchQuery+", "+err.Error(), http.StatusInternalServerError)
	}
	return v, nil
}

func (fs SqlFileInfoStore) GetForUser(userId string) ([]*model.FileInfo, *model.AppError) {
	var infos []*model.FileInfo

	dbmap := fs.GetReplica()

	if _, err := dbmap.Select(&infos,
		`SELECT
				*
			FROM
				FileInfo
			WHERE
				CreatorId = :CreatorId
				AND DeleteAt = 0
			ORDER BY
				CreateAt`, map[string]interface{}{"CreatorId": userId}); err != nil {
		return nil, model.NewAppError("SqlFileInfoStore.GetForPost",
			"store.sql_file_info.get_for_user_id.app_error", nil, "creator_id="+userId+", "+err.Error(), http.StatusInternalServerError)
	}
	return infos, nil
}

func (fs SqlFileInfoStore) AttachToPost(fileId, postId, creatorId string) *model.AppError {
	sqlResult, err := fs.GetMaster().Exec(
		`UPDATE
					FileInfo
				SET
					PostId = :PostId
				WHERE
					Id = :Id
					AND PostId = ''
					AND CreatorId = :CreatorId`, map[string]interface{}{"PostId": postId, "Id": fileId, "CreatorId": creatorId})
	if err != nil {
		return model.NewAppError("SqlFileInfoStore.AttachToPost",
			"store.sql_file_info.attach_to_post.app_error", nil, "post_id="+postId+", file_id="+fileId+", err="+err.Error(), http.StatusInternalServerError)
	}

	count, err := sqlResult.RowsAffected()
	if err != nil {
		// RowsAffected should never fail with the MySQL or Postgres drivers
		return model.NewAppError("SqlFileInfoStore.AttachToPost",
			"store.sql_file_info.attach_to_post.app_error", nil, "post_id="+postId+", file_id="+fileId+", err="+err.Error(), http.StatusInternalServerError)
	} else if count == 0 {
		// Could not attach the file to the post
		return model.NewAppError("SqlFileInfoStore.AttachToPost",
			"store.sql_file_info.attach_to_post.app_error", nil, "post_id="+postId+", file_id="+fileId, http.StatusBadRequest)
	}
	return nil
}

func (fs SqlFileInfoStore) UpdateFileClassification(fileId, classification string) *model.AppError {
	sqlResult, err := fs.GetMaster().Exec(
		`UPDATE
					FileInfo
				SET
					Classification = :Classification
				WHERE
					Id = :Id`, map[string]interface{}{"Classification": classification, "Id": fileId})
	if err != nil {
		return model.NewAppError("SqlFileInfoStore.updateClassification",
			"store.sql_file_info.update_classification.app_error", nil, "classification="+classification+", file_id="+fileId+", err="+err.Error(), http.StatusInternalServerError)
	}

	count, err := sqlResult.RowsAffected()
	if err != nil {
		// RowsAffected should never fail with the MySQL or Postgres drivers
		return model.NewAppError("SqlFileInfoStore.UpdateClassification",
			"store.sql_file_info.update_classification.app_error", nil, "classification="+classification+", file_id="+fileId+", err="+err.Error(), http.StatusInternalServerError)
	} else if count == 0 {
		// Could not attach the file to the post
		return model.NewAppError("SqlFileInfoStore.UpdateClassification",
			"store.sql_file_info.update_classification.app_error", nil, "classification="+classification+", file_id="+fileId, http.StatusBadRequest)
	}
	return nil
}

func (fs SqlFileInfoStore) DeleteForPost(postId string) (string, *model.AppError) {
	if _, err := fs.GetMaster().Exec(
		`UPDATE
				FileInfo
			SET
				DeleteAt = :DeleteAt
			WHERE
				PostId = :PostId`, map[string]interface{}{"DeleteAt": model.GetMillis(), "PostId": postId}); err != nil {
		return "", model.NewAppError("SqlFileInfoStore.DeleteForPost",
			"store.sql_file_info.delete_for_post.app_error", nil, "post_id="+postId+", err="+err.Error(), http.StatusInternalServerError)
	}
	return postId, nil
}

//cml-20190729 根据文件id逻辑删除文件
func (fs SqlFileInfoStore) DeleteByFileId(fileId string) (string, *model.AppError) {
	if _, err := fs.GetMaster().Exec(
		`UPDATE
				FileInfo
			SET
				DeleteAt = :DeleteAt
			WHERE
				Id = :FileId`, map[string]interface{}{"DeleteAt": model.GetMillis(), "FileId": fileId}); err != nil {
		return "", model.NewAppError("SqlFileInfoStore.DeleteByFileId",
			"store.sql_file_info.delete_by_file_id.app_error", nil, "file_id="+fileId+", err="+err.Error(), http.StatusInternalServerError)
	}
	return fileId, nil
}

func (fs SqlFileInfoStore) PermanentDelete(fileId string) *model.AppError {
	if _, err := fs.GetMaster().Exec(
		`DELETE FROM
				FileInfo
			WHERE
				Id = :FileId`, map[string]interface{}{"FileId": fileId}); err != nil {
		return model.NewAppError("SqlFileInfoStore.PermanentDelete",
			"store.sql_file_info.permanent_delete.app_error", nil, "file_id="+fileId+", err="+err.Error(), http.StatusInternalServerError)
	}
	return nil
}

func (s SqlFileInfoStore) PermanentDeleteBatch(endTime int64, limit int64) (int64, *model.AppError) {
	var query string
	if s.DriverName() == "postgres" {
		query = "DELETE from FileInfo WHERE Id = any (array (SELECT Id FROM FileInfo WHERE CreateAt < :EndTime LIMIT :Limit))"
	} else {
		query = "DELETE from FileInfo WHERE CreateAt < :EndTime LIMIT :Limit"
	}

	sqlResult, err := s.GetMaster().Exec(query, map[string]interface{}{"EndTime": endTime, "Limit": limit})
	if err != nil {
		return 0, model.NewAppError("SqlFileInfoStore.PermanentDeleteBatch", "store.sql_file_info.permanent_delete_batch.app_error", nil, ""+err.Error(), http.StatusInternalServerError)
	}
	rowsAffected, err1 := sqlResult.RowsAffected()
	if err1 != nil {
		return 0, model.NewAppError("SqlFileInfoStore.PermanentDeleteBatch", "store.sql_file_info.permanent_delete_batch.app_error", nil, ""+err.Error(), http.StatusInternalServerError)
	}
	return rowsAffected, nil
}

func (s SqlFileInfoStore) PermanentDeleteByUser(userId string) (int64, *model.AppError) {
	query := "DELETE from FileInfo WHERE CreatorId = :CreatorId"

	sqlResult, err := s.GetMaster().Exec(query, map[string]interface{}{"CreatorId": userId})
	if err != nil {
		return 0, model.NewAppError("SqlFileInfoStore.PermanentDeleteByUser", "store.sql_file_info.PermanentDeleteByUser.app_error", nil, ""+err.Error(), http.StatusInternalServerError)
	}

	rowsAffected, err1 := sqlResult.RowsAffected()
	if err1 != nil {
		return 0, model.NewAppError("SqlFileInfoStore.PermanentDeleteByUser", "store.sql_file_info.PermanentDeleteByUser.app_error", nil, ""+err.Error(), http.StatusInternalServerError)
	}
	return rowsAffected, nil
}
