import { httpPost, httpGet, httpPut, httpDelete } from "@/service/http"
import config from '../../scripts/api/api.config.json'
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
export interface ManagerLoginAuthVO {
  customerId?: string
  loginName?: string
  name?: string
  permissionCodeList?: string[]
  roles?: string[]
  tenantId?: string
  token?: string
  userId?: string
}

export interface ManagerLoginVO {
  loginName?: string
  password?: string
  validateCode?: string
}

export interface NoticeCenter {
  /** 地点 */
  address?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标记 */
  delFlag?: number
  /** 时长 */
  duration?: number
  /** 结束时间 */
  endTime?: string
  /** 图片Url地址 */
  imgUrl?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 活动名称 */
  name?: string
  /** 播放模式 0:无 1:独播 2:插播 */
  playMode?: number
  /** 活动说明 */
  remark?: string
  /** 资源类型 0活动 1视频 */
  resourceType?: number
  /** 上下架标识 0上架 1下架 */
  shelveFlag?: number
  /** 排序 */
  sort?: number
  /** 间隔轮次 */
  spacing?: number
  /** 主办方 */
  sponsor?: string
  /** 开始时间 */
  startTime?: string
  /** 活动类型 0无 1分享 2培训 3娱乐 4活动 5会议 6其他 */
  type?: number
  /** 视频Url地址 */
  videoUrl?: string
}

export interface PageList<T> {
  /** 数据总条数，前端接口可忽略改字段 */
  count?: string
  /** 数据集合 */
  entities?: T[]
  /** 当前页码 */
  pageNo?: number
  /** 每页条数 */
  pageSize?: number
}

export interface SearchFindVO {
  /** 三方id */
  cooperationId?: string
  /** 三方log */
  cooperationLog?: string
  /** 三方名称 */
  cooperationName?: string
  /** 三方id */
  kid?: string
}

export interface SearchHotWord {
  /** 被点击次数 */
  clickNum?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 是否删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 上下架状态 */
  shelveFlag?: number
  /** 排序值 */
  sortNum?: number
  /** 热词 */
  wordText?: string
}

export interface SlideImageCheckTrail {
  attachId?: string
  deviceType?: string
  path?: string
  serviceName?: string
  trailPoints?: TrailPoint[]
}

export interface TrailPoint {
  direct?: number
  relativeX?: number
  relativeY?: number
  speed?: number
  timestamp?: string
}

export interface SlideCheckImage {
  absCutAt?: AbsolutePosition
  absInitAt?: AbsolutePosition
  attachId?: string
  cutUrl?: string
  format?: string
  imageHeight?: number
  imageWidth?: number
  orgUrl?: string
  redrawUrl?: string
  relativeCutAt?: RelativePosition
  relativeInitAt?: RelativePosition
}

export interface AbsolutePosition {
  h?: number
  w?: number
  x?: number
  y?: number
}

export interface RelativePosition {
  x?: number
  y?: number
}

export interface SlideImageCheckInit {
  path?: string
  serviceName?: string
}

export interface UpgradeInfoVO {
  /** 0不用清理缓存 1需清理缓存 */
  clearCacheFlag?: number
  /** 0数据无新版本 1数据有新版本 */
  dataUpgradeFlag?: number
  /** 设备类型1苹果 2安卓 */
  devType?: number
  /** 下载地址 */
  downloadUrl?: string
  /** 0非强制升级 1强制升级 */
  forceUpgradeFlag?: number
  /** 0不用退出登录 1退出登录 */
  logoutFlag?: number
  /** 新版本号 */
  newAppVersion?: string
  /** 数据新版本号 */
  newDataVersion?: number
  /** 0无新版本 1有新版本 */
  upgradeFlag?: number
  /** 升级提醒信息 */
  upgradeNotice?: string
}

export interface IndexIconConfigVO {
  /** ICON配置信息集合 */
  configs?: IndexIconConfig[]
  /** 版本号 */
  version?: number
}

export interface IndexIconConfig {
  /** 默认状态ICON */
  defaultImageUrl?: string
  /** 默认状态文案颜色 */
  defaultTextColor?: string
  /** 选中状态ICON */
  selectedImageUrl?: string
  /** 选中状态文案颜色 */
  selectedTextColor?: string
  /** 是否显示文案 */
  showText?: boolean
  /** 排序号，从小到大 */
  sort?: number
  /** 文案 */
  text?: string
  /** 文案字号 */
  textFont?: number
  /** 版本号 */
  version?: number
}

export interface VerifyCode {
  /** 业务类型由接入方自定义,例如:1.注册、2 .登录、3.找回密码、4注册/登录、5其他等、6找回支付密码 */
  serviceCode?: number
  /** 验证码，校验时传入 */
  verifyCode?: string
  /** 发送目标手机号 */
  verifyKey?: string
  /** 发送类型 0-手机号/1-邮箱 */
  verifyType?: string
}

export interface ExcelExportRecord {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 导出码 */
  exportCode?: string
  /** 导出描述 */
  exportDesc?: string
  /** 导出参数 */
  exportParams?: string
  /** 导出状态：0未执行 1导出中 2全部导出 3部分导出 4导出失败 */
  exportStatus?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 结果excel文件地址 */
  resultExcel?: string
}

export interface ExcelImportRecord {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 导入码 */
  importCode?: string
  /** 导入描述 */
  importDesc?: string
  /** 导入excel文件地址 */
  importExcel?: string
  /** 导入参数 */
  importParams?: string
  /** 导入状态：0未执行 1导入中 2全部导入 3部分导入 4导入失败 */
  importStatus?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 结果excel文件地址 */
  resultExcel?: string
}

export interface ExchangeInfo {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 是否删除 */
  delFlag?: number
  /** 交换机 */
  exchange?: string
  /** 交换机描述 */
  exchangeDescribe?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
}

export interface HotStopwords {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标志位 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 停用词 */
  stopWord?: string
}

export interface HotWords {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标志位 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 拓展词 */
  word?: string
}

export interface Map<T,T1> {
}

export interface MqInfo {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 是否删除 */
  delFlag?: number
  /** 交换机 */
  exchange?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 队列 */
  queue?: string
  /** key */
  routeKey?: string
}

export interface ListRequest<T> {
  /** 数据集合 */
  dataList?: T[]
  /** 请求类型 */
  type?: T
}

export interface PushMessage {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 消息推送时间 */
  messageDate?: string
  /** 消息ID */
  messageId?: string
  /** 消息类型，客户端根据此类型做消息展示归类 */
  messageType?: string
  /** 极光任务ID */
  pushJobId?: string
  /** 资源数据 */
  resource?: string
  /** 资源类型 */
  resourceType?: string
}

export interface QueueInfo {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 是否删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 队列 */
  queue?: string
  /** 队列描述 */
  queueDescribe?: string
}

export interface SensitiveWordVO {
  /** 替换字符，默认* */
  replaceWord?: string
  /** 原始文本内容 */
  text?: string
}

export interface ExpressListVO {
  /** 快递公司编号 */
  expressCode?: string
  /** 快递公司名 */
  expressName?: string
}

export interface UploadSignResult {
  /** AccessKeyId */
  accessId?: string
  /** 当前服务器时间（毫秒） */
  currentTime?: string
  /** 失效时间（毫秒） */
  expireAt?: string
  /** Bucket的host地址 */
  host?: string
  /** Policy表单域 */
  policy?: string
  /** 签名信息 */
  signature?: string
}

export interface UploadResult {
  /** 视频资源封面图URL */
  coverImage?: string
  /** 视频资源封面图URL（带签名） */
  coverImageWithSign?: string
  /** 剪切过的资源URL */
  cutResourceUrl?: string
  /** 剪切过的资源URL（带签名） */
  cutResourceUrlWithSign?: string
  /** 资源时长，单位：秒 */
  durationTime?: string
  /** 文件大小，单位：字节 */
  fileSize?: string
  /** 资源名称 */
  resourceName?: string
  /** 资源URL */
  resourceUrl?: string
  /** 资源URL（带签名） */
  resourceUrlWithSign?: string
}
export default {
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/healths/action/check`).then((res:any) => res)
    },
  },
  managerUsers: {
    /**
    * 管理后台登录
    */
    login(loginUser: ManagerLoginVO): Promise<ManagerLoginAuthVO> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/manager-users/action/login`, loginUser).then((res:any) => res)
    },
    /**
    * 批量查询用户名称
    */
    queryNames(userIds: number[]): Promise<Map<long,string>> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/manager-users/action/query-names`, userIds).then((res:any) => res)
    },
  },
  noticeCenters: {
    /**
    * APP查询分页NoticeCenter
    */
    list(params: { pageNo?: number, pageSize?: number }): Promise<PageList<NoticeCenter>> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/notice-centers/action/list`,  {...params} ).then((res:any) => res)
    },
  },
  searchFinds: {
    /**
    * app点击发现
    */
    click(params: { kid: string }): Promise<boolean> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/search-finds/action/click`,  {...params} ).then((res:any) => res)
    },
    /**
    * app搜索发现列表
    */
    list(): Promise<List<SearchFindVO>> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/search-finds/action/list`).then((res:any) => res)
    },
  },
  searchHotWords: {
    /**
    * app点击热词
    */
    click(params: { kid: string }): Promise<boolean> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/search-hot-words/action/click`,  {...params} ).then((res:any) => res)
    },
    /**
    * app搜索热词列表
    */
    list(): Promise<List<SearchHotWord>> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/search-hot-words/action/list`).then((res:any) => res)
    },
  },
  slideImages: {
    /**
    * 验证
    */
    doCheck(body: SlideImageCheckTrail): Promise<string> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/slide-images/action/doCheck`, body).then((res:any) => res)
    },
    /**
    * 查询刷新
    */
    doQueryRefresh(body: SlideImageCheckInit): Promise<SlideCheckImage> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/slide-images/action/doQueryRefresh`, body).then((res:any) => res)
    },
  },
  upgrades: {
    /**
    * APP更新升级查询
    */
    check(params: { dataVersion?: string }): Promise<UpgradeInfoVO> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/upgrades/action/check`,  {...params} ).then((res:any) => res)
    },
    /**
    * APP主界面ICON配置
    */
    indexIcon(): Promise<IndexIconConfigVO> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/upgrades/action/index-icon`).then((res:any) => res)
    },
  },
  verify: {
    /**
    * 验证(手机)验证码
    */
    check(codeDTO: VerifyCode): Promise<number> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/verify/action/check`, codeDTO).then((res:any) => res)
    },
    /**
    * 获取(手机)验证码
    */
    getCode(params: { serviceCode?: number, verifyCode?: string, verifyKey?: string, verifyType?: string }): Promise<number> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/verify/action/getCode`,  {...params} ).then((res:any) => res)
    },
    /**
    * 获取(手机)验证码
    */
    getCodeWithSlide(params: { serviceCode?: number, verifyCode?: string, verifyKey?: string, verifyType?: string }): Promise<number> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pb/verify/action/getCodeWithSlide`,  {...params} ).then((res:any) => res)
    },
  },
  excelExportRecords: {
    /**
    * 合作方查询分页ExcelExportRecord
    */
    listAdmin(params: { createDate?: string, createUserId?: string, endTime?: string, exportCode?: string, exportDesc?: string, exportParams?: string, exportStatus?: number, kid?: string, lastUpdateDate?: string, lastUpdateUserId?: string, pageNo?: number, pageSize?: number, resultExcel?: string, startTime?: string }): Promise<PageList<ExcelExportRecord>> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/excel-export-records/action/list-admin`,  {...params} ).then((res:any) => res)
    },
  },
  excelExports: {
    /**
    * 合作方导出数据
    */
    export(excelExportRecord: ExcelExportRecord): Promise<boolean> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/excel-exports/action/export`, excelExportRecord).then((res:any) => res)
    },
  },
  excelImportRecords: {
    /**
    * 合作方查询分页ExcelImportRecord
    */
    listAdmin(params: { createDate?: string, createUserId?: string, endTime?: string, importCode?: string, importDesc?: string, importExcel?: string, importParams?: string, importStatus?: number, kid?: string, lastUpdateDate?: string, lastUpdateUserId?: string, pageNo?: number, pageSize?: number, resultExcel?: string, startTime?: string }): Promise<PageList<ExcelImportRecord>> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/excel-import-records/action/list-admin`,  {...params} ).then((res:any) => res)
    },
  },
  exchangeInfos: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<ExchangeInfo>> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/exchange-infos/action/list-page`,  {...params} ).then((res:any) => res)
    },
  },
  hotStopwordss: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<HotStopwords>> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/hot-stopwordss/action/list-page`,  {...params} ).then((res:any) => res)
    },
  },
  hotWordss: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<HotWords>> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/hot-wordss/action/list-page`,  {...params} ).then((res:any) => res)
    },
  },
  mqInfos: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<MqInfo>> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/mq-infos/action/list-page`,  {...params} ).then((res:any) => res)
    },
  },
  pushMessages: {
    /**
    * APP端删除消息
    */
    batchDelete(listRequest: ListRequest<string>): Promise<number> {
      return httpPut(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/push-messages/action/batch-delete`, listRequest).then((res:any) => res)
    },
    /**
    * APP端查询分页数据
    */
    listPage(params: { messageType: string, pageNo?: number, pageSize?: number }): Promise<PageList<PushMessage>> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/push-messages/action/list-page`,  {...params} ).then((res:any) => res)
    },
  },
  queueInfos: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<QueueInfo>> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/queue-infos/action/list-page`,  {...params} ).then((res:any) => res)
    },
  },
  sensitiveWords: {
    /**
    * 校验文本中是否包含敏感词
    */
    check(sensitiveWordVO: SensitiveWordVO): Promise<boolean> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/sensitive-words/action/check`, sensitiveWordVO).then((res:any) => res)
    },
    /**
    * 检查并返回文本中的敏感词
    */
    match(sensitiveWordVO: SensitiveWordVO): Promise<Set<string>> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/sensitive-words/action/match`, sensitiveWordVO).then((res:any) => res)
    },
    /**
    * 替换文本中的敏感词并返回
    */
    replace(sensitiveWordVO: SensitiveWordVO): Promise<string> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/sensitive-words/action/replace`, sensitiveWordVO).then((res:any) => res)
    },
  },
  supportExpress: {
    /**
    * 合作方查询快递列表Express
    */
    listAdmin(): Promise<List<ExpressListVO>> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/support-express/action/list-admin`).then((res:any) => res)
    },
  },
  uploads: {
    /**
    * 获取OSS上传签名参数(加密)
    */
    securitySign(params: { permission?: string }): Promise<UploadSignResult> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/uploads/action/security-sign`,  {...params} ).then((res:any) => res)
    },
    /**
    * 获取OSS上传签名参数
    */
    sign(params: { permission?: string }): Promise<UploadSignResult> {
      return httpGet(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/uploads/action/sign`,  {...params} ).then((res:any) => res)
    },
    /**
    * 上传音频
    */
    uploadAudio(params: { audioConvertType?: string, cutAsync?: boolean, cutSeconds?: number, module?: string, permission?: string, silenceRemove?: boolean }): Promise<UploadResult> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/uploads/action/upload-audio`,  {...params} ).then((res:any) => res)
    },
    /**
    * 上传文件
    */
    uploadFile(params: { module?: string, permission?: string }): Promise<UploadResult> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/uploads/action/upload-file`,  {...params} ).then((res:any) => res)
    },
    /**
    * 上传图片
    */
    uploadImage(params: { compressType?: string, gifMaxSize?: string, imageCompressSize?: string, module?: string, permission?: string, watermark?: string }): Promise<UploadResult> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/uploads/action/upload-image`,  {...params} ).then((res:any) => res)
    },
    /**
    * 上传PDF
    */
    uploadPdf(params: { fileName?: string, module?: string, permission?: string }): Promise<UploadResult> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/uploads/action/upload-pdf`,  {...params} ).then((res:any) => res)
    },
    /**
    * 上传视频
    */
    uploadVideo(params: { cutAsync?: boolean, cutSeconds?: number, module?: string, permission?: string, watermark?: string }): Promise<UploadResult> {
      return httpPost(`/${config['platform-support'] ? config["platform-support"].serviceName : 'platform-support'}/v1.0/pt/uploads/action/upload-video`,  {...params} ).then((res:any) => res)
    },
  },
}