


package sqlstore

import (
	"database/sql"
	"net/http"

	"za-white-screen/einterfaces"
	"za-white-screen/model"
	"za-white-screen/store"
	"za-white-screen/utils"
)

type SqlFileOperationLogStore struct {
	SqlStore
	metrics einterfaces.MetricsInterface
}

var fileOperationLogCache *utils.Cache = utils.NewLru(FILE_INFO_CACHE_SIZE)

func (fs SqlFileOperationLogStore) ClearCaches() {
	fileOperationLogCache.Purge()
	if fs.metrics != nil {
		fs.metrics.IncrementMemCacheInvalidationCounter("File Info Cache - Purge")
	}
}

func NewSqlFileOperationLogStore(sqlStore SqlStore, metrics einterfaces.MetricsInterface) store.FileOperationLogStore {
	s := &SqlFileOperationLogStore{
		SqlStore: sqlStore,
		metrics:  metrics,
	}

	for _, db := range sqlStore.GetAllConns() {
		table := db.AddTableWithName(model.FileOperationLog{}, "FileOperationLog").SetKeys(false, "Id")
		table.ColMap("Id").SetMaxSize(26)
		table.ColMap("FileInfoId").SetMaxSize(26)
		table.ColMap("ChannelId").SetMaxSize(26)
		table.ColMap("Operator").SetMaxSize(26)
		table.ColMap("Operation").SetMaxSize(2)
		table.ColMap("CreateAt").SetMaxSize(20)
	}

	return s
}

func (fs SqlFileOperationLogStore) CreateIndexesIfNotExists() {
	fs.CreateIndexIfNotExists("idx_filelog_create_at", "FileOperationLog", "CreateAt")
	fs.CreateIndexIfNotExists("idx_filelog_fileinfo_id", "FileOperationLog", "FileInfoId")
	fs.CreateIndexIfNotExists("idx_filelog_channel_id", "FileOperationLog", "ChannelId")
}

func (fs SqlFileOperationLogStore) Save(info *model.FileOperationLog) (*model.FileOperationLog, *model.AppError) {
	info.PreSave()
	if err := info.IsValid(); err != nil {
		return nil, err
	}

	if err := fs.GetMaster().Insert(info); err != nil {
		return nil, model.NewAppError("SqlFileOperationLogStore.Save", "store.sql_file_operation_log.save.app_error", nil, err.Error(), http.StatusInternalServerError)
	}
	return info, nil
}

func (fs SqlFileOperationLogStore) Get(id string) (*model.FileOperationLog, *model.AppError) {
	info := &model.FileOperationLog{}

	if err := fs.GetReplica().SelectOne(info,
		`SELECT
			*
		FROM
			FileOperationLog
		WHERE
			Id = :Id`, map[string]interface{}{"Id": id}); err != nil {
		if err == sql.ErrNoRows {
			return nil, model.NewAppError("SqlFileOperationLog.Get", "store.sql_file_operation_log.get.app_error", nil, "id="+id+", "+err.Error(), http.StatusNotFound)
		}
		return nil, model.NewAppError("SqlFileOperationLog.Get", "store.sql_file_operation_log.get.app_error", nil, "id="+id+", "+err.Error(), http.StatusInternalServerError)
	}
	return info, nil
}
func (fs SqlFileOperationLogStore) GetByChannelId(channelId string) ([]*model.FileOperationLog, *model.AppError) {
	var infos []*model.FileOperationLog

	dbmap := fs.GetReplica()

	if _, err := dbmap.Select(&infos,
		`SELECT
				*
			FROM
				FileOperationLog
			WHERE
				 ChannelId = :ChannelId
			ORDER BY
				CreateAt DESC`, map[string]interface{}{"ChannelId": channelId}); err != nil {
		return nil, model.NewAppError("SqlFileOperationLogStore.GetByChannelId",
			"store.sql_file_operation_log.get_by_channel_id.app_error", nil, "channel_id="+channelId+", "+err.Error(), http.StatusInternalServerError)
	}
	return infos, nil
}

func (fs SqlFileOperationLogStore) InvalidateFileOperationLogsForPostCache(postId string) {
	fileOperationLogCache.Remove(postId)
	if fs.metrics != nil {
		fs.metrics.IncrementMemCacheInvalidationCounter("FileOperationLog Cache - Remove by PostId")
	}
}

func (fs SqlFileOperationLogStore) GetByFileInfoId(fileInfoId string) ([]*model.FileOperationLog, *model.AppError) {
	var infos []*model.FileOperationLog

	dbmap := fs.GetReplica()

	if _, err := dbmap.Select(&infos,
		`SELECT
				*
			FROM
				FileOperationLog
			WHERE
				FileInfoId = :FileInfoId
			ORDER BY
				CreateAt DESC`, map[string]interface{}{"FileInfoId": fileInfoId}); err != nil {
		return nil, model.NewAppError("SqlFileOperationLogStore.GetByFileInfoId",
			"store.sql_file_operation_log.get_for_file_info_id.app_error", nil, "file_info_id="+fileInfoId+", "+err.Error(), http.StatusInternalServerError)
	}
	return infos, nil
}

func (fs SqlFileOperationLogStore) GetByChannelIdAndFileInfoId(channelId, fileInfoId string, offset int, limit int) ([]*model.FileOperationLogForDisk, *model.AppError) {
	var infos []*model.FileOperationLogForDisk

	dbmap := fs.GetReplica()

	if _, err := dbmap.Select(&infos,
		`SELECT
				FileOperationLog.*,
				Users.Username as Operatorname
			FROM
				FileOperationLog
			LEFT JOIN
			    Users ON FileOperationLog.Operator = Users.Id
			WHERE
				ChannelId = :ChannelId
			AND
				FileInfoId = :FileInfoId
			ORDER BY
				CreateAt DESC 
			LIMIT :Limit OFFSET :Offset`, map[string]interface{}{"FileInfoId": fileInfoId, "ChannelId": channelId, "Offset": offset, "Limit": limit}); err != nil {
		return nil, model.NewAppError("SqlFileOperationLogStore.GetByChannelIdAndFileInfoId",
			"store.sql_file_operation_log.get_by_channel_id_and_file_info_id.app_error", nil, "file_info_id="+fileInfoId+", "+err.Error(), http.StatusInternalServerError)
	}
	return infos, nil
}

//cml-20190731 根据channelId,fileInfoId获取-总记录数
func (fs SqlFileOperationLogStore) GetByChannelIdAndFileInfoIdCount(channelId, fileInfoId string) (int64, *model.AppError) {
	dbmap := fs.GetReplica()
	query :=
		`SELECT 
			COUNT(*)
		FROM
			FileOperationLog
		WHERE
			ChannelId = :ChannelId
		AND
			FileInfoId = :FileInfoId`
	v, err := dbmap.SelectInt(query, map[string]interface{}{"FileInfoId": fileInfoId, "ChannelId": channelId})
	if err != nil {
		return 0, model.NewAppError("SqlFileOperationLogStore.GetByChannelIdAndFileInfoIdCount",
			"store.sql_file_operation_log.get_by_channel_id_and_file_info_id_count.app_error", nil, "channel_id="+channelId+", "+err.Error(), http.StatusInternalServerError)
	}
	return v, nil
}
