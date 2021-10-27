import {httpPost,httpGet,httpPut,httpDelete} from "@/service/http"
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
export interface CooperationCheckTokenVO {
  cooperationIds?: number[]
  permissionCodeList?: string[]
  /** 用于刷新token的令牌 */
  refreshToken?: string
  /** 用户Token */
  token?: string
}

export interface AuthorizerGrantResult {
  authorId?: string
  authorName?: string
  authorType?: string
  channelAuthor?: ChannelAuthor
  channelId?: string
  openId?: string
  refreshToken?: string
  token?: string
  unionId?: string
}

export interface ChannelAuthor {
  avatar?: string
  gender?: number
  info?: ObjectNode
  nickName?: string
  phone?: string
}

export interface ObjectNode {
  array?: boolean
  bigDecimal?: boolean
  bigInteger?: boolean
  binary?: boolean
  boolean?: boolean
  containerNode?: boolean
  double?: boolean
  float?: boolean
  floatingPointNumber?: boolean
  int?: boolean
  integralNumber?: boolean
  long?: boolean
  missingNode?: boolean
  nodeType?: string
  null?: boolean
  number?: boolean
  object?: boolean
  pojo?: boolean
  short?: boolean
  textual?: boolean
  valueNode?: boolean
}

export interface KidRequest<T> {
  /** 数据 */
  data?: string
  /** kid */
  kid?: string
}

export interface BannerInfoVO {
  /** 打字动画 0-无动画 1-有动画 */
  animationFlag?: number
  /** banner图名称 */
  bName?: string
  /** banner标题 */
  bTitle?: string
  /** 点击次数 */
  clickNum?: string
  /** banner内容 */
  content?: string
  contentList?: string[]
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 设备类型 0:全部 1:苹果 2:安卓, 3-web 4:小程序 */
  devType?: number
  /** 跳转资源 */
  gotoSource?: string
  /** 跳转类型 1.无跳转 2.h5地址 */
  gotoType?: number
  /** 图片地址 */
  imageSource?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 位置 1:首页 2:个人中心 */
  position?: number
  /** 备注 */
  remark?: string
  /** 上架状态 0 上架 1下架 */
  shelveFlag?: number
  /** 排序值 */
  sort?: number
}

export interface EssentialIllnessVO {
  /** 编码（以疾病或者健康人群划分） */
  code?: string
  /** 其他 */
  description?: string
  /** 疾病图片 */
  img?: string
  /** kid */
  kid?: string
  /** 名称 */
  name?: string
  /** 父级 */
  parentCode?: string
  /** 计算参考类型 */
  referCode?: string
  /** 排序 */
  sort?: number
  /** 疾病建议 */
  suggest?: string
  /** 类型（分类，疾病） */
  type?: number
}

export interface IllnessEs {
  /** 编码（以疾病或者健康人群划分） */
  code?: string
  /** 删除标示 */
  delFlag?: number
  /** 其他 */
  description?: string
  /** 疾病图片 */
  img?: string
  /** kid */
  kid?: string
  /** 名称 */
  name?: string
  /** 父级 */
  parentCode?: string
  /** 推荐：1：推荐；0：普通 */
  recommend?: boolean
  /** 计算参考类型 */
  referCode?: string
  /** 排序 */
  sort?: number
  /** 疾病建议 */
  suggest?: string
  /** 类型（分类，疾病） */
  type?: number
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

export interface FoodOrderCommentListItemVO {
  /** 评论时间 */
  createDate?: string
  /** 配送评分 */
  deliverScore?: number
  /** 菜品评论内容 */
  dishesComment?: string
  /** 菜品评论图片 */
  dishesCommentImgs?: string
  /** 菜品评分 */
  dishesScore?: number
  /** 评论kid */
  kid?: string
  /** 用户头像 */
  userAvatar?: string
  /** 用户id */
  userId?: string
  /** 用户昵称 */
  userNickName?: string
}

export interface CooperationManagerLoginAuthVO {
  authType?: string
  cooperationId?: string
  enterpriseId?: string
  headIcon?: string
  loginName?: string
  menuList?: CooperationManagerMenuExcelVO[]
  name?: string
  permissionCodeList?: string[]
  roles?: string[]
  shopList?: Store[]
  tenantId?: string
  token?: string
  userId?: string
}

export interface CooperationManagerMenuExcelVO {
  authType?: string
  children?: CooperationManagerMenuExcelVO[]
  href?: string
  icon?: string
  id?: string
  menuType?: number
  name?: string
  parentId?: string
  permissionApis?: string
  permissionCode?: string
  remarks?: string
  sort?: number
}

export interface Store {
  /** 区编码 */
  areaCode?: string
  /** 区名称 */
  areaName?: string
  /** 门店联系人 */
  businessLinkMan?: string
  /** 门店联系电话 */
  businessPhone?: string
  /** 营业执照 */
  businessRvPdf?: string
  /** 营业起止时间 */
  businessTime?: string
  /** 市编码 */
  cityCode?: string
  /** 市名称 */
  cityName?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 配送范围 以门店为圆心5公里范围内 */
  deliveryArea?: number
  /** 收取配送费条件 小于100元 */
  deliveryConditions?: number
  /** 配送范围(电子围栏，经纬度集合) */
  deliveryElectricFence?: string
  /** 配送费 */
  deliveryFee?: number
  /** 自提/配送时间库存数（json格式） */
  deliveryStockRange?: string
  /** 企业id */
  enterpriseId?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 门店纬度 */
  latitude?: number
  /** 门店经度 */
  longitude?: number
  /** 省编码 */
  provinceCode?: string
  /** 省名称 */
  provinceName?: string
  /** 自提/配送 起止时间 */
  serviceStartAndEndTime?: string
  /** 门店详细地址 */
  storeDetailAddress?: string
  /** 门店图片目前只上传1张 */
  storeImgs?: string
  /** 店铺简介 */
  storeIntroduction?: string
  /** 门店logo */
  storeLogo?: string
  /** 店铺监控地址 */
  storeMonitorUrl?: string
  /** 门店名 */
  storeName?: string
  /** 店铺展示标识：0-展示 1-不展示 */
  storeShowFlag?: number
  /** 门店类型 0 直营店 1 加盟店 */
  storeType?: number
}

export interface CooperationManagerLoginVO {
  cooperationId?: string
  loginName?: string
  password?: string
  shopType?: number
  validateCode?: string
}

export interface PicConfig {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 图片编码 */
  picCode?: string
  /** 图片名称 */
  picName?: string
  /** 图片Url */
  picUrl?: string
}

export interface SetMealDishVO {
  /** 封面图 */
  coverPic?: string
  /** 菜品名称 */
  dishesName?: string
  /** 菜品编码 */
  recipeCode?: string
  /** 套餐id */
  setMealKid?: string
}

export interface RecommendSetMealDetailVO {
  /** 封面图 (推荐套餐) */
  coverPic?: string
  /** 套餐详情图 (推荐套餐) */
  detailPic?: string
  /** 膳食纤维 */
  dietaryFiber?: RecipesNutritionItem
  /** 维度(卡路里单位千卡)(推荐套餐) */
  dimension?: number
  /** 餐盘图标(自选套餐) */
  dinnerPlateIcon?: string
  dishes?: SimpleDishesVO[]
  /** 视频首帧图 (推荐套餐) */
  firstFramePic?: string
  /** 含：碳水化合物 (推荐套餐) */
  intakeCarbohydrate?: number
  /** 含：总能量 (推荐套餐) */
  intakeEnergy?: number
  /** 含：脂肪 (推荐套餐) */
  intakeFat?: number
  /** 含：蛋白质 (推荐套餐) */
  intakeProtein?: number
  /** 主图 (推荐套餐) */
  mainPic?: string
  /** 套餐名称 */
  mealName?: string
  /** 维生素和矿物质 */
  minerals?: RecipesNutritionItem[]
  /** 营养专家说 (推荐套餐) */
  nutritionExpertsSay?: string
  /** 价格 (推荐套餐) */
  price?: number
  /** 疾病/健康编码 (推荐套餐) */
  recommendCode?: string
  /** 标签 */
  tags?: string
  /** 视频时长 (推荐套餐) */
  videoDuration?: number
  /** 视频链接 (推荐套餐) */
  videoUrl?: string
  /** 维生素和矿物质 */
  vitamins?: RecipesNutritionItem[]
}

export interface RecipesNutritionItem {
  code?: string
  name?: string
  unit?: string
  weight?: number
}

export interface SimpleDishesVO {
  /** 封面图 */
  coverPic?: string
  /** 菜品名称 */
  dishesName?: string
  /** 菜品分类 0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 菜品重量 */
  dishesWeight?: number
  /** 含：碳水化合物 (推荐套餐) */
  intakeCarbohydrate?: number
  /** 含：总能量 (推荐套餐) */
  intakeEnergy?: number
  /** 含：脂肪 (推荐套餐) */
  intakeFat?: number
  /** 含：蛋白质 (推荐套餐) */
  intakeProtein?: number
  /** 主图 */
  mainPic?: string
  /** 基础库菜品code */
  recipeCode?: string
}

export interface RecommendSetMealItemVO {
  /** 封面图 (推荐套餐) */
  coverPic?: string
  createDate?: string
  /** 维度(卡路里单位千卡)(推荐套餐) */
  dimension?: number
  /** 菜品 */
  dishes?: string
  /** 含：碳水化合物 (推荐套餐) */
  intakeCarbohydrate?: number
  /** 含：总能量 (推荐套餐) */
  intakeEnergy?: number
  /** 含：脂肪 (推荐套餐) */
  intakeFat?: number
  /** 含：蛋白质 (推荐套餐) */
  intakeProtein?: number
  /** 套餐id */
  kid?: string
  /** 套餐名称 */
  mealName?: string
  /** 价格 (推荐套餐) */
  price?: number
  /** 疾病/健康编码 (推荐套餐) */
  recommendCode?: string
  /** 是否推荐1是0否 */
  recommendFlag?: number
  /** 适宜能量 千卡 */
  suitEnergy?: number
  /** 标签 */
  tags?: string
}

export interface Map<T,T1> {
}

export interface OfflineStoreVO {
  /** 营业时间 */
  businessTime?: string
  /** 配送范围 以门店为圆心5km范围内 */
  deliveryArea?: number
  /** 满减条件  大于不收配置费 小于收取配送费 */
  deliveryConditions?: number
  /** 配送费 */
  deliveryFee?: number
  /** 距离 单位km */
  distance?: number
  /** 门店纬度 */
  latitude?: number
  /** 门店经度 */
  longitude?: number
  /** 自提/配送 起止时间 */
  serviceStartAndEndTime?: string
  /** 门店详细地址 */
  storeDetailAddress?: string
  /** 门店id */
  storeId?: string
  /** 门店图片目前只上传1张 */
  storeImgs?: string
  /** 门店名 */
  storeName?: string
}

export interface LoginVO {
  /** token信息 */
  authInfo?: AuthTokenVO
  /** 是否此次登录绑定了用户 */
  blindCompanyFlag?: boolean
  /** 是否此次登录绑定了用户 */
  relationShipFlag?: boolean
  /** 用户账户基本信息 */
  userAccount?: UserAccount
  /** 用户账户基本信息 */
  userInfo?: UserInfoVO
  /** 注册标识(只登陆false，注册并登录true) */
  withRegister?: boolean
}

export interface AuthTokenVO {
  /** 用于刷新token的令牌 */
  refreshToken?: string
  /** token */
  token?: string
}

export interface UserAccount {
  /** 用户头像 */
  avatar?: string
  /** 公司id */
  companyId?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 性别 0:未知 1:男 2:女 */
  gender?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后登录时间 */
  lastLoginDate?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 1：仅登录小程序标识  */
  miniFlag?: number
  /** 用户昵称 */
  nickName?: string
  /** 支付密码设置标识： 0未设置过 1已设置 */
  payPwdFlag?: number
  /** 极光设备唯一id */
  registrationId?: string
  /** 关联用户id */
  relationUserId?: string
  /** 游客标识 0-正常用户 1-游客 */
  touristFlag?: number
  /** 用户设备 0-未知 1-IOS 2-安卓 3-WEB 4-小程序 5-公众号 */
  userMobileType?: number
  /** 用户支付密码 */
  userPayPwd?: string
  /** 手机号 */
  userPhone?: string
  /** 登录密码,免密登录没有密码 */
  userPwd?: string
  /** 角色 0:普通用户 1:管理员 */
  userRoles?: number
  /** 用户状态 0:正常 1:冻结 2:注销 3:警告 */
  userStatus?: number
}

export interface UserInfoVO {
  /** 头像 */
  avatar?: string
  /** 生日（出生年月日） */
  birthday?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 */
  delFlag?: number
  /** 性别 0:默认值 1:男 2:女 */
  gender?: number
  /** 身高 */
  height?: number
  /** 疾病/健康编码 */
  illnessCode?: string
  /** 疾病/健康名称 */
  illnessName?: string
  /** 分布式唯一ID */
  kid?: string
  /** 劳动强度：1：久坐；2：轻度劳动；3：中度劳动 */
  labourIntensity?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 减重周期 */
  loseWeightCycle?: number
  /** 昵称 */
  nickName?: string
  /** 推荐目标code */
  recommendCode?: string
  /** 角色：0：自己；1：其他 */
  role?: boolean
  /** 目标体重 */
  targetWeight?: number
  /** 用户ID */
  userId?: string
  /** 体重 */
  weight?: number
}

export interface RegisterDTO {
  /** 店铺编号 */
  cooperationId?: string
  /** 店铺名称 */
  shopName?: string
  /** 管理员姓名 */
  userName?: string
  /** 手机号 */
  userPhone?: string
  /** 登录密码 */
  userPwd?: string
  /** 验证码 */
  verifyCode?: string
  /** 验证码业务类型(1.注册,4注册/登录) */
  verifyServiceCode?: number
}

export interface UserLoginDTO {
  /** 微信小程序授权code */
  code?: string
  /** 企业ID */
  companyId?: string
  /** 完整用户信息的加密数据 */
  encryptedData?: string
  /** 邀请用户id */
  inviteUserId?: string
  /** 加密算法的初始向量(如获取更多用户信息传) */
  iv?: string
  /** 绑定用户id */
  relationUserId?: string
  /** userId */
  userId?: string
  /** 手机号 */
  userPhone?: string
  /** 验证码 */
  veriCode?: string
  /** 验证码业务类型(1.注册,4注册/登录) */
  verifyServiceCode?: number
}

export interface CouponInfoVO {
  /** 优惠券名称 */
  couponName?: string
  /** 优惠金额（分） */
  couponPrice?: number
  /** 优惠券规则 */
  couponRoles?: string[]
  /** 优惠券状态 0-未领取 1-已领取 2-已使用 */
  couponStatus?: number
  /** 有效时间 */
  expireDate?: string
  /** 业务ID */
  kid?: string
  /** 当日是否可以领取 true-可领取 false-已领取完 */
  receiveLimitFlag?: boolean
  /** 满减条件金额（分） */
  rulePrice?: number
  /** 优惠券使用类型 1-满减 */
  useType?: number
}

export interface DeliveryAddressRequest {
  /** 收货地址 */
  address?: string
  /** 联系人 */
  contactName?: string
  /** 手机号 */
  contactPhone?: string
  /** 是否默认  1：默认，0：非默认 */
  defaultFlag?: number
  /** 门牌号 */
  houseNumber?: string
  /** kid，修改时必须传，增加时不传 */
  kid?: string
  /** 纬度 */
  latitude?: string
  /** 经度 */
  longitude?: string
}

export interface DeliveryAddress {
  /** 收货地址 */
  address?: string
  /** 联系人 */
  contactName?: string
  /** 手机号 */
  contactPhone?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 是否默认  1：默认，0：非默认 */
  defaultFlag?: number
  /** 删除标识  1：删除，0：未删除 */
  delFlag?: number
  /** 门牌号 */
  houseNumber?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 纬度 */
  latitude?: string
  /** 经度 */
  longitude?: string
  /** 用户id */
  userId?: string
}

export interface RecommendedDishesVO {
  /** 外部标准数据 */
  normalItems?: RecipesNormalItem[]
  /** 推荐菜品集合 */
  recommendedDishesList?: RecommendedShowDishesVO[]
  /** 推荐套餐总价 元 */
  totalAmount?: number
}

export interface RecipesNormalItem {
  /** 一级分类 */
  mainClassify?: string
  /** 搭配类型 */
  proportionCode?: string
  /** 菜谱编号 */
  recipesCode?: string
  /** 菜谱名称 */
  recipesName?: string
  /** 二级分类 */
  secondaryClassify?: string
  /** 单位 */
  unit?: string
  /** 计量 */
  weight?: number
}

export interface RecommendedShowDishesVO {
  /** 封面图 */
  coverPic?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 菜品描述 */
  dishesDesc?: string
  /** 菜品图标 */
  dishesIcon?: string
  /** 菜品名称 */
  dishesName?: string
  /** 价格  元（每100克价格） */
  dishesPrice?: number
  /** 菜品分类 0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 重量  克/份（90kcal标准） */
  dishesWeight?: number
  /** 首帧图 */
  firstFramePic?: string
  /** 禁止食用的目标疾病 */
  forbidTarget?: string
  /** 每次增加克数的价格 元 */
  increasePrice?: number
  /** 每次可增加克数 */
  increaseWeight?: number
  /** 含：总能量 */
  intakeEnergy?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 主图 */
  mainPic?: string
  /** 营养专家说 */
  nutritionExpertsSay?: string
  /** 每份/元 */
  perOfPrice?: number
  /** 每份/g */
  perOfWeight?: number
  /** 价格 元 */
  price?: number
  /** 基础库菜品code */
  recipeCode?: string
  /** 推荐食用目标疾病 */
  recommendTarget?: string
  /** 最低售卖份数 */
  salesNum?: number
  /** 菜品二级分类 0-其他 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 */
  secondaryClassify?: number
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** 单位 g */
  unit?: string
  /** 视频时长 */
  videoDuration?: number
  /** 视频链接 */
  videoUrl?: string
  /** 重量 */
  weight?: number
}

export interface ChangeDishesDTO {
  /** 更换菜品的code */
  changeDishesRecipeCode?: string
  /** 店铺下单配置id */
  configId?: string
  /** infoId */
  infoId?: string
  /** 外部标准数据 */
  normalItems?: RecipesNormalItem[]
  /** 套餐id */
  setMealId?: string
  /** 门店id */
  storeId?: string
  /** 被替换菜品的code */
  targetRecipesCode?: string
}

export interface DishesDetailVO {
  /** 封面图 */
  coverPic?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 菜品描述 */
  dishesDesc?: string
  /** 菜品图标 */
  dishesIcon?: string
  /** 菜品名称 */
  dishesName?: string
  /** 价格  元（每100克价格） */
  dishesPrice?: number
  /** 菜品分类 0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 重量  克/份（90kcal标准） */
  dishesWeight?: number
  /** 首帧图 */
  firstFramePic?: string
  /** 禁止食用的目标疾病 */
  forbidTarget?: string
  /** 每次增加克数的价格 元 */
  increasePrice?: number
  /** 每次可增加克数 */
  increaseWeight?: number
  /** 90kcal标准含：总能量 */
  intakeEnergy?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 主图 */
  mainPic?: string
  /** 每100g 含多少矿物质集合 */
  minerals?: RecipesNutritionItem[]
  /** 营养专家说 */
  nutritionExpertsSay?: string
  /** 菜品食材集合 */
  originalMaterialVOList?: OriginalMaterialVO[]
  /** 每份/元 */
  perOfPrice?: number
  /** 每份/g */
  perOfWeight?: number
  /** 小程序端包装分类 1-主食系列 2-鲜蔬系列 3-荤菜系列 4-水产系列  5-大豆系列 6-靓汤系列 7-西餐系列 */
  queryType?: number
  /** 基础库菜品code */
  recipeCode?: string
  /** 推荐食用目标疾病 */
  recommendTarget?: string
  /** 最低售卖份数 */
  salesNum?: number
  /** 菜品二级分类 0-其他 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 */
  secondaryClassify?: number
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** 每100g含：碳水化合物 */
  standardIntakeCarbohydrate?: number
  /** 每100g 含多少膳食纤维 */
  standardIntakeDietaryfiber?: number
  /** 每100g 含多少卡路里（能量） */
  standardIntakeEnergy?: number
  /** 每100g含：脂肪  */
  standardIntakeFat?: number
  /** 每100g含：蛋白质 */
  standardIntakeProtein?: number
  /** 视频时长 */
  videoDuration?: number
  /** 视频链接 */
  videoUrl?: string
  /** 每100g 含多少维他命集合 */
  vitamins?: RecipesNutritionItem[]
}

export interface OriginalMaterialVO {
  /** 品牌名称 */
  brandName?: string
  /** 品牌官网url */
  brandSiteUrl?: string
  /** 食材分类名称 */
  classifyName?: string
  /** 食材封面图url */
  coverPhotoUrl?: string
  /** 证书图片url */
  credentialsPhotoUrl?: string
  /** 是否显示 0:不显示 1:显示 */
  display?: number
  /** 食材编码 */
  foodCode?: string
  /** 分布式唯一ID */
  kid?: string
  /** 主图，最多6张 */
  mainPhotoUrl?: string
  /** 详情图片url */
  materialDetailPhotoUrl?: string
  /** 食材名称 */
  materialName?: string
  /** 视频url */
  videoUrl?: string
}

export interface DishesShowVO {
  /** 封面图 */
  coverPic?: string
  /** 含：膳食纤维 */
  dietaryFiber?: number
  /** 菜品名称 */
  dishesName?: string
  /** 菜品重量 */
  dishesWeight?: number
  /** 含：碳水化合物 */
  intakeCarbohydrate?: number
  /** 含：总能量 */
  intakeEnergy?: number
  /** 含：脂肪  */
  intakeFat?: number
  /** 含：蛋白质 */
  intakeProtein?: number
  /** 菜品id */
  kid?: string
}

export interface Dishes {
  /** 封面图 */
  coverPic?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 菜品描述 */
  dishesDesc?: string
  /** 菜品图标 */
  dishesIcon?: string
  /** 菜品名称 */
  dishesName?: string
  /** 价格  元（每100克价格） */
  dishesPrice?: number
  /** 菜品分类 0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 重量  克/份（90kcal标准） */
  dishesWeight?: number
  /** 首帧图 */
  firstFramePic?: string
  /** 禁止食用的目标疾病 */
  forbidTarget?: string
  /** 每次增加克数的价格 元 */
  increasePrice?: number
  /** 每次可增加克数 */
  increaseWeight?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 主图 */
  mainPic?: string
  /** 营养专家说 */
  nutritionExpertsSay?: string
  /** 每份/元 */
  perOfPrice?: number
  /** 每份/g */
  perOfWeight?: number
  /** 基础库菜品code */
  recipeCode?: string
  /** 推荐食用目标疾病 */
  recommendTarget?: string
  /** 最低售卖份数 */
  salesNum?: number
  /** 菜品二级分类 0-其他 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 */
  secondaryClassify?: number
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** 视频时长 */
  videoDuration?: number
  /** 视频链接 */
  videoUrl?: string
}

export interface SlotRecommendedDishesDTO {
  /** infoId */
  infoId?: string
  /** 门店id */
  storeId?: string
}

export interface OptionalStoreDishesVO {
  /** 店铺水果集合 */
  fruitDishesLsit?: StoreDishesVO[]
  /** 店铺荤菜集合 */
  meatDishesLsit?: StoreDishesVO[]
  /** 店铺汤类集合 */
  soupDishesLsit?: StoreDishesVO[]
  /** 店铺主食集合 */
  stapleDishesLsit?: StoreDishesVO[]
  /** 店铺id */
  storeId?: string
  /** 店铺素菜集合 */
  veggieDishesLsit?: StoreDishesVO[]
}

export interface StoreDishesVO {
  /** 封面图 */
  coverPic?: string
  /** 菜品图标 */
  dishesIcon?: string
  /** 菜品id */
  dishesId?: string
  /** 菜品名称 */
  dishesName?: string
  /** 菜品分类0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 每份/元 */
  perOfPrice?: number
  /** 每份/g */
  perOfWeight?: number
  /** 基础库菜品code */
  recipeCode?: string
  /** 基础库菜品id */
  recipeId?: string
  /** 前端标签识别位  0-正常   1-推荐  2-禁止 */
  showMarkTags?: number
}

export interface OptionalDishesVO {
  /** 套餐内菜品信息 */
  dishesList?: DishesVO[]
  /** 总能量 最大值 */
  maxReferIntakeEnergy?: number
  /** 餐次类型 0-其他 1-早餐 3-午餐 5-晚餐 */
  mealTime?: number
  /** 总能量 最小值 */
  minReferIntakeEnergy?: number
  /** 套餐配置信息 */
  setMeal?: SetMeal
  /** 门店id */
  storeId?: string
  /** 自选套餐总价 元 */
  totalAmount?: number
  /** 角色信息 */
  userInfo?: UserInfo
}

export interface DishesVO {
  /** 封面图 */
  coverPic?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 菜品描述 */
  dishesDesc?: string
  /** 菜品图标 */
  dishesIcon?: string
  /** 菜品名称 */
  dishesName?: string
  /** 价格  元（每100克价格） */
  dishesPrice?: number
  /** 菜品分类 0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 重量  克/份（90kcal标准） */
  dishesWeight?: number
  /** 首帧图 */
  firstFramePic?: string
  /** 禁止食用的目标疾病 */
  forbidTarget?: string
  /** 每次增加克数的价格 元 */
  increasePrice?: number
  /** 每次可增加克数 */
  increaseWeight?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 主图 */
  mainPic?: string
  /** 营养专家说 */
  nutritionExpertsSay?: string
  /** 每份/元 */
  perOfPrice?: number
  /** 每份/g */
  perOfWeight?: number
  /** 价格 元 */
  price?: number
  /** 基础库菜品code */
  recipeCode?: string
  /** 推荐食用目标疾病 */
  recommendTarget?: string
  /** 最低售卖份数 */
  salesNum?: number
  /** 菜品二级分类 0-其他 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 */
  secondaryClassify?: number
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** 单位 g */
  unit?: string
  /** 视频时长 */
  videoDuration?: number
  /** 视频链接 */
  videoUrl?: string
  /** 重量 */
  weight?: number
}

export interface SetMeal {
  /** 封面图 (推荐套餐) */
  coverPic?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 套餐详情图 (推荐套餐) */
  detailPic?: string
  /** 含：膳食纤维 */
  dietaryFiber?: number
  /** 维度(卡路里单位千卡)(推荐套餐) */
  dimension?: number
  /** 餐盘图标(自选套餐) */
  dinnerPlateIcon?: string
  /** 关联菜品id集合 */
  dishesIds?: string
  /** 基础套餐编码 */
  entryCode?: string
  /** 视频首帧图 (推荐套餐) */
  firstFramePic?: string
  /** 水果量 */
  fruitNumber?: string
  /** 含：碳水化合物 (推荐套餐) */
  intakeCarbohydrate?: number
  /** 含：总能量 (推荐套餐) */
  intakeEnergy?: number
  /** 含：脂肪 (推荐套餐) */
  intakeFat?: number
  /** 含：蛋白质 (推荐套餐) */
  intakeProtein?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 主图 (推荐套餐) */
  mainPic?: string
  /** 套餐名称 */
  mealName?: string
  /** 荤菜数量 （份） */
  meatDishesNumber?: string
  /** 适应人群 */
  nutritionExpertsSay?: string
  /** 价格 (推荐套餐) */
  price?: number
  /** 推荐 疾病/健康编码 (推荐套餐) */
  recommendCode?: string
  /** 推荐套餐标签 */
  setMealLabel?: string
  /** 套餐类型 0-自选套餐 1-推荐套餐 */
  setMealType?: number
  /** 上架状态：0->上架；1->下架 (推荐套餐) */
  shelveFlag?: number
  /** 例汤数量 （份） */
  soupNumber?: string
  /** 主食数量 （份） */
  stapleFoodNumber?: string
  /** 适宜能量 千卡 */
  suitEnergy?: number
  /** 素菜数量 （份） */
  vegetableNumber?: string
  /** 视频时长 (推荐套餐) */
  videoDuration?: number
  /** 视频链接 (推荐套餐) */
  videoUrl?: string
}

export interface UserInfo {
  /** 头像 */
  avatar?: string
  /** 生日（出生年月日） */
  birthday?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 */
  delFlag?: number
  /** 性别 0:默认值 1:男 2:女 */
  gender?: number
  /** 身高 */
  height?: number
  /** 疾病/健康编码 */
  illnessCode?: string
  /** 分布式唯一ID */
  kid?: string
  /** 劳动强度：1：久坐；2：轻度劳动；3：中度劳动 */
  labourIntensity?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 减重周期 */
  loseWeightCycle?: number
  /** 昵称 */
  nickName?: string
  /** 推荐目标code */
  recommendCode?: string
  /** 角色：0：自己；1：其他 */
  role?: boolean
  /** 目标体重 */
  targetWeight?: number
  /** 用户ID */
  userId?: string
  /** 体重 */
  weight?: number
}

export interface OptionalDishesDTO {
  /** 店铺下单配置id */
  configId?: string
  /** infoId */
  infoId?: string
  /** 自选菜品code集合 */
  recipeCodeList?: string[]
  /** 套餐Id */
  setMealId?: string
  /** 门店id */
  storeId?: string
}

export interface StoreDishesOptionalVO {
  /** 封面图 */
  coverPic?: string
  /** 含：膳食纤维 */
  dietaryFiber?: number
  /** 菜品id */
  dishesId?: string
  /** 菜品名称 */
  dishesName?: string
  /** 价格 元/份 */
  dishesPrice?: number
  /** 菜品分类0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 重量  克/份（90kcal标准） */
  dishesWeight?: number
  /** 含：碳水化合物 */
  intakeCarbohydrate?: number
  /** 含：总能量 */
  intakeEnergy?: number
  /** 含：脂肪  */
  intakeFat?: number
  /** 含：蛋白质 */
  intakeProtein?: number
  /** 基础库菜品code */
  recipeCode?: string
  /** 最低售卖份数 */
  salesNum?: number
  /** 菜品二级分类 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 */
  secondaryClassify?: number
  /** 菜品二级分类 staple-主食 vegetable-蔬菜 poultry-禽肉  meat-畜肉  aquaticproducts-水产 eggs-蛋类 soybeans-大豆 soup-汤 */
  secondaryClassifyKey?: string
  /** 前端标签识别位  0-正常   1-推荐  2-禁止 */
  showMarkTags?: number
}

export interface StoreDishesNewOptionalVO {
  /** 菜品中食材对应的膳食宝塔的分类 0-其他 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 9-水果类 10-奶 */
  baotaClassifyList?: number[]
  /** 封面图 */
  coverPic?: string
  /** 菜品id */
  dishesId?: string
  /** 菜品名称 */
  dishesName?: string
  /** 每100g 价格 */
  dishesPrice?: number
  /** 菜品分类0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 重量  克/份（90kcal标准） */
  dishesWeight?: number
  /** 标准含：总能量 */
  intakeEnergy?: number
  /** 小程序端包装分类 1-主食系列 2-鲜蔬系列 3-荤菜系列 4-水产系列 5-靓汤系列 6-西餐系列 */
  queryType?: number
  /** 基础库菜品code */
  recipeCode?: string
  /** 菜品二级分类 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 */
  secondaryClassify?: number
  /** 前端标签识别位  0-正常   1-推荐  2-禁止 */
  showMarkTags?: number
  /** 每100g含：碳水化合物 */
  standardIntakeCarbohydrate?: number
  /** 每100g 含多少卡路里（能量） */
  standardIntakeEnergy?: number
  /** 每100g含：脂肪  */
  standardIntakeFat?: number
  /** 每100g含：蛋白质 */
  standardIntakeProtein?: number
}

export interface RecommendedDishesDTO {
  /** 店铺下单配置id */
  configId?: string
  /** infoId */
  infoId?: string
  /** 套餐id */
  setMealId?: string
  /** 门店id */
  storeId?: string
}

export interface ReplaceDishesDTO {
  /** infoId */
  infoId?: string
  /** 餐次类型 0-其他 1-早餐 3-午餐 5-晚餐 */
  mealTime?: number
  /** 外部标准数据 */
  normalItems?: RecipesNormalItem[]
  /** 套餐配置信息 */
  setMeal?: SetMeal
  /** 门店id */
  storeId?: string
  /** 待替换的基础库菜品code */
  targetRecipesCode?: string
}

export interface SlotShowDishesVO {
  /** 店铺下单配置id */
  configId?: string
  /** 推荐套餐主图 */
  mealCoverPic?: string
  /** 抽取套餐名称 */
  mealName?: string
  /** 抽取套餐集合 */
  recommendedDishesList?: RecommendedShowDishesVO[]
  /** 套餐id */
  setMealId?: string
  /** 抽取推荐套餐总价 元 */
  totalAmount?: number
}

export interface EssentialIllness {
  /** 编码（以疾病或者健康人群划分） */
  code?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标示 */
  delFlag?: number
  /** 其他 */
  description?: string
  /** 疾病图片 */
  img?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 名称 */
  name?: string
  /** 父级 */
  parentCode?: string
  /** 推荐：1：推荐；0：普通 */
  recommend?: boolean
  /** 计算参考类型 */
  referCode?: string
  /** 排序 */
  sort?: number
  /** 疾病建议 */
  suggest?: string
  /** 类型（分类，疾病） */
  type?: number
}

export interface EssentialQuestionnaire {
  /** 答案 */
  answer?: string
  /** 表单编码 */
  code?: string
  /** 创建时间 */
  createDate?: string
  /** 删除标示 */
  delFlag?: number
  /** 其他 */
  description?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 问题 */
  questions?: string
  /** 所属组（以疾病或者健康人群划分） */
  referCode?: string
  /** 排序 */
  sort?: number
  /** 表单类型（input,select） */
  type?: string
}

export interface ExcelExportRecord {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 导出Excel类型 */
  excelType?: string
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
  /** 无标题模板导出 */
  withoutTitle?: boolean
}

export interface FeedbackInfo {
  /** 内容 */
  content?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 反馈图片，最多6张，多长图片以逗号分隔 */
  image?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
}

export interface FoodOrderComment {
  /** 是否匿名1是0否 */
  anonymousFlag?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  deliverComment?: string
  /** 配送评分 */
  deliverScore?: number
  /** 菜品评论内容 */
  dishesComment?: string
  /** 菜品评论图片 */
  dishesCommentImgs?: string
  /** 菜品评分 */
  dishesScore?: number
  /** 隐藏0不隐藏1隐藏 */
  hideFlag?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 订单号 */
  orderKid?: string
  /** 用户id */
  userId?: string
}

export interface FoodOrderInfosVO {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 角色id */
  infoId?: string
  /** 角色名称 */
  infoName?: string
  /** 角色菜品实付金额 */
  infoPayAmount?: number
  /** 角色类型 0.自己 1.他人 */
  infoType?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 平台优惠券金额 */
  platCouponAmount?: number
  /** 价格 */
  price?: number
  /** 报告id */
  reportId?: string
}

export interface FoodOrderSetMealVO {
  /** 封面图 */
  coverPic?: string
  /** 主图 */
  mainPic?: string
  /** 套餐名称 */
  mealName?: string
  /** 3.午餐 5.晚餐 */
  mealsType?: number
  /** 报告ID */
  reportId?: string
  /** 套餐ID */
  setMealId?: string
  /** 套餐类型 1-推荐套餐 */
  setMealType?: number
}

export interface FoodOrderDetailAppVO {
  /** 理赔须知 */
  compensateNotices?: PostSaleCompensateNotice[]
  /** 角色自助菜品明细 */
  dishesDetailsVO?: InfoOrderDishesDetailVO[]
  /** 外卖配送信息 */
  foodOrderExpressVO?: FoodOrderExpressVO
  orderExpressVO?: FoodOrderExpressVO
  /** 订单主表简要信息 */
  orderSimpleVO?: OrderSimpleVO
  /** 自提信息 */
  orderUserTakeVO?: OrderUserTakeVO
  /** 角色套餐明细 */
  setMealDetailsVO?: InfoOrderSetMealDetailVO[]
}

export interface PostSaleCompensateNotice {
  /** 理赔须知内容 */
  content?: string
  /** 理赔须知标题 */
  title?: string
}

export interface InfoOrderDishesDetailVO {
  /** 明细 */
  details?: OrderDishesDetailVO[]
  /** 角色id */
  infoId?: string
  /** 角色营养报告 */
  infoMainNutrientVO?: UserOrderMainNutrientVO
  /** 角色名称 */
  infoName?: string
  /** 角色类型 0.自己 1.他人 */
  infoType?: number
  /** 角色订单id */
  orderInfoId?: string
}

export interface OrderDishesDetailVO {
  /** 菜品id */
  dishesId?: string
  /** 菜品名称 */
  dishesName?: string
  /** 菜品图片 */
  dishesPic?: string
  /** 菜品分类 0其他 1 荤菜 2素菜 3汤类 4主食', */
  dishesType?: number
  /** 单位：1.克 2.份(最多1份) */
  dishesUnit?: number
  /** 菜品重量 */
  dishesWeight?: number
  /** 单位量,当前版本为:份 */
  num?: number
  /** 角色订单id */
  orderInfoId?: string
  /** 价格 */
  price?: number
}

export interface UserOrderMainNutrientVO {
  /** 碳水化合物 */
  carbohydrate?: MacroNutritionItem
  /** 能量 */
  energy?: RecipesNutritionReportItem
  /** 脂肪 */
  fat?: MacroNutritionItem
  /** 蛋白质 */
  protein?: MacroNutritionItem
}

export interface MacroNutritionItem {
  code?: string
  /** 能量占比 */
  energyRate?: number
  /** 最大 */
  maxRefer?: number
  /** 最小 */
  minRefer?: number
  name?: string
  unit?: string
  weight?: number
  /** 重量占比 */
  weightRate?: number
}

export interface RecipesNutritionReportItem {
  code?: string
  /** 最大 */
  maxRefer?: number
  /** 最小 */
  minRefer?: number
  name?: string
  unit?: string
  weight?: number
}

export interface FoodOrderExpressVO {
  /** 收货地址 */
  address?: string
  /** 收货联系人 */
  contactName?: string
  /** 收货联系电话 */
  contactPhone?: string
  /** 配送员名称 */
  expressManName?: string
  /** 配送员手机号 */
  expressManPhone?: string
  /** 0:自提 1:门店配送 2.美团配送 */
  expressType?: number
  /** 门牌号 */
  houseNumber?: string
  /** 美团订单状态 0:待调度 20:已接单 30:已取货 50:已送达 99:已取消  */
  mtOrderStatus?: number
  /** 1:已下单 2:配送中 3.已送达 */
  orderDeliveryStatus?: number
}

export interface OrderSimpleVO {
  /** 门店联系电话 */
  businessPhone?: string
  /** 就餐日 */
  eatDate?: string
  /** 运费金额 */
  expressAmount?: number
  /** 0:自提 1:外卖 */
  expressType?: number
  /** 纬度 */
  latitude?: string
  /** 经度 */
  longitude?: string
  /** 3.午餐 5.晚餐 */
  mealsType?: number
  /** 订单备注 */
  notes?: string
  /** 订单编号 */
  orderNo?: string
  /** 订单状态 1.待付款 2.待配送  3.待核销(待收货) 4.已完成 5.已关闭 */
  orderStatus?: number
  /** 支付总金额 */
  payAmount?: number
  /** 支付渠道 支付渠道 1.支付宝 2.微信 */
  payChannel?: number
  /** 支付过期时间 */
  payExpireTime?: string
  /** 支付状态 0.初始 1.待支付 2.已支付 3.已退款 */
  payStatus?: number
  /** 下单时间 */
  placeTime?: string
  /** 平台优惠券金额 */
  platCouponAmount?: number
  /** 套餐类型 0-自选 1-推荐套餐 */
  setMealType?: number
  /** 门店详细地址 */
  storeDetailAddress?: string
  /** 门店ID */
  storeId?: string
  /** 门店名称 */
  storeName?: string
  /** 取货时间区间 */
  takeTimeSectionEnd?: string
  /** 取货时间区间 */
  takeTimeSectionStart?: string
  /** 订单总价 */
  totalPrice?: number
}

export interface OrderUserTakeVO {
  /** 门店名称 */
  storeName?: string
  /** 取货时间区间 */
  takeTimeSectionEnd?: string
  /** 取货时间区间 */
  takeTimeSectionStart?: string
  /** 核销码 */
  verfiyCode?: string
}

export interface InfoOrderSetMealDetailVO {
  /** 明细 */
  details?: OrderSetMealDetailVO[]
  /** 角色id */
  infoId?: string
  /** 角色营养报告 */
  infoMainNutrientVO?: UserOrderMainNutrientVO
  /** 角色名称 */
  infoName?: string
  /** 角色类型 0.自己 1.他人 */
  infoType?: number
  /** 角色订单id */
  orderInfoId?: string
}

export interface OrderSetMealDetailVO {
  /** 封面图 */
  coverPic?: string
  /** 套餐详情图 */
  detailPic?: string
  /** 套餐菜品名称 */
  dishesNames?: string
  /** 视频首帧图 */
  firstFramePic?: string
  /** 主图 */
  mainPic?: string
  /** 套餐名称 */
  mealName?: string
  /** 数量 */
  num?: number
  /** 平台优惠券金额 */
  platCouponAmount?: number
  /** 价格 */
  price?: number
  /** 套餐ID */
  setMealId?: string
  /** 推荐套餐标签 */
  setMealLabel?: string
  /** 套餐类型 1-推荐套餐 */
  setMealType?: number
  /** 总价格 */
  totalPrice?: number
  /** 视频链接 */
  videoUrl?: string
}

export interface FoodOrderAppListVO {
  /** 确认收货时间(自提为核销时间) */
  confirmTime?: string
  /** 发货时间 */
  deliveryTime?: string
  /** 就餐日 */
  eatDay?: string
  /** 0.初始 1.待评价 2.已评价 */
  evaluateStatus?: number
  /** 运费金额 */
  expressAmount?: number
  /** 0:自提 1:外卖 */
  expressType?: number
  /** 菜品总数 */
  foodNum?: number
  /** 3.午餐 5.晚餐 */
  mealsType?: number
  /** 订单id */
  orderId?: string
  /** 订单编号 */
  orderNo?: string
  /** 订单套餐详情 */
  orderSetMealList?: FoodOrderSetMeal[]
  /** 订单状态 1.待付款 2.待配送  3.待核销(待收货) 4.已完成 5.已关闭 */
  orderStatus?: number
  /** 支付总金额 */
  payAmount?: number
  /** 支付渠道 支付渠道 1.支付宝 2.微信 7.虚拟币支付 */
  payChannel?: number
  /** 支付完成时间 */
  payFinishTime?: string
  /** 支付交易号 */
  payNo?: string
  /** 支付状态 0.初始 1.待支付 2.已支付 3.已退款 */
  payStatus?: number
  /** 用户联系电话 */
  phone?: string
  /** 下单时间 */
  placeTime?: string
  /** 平台优惠券金额 */
  platCouponAmount?: number
  /** 套餐类型 0-自选 1-推荐套餐 */
  setMealType?: number
  /** 简要订单详情 */
  simpleOrderDetail?: SimpleOrderDetailVO[]
  /** 店铺id */
  storeId?: string
  /** 店铺名称 */
  storeName?: string
  /** 订单总价 */
  totalPrice?: number
  /** 用户id */
  userId?: string
}

export interface FoodOrderSetMeal {
  /** 封面图 */
  coverPic?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 套餐详情图 */
  detailPic?: string
  /** 套餐菜品名称 */
  dishesNames?: string
  /** 基础套餐编码 */
  entryCode?: string
  /** 视频首帧图 */
  firstFramePic?: string
  /** 角色id */
  infoId?: string
  /** 角色类型 0.自己 1.他人 */
  infoType?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 主图 */
  mainPic?: string
  /** 套餐名称 */
  mealName?: string
  /** 3.午餐 5.晚餐 */
  mealsType?: number
  /** 数量 */
  num?: number
  /** 角色订单id */
  orderInfoId?: string
  /** 订单kid */
  orderKid?: string
  /** 平台优惠券金额 */
  platCouponAmount?: number
  /** 价格 */
  price?: number
  /** 套餐ID */
  setMealId?: string
  /** 推荐套餐标签 */
  setMealLabel?: string
  /** 套餐类型 1-推荐套餐 */
  setMealType?: number
  /** 总价格 */
  totalPrice?: number
  /** 用户id */
  userId?: string
  /** 视频链接 */
  videoUrl?: string
}

export interface SimpleOrderDetailVO {
  /** 食物ID */
  dishesId?: string
  /** 食物名称 */
  dishesName?: string
  /** 食物图片 */
  dishesPic?: string
  /** 菜品分类 0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 角色id */
  infoId?: string
  /** 角色类型 0.自己 1.他人 */
  infoType?: number
}

export interface CommonOrderCreatedVO {
  /** 支付金额(分) */
  amount?: number
  /** 创建时间 */
  createDate?: string
  /** 支付SDK所需参数 */
  ext?: any
  /** 订单ID */
  orderId?: string
  /** 支付单号 */
  payNo?: string
  /** 版本标识 */
  version?: string
}

export interface FoodOrderCreateDTO {
  /** 外卖收货地址ID */
  addressId?: string
  /** 就餐日 */
  eatDay?: string
  /** 配送类型 0:自提 1:外卖 */
  expressType?: number
  /** 角色自助菜品列表  */
  infoDishesList?: InfoFoodItemDTO[]
  /** 角色套餐列表  */
  infoSetMealList?: SetMealItemDTO[]
  /** 纬度 */
  latitude?: number
  /** 经度 */
  longitude?: number
  /** 餐时间类型 3.午餐 5.晚餐 */
  mealsType?: number
  /** 客户下单备注 */
  notes?: string
  /** 订单id(用于获取指定订单支付参数) */
  orderId?: string
  /** 支付渠道 1.支付宝 2.微信 */
  payChannel?: number
  /** 平台优惠券ID */
  platCouponId?: string
  /** 套餐类型 0-自选 1-推荐套餐 */
  setMealType?: number
  /** 门店id */
  storeId?: string
  /** 取货/预计送达时间区间 */
  takeTimeSectionEnd?: string
  /** 取货/预计送达时间区间  */
  takeTimeSectionStart?: string
}

export interface InfoFoodItemDTO {
  /** 菜品Id:购买单位量(单选为g) */
  dishes?: KeyValueDTO<string,bigdecimal>[]
  /** 角色id */
  infoId?: string
  /** 角色类型 0.自己 1.他人 */
  infoType?: number
}

export interface KeyValueDTO<T,T1> {
  key?: string
  value?: number
}

export interface SetMealItemDTO {
  /** 角色id */
  infoId?: string
  /** 角色类型 0.自己 1.他人 */
  infoType?: number
  /** 数量:当前默认为1 */
  num?: number
  /** 套餐ID */
  setMealId?: string
}

export interface OrderPrepareCreateVO {
  /** 是否可下单 */
  canCreate?: boolean
  /** 运费 */
  expressAmount?: number
  /** 消息 */
  message?: string
  /** 商品金额 */
  totalPrice?: number
}

export interface FoodOrderPrepareCreateDTO {
  /** 就餐日 */
  eatDay?: string
  /** 配送类型 0:自提 1:外卖 */
  expressType?: number
  /** 角色自助菜品列表  */
  infoDishesList?: InfoFoodItemDTO[]
  /** 角色套餐列表  */
  infoSetMealList?: SetMealItemDTO[]
  /** 餐时间类型 3.午餐 5.晚餐 */
  mealsType?: number
  /** 套餐类型 0-自选 1-推荐套餐 */
  setMealType?: number
  /** 门店id */
  storeId?: string
}

export interface RiderLocationVO {
  /** 距离配送地址的距离（以米为单位） */
  deliveryDistance?: number
  /** 纬度 */
  lat?: string
  /** 经度 */
  lng?: string
  /** 美团订单状态 0:待调度 20:已接单 30:已取货 50:已送达 99:已取消  */
  mtOrderStatus?: number
  /** 距离商家地址的距离（以米为单位） */
  storeDistance?: number
}

export interface FoodOrderStoreListVO {
  /** 外送方式:1:门店配送 2.美团配送 3.蜂鸟配送 */
  deliveryWay?: number
  /** 订单详情 */
  detailVOList?: StoreListDetailVO[]
  /** 就餐日 */
  eatDay?: string
  /** 配送费 */
  expressAmount?: number
  /** 0:自提 1:外送 */
  expressType?: number
  /** 菜品总数 */
  foodNum?: number
  /** 订单id */
  kid?: string
  /** 餐次类型 */
  mealsType?: number
  /** 美团配送状态 0:待调度 20:已接单 30:已取货 50:已送达 99:已取消 */
  meituanDeliveryStatus?: number
  /** 订单备注 */
  notes?: string
  /** 订单号 */
  orderNo?: string
  /** 订单状态 */
  orderStatus?: number
  /** 实付 */
  payAmount?: number
  /** 支付时间 */
  payFinishTime?: string
  /** 优惠 */
  platCouponAmount?: number
  /** 套餐 */
  setMealName?: string
  /** 套餐类型 0-自选套餐 1-推荐套餐 */
  setMealType?: number
  /** 店铺 */
  storeId?: string
  /** 取/送餐时间 */
  takeTimeSectionEnd?: string
  /** 取/送餐时间 */
  takeTimeSectionStart?: string
  /** 总价 */
  totalPrice?: number
  /** 下单人 */
  userName?: string
  /** 手机号 */
  userPhone?: string
}

export interface StoreListDetailVO {
  /** 订单明细 */
  details?: FoodOrderDetail[]
  /** 3.午餐 5.晚餐 */
  mealsType?: number
  /** 套餐名称 */
  setMealName?: string
  /** 套餐数量 */
  setMealNum?: number
}

export interface FoodOrderDetail {
  /** 创建时间 */
  createDate?: string
  /** 是否删除 */
  delFlag?: number
  /** 菜品id */
  dishesId?: string
  /** 菜品名称 */
  dishesName?: string
  /** 菜品图片 */
  dishesPic?: string
  /** 菜品分类 0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 菜品重量 */
  dishesWeight?: number
  /** 角色id */
  infoId?: string
  /** 角色类型 0.自己 1.他人 */
  infoType?: number
  /** 含：碳水化合物 */
  intakeCarbohydrate?: number
  /** 含：总能量 */
  intakeEnergy?: number
  /** 含：脂肪 */
  intakeFat?: number
  /** 含：蛋白质 */
  intakeProtein?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 单位量,当前版本为:份 */
  num?: number
  /** 角色订单id */
  orderInfoId?: string
  /** 订单kid */
  orderKid?: string
  /** 套餐订单id */
  orderSetMealId?: string
  /** 菜品价格 */
  price?: number
  /** 基础库菜品code */
  recipeCode?: string
  /** 套餐ID */
  setMealId?: string
  /** 套餐名称 */
  setMealName?: string
  /** 用户id */
  userId?: string
}

export interface FoodOrder {
  /** 收货地址 */
  address?: string
  /** 确认收货时间(自提为核销时间) */
  confirmTime?: string
  /** 联系人 */
  contactName?: string
  /** 收货联系电话 */
  contactPhone?: string
  /** 创建时间 */
  createDate?: string
  /** 是否删除 */
  delFlag?: number
  /** 发货时间 */
  deliveryTime?: string
  /** 外送方式:1:门店配送 2.美团配送 3.蜂鸟配送 */
  deliveryWay?: number
  /** 1-IOS，2-ANDROID，3-WEB，4-MINI_PROGRAM，5-OFFICIAL_ACCOUNTS */
  devType?: number
  /** 就餐日 */
  eatDay?: string
  /** 0.初始 1.待评价 2.已评价 */
  evaluateStatus?: number
  /** 运费金额 */
  expressAmount?: number
  /** 配送类型 0:自提 1:外卖 */
  expressType?: number
  /** 总份数 */
  foodNum?: number
  /** 门牌号 */
  houseNumber?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 纬度 */
  latitude?: string
  /** 经度 */
  longitude?: string
  /** 3.午餐 5.晚餐 */
  mealsType?: number
  /** 订单备注 */
  notes?: string
  /** 订单编号 */
  orderNo?: string
  /** 订单状态 0.初始 1.待付款  2.待出餐 3.待核销(待收货) 4.已完成 5.已关闭 */
  orderStatus?: number
  /** 实付金额 */
  payAmount?: number
  /** 支付渠道 支付渠道 1.支付宝 2.微信 */
  payChannel?: number
  /** 支付完成时间 */
  payFinishTime?: string
  /** 支付交易号 */
  payNo?: string
  /** 支付状态 0.初始 1.待支付 2.已支付 3.已退款 */
  payStatus?: number
  /** 下单人手机号 */
  phone?: string
  /** 下单时间 */
  placeTime?: string
  /** 平台优惠券金额 */
  platCouponAmount?: number
  /** 平台优惠券ID */
  platCouponId?: string
  /** 套餐类型 0-自选套餐 1-推荐套餐 */
  setMealType?: number
  /** 店铺id */
  storeId?: string
  /** 取货时间区间 */
  takeTimeSectionEnd?: string
  /** 取货时间区间 */
  takeTimeSectionStart?: string
  /** 菜品总价 */
  totalPrice?: number
  /** 用户id */
  userId?: string
  /** 核销码 */
  verfiyCode?: string
  /** 核销备注 */
  verfiyNotes?: string
}

export interface PageRequest<T> {
  /** 截止时间 */
  endTime?: string
  /** 页码 */
  pageNo?: number
  /** 每页条数 */
  pageSize?: number
  /** 参数对象 */
  param?: T
  /** 开始时间 */
  startTime?: string
  /** 时间范围 */
  timeRange?: string
}

export interface ManagerOperaDTO {
  expressManName?: string
  expressManPhone?: string
  orderId?: string
}

export interface FoodOrderDetailManagerVO {
  /** 收货地址 */
  address?: string
  /** 确认收货时间(自提为核销时间) */
  confirmTime?: string
  /** 联系人 */
  contactName?: string
  /** 收货联系电话 */
  contactPhone?: string
  /** 创建时间 */
  createDate?: string
  /** 是否删除 */
  delFlag?: number
  /** 发货时间 */
  deliveryTime?: string
  /** 外送方式:1:门店配送 2.美团配送 3.蜂鸟配送 */
  deliveryWay?: number
  /** 1-IOS，2-ANDROID，3-WEB，4-MINI_PROGRAM，5-OFFICIAL_ACCOUNTS */
  devType?: number
  /** 就餐日 */
  eatDay?: string
  /** 0.初始 1.待评价 2.已评价 */
  evaluateStatus?: number
  /** 运费金额 */
  expressAmount?: number
  /** 配送员名称 */
  expressManName?: string
  /** 配送员手机号 */
  expressManPhone?: string
  /** 配送类型 0:自提 1:外卖 */
  expressType?: number
  /** 总份数 */
  foodNum?: number
  /** 订单 日志 */
  foodOrderLogs?: FoodOrderLog[]
  /** 门牌号 */
  houseNumber?: string
  /** 角色订单详情(角色维度) */
  infoVOList?: FoodOrderInfosManagerVO[]
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 纬度 */
  latitude?: string
  /** 经度 */
  longitude?: string
  /** 3.午餐 5.晚餐 */
  mealsType?: number
  /** 美团配送状态 0:待调度 20:已接单 30:已取货 50:已送达 99:已取消 */
  meituanDeliveryStatus?: number
  /** 订单备注 */
  notes?: string
  /** 订单编号 */
  orderNo?: string
  /** 订单状态 0.初始 1.待付款  2.待出餐 3.待核销(待收货) 4.已完成 5.已关闭 */
  orderStatus?: number
  /** 实付金额 */
  payAmount?: number
  /** 支付渠道 支付渠道 1.支付宝 2.微信 */
  payChannel?: number
  /** 支付完成时间 */
  payFinishTime?: string
  /** 支付交易号 */
  payNo?: string
  /** 支付状态 0.初始 1.待支付 2.已支付 3.已退款 */
  payStatus?: number
  /** 下单人手机号 */
  phone?: string
  /** 下单时间 */
  placeTime?: string
  /** 平台优惠券金额 */
  platCouponAmount?: number
  /** 平台优惠券ID */
  platCouponId?: string
  /** 订单售后信息 */
  postSaleOrderDetailList?: AdminFoodOrderDetailVO[]
  /** 套餐类型 0-自选套餐 1-推荐套餐 */
  setMealType?: number
  /** 店铺地址 */
  storeAddress?: string
  /** 店铺id */
  storeId?: string
  /** 店铺名称 */
  storeName?: string
  /** 取货时间区间 */
  takeTimeSectionEnd?: string
  /** 取货时间区间 */
  takeTimeSectionStart?: string
  /** 菜品总价 */
  totalPrice?: number
  /** 用户id */
  userId?: string
  /** 下单人 */
  userName?: string
  /** 下单人手机号 */
  userPhone?: string
  /** 核销码 */
  verfiyCode?: string
  /** 核销备注 */
  verfiyNotes?: string
}

export interface FoodOrderLog {
  /** 操作内容 */
  contents?: string
  /** 创建时间 */
  createDate?: string
  /** 是否删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 操作时间 */
  operateTime?: string
  /** 动作类型  动作类型 1.下单 2.支付订单 3.出餐 4.取餐 5.收货,6. 退款,7.取消支付,20.美团已接单,30.美团已取货,50.美团已送达,99.美团已取消 */
  operateType?: number
  /** 操作人角色 1.平台后台用户 2.app用户 3.商户后台 4.美团 */
  operatorRole?: number
  /** 操作人 */
  operatorUserId?: string
  /** orderkid */
  orderKid?: string
  /** 订单状态 1.待支付,2.待配送, 3.待收货/待自提, 4.已完成,5.已关闭; */
  orderStatus?: number
  /** 支付状态 0.初始 1.待支付 2.已支付 3.已退款 */
  payStatus?: number
}

export interface FoodOrderInfosManagerVO {
  /** 订单明细 */
  detailVOList?: FoodOrderDetailVO[]
  /** 角色名称 */
  infoName?: string
  /** 角色能量累计 */
  infoNutrient?: UserDailyMainNutrient
  /** 角色类型 0.自己 1.他人 */
  infoType?: number
  /** 数量(默认一个角色一份) */
  num?: number
  /** 套餐名称 */
  setMealName?: string
  /** 套餐单价 */
  setMealPrice?: string
}

export interface FoodOrderDetailVO {
  /** 创建时间 */
  createDate?: string
  /** 是否删除 */
  delFlag?: number
  /** 菜品id */
  dishesId?: string
  /** 菜品名称 */
  dishesName?: string
  /** 菜品图片 */
  dishesPic?: string
  /** 菜品分类 0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 菜品重量 */
  dishesWeight?: number
  /** 角色id */
  infoId?: string
  /** 角色名称 */
  infoName?: string
  /** 角色类型 0.自己 1.他人 */
  infoType?: number
  /** 含：碳水化合物 */
  intakeCarbohydrate?: number
  /** 含：总能量 */
  intakeEnergy?: number
  /** 含：脂肪 */
  intakeFat?: number
  /** 含：蛋白质 */
  intakeProtein?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 单位量,当前版本为:份 */
  num?: number
  /** 角色订单id */
  orderInfoId?: string
  /** 订单kid */
  orderKid?: string
  /** 套餐订单id */
  orderSetMealId?: string
  /** 菜品价格 */
  price?: number
  /** 基础库菜品code */
  recipeCode?: string
  /** 套餐ID */
  setMealId?: string
  /** 套餐名称 */
  setMealName?: string
  /** 用户id */
  userId?: string
}

export interface UserDailyMainNutrient {
  /** 碳水化合物 */
  carbohydrate?: MacroNutritionItem
  /** 能量 */
  energy?: RecipesNutritionReportItem
  /** 脂肪 */
  fat?: MacroNutritionItem
  /** 蛋白质 */
  protein?: MacroNutritionItem
}

export interface AdminFoodOrderDetailVO {
  /** 创建时间 */
  createDate?: string
  /** 是否删除 */
  delFlag?: number
  /** 菜品id */
  dishesId?: string
  /** 菜品名称 */
  dishesName?: string
  /** 菜品图片 */
  dishesPic?: string
  /** 菜品分类 0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 菜品重量 */
  dishesWeight?: number
  /** 封面图 */
  infoCoverPic?: string
  /** 菜品名称 */
  infoDishesNames?: string
  /** 角色id */
  infoId?: string
  /** 角色名称 */
  infoName?: string
  /** 角色购买数量 */
  infoNum?: number
  /** 角色平台优惠券金额 */
  infoPlatCouponAmount?: number
  /** 角色价格 */
  infoPrice?: number
  /** 角色类型 0.自己 1.他人 */
  infoType?: number
  /** 含：碳水化合物 */
  intakeCarbohydrate?: number
  /** 含：总能量 */
  intakeEnergy?: number
  /** 含：脂肪 */
  intakeFat?: number
  /** 含：蛋白质 */
  intakeProtein?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 单位量,当前版本为:份 */
  num?: number
  /** 角色订单id */
  orderInfoId?: string
  /** 订单kid */
  orderKid?: string
  /** 套餐订单id */
  orderSetMealId?: string
  /** 售后类型：1：按角色售后 */
  postSaleType?: number
  /** 菜品价格 */
  price?: number
  /** 基础库菜品code */
  recipeCode?: string
  /** 套餐ID */
  setMealId?: string
  /** 套餐名称 */
  setMealName?: string
  /** 用户id */
  userId?: string
}

export interface CooperationManagerRoleVO {
  /** 认证类型 */
  authType?: string
  cooperationId?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标记 */
  delFlag?: number
  /** 英文名称 */
  enName?: string
  /** 企业id */
  enterpriseId?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 角色菜单 */
  managerMenus?: CooperationManagerMenuVO[]
  /** 备注信息 */
  remarks?: string
  /** 角色名称 */
  roleName?: string
  /** 0-有效 1-无效 */
  roleStatus?: number
  /** 连带更新权限 */
  updatePermission?: boolean
}

export interface CooperationManagerMenuVO {
  /** 认证类型 */
  authType?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标记 */
  delFlag?: number
  /** 链接 */
  href?: string
  /** 图标 */
  icon?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 名称 */
  menuName?: string
  /** 菜单类型 1页面菜单 2权限菜单 3功能菜单 */
  menuType?: number
  /** 父级编号 */
  parentKid?: string
  /** 所有父级编号 */
  parentKids?: string
  /** 父级菜单名称 */
  parentName?: string
  /** 权限api接口，多个逗号分隔 */
  permissionApis?: string
  /** 权限编码 */
  permissionCode?: string
  /** 备注信息 */
  remarks?: string
  /** 显示类型 */
  showType?: string
  /** 排序 */
  sort?: number
}

export interface CooperationManagerRole {
  /** 认证类型 */
  authType?: string
  cooperationId?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标记 */
  delFlag?: number
  /** 英文名称 */
  enName?: string
  /** 企业id */
  enterpriseId?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 备注信息 */
  remarks?: string
  /** 角色名称 */
  roleName?: string
  /** 0-有效 1-无效 */
  roleStatus?: number
}

export interface CooperationManagerRolePermission {
  /** 创建时间 */
  createDate?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 权限编码 */
  permissionCode?: string
  /** 权限编号 */
  permissionKid?: string
  /** 权限类型 */
  permissionType?: string
  /** 角色编号 */
  roleKid?: string
  /** 显示类型 */
  showType?: string
}

export interface RolePermissionDTO {
  /** 权限菜单集合 */
  menuList?: CooperationManagerMenuVO[]
  /** 角色kid */
  roleKid?: string
}

export interface CooperationManagerUserVO {
  authType?: string
  /** 店铺id */
  cooperationId?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标记0未删除1已删除 */
  delFlag?: number
  /** 邮箱 */
  email?: string
  /** 企业id */
  enterpriseId?: string
  /** 用户头像 */
  headIcon?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 是否可登录，0-可登陆，1-禁用 */
  loginFlag?: number
  /** 登录名 */
  loginName?: string
  managerRoles?: CooperationManagerRoleVO[]
  /** 电话 */
  phone?: string
  /** 极光设备编号 */
  registrationId?: string
  /** 备注信息 */
  remarks?: string
  roleNames?: string
  /** 是否系统管理员,0-非系统管理员，1-系统管理员 */
  sysAdmin?: number
  /** 员工性别 0女 1男 2-未设置 */
  userGender?: number
  /** 姓名 */
  userName?: string
  /** 密码 */
  userPassword?: string
}

export interface CooperationManagerUserDTO {
  admin?: boolean
  /** 认证类型 */
  authType?: string
  /** 店铺id */
  cooperationId?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标记0未删除1已删除 */
  delFlag?: number
  /** 邮箱 */
  email?: string
  /** 企业id */
  enterpriseId?: string
  /** 用户头像 */
  headIcon?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 是否可登录，0-可登陆，1-禁用 */
  loginFlag?: number
  /** 登录名 */
  loginName?: string
  /** 电话 */
  phone?: string
  /** 极光设备编号 */
  registrationId?: string
  /** 备注信息 */
  remarks?: string
  /** 角色kid */
  roleKid?: string
  /** 是否系统管理员,0-非系统管理员，1-系统管理员 */
  sysAdmin?: number
  /** 员工性别 0女 1男 2-未设置 */
  userGender?: number
  /** 姓名 */
  userName?: string
  /** 密码 */
  userPassword?: string
}

export interface MaterialClassifyVO {
  /** 分类名称 */
  classifyName?: string
  /** 分布式唯一ID */
  kid?: string
  /** 排序 */
  sort?: number
}

export interface UserInviteVO {
  /** 用户头像 */
  avatar?: string
  /** 消费金额 */
  consumeMoney?: string
  /** 邀请时间 */
  inviteTime?: string
  /** 用户昵称 */
  nickName?: string
  /** 订单数量 */
  orderCount?: string
  /** 用户ID */
  userId?: string
  /** 手机号 */
  userPhone?: string
}

export interface NewDetailVO {
  /** 分类kid */
  classifyKid?: string
  /** 分类名称 */
  classifyName?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 当前用户是否点赞（0否，1是） */
  curUserLikeFlag?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 视频时长 */
  duration?: string
  /** 隐藏标识 0：显示，1：隐藏 */
  hideFlag?: number
  /** 详细介绍 */
  introduce?: string
  /** 分布式唯一ID */
  kid?: string
  /** 标签，多个标签用逗号分隔 */
  labels?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 点赞数 */
  likeCount?: string
  /** 关联的菜品信息 */
  linkDishesInfo?: Dishes
  /** 关联菜品kid */
  linkDishesKid?: string
  /** 关联食材kid */
  linkIngredientKid?: string
  /** 关联的食材信息 */
  linkMateriaInfo?: OriginalMaterial
  /** 关联的套餐信息 */
  linkSetMealInfo?: SetMeal
  /** 关联套餐kid */
  linkSetMealKid?: string
  /** 关联类型 0：不关联，1：关联食材，2：关联套餐，3：关联菜品 */
  linkType?: number
  /** 资讯图片或者视频类型  1：图片，2：视频 */
  mediaType?: number
  /** 图片URL地址，多个url用逗号分隔 */
  picUrls?: string
  /** 排序号 */
  sort?: number
  /** 标题 */
  title?: string
  /** 更新时间 yyyy-MM-dd HH:mm */
  updateDate?: string
  /** 视频封面图 */
  videoCoverImgUrl?: string
  /** 视频URL地址 */
  videoUrls?: string
}

export interface OriginalMaterial {
  /** 品牌名称 */
  brandName?: string
  /** 品牌官网url */
  brandSiteUrl?: string
  /** 食材分类 */
  classifyId?: string
  /** 食材封面图url */
  coverPhotoUrl?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 证书图片url */
  credentialsPhotoUrl?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 是否显示 0:不显示 1:显示 */
  display?: number
  /** 视频时长 */
  duration?: string
  /** 食材编码 */
  foodCode?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 主图，最多6张 */
  mainPhotoUrl?: string
  /** 详情图片url */
  materialDetailPhotoUrl?: string
  /** 食材名称 */
  materialName?: string
  /** 视频封面图url */
  videoCoverImgUrl?: string
  /** 视频url */
  videoUrl?: string
}

export interface NewsLikeRequest {
  /** 是否点赞 1：点赞，0：取消点赞 */
  likeFlag?: number
  /** 点赞的资讯kid */
  newsKid?: string
}

export interface NewsVO {
  /** 分类kid */
  classifyKid?: string
  /** 分类名称 */
  classifyName?: string
  /** 当前用户是否点赞（0否，1是） */
  curUserLikeFlag?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 视频时长 */
  duration?: string
  /** 隐藏标识 0：显示，1：隐藏 */
  hideFlag?: number
  /** 详细介绍 */
  introduce?: string
  kid?: string
  /** 标签，多个标签用逗号分隔 */
  labels?: string
  /** 点赞数 */
  likeCount?: string
  /** 关联菜品kid */
  linkDishesKid?: string
  /** 关联食材kid */
  linkIngredientKid?: string
  /** 关联套餐kid */
  linkSetMealKid?: string
  /** 关联类型 1：关联食材，2：关联套餐，3：关联菜品 */
  linkType?: number
  /** 资讯图片或者视频类型  1：图片，2：视频 */
  mediaType?: number
  /** 图片URL地址，多个url用逗号分隔 */
  picUrls?: string
  /** 排序号 */
  sort?: number
  /** 标题 */
  title?: string
  /** 更新时间 yyyy-MM-dd HH:mm */
  updateDate?: string
  /** 视频封面图 */
  videoCoverImgUrl?: string
  /** 视频URL地址 */
  videoUrls?: string
}

export interface OrderRangeConfigVO {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 分布式唯一ID */
  kid?: string
  /** 剩余可用库存数 */
  lastOrderConfigNumber?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 餐次类型 0-其他 1-早餐 3-午餐 5-晚餐 */
  mealsType?: number
  /** 配置日期 */
  orderConfigDate?: string
  /** 订单设置数 -1-未设置库存 */
  orderConfigNumber?: string
  /** 门店id */
  storeId?: string
  /** 取货时间区间 */
  takeTimeSectionEnd?: string
  /** 取货时间区间 */
  takeTimeSectionStart?: string
}

export interface OrderRulesConfig {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 晚餐最晚可订餐时间 */
  dinnerLastOrderTime?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 午餐最晚可订餐时间 */
  lunchLastOrderTime?: string
  /** 当天是否可点餐 0-不可以 1-可以 */
  orderRulesType?: number
  /** 店铺id */
  storeId?: string
}

export interface PostSaleDetailVO {
  /** 订单信息 */
  orderInfo?: FoodOrder
  /** 详情信息列表 */
  orderInfoList?: OrderInfoVO[]
  /** 售后单信息 */
  postSale?: PostSale
  /** 商家店铺信息 */
  storeInfo?: Store
}

export interface OrderInfoVO {
  /** 套餐封面图 */
  coverPic?: string
  /** 套餐菜品名称 */
  dishesNames?: string
  /** 角色ID */
  infoId?: string
  /** 角色名称 */
  infoName?: string
  /** 角色类型 0.自己 1.他人 */
  infoType?: number
  /** 标签 */
  label?: string
  /** 数量 */
  num?: number
  /** 菜品详情信息列表 */
  orderDetailList?: FoodOrderDetail[]
  /** 角色订单ID */
  orderInfoKid?: string
  /** 平台优惠券金额 */
  platCouponAmount?: number
  /** 售后类型：1：按角色售后 */
  postSaleType?: number
  /** 价格 */
  price?: number
  /** 套餐id */
  setMealId?: string
  /** 套餐名称 */
  setMealName?: string
}

export interface PostSale {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 要售后的订单菜品详细id列表，多个id用逗号分隔开 */
  orderDetailIds?: string
  /** 要售后的订单角色id列表，多个id用逗号分隔开 */
  orderInfoIds?: string
  /** 关联的订单表的kid */
  orderKid?: string
  /** 退款总价 */
  postSaleAmount?: number
  /** 售后发起时间 */
  postSaleDate?: string
  /** 售后原因描述 */
  postSaleDesc?: string
  /** 图片列表，多个图片URL地址以逗号分隔 */
  postSaleImages?: string
  /** 售后原因 */
  postSaleReason?: string
  /** 1:商家处理中、2:商家同意退款、3:商家拒绝退款、4:用户取消售后、5：退款中、6：退款已入账、7:退款异常 */
  postSaleStatus?: number
  /** 售后类型：1：按角色售后，2：按套餐售后，3：按菜品售后 */
  postSaleType?: number
  /** 退款中的优惠券金额 */
  refundCouponAmount?: number
  /** 退款到账时间 */
  refundDate?: string
  /** 退款中的运费金额（不退运费时为0） */
  refundExpressAmount?: number
  /** 套餐类型 0-自选套餐 1-推荐套餐' */
  setMealType?: number
  /** 店铺id */
  storeId?: string
  /** 发起售后的用户id */
  userId?: string
}

export interface StartPostSaleRequest {
  /** 要售后的订单菜品详细id列表，多个id用逗号分隔开（套餐售后时可以不传） */
  orderDetailIds?: string
  /** 要售后的订单角色id列表，多个id用逗号分隔开（套餐售后时可以不传） */
  orderInfoIds?: string
  /** 售后关联的订单kid */
  orderKid?: string
  /** 退款描述 */
  postSaleDesc?: string
  /** 售后内容详情信息列表 */
  postSaleDetailRequestList?: PostSaleDetailRequest[]
  /** 售后图片列表，多个图片URL地址以逗号分隔 */
  postSaleImages?: string
  /** 退款原因 */
  postSaleReason?: string
  /** 售后类型：1：按角色售后 */
  postSaleType?: number
}

export interface PostSaleDetailRequest {
  /** 订单角色的kid */
  detailKid?: string
  /** 退款数量 */
  num?: number
}

export interface PostSaleVO {
  /** 配送类型 */
  expressType?: number
  /** 套餐数量 */
  foodNum?: number
  kid?: string
  /** 要售后的订单菜品Detail id列表，多个id用逗号分隔开 */
  orderDetailIds?: string
  /** 退款菜品信息列表 */
  orderDetailList?: FoodOrderDetail[]
  /** 要售后的订单角色id列表，多个id用逗号分隔开 */
  orderInfoIds?: string
  /** 关联的订单表的kid */
  orderKid?: string
  /** 退款总价 */
  postSaleAmount?: number
  /** 售后发起时间 */
  postSaleDate?: string
  /** 售后原因描述 */
  postSaleDesc?: string
  /** 图片列表，多个图片URL地址以逗号分隔 */
  postSaleImages?: string
  /** 售后原因 */
  postSaleReason?: string
  /** 1:商家处理中、2:商家同意退款、3:商家拒绝退款、4:用户取消售后、5：退款中、6：退款已入账、7:退款异常 */
  postSaleStatus?: number
  /** 退款中的优惠券金额 */
  refundCouponAmount?: number
  /** 退款到账时间 */
  refundDate?: string
  /** 退款中的运费金额（不退运费时为0） */
  refundExpressAmount?: number
  setMealList?: FoodOrderSetMeal[]
  /** 套餐类型 0-自选套餐 1-推荐套餐 */
  setMealType?: number
  /** 店铺id */
  storeId?: string
  /** 店铺名称 */
  storeName?: string
  /** 发起售后的用户id */
  userId?: string
}

export interface PostSaleDetailCooperationVO {
  /** 订单详情 */
  detailVOList?: StoreListDetailVO[]
  /** 菜品 */
  dishesName?: string
  /** 扩展的菜品名称 */
  dishesNameExt?: string
  /** 就餐日 */
  eatDay?: string
  /** 配送费 */
  expressAmount?: number
  /** 订单类型 */
  expressType?: number
  /** 套餐份数 */
  foodNum?: number
  /** post_sale表的kid */
  kid?: string
  /** 就餐类型 3.午餐 5.晚餐 */
  mealsType?: number
  /** 订单号 */
  orderNo?: string
  /** food_order表的kid */
  orderkid?: string
  /** 实付 */
  payAmount?: number
  /** 支付时间 */
  payFinishTime?: string
  /** 手机号 */
  phone?: string
  /** 优惠 */
  platCouponAmount?: number
  /** 售后状态 */
  postSaleStatus?: number
  /** 售后类型：1：按角色售后，2：按套餐售后，3：按菜品售后 */
  postSaleType?: number
  /** 套餐名称 */
  setMealName?: string
  /** 扩展的套餐名称 */
  setMealNameExt?: string
  /** 套餐类型 0：自选，1：推荐 */
  setMealType?: number
  /** 总价 */
  totalPrice?: number
  /** 下单人Id */
  userId?: string
  /** 下单人名称 */
  userName?: string
  /** 下单人名称 */
  userPhone?: string
}

export interface PostSaleAdminQueryRequest {
  /** 下单终止时间 yyyy-MM-dd HH:mm:ss */
  endTime?: string
  /** 订单类型 */
  expressType?: number
  /** 订单号 */
  orderNo?: string
  /** 手机号 */
  phone?: string
  /** 售后状态 1:商家处理中、2:商家同意退款、3:商家拒绝退款、4:用户取消售后、5：退款中、6：退款已入账、7:退款异常 */
  postSaleStatus?: number
  /** 套餐类型 0：自选，1：推荐 */
  setMealType?: number
  /** 下单起始时间 yyyy-MM-dd HH:mm:ss */
  startTime?: string
  /** 店铺id */
  storeId?: string
  /** 下单人userId */
  userId?: string
}

export interface ProcessPostSaleRequest {
  /** 售后单kid */
  postSaleKid?: string
  /** 处理类型：2：商家同意退款，3：商家拒绝退款 */
  processType?: number
}

export interface OrderRefundInfoVO {
  /** 订单角色（套餐）退款信息列表 */
  orderInfoRefundList?: OrderInfoRefundInfoVO[]
  /** 订单总的退款金额 */
  totalRefundPrice?: number
}

export interface OrderInfoRefundInfoVO {
  /** 订单角色（套餐）kid */
  infoKid?: string
  /** 退款金额 */
  refundAMount?: number
}

export interface PreparationMenu {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 食材名称 */
  ingredientAlias?: string
  /** 食材编码 */
  ingredientCode?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 预订订餐日期 */
  scheduledDate?: string
  /** 门店id */
  storeId?: string
  /** 门店名 */
  storeName?: string
  /** 购买总重量 单位g */
  totalBuyWeight?: number
}

export interface KcalTemplateVO {
  /** 主食份数 */
  a1Num?: number
  /** 主食类型 */
  a1Type?: string
  /** 蔬菜份数 */
  a2Num?: number
  /** 蔬菜类型 */
  a2Type?: string
  /** 荤菜系列 水产系列  大豆系列  靓汤系列 */
  a3Num?: number
  /** 荤菜系列 水产系列  大豆系列  靓汤系列 */
  a3Type?: string
  /** defineCode */
  defineCode?: string
  /** 菜品总份数 */
  totalNum?: number
}

export interface SetMealDetailVO {
  /** 封面图 (推荐套餐) */
  coverPic?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 套餐详情图 (推荐套餐) */
  detailPic?: string
  /** 含：膳食纤维 */
  dietaryFiber?: number
  /** 维度(卡路里单位千卡)(推荐套餐) */
  dimension?: number
  /** 餐盘图标(自选套餐) */
  dinnerPlateIcon?: string
  /** 关联菜品id集合 */
  dishesIds?: string
  /** 菜品信息 */
  dishesManagerList?: EssentialRecipesManagerVO[]
  /** 基础套餐编码 */
  entryCode?: string
  /** 视频首帧图 (推荐套餐) */
  firstFramePic?: string
  /** 水果量 */
  fruitNumber?: string
  /** 含：碳水化合物 (推荐套餐) */
  intakeCarbohydrate?: number
  /** 含：总能量 (推荐套餐) */
  intakeEnergy?: number
  /** 含：脂肪 (推荐套餐) */
  intakeFat?: number
  /** 含：蛋白质 (推荐套餐) */
  intakeProtein?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 主图 (推荐套餐) */
  mainPic?: string
  /** 套餐名称 */
  mealName?: string
  /** 荤菜数量 （份） */
  meatDishesNumber?: string
  /** 适应人群 */
  nutritionExpertsSay?: string
  /** 价格 (推荐套餐) */
  price?: number
  /** 推荐 疾病/健康编码 (推荐套餐) */
  recommendCode?: string
  /** 疾病名称，所属类目 */
  recommendName?: string
  /** 推荐套餐标签 */
  setMealLabel?: string
  /** 套餐类型 0-自选套餐 1-推荐套餐 */
  setMealType?: number
  /** 上架状态：0->上架；1->下架 (推荐套餐) */
  shelveFlag?: number
  /** 例汤数量 （份） */
  soupNumber?: string
  /** 主食数量 （份） */
  stapleFoodNumber?: string
  /** 适宜能量 千卡 */
  suitEnergy?: number
  /** 素菜数量 （份） */
  vegetableNumber?: string
  /** 视频时长 (推荐套餐) */
  videoDuration?: number
  /** 视频链接 (推荐套餐) */
  videoUrl?: string
}

export interface EssentialRecipesManagerVO {
  /** 编码 */
  code?: string
  /** 封面图 */
  coverPic?: string
  /** 菜品总能量 */
  intakeEnergy?: number
  /** 90千卡食材重量 */
  kcalIngredientList?: EssentialRecipesIngredient[]
  /** kid */
  kid?: string
  /** 主要分类(meat-荤，veggie-素，staple-主食，soup-汤，fruit-水果) */
  mainClassify?: string
  /** 名称 */
  name?: string
  /** pro套餐食材信息 */
  proIngredientList?: EssentialRecipesIngredient[]
  /** pro套餐信息/90kcal对应类型的信息 */
  proportion?: EssentialRecipesProportion
  /** 二级分类 （主食 、蔬菜 、禽肉 、畜肉、水产、蛋类、大豆 、汤） */
  secondaryClassify?: string
  /** 三级分类（蛋、牛、鸡、猪、鱼、虾、豆制品、鸽、其他） */
  tertiaryClassify?: string
  /** 菜品重量 */
  weight?: number
}

export interface EssentialRecipesIngredient {
  /** 创建时间 */
  createDate?: string
  /** 删除标示 */
  delFlag?: number
  /** 成分名称 */
  ingredientAlias?: string
  /** 成分编码 */
  ingredientCode?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 配比类型 90kcal/pro */
  proportionType?: string
  /** 食谱编码 */
  recipesCode?: string
  /** 必须标示 */
  requiredFlag?: number
  /** 计量 */
  weight?: number
  /** 计量单位 */
  weightUnit?: string
}

export interface EssentialRecipesProportion {
  /** 创建时间 */
  createDate?: string
  /** 删除标示 */
  delFlag?: number
  /** 含：碳水化合物 */
  intakeCarbohydrate?: number
  /** 含: 膳食纤维 */
  intakeDietaryfiber?: number
  /** 含：总能量 */
  intakeEnergy?: number
  /** 含：脂肪 */
  intakeFat?: number
  /** 含：蛋白质 */
  intakeProtein?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 配比名称 */
  name?: string
  /** 菜品编码 */
  recipesCode?: string
  /** 配比类型 90kcal/pro */
  type?: string
  /** 计量 */
  weight?: number
  /** 计量单位 */
  weightUnit?: string
}

export interface StallAddDishesDTO {
  dishesKids?: number[]
  stallId?: string
  storeId?: string
}

export interface StallLinkedDishesVO {
  /** 封面图 */
  coverPic?: string
  /** 菜品名称 */
  dishesName?: string
  /** 价格  元（每100克价格） */
  dishesPrice?: number
  /** 菜品分类 0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 分布式唯一ID */
  kid?: string
  /** 价格  元（每100克价格） */
  perOfPrice?: number
  /** 菜品二级分类 0-其他 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 */
  secondaryClassify?: number
}

export interface StallLinkedDishes {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 菜品id */
  dishesId?: string
  /** 菜品名称 */
  dishesName?: string
  /** 菜品分类 0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 基础库菜品code */
  recipeCode?: string
  /** 菜品二级分类 0-其他 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 */
  secondaryClassify?: number
  /** '上架状态：0->上架；1->下架' */
  shelveFlag?: number
  /** 关联的档口id */
  stallId?: string
  /** 门店id */
  storeId?: string
}

export interface Stall {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 档口名称 */
  stallName?: string
  /** 关联的店铺kid */
  storeId?: string
}

export interface StallVO {
  /** 菜品数量 */
  dishesNum?: number
  kid?: string
  /** 档口名称 */
  stallName?: string
}

export interface StallPrepareMenuVO {
  /** 菜品id */
  dishesId?: string
  /** 菜品名称 */
  dishesName?: string
  /** 该档口下菜品的数量 */
  dishesTypeNum?: number
  /** 基础库菜品code */
  recipeCode?: string
  /** 日期 */
  scheduledDate?: string
  /** 档口id */
  stallId?: string
  /** 档口名称 */
  stallName?: string
  /** 制作量 */
  totalBuyWeight?: number
}

export interface StallPrepareMenuQueryDTO {
  /** 查询日期  yyyy-MM-dd */
  queryDate?: string
  /** 查询终止时间  HH:mm */
  queryEndTime?: string
  /** 查询起始时间  HH:mm */
  queryStartTime?: string
  /** 档口id */
  stallId?: string
  /** 店铺id */
  storeId?: string
}

export interface UserBehaviorArg {
  /** 行为标识 */
  action?: string
  extArgs?: any
  /** 目标唯一标识 */
  targetId?: string
  /** 目标类型 */
  targetType?: string
  /** 目标用户 */
  targetUserId?: string
}

export interface UserBehaviorResult {
  mapper?: any
  reference?: UserBehaviorReference
  /** 目标资源唯一标识 */
  targetKid?: string
  /** 目标资源类型 */
  targetType?: string
  /** 目标用户 */
  targetUserId?: string
}

export interface UserBehaviorReference {
  comment?: boolean
  favorite?: boolean
  like?: boolean
  /** 浏览 */
  viewCount?: boolean
}

export interface UserBehaviorQuery {
  actions?: string[]
  identity?: UserBehaviorIdentity[]
}

export interface UserBehaviorIdentity {
  /** 目标唯一标识 */
  targetId?: string
  /** 目标类型 */
  targetType?: string
  /** 目标用户 */
  targetUserId?: string
}

export interface StatisticArg {
  /** 自定义子维度标识 */
  args?: string[]
  /** 递增数值 */
  delta?: string
  /** 维度标识 */
  key?: string
  /** 目标唯一标识 */
  targetId?: string
  /** 目标类型 */
  targetType?: string
}

export interface StatisticResult {
  /** 全量 */
  mapper?: Counting[]
  /** 目标资源唯一标识 */
  targetId?: string
  /** 目标资源类型 */
  targetType?: string
}

export interface Counting {
  args?: string[]
  delta?: string
  key?: string
}

export interface StatisticQuery {
  identity?: StatisticIdentity[]
  keys?: StatisticKey[]
}

export interface StatisticIdentity {
  /** 目标唯一标识 */
  targetId?: string
  /** 目标类型 */
  targetType?: string
}

export interface StatisticKey {
  args?: string[]
  key?: string
}

export interface LinkedHashMap<T,T1> {
}

export interface StatisticsOrderVO {
  /** 当日外卖订单金额（分） */
  outDayAmount?: string
  /** 当日外卖订单金额数 */
  outDayNum?: string
  /** 当日自提订单金额（分） */
  pickUpDayAmount?: string
  /** 当日自提订单数 */
  pickUpDayNum?: string
  /** 平台/店铺总营业额（分） */
  statisticsAmount?: string
  /** 平台/店铺当日营业额（分） */
  statisticsDayAmount?: string
  /** 平台/店铺当日订单数 */
  statisticsDayNum?: string
  /** 平台/店铺总订单数 */
  statisticsNum?: string
}

export interface StatisticsRefundAndCouponVO {
  /** 优惠金额（分） */
  couponAmount?: string
  /** 优惠单数 */
  couponNum?: string
  /** 退款金额（分） */
  refundAmount?: string
  /** 退款单数 */
  refundNum?: string
  /** 退款超时未处理单数 */
  refundOutNum?: string
}

export interface DishesTopVO {
  /** 封面图 */
  coverPic?: string
  /** 菜品id */
  dishesId?: string
  /** 菜品名称 */
  dishesName?: string
  /** 菜品自选数量 */
  dishesNormalNum?: string
  /** 菜品总数量 */
  dishesNum?: string
  /** 菜品套餐数量 */
  dishesSetMealNum?: string
  /** 每次可增加克数 */
  increaseWeight?: number
  /** 每份/元 */
  perOfPrice?: number
  /** 每份/g */
  perOfWeight?: number
}

export interface SetMealTopVO {
  /** 封面图 */
  coverPic?: string
  dishesNameList?: string[]
  /** 每份/元 */
  perOfPrice?: number
  /** 套餐id */
  setMealId?: string
  /** 套餐名称 */
  setMealName?: string
  /** 套餐总数量 */
  setMealNum?: string
}

export interface StoreOrderConfig {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: string
  /** 剩余可订单数 */
  lastNumber?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 餐次类型 0-其他 1-早餐 3-午餐 5-晚餐 */
  mealsType?: number
  /**  配置日期 */
  orderConfigDate?: string
  /** 订单设置数 */
  orderConfigNumber?: string
  /** 门店id */
  storeId?: string
}

export interface StoreOrderConfigAppVO {
  /** 配置日期 */
  configDateStr?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: string
  /** 剩余可订单数 */
  lastNumber?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 餐次类型 0-其他 1-早餐 3-午餐 5-晚餐 */
  mealsType?: number
  /** 自选菜品最低起售价格 */
  optionalLowestPrice?: number
  /**  配置日期 */
  orderConfigDate?: string
  /** 订单设置数 */
  orderConfigNumber?: string
  /** 套餐最低起售价格 */
  setMealLowestPrice?: number
  /** 门店id */
  storeId?: string
}

export interface StoreOrderConfigSaveDTO {
  /** 配置kid */
  kid?: string
  /** 订单设置数 */
  lastNumber?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 餐次类型 0-其他 1-早餐 3-午餐 5-晚餐 */
  mealsType?: number
  /**  配置日期 */
  orderConfigDate?: string
  /** 门店id */
  storeId?: string
}

export interface SwitchStoreVO {
  /** 切换店铺是否成功 true-成功  false-失败 */
  isSwitch?: boolean
  /** 切换店铺不存在菜品 */
  notExistDishesList?: Dishes[]
  /** 切换店铺不存在推荐套餐 */
  notExistSetMealList?: SetMeal[]
}

export interface SwitchStoreDTO {
  /** 切换店铺类型 0-自选套餐 1-推荐套餐 */
  checkType?: number
  /** 店铺下单配置id */
  configId?: string
  /** 源门店所选菜品集合--自选套餐需传参数 */
  dishesIds?: number[]
  /** 源门店所选套餐集合--推荐套餐需传参数 */
  setMealIds?: number[]
  /** 源门店id */
  storeId?: string
  /** 目标门店id */
  targetStoreId?: string
}

export interface StoreSearchDTO {
  /** 纬度 */
  latitude?: number
  /** 经度 */
  longitude?: number
  /** 店铺id */
  storeId?: string
}

export interface StoreAdminVO {
  /** 区编码 */
  areaCode?: string
  /** 区名称 */
  areaName?: string
  /** 门店联系人 */
  businessLinkMan?: string
  /** 门店联系电话 */
  businessPhone?: string
  /** 营业执照 */
  businessRvPdf?: string
  /** 营业起止时间 */
  businessTime?: string
  /** 市编码 */
  cityCode?: string
  /** 市名称 */
  cityName?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 配送范围 以门店为圆心5公里范围内 */
  deliveryArea?: number
  /** 收取配送费条件 小于100元 */
  deliveryConditions?: number
  /** 配送范围(电子围栏，经纬度集合) */
  deliveryElectricFence?: string
  /** 配送费 */
  deliveryFee?: number
  /** 自提/配送时间库存数（json格式） */
  deliveryStockRange?: string
  /** 企业id */
  enterpriseId?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 门店纬度 */
  latitude?: number
  /** 门店经度 */
  longitude?: number
  /** 电子围栏坐标数据 */
  points?: number[][]
  /** 省编码 */
  provinceCode?: string
  /** 省名称 */
  provinceName?: string
  /** 自提/配送 起止时间 */
  serviceStartAndEndTime?: string
  /** 分时间段的库存列表 */
  stockList?: StockByTimeDTO[]
  /** 门店详细地址 */
  storeDetailAddress?: string
  /** 门店图片目前只上传1张 */
  storeImgs?: string
  /** 店铺简介 */
  storeIntroduction?: string
  /** 门店logo */
  storeLogo?: string
  /** 店铺监控地址 */
  storeMonitorUrl?: string
  /** 门店名 */
  storeName?: string
  /** 店铺展示标识：0-展示 1-不展示 */
  storeShowFlag?: number
  /** 门店类型 0 直营店 1 加盟店 */
  storeType?: number
}

export interface StockByTimeDTO {
  /** 库存数 */
  num?: number
  /** 起止时间组合的key 如11:00-11:15 */
  timekey?: string
}

export interface StoreManagerVO {
  /** 地区 */
  area?: string
  /** 区编码 */
  areaCode?: string
  /** 区名称 */
  areaName?: string
  /** 门店联系人 */
  businessLinkMan?: string
  /** 门店联系电话 */
  businessPhone?: string
  /** 营业执照 */
  businessRvPdf?: string
  /** 营业起止时间 */
  businessTime?: string
  /** 市编码 */
  cityCode?: string
  /** 市名称 */
  cityName?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 配送范围 以门店为圆心5公里范围内 */
  deliveryArea?: number
  /** 收取配送费条件 小于100元 */
  deliveryConditions?: number
  /** 配送范围(电子围栏，经纬度集合) */
  deliveryElectricFence?: string
  /** 配送费 */
  deliveryFee?: number
  /** 自提/配送时间库存数（json格式） */
  deliveryStockRange?: string
  /** 菜品数 */
  dishesNumber?: number
  /** 企业id */
  enterpriseId?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 门店纬度 */
  latitude?: number
  /** 门店经度 */
  longitude?: number
  /** 省编码 */
  provinceCode?: string
  /** 省名称 */
  provinceName?: string
  /** 自提/配送 起止时间 */
  serviceStartAndEndTime?: string
  /** 套餐数 */
  setMealNumber?: number
  /** 门店详细地址 */
  storeDetailAddress?: string
  /** 门店图片目前只上传1张 */
  storeImgs?: string
  /** 店铺简介 */
  storeIntroduction?: string
  /** 门店logo */
  storeLogo?: string
  /** 店铺监控地址 */
  storeMonitorUrl?: string
  /** 门店名 */
  storeName?: string
  /** 店铺展示标识：0-展示 1-不展示 */
  storeShowFlag?: number
  /** 门店类型 0 直营店 1 加盟店 */
  storeType?: number
}

export interface StoreRecommendSetMealDTO {
  /** 套餐名称 */
  mealName?: string
  /** 推荐 疾病/健康编码 (推荐套餐) */
  recommendCode?: string
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** 门店id */
  storeId?: string
}

export interface BatchRequest<T> {
  /** 数据 */
  data?: T
  /** KID集合 */
  kidList?: number[]
  /** 请求类型 */
  type?: string
}

export interface StoreLinkedDishes {
  /** 创建时间 */
  createDate?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 菜品id */
  dishesId?: string
  /** 菜品分类0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 基础库菜品code */
  recipeCode?: string
  /** 菜品二级分类 0-其他 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 */
  secondaryClassify?: number
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** 门店id */
  storeId?: string
}

export interface StoreDishesManagerVO {
  /** 封面图 */
  coverPic?: string
  /** 菜品名称 */
  dishesName?: string
  /** 价格 元/份 （90kcal标准） */
  dishesPrice?: number
  /** 菜品分类0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 菜品id */
  kid?: string
  /** 每份/元 */
  perOfPrice?: number
  /** 菜品二级分类 0-其他 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 */
  secondaryClassify?: number
  /** 门店id */
  storeId?: string
}

export interface DishesManagerVO {
  /** 封面图 */
  coverPic?: string
  /** 菜品名称 */
  dishesName?: string
  /** 价格 元/份 （90kcal标准） */
  dishesPrice?: number
  /** 菜品分类 0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 禁止食用的目标疾病 */
  forbidTarget?: string
  /** 90kcal菜品含：总能量 */
  intakeEnergy?: number
  /** pro套餐菜品含：总能量 */
  intakeEnergyPro?: number
  /** 菜品id */
  kid?: string
  /** 每份/元 */
  perOfPrice?: number
  /** 基础库菜品code */
  recipeCode?: string
  /** 菜品二级分类 0-其他 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 */
  secondaryClassify?: number
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** 90kcal菜品重量 */
  weight?: number
  /** pro套餐菜品重量 */
  weightPro?: number
}

export interface QueryDishesDTO {
  /** 封面图 */
  coverPic?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 菜品描述 */
  dishesDesc?: string
  /** 菜品图标 */
  dishesIcon?: string
  /** 菜品名称 */
  dishesName?: string
  /** 价格  元（每100克价格） */
  dishesPrice?: number
  /** 菜品分类 0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 重量  克/份（90kcal标准） */
  dishesWeight?: number
  /** 首帧图 */
  firstFramePic?: string
  /** 禁止食用的目标疾病 */
  forbidTarget?: string
  /** 每次增加克数的价格 元 */
  increasePrice?: number
  /** 每次可增加克数 */
  increaseWeight?: number
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 主图 */
  mainPic?: string
  /** 营养专家说 */
  nutritionExpertsSay?: string
  /** 每份/元 */
  perOfPrice?: number
  /** 每份/g */
  perOfWeight?: number
  /** 配比类型 90kcal/pro */
  proportionType?: string
  /** 基础库菜品code */
  recipeCode?: string
  /** 推荐食用目标疾病 */
  recommendTarget?: string
  /** 最低售卖份数 */
  salesNum?: number
  /** 菜品二级分类 0-其他 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 */
  secondaryClassify?: number
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** 门店id */
  storeId?: string
  /** 视频时长 */
  videoDuration?: number
  /** 视频链接 */
  videoUrl?: string
}

export interface SetMealSelectVO {
  /** 封面图 */
  coverPic?: string
  /** 维度(卡路里单位千卡)(推荐套餐) */
  dimension?: number
  /** 套餐名称 */
  mealName?: string
  /** 价格 */
  price?: number
  /** 所属类型 */
  recommendName?: string
  /** 套餐id */
  setMealId?: string
}

export interface StoreDishesDTO {
  /** 菜品kid */
  dishesId?: string
  /** 菜品名称-商户运营管理后台传参 */
  dishesName?: string
  /** 菜品分类0其他 1 荤菜 2素菜 3主食 4汤类 5水果 */
  dishesType?: number
  /** 菜品名称 */
  recipesName?: string
  /** 菜品二级分类 0-其他 1-主食 2-蔬菜 3-禽肉 4-畜肉 5-水产 6-蛋类 7-大豆 8-汤 */
  secondaryClassify?: number
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** 门店id */
  storeId?: string
}

export interface StoreRecommendSetMealVO {
  /** 封面图 */
  coverPic?: string
  /** 维度(卡路里单位千卡)(推荐套餐) */
  dimension?: number
  /** 套餐名称 */
  mealName?: string
  /** 价格 */
  price?: number
  /** 所属类型 */
  recommendName?: string
  /** 套餐id */
  setMealId?: string
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** 门店id */
  storeId?: string
}

export interface StoreDTO {
  /** 区编码 */
  areaCode?: string
  /** 区名称 */
  areaName?: string
  /** 门店联系人 */
  businessLinkMan?: string
  /** 门店联系电话 */
  businessPhone?: string
  /** 营业执照 */
  businessRvPdf?: string
  /** 营业起止时间 */
  businessTime?: string
  /** 市编码 */
  cityCode?: string
  /** 市名称 */
  cityName?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 配送范围 以门店为圆心5公里范围内 */
  deliveryArea?: number
  /** 收取配送费条件 小于100元 */
  deliveryConditions?: number
  /** 配送范围(电子围栏，经纬度集合) */
  deliveryElectricFence?: string
  /** 配送费 */
  deliveryFee?: number
  /** 自提/配送时间库存数（json格式） */
  deliveryStockRange?: string
  /** 企业id */
  enterpriseId?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 门店纬度 */
  latitude?: number
  /** 门店经度 */
  longitude?: number
  /** 省编码 */
  provinceCode?: string
  /** 省名称 */
  provinceName?: string
  /** 自提/配送 起止时间 */
  serviceStartAndEndTime?: string
  /** 分时间段的库存列表 */
  stockList?: StockByTimeDTO[]
  /** 门店详细地址 */
  storeDetailAddress?: string
  /** 门店图片目前只上传1张 */
  storeImgs?: string
  /** 店铺简介 */
  storeIntroduction?: string
  /** 门店logo */
  storeLogo?: string
  /** 店铺监控地址 */
  storeMonitorUrl?: string
  /** 门店名 */
  storeName?: string
  /** 店铺展示标识：0-展示 1-不展示 */
  storeShowFlag?: number
  /** 门店类型 0 直营店 1 加盟店 */
  storeType?: number
}

export interface NearestStoreSearchDTO {
  /** 纬度 */
  latitude?: number
  /** 经度 */
  longitude?: number
  /** 排序类型 0.创建时间  1.距离最近 */
  orderByType?: number
}

export interface TargetSearchAdminVO {
  /** 目标code */
  code?: string
  /** 目标名称 */
  name?: string
}

export interface StoreVOSearchDTO {
  /** 纬度 */
  latitude?: number
  /** 经度 */
  longitude?: number
  /** 排序类型 0.创建时间  1.距离最近 */
  orderByType?: number
  /** 分页1开始 */
  pageNo?: number
  /** 50 */
  pageSize?: number
}

export interface UserCouponAddDTO {
  /** 券ID */
  couponKid?: string
}

export interface CouponUseCheckVO {
  /** 可使用的优惠券 */
  availableList?: UserCouponVO[]
  /** 不可使用的优惠券 */
  notAvailableList?: UserCouponVO[]
}

export interface UserCouponVO {
  /** 优惠券名称 */
  couponName?: string
  /** 优惠金额（分） */
  couponPrice?: number
  /** 优惠券规则 */
  couponRoles?: string[]
  /** 优惠券状态 0-待使用 1-已使用 2-已过期 */
  couponStatus?: number
  /** 生效时间 */
  effectDate?: string
  /** 有效时间 */
  expireDate?: string
  /** 业务ID */
  kid?: string
  /** 满减条件金额（分） */
  rulePrice?: number
  /** 优惠券使用类型 1-满减 */
  useType?: number
  /** 用户ID */
  userId?: string
  /** 使用条件 0：有效  1：无效 */
  validType?: number
}

export interface CouponUseCheckDTO {
  /** 订单金额 */
  orderAmount?: number
}

export interface UserDailyNutrientReport {
  details?: UserDailyNutrientDetailVO[]
  energy?: UserDailyEnergy
  mainNutrient?: UserDailyMainNutrient
}

export interface UserDailyNutrientDetailVO {
  /** 数值 */
  amount?: number
  /** 名称 */
  name?: string
  /** 单位 */
  unit?: string
}

export interface UserDailyEnergy {
  /** 加餐能量 */
  add?: EnergyNutritionItem
  /** 早餐能量 */
  breakFast?: EnergyNutritionItem
  /** 午餐能量 */
  lunch?: EnergyNutritionItem
  /** 晚餐能量 */
  supper?: EnergyNutritionItem
  /** 总能量 */
  total?: EnergyNutritionItem
}

export interface EnergyNutritionItem {
  code?: string
  /** 能量占比 */
  energyRate?: number
  /** 最大 */
  maxRefer?: number
  /** 最小 */
  minRefer?: number
  name?: string
  unit?: string
  weight?: number
}

export interface UserDailyNutrientVO {
  mainNutrient?: UserDailyMainNutrient
  mealTime?: number
}

export interface SelfChooseMealNutrientStandard {
  /** 碳水化合物 */
  carbohydrate?: number
  /** 膳食纤维标准 */
  dietaryFiber?: number
  /** 推荐食用量 */
  dishAmount?: SelfChooseMealDishAmount
  /** 能量 */
  energy?: number
  /** 脂肪 */
  fat?: number
  /** 蛋白质 */
  protein?: number
}

export interface SelfChooseMealDishAmount {
  /** A1总数 （主食） */
  a1Num?: number
  /** A2总数 （蔬菜） */
  a2Num?: number
  /** A3总数 （包括禽肉 、畜肉 、水产 、蛋类 、大豆 、汤） */
  a3Num?: number
  message?: string
  /** 每份的分数 */
  scorePerOne?: number
  /** 菜品总份数 */
  totalNum?: number
}

export interface UserDailyDataVO {
  bloodPressure?: UserDailyDataItemVO
  bloodSugar?: UserDailyDataItemVO
  bmi?: number
  weight?: UserDailyDataItemVO
}

export interface UserDailyDataItemVO {
  /** 当天的已记录数据 */
  currentData?: UserDailyDataListItemVO[]
  datas?: UserDailyDataListItemVO[]
  /** 备注 */
  remark?: string
  /** 参考值最高值 */
  standardMax?: number
  /** 参考值最高值2 */
  standardMax2?: number
  /** 参考值最低值 */
  standardMin?: number
  /** 参考值最低值2 */
  standardMin2?: number
  /** 单位 */
  unit?: string
}

export interface UserDailyDataListItemVO {
  /** 日期 */
  createDate?: string
  /** 数据补充类型 */
  dataSubType?: number
  /** 数据值 */
  dataValue?: string
}

export interface UserDailyDataDTO {
  /** 血压类型1清晨2午餐前3睡前 */
  bloodPressureType?: number
  /** 血糖类型1早餐前2早餐后3午餐前4午餐后5晚餐前6晚餐后 */
  bloodSugarType?: number
  infoId?: string
  userId?: string
}

export interface UserDataDailyRecord {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 数据补充类型 */
  dataSubType?: number
  /** 数据类型1体重2血压3血糖 */
  dataType?: number
  /** 数据值 */
  dataValue?: string
  /** 食用人id */
  infoId?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 单位 */
  unit?: string
  /** 用户id */
  userId?: string
}

export interface UserEditDTO {
  /** 用户基用户疾病信息本信息 */
  userIllnessDTO?: UserIllnessDTO
  /** 用户基本信息 */
  userInfo?: UserInfoVO
}

export interface UserIllnessDTO {
  /** 答案：json格式存储：[{"code": "问卷编码", "value": "答案", "format": "类型"}] */
  answer?: string
  /** 疾病code */
  illnessCode?: string
}

export interface UserOrderNutrientReport {
  details?: UserDailyNutrientDetailVO[]
  dishes?: UserOrderDishVO[]
  energy?: UserDailyEnergy
  mainNutrient?: UserDailyMainNutrient
  mealTime?: number
  /** 评分 */
  score?: number
}

export interface UserOrderDishVO {
  dish?: Dishes
  /** 基础菜品编码 */
  foodCode?: string
  /** 含：碳水化合物 */
  intakeCarbohydrate?: number
  /** 含：总能量 */
  intakeEnergy?: number
  /** 含：脂肪 */
  intakeFat?: number
  /** 含：蛋白质 */
  intakeProtein?: number
  /** 重量 */
  weight?: number
}

export interface FoodOrderSingleInfoDTO {
  foodOrderDetails?: FoodOrderDetail[]
  infoId?: string
  mealTime?: number
  orderId?: string
  userId?: string
}

export interface UserTasteVO {
  /** 过敏原 */
  allergens?: TasteVO[]
  /** 角色信息 */
  roleVO?: RoleVO
  /** 口味 */
  tastes?: TasteVO[]
}

export interface TasteVO {
  /** 是否选择 */
  hasSelect?: boolean
  /** 口味ID */
  tasteId?: string
  /** 显示图片 */
  tasteImg?: string
  /** 名称 */
  tasteName?: string
  /** 类别：1：口味；2：过敏原 */
  tasteType?: number
}

export interface RoleVO {
  infoId?: string
  nickName?: string
}

export interface RoleTasteStrVO {
  /** 信息ID */
  infoId?: string
  /** 昵称 */
  nickName?: string
  /** 口味描述 */
  tasteStr?: string
}

export interface UserGetChosenAllTastesVO {
  /** 分类 */
  classify?: string
  /** 分类下角色选择食材数量 */
  infoChosenIngredient?: number
  /** id */
  tasteId?: string
  /** 显示图片 */
  tasteImg?: string
  /** 名称 */
  tasteName?: string
  /** 分类下总食材数量 */
  totalIngredientCount?: number
}

export interface UserTasteDTO {
  /** 信息ID */
  infoId?: string
  /** 选中的过敏源 */
  ingredientCodes?: string[]
  /** 备注 */
  remark?: string
  /** 一级分类id */
  tasteId?: string
}

export interface UserTasteMessageVo {
  /** 用户勾选的标识 0未勾选 1已勾选 */
  checktaste?: number
  /** 分类 */
  classify?: string
  /** 编码 */
  code?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: string
  /** 分布式唯一ID */
  kid?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: string
  /** 名称 */
  name?: string
}

export interface WxTemplate {
  /** 模版内容 */
  content?: string
  /** 模板内容示例 */
  example?: string
  /** 模板 id */
  priTmplId?: string
  /** 模版标题 */
  title?: string
  /** 模版类型，2 为一次性订阅，3 为长期订阅 */
  type?: number
}
export default {
  auth: {
    /**
    * 刷新token
    */
    refreshToken(authTokenVO: CooperationCheckTokenVO): Promise<CooperationCheckTokenVO> {
      return httpPost(`/business/v1.0/pb/auth/action/refreshToken`, authTokenVO).then((res:any) => res)
    },
  },
  authorizerGrant: {
    /**
    * 支付宝公众号授权
    */
    aliWeb(params: { authCode: string }): Promise<AuthorizerGrantResult> {
      return httpPost(`/business/v1.0/pb/authorizer-grant/action/ali-web`,  {...params} ).then((res:any) => res)
    },
    /**
    * 钉钉扫码授权
    */
    dingTalk(params: { authCode: string }): Promise<AuthorizerGrantResult> {
      return httpPost(`/business/v1.0/pb/authorizer-grant/action/dingTalk`,  {...params} ).then((res:any) => res)
    },
    /**
    * 微信小程序授权
    */
    wxMini(params: { authCode: string, encryptedData?: string, iv: string }): Promise<AuthorizerGrantResult> {
      return httpPost(`/business/v1.0/pb/authorizer-grant/action/wx-mini`,  {...params} ).then((res:any) => res)
    },
    /**
    * 微信公众号授权
    */
    wxWeb(params: { authCode: string }): Promise<AuthorizerGrantResult> {
      return httpPost(`/business/v1.0/pb/authorizer-grant/action/wx-web`,  {...params} ).then((res:any) => res)
    },
  },
  authorizerRedirect: {
    /**
    * 支付宝公众号
    */
    aliWeb(params: { authCode: string, redirectUrl: string }): Promise<boolean> {
      return httpPost(`/business/v1.0/pb/authorizer-redirect/action/aliWeb`,  {...params} ).then((res:any) => res)
    },
    /**
    * 微信公众号
    */
    wxWeb(params: { authCode: string, redirectUrl: string }): Promise<boolean> {
      return httpPost(`/business/v1.0/pb/authorizer-redirect/action/wxWeb`,  {...params} ).then((res:any) => res)
    },
  },
  bannerInfos: {
    /**
    * app触发banner点击
    */
    click(kidRequest: KidRequest<long>): Promise<boolean> {
      return httpPost(`/business/v1.0/pb/banner-infos/action/click`, kidRequest).then((res:any) => res)
    },
    /**
    * app根据位置获取banner信息（位置 1:首页 2:个人中心）
    */
    listByPosition(params: { position: number }): Promise<List<BannerInfoVO>> {
      return httpGet(`/business/v1.0/pb/banner-infos/action/list-by-position`,  {...params} ).then((res:any) => res)
    },
  },
  essentialIllnesss: {
    /**
    * 所有疾病
    */
    getAll(params: { keyword?: string }): Promise<List<EssentialIllnessVO>> {
      return httpGet(`/business/v1.0/pb/essential-illnesss/action/getAll`,  {...params} ).then((res:any) => res)
    },
    /**
    * 疾病搜索
    */
    search(params: { name?: string, pageNo?: number, pageSize?: number, parentCode?: string, random?: boolean, recommend?: boolean }): Promise<PageList<IllnessEs>> {
      return httpGet(`/business/v1.0/pb/essential-illnesss/action/search`,  {...params} ).then((res:any) => res)
    },
    /**
    * 首页健康/疾病
    */
    homeIllnessList(): Promise<List<EssentialIllness>> {
      return httpGet(`/business/v1.0/pt/essential-illnesss/action/home-illness-list`).then((res:any) => res)
    },
    /**
    * 所有疾病（不包含首页疾病）
    */
    listPage(params: { keyword?: string, pageNo?: number, pageSize?: number }): Promise<PageList<EssentialIllness>> {
      return httpGet(`/business/v1.0/pt/essential-illnesss/action/list-page`,  {...params} ).then((res:any) => res)
    },
  },
  foodOrderComments: {
    /**
    * APP端查询菜品评论
    */
    listDishComments(params: { dishId?: string, pageNo?: number, pageSize?: number }): Promise<PageList<FoodOrderCommentListItemVO>> {
      return httpGet(`/business/v1.0/pb/food-order-comments/action/list-dish-comments`,  {...params} ).then((res:any) => res)
    },
    /**
    * 发布评论
    */
    create(foodOrderComment: FoodOrderComment): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/food-order-comments/action/create`, foodOrderComment).then((res:any) => res)
    },
  },
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/business/v1.0/pb/healths/action/check`).then((res:any) => res)
    },
  },
  managerUsers: {
    /**
    * 商户登录
    */
    login(loginUser: CooperationManagerLoginVO): Promise<CooperationManagerLoginAuthVO> {
      return httpPost(`/business/v1.0/pb/manager-users/action/login`, loginUser).then((res:any) => res)
    },
    /**
    * 商户后台用户删除
    */
    deleteByIds(kids: number[]): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/manager-users/action/deleteByIds`, kids).then((res:any) => res)
    },
    /**
    * 商户web后台查询分页ManagerUser
    */
    listAdminWeb(pageRequest: PageRequest<CooperationManagerUserDTO>): Promise<PageList<CooperationManagerUserVO>> {
      return httpPost(`/business/v1.0/pt/manager-users/action/list-admin-web`, pageRequest).then((res:any) => res)
    },
    /**
    * 查询当前的menuTree
    */
    listCurrentMenuTree(): Promise<List<CooperationManagerMenuExcelVO>> {
      return httpPost(`/business/v1.0/pt/manager-users/action/listCurrentMenuTree`).then((res:any) => res)
    },
    /**
    * 商户后台登出
    */
    loginOut(): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/manager-users/action/login-out`).then((res:any) => res)
    },
    /**
    * 重设员工密码
    */
    resetPasswordWeb(params: { userId: string }): Promise<boolean> {
      return httpGet(`/business/v1.0/pt/manager-users/action/resetPassword-web`,  {...params} ).then((res:any) => res)
    },
    /**
    * 商户后台查询单个ManagerUser
    */
    get(params: { kid: string }): Promise<CooperationManagerUserVO> {
      return httpGet(`/business/v1.0/pt/manager-users/${params.kid}`,  {...params} ).then((res:any) => res)
    },
    /**
    * 商户端用户停用/启用
    */
    put(params: { kid: string }, managerUserVO: CooperationManagerUserVO): Promise<boolean> {
      return httpPut(`/business/v1.0/pt/manager-users/${params.kid}`, managerUserVO,  {...params} ).then((res:any) => res)
    },
  },
  picConfigs: {
    /**
    * app跟据编码获取图片
    */
    getPicConfigByCode(params: { picCode: string }): Promise<PicConfig> {
      return httpGet(`/business/v1.0/pb/pic-configs/action/getPicConfigByCode`,  {...params} ).then((res:any) => res)
    },
  },
  setMeals: {
    /**
    * 小程序端推荐套餐详情
    */
    checkOnSale(params: { illnessCode: string, shopId: string }): Promise<boolean> {
      return httpGet(`/business/v1.0/pb/set-meals/action/checkOnSale`,  {...params} ).then((res:any) => res)
    },
    /**
    * 小程序端首页推荐套餐菜品
    */
    randomSetMealDishes(params: { recommendCode: string }): Promise<List<SetMealDishVO>> {
      return httpGet(`/business/v1.0/pb/set-meals/action/randomSetMealDishes`,  {...params} ).then((res:any) => res)
    },
    /**
    * 小程序端推荐套餐详情
    */
    recommendMealDetail(params: { kid: string }): Promise<RecommendSetMealDetailVO> {
      return httpGet(`/business/v1.0/pb/set-meals/action/recommendMealDetail`,  {...params} ).then((res:any) => res)
    },
    /**
    * 小程序端推荐套餐列表
    */
    recommendMealList(params: { illnessCodes: string, infoId: string, mealTime?: string, storeId?: string }): Promise<Map<string,List<RecommendSetMealItemVO>>> {
      return httpGet(`/business/v1.0/pb/set-meals/action/recommendMealList`,  {...params} ).then((res:any) => res)
    },
    /**
    * 获取售卖套餐的最近店铺
    */
    setMealNearestShop(params: { latitude?: number, longitude?: number, setMealKid: string }): Promise<OfflineStoreVO> {
      return httpGet(`/business/v1.0/pb/set-meals/action/setMealNearestShop`,  {...params} ).then((res:any) => res)
    },
    /**
    * 90kcal模版详情（app端）
    */
    detail90Kcal(params: { defineCode: string }): Promise<KcalTemplateVO> {
      return httpGet(`/business/v1.0/pt/set-meals/action/detail90Kcal`,  {...params} ).then((res:any) => res)
    },
    /**
    * 商户后台查询套餐详情
    */
    merchantDetail(params: { setMealId: string }): Promise<SetMealDetailVO> {
      return httpGet(`/business/v1.0/pt/set-meals/action/merchant-detail`,  {...params} ).then((res:any) => res)
    },
  },
  userAccounts: {
    /**
    * 手机号登录
    */
    registerOrLoginByPhone(registerDTO: RegisterDTO): Promise<LoginVO> {
      return httpPost(`/business/v1.0/pb/user-accounts/action/registerOrLoginByPhone`, registerDTO).then((res:any) => res)
    },
    /**
    * 获取帐户信息
    */
    detail(): Promise<UserAccount> {
      return httpGet(`/business/v1.0/pt/user-accounts/action/detail`).then((res:any) => res)
    },
    /**
    * 修改帐户信息
    */
    edit(userAccount: UserAccount): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/user-accounts/action/edit`, userAccount).then((res:any) => res)
    },
  },
  userLogin: {
    /**
    * 三方注册&登录
    */
    registerOrLogin(userLoginDTO: UserLoginDTO): Promise<LoginVO> {
      return httpPost(`/business/v1.0/pb/user-login/action/registerOrLogin`, userLoginDTO).then((res:any) => res)
    },
    /**
    * 三方注册&登录
    */
    registerOrLoginSilent(userLoginDTO: UserLoginDTO): Promise<LoginVO> {
      return httpPost(`/business/v1.0/pb/user-login/action/registerOrLogin-silent`, userLoginDTO).then((res:any) => res)
    },
    /**
    * 三方小程序绑定手机号
    */
    bind(userLoginDTO: UserLoginDTO): Promise<LoginVO> {
      return httpPost(`/business/v1.0/pt/user-login/action/bind`, userLoginDTO).then((res:any) => res)
    },
    /**
    * 获取群id
    */
    getGid(userLoginDTO: UserLoginDTO): Promise<string> {
      return httpPost(`/business/v1.0/pt/user-login/action/get-gid`, userLoginDTO).then((res:any) => res)
    },
  },
  couponInfos: {
    /**
    * 领券中心
    */
    listCenterPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<CouponInfoVO>> {
      return httpGet(`/business/v1.0/pt/coupon-infos/action/list-center-page`,  {...params} ).then((res:any) => res)
    },
  },
  deliveryAddresss: {
    /**
    * 新增配送地址
    */
    create(request: DeliveryAddressRequest): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/delivery-addresss/action/create`, request).then((res:any) => res)
    },
    /**
    * 获取默认的配送地址
    */
    getDefault(): Promise<DeliveryAddress> {
      return httpGet(`/business/v1.0/pt/delivery-addresss/action/get-default`).then((res:any) => res)
    },
    /**
    * 分页查询配送地址列表
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<DeliveryAddress>> {
      return httpGet(`/business/v1.0/pt/delivery-addresss/action/list-page`,  {...params} ).then((res:any) => res)
    },
    /**
    * 删除配送地址
    */
    remove(kidRequest: KidRequest<long>): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/delivery-addresss/action/remove`, kidRequest).then((res:any) => res)
    },
    /**
    * 设置默认配送地址
    */
    setDefault(kidRequest: KidRequest<long>): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/delivery-addresss/action/set-default`, kidRequest).then((res:any) => res)
    },
    /**
    * 修改配送地址
    */
    update(request: DeliveryAddressRequest): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/delivery-addresss/action/update`, request).then((res:any) => res)
    },
  },
  dishess: {
    /**
    * 小程序首页更换菜品接口
    */
    changeDishes(dto: ChangeDishesDTO): Promise<RecommendedDishesVO> {
      return httpPost(`/business/v1.0/pt/dishess/action/changeDishes`, dto).then((res:any) => res)
    },
    /**
    * 小程序门店菜品详情
    */
    detailClient(params: { dishesId: string, unit?: number }): Promise<DishesDetailVO> {
      return httpGet(`/business/v1.0/pt/dishess/action/detailClient`,  {...params} ).then((res:any) => res)
    },
    /**
    * 小程序首页菜品轮播接口
    */
    dishesShowListPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<DishesShowVO>> {
      return httpGet(`/business/v1.0/pt/dishess/action/dishesShowListPage`,  {...params} ).then((res:any) => res)
    },
    /**
    * 小程序首页老虎机展示店铺所有菜品
    */
    getStoreAllDishes(dto: SlotRecommendedDishesDTO): Promise<List<Dishes>> {
      return httpPost(`/business/v1.0/pt/dishess/action/getStoreAllDishes`, dto).then((res:any) => res)
    },
    /**
    * 小程序门店所有菜品信息对象接口
    */
    getStoreDishesVO(params: { infoId?: string, storeId?: string }): Promise<OptionalStoreDishesVO> {
      return httpGet(`/business/v1.0/pt/dishess/action/getStoreDishesVO`,  {...params} ).then((res:any) => res)
    },
    /**
    * 商户运营管理后台查询菜品详情
    */
    merchantDishesdetail(params: { dishesId: string }): Promise<Dishes> {
      return httpGet(`/business/v1.0/pt/dishess/action/merchantDishesdetail`,  {...params} ).then((res:any) => res)
    },
    /**
    * 小程序多角色自选套餐计算接口
    */
    multiRoleOptionalDishes(dtos: OptionalDishesDTO[]): Promise<Map<long,OptionalDishesVO>> {
      return httpPost(`/business/v1.0/pt/dishess/action/multiRoleOptionalDishes`, dtos).then((res:any) => res)
    },
    /**
    * 小程序自选套餐计算接口
    */
    optionalDishes(dto: OptionalDishesDTO): Promise<OptionalDishesVO> {
      return httpPost(`/business/v1.0/pt/dishess/action/optionalDishes`, dto).then((res:any) => res)
    },
    /**
    * 小程序端自选菜品列表
    */
    optionalDishesList(params: { infoId?: string, storeId: string }): Promise<Map<string,List<StoreDishesOptionalVO>>> {
      return httpGet(`/business/v1.0/pt/dishess/action/optionalDishesList`,  {...params} ).then((res:any) => res)
    },
    /**
    * 小程序端自选菜品列表包装分类查询
    */
    optionalDishesListByQueryType(params: { infoId?: string, pageNo?: number, pageSize?: number, queryType?: string, storeId?: string }): Promise<PageList<StoreDishesNewOptionalVO>> {
      return httpGet(`/business/v1.0/pt/dishess/action/optionalDishesListByQueryType`,  {...params} ).then((res:any) => res)
    },
    /**
    * 小程序首页菜品数据随机排序
    */
    randomSortDishes(): Promise<boolean> {
      return httpGet(`/business/v1.0/pt/dishess/action/randomSortDishes`).then((res:any) => res)
    },
    /**
    * 小程序首页菜品推荐接口
    */
    recommendedDishes(dto: RecommendedDishesDTO): Promise<RecommendedDishesVO> {
      return httpPost(`/business/v1.0/pt/dishess/action/recommendedDishes`, dto).then((res:any) => res)
    },
    /**
    * 小程序首页菜品替换菜品集合接口
    */
    replaceDishesList(dto: ReplaceDishesDTO): Promise<List<StoreDishesVO>> {
      return httpPost(`/business/v1.0/pt/dishess/action/replaceDishesList`, dto).then((res:any) => res)
    },
    /**
    * 小程序首页老虎机抽取菜品
    */
    slotRecommendedDishes(dto: SlotRecommendedDishesDTO): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/dishess/action/slotRecommendedDishes`, dto).then((res:any) => res)
    },
    /**
    * 小程序首页老虎机展示菜品接口
    */
    slotShowDishes(dto: SlotRecommendedDishesDTO): Promise<SlotShowDishesVO> {
      return httpPost(`/business/v1.0/pt/dishess/action/slotShowDishes`, dto).then((res:any) => res)
    },
  },
  essentialQuestionnaires: {
    findByIllness(params: { referCode: string }): Promise<List<EssentialQuestionnaire>> {
      return httpGet(`/business/v1.0/pt/essential-questionnaires/action/find-by-illness`,  {...params} ).then((res:any) => res)
    },
  },
  excelExports: {
    /**
    * 合作方导出数据
    */
    export(excelExportRecord: ExcelExportRecord): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/excel-exports/action/export`, excelExportRecord).then((res:any) => res)
    },
  },
  feedbackInfos: {
    /**
    * app端新增返馈信息
    */
    createApp(feedbackInfo: FeedbackInfo): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/feedback-infos/action/createApp`, feedbackInfo).then((res:any) => res)
    },
  },
  foodOrderInfos: {
    /**
    * APP端查询订单角色信息列表
    */
    list(params: { orderId?: string }): Promise<List<FoodOrderInfosVO>> {
      return httpGet(`/business/v1.0/pt/food-order-infos/action/list`,  {...params} ).then((res:any) => res)
    },
  },
  foodOrderSetMeals: {
    /**
    * APP端查询订单所有套餐信息
    */
    list(params: { orderId?: string }): Promise<List<FoodOrderSetMealVO>> {
      return httpGet(`/business/v1.0/pt/food-order-set-meals/action/list`,  {...params} ).then((res:any) => res)
    },
  },
  foodOrders: {
    /**
    * app取消订单
    */
    appCancel(params: { orderKid?: string }): Promise<boolean> {
      return httpGet(`/business/v1.0/pt/food-orders/action/app-cancel`,  {...params} ).then((res:any) => res)
    },
    /**
    * app查询订单详情
    */
    appDetail(params: { orderKid: string }): Promise<FoodOrderDetailAppVO> {
      return httpGet(`/business/v1.0/pt/food-orders/action/app-detail`,  {...params} ).then((res:any) => res)
    },
    /**
    * app查询订单列表 expressType:0.自提 1.外卖
    */
    appList(params: { expressType: number, pageNo?: number, pageSize?: number }): Promise<PageList<FoodOrderAppListVO>> {
      return httpGet(`/business/v1.0/pt/food-orders/action/app-list`,  {...params} ).then((res:any) => res)
    },
    /**
    * app创建订单 并返回支付参数
    */
    create(orderCreateDTO: FoodOrderCreateDTO): Promise<CommonOrderCreatedVO> {
      return httpPut(`/business/v1.0/pt/food-orders/action/create`, orderCreateDTO).then((res:any) => res)
    },
    /**
    * app获取指定订单支付参数
    */
    getPayParams(kidRequest: KidRequest<long>): Promise<CommonOrderCreatedVO> {
      return httpPut(`/business/v1.0/pt/food-orders/action/getPayParams`, kidRequest).then((res:any) => res)
    },
    /**
    * App查询支付状态 1.待支付 2.已支付 3.已退款
    */
    getStatus(params: { payNo: string }): Promise<number> {
      return httpGet(`/business/v1.0/pt/food-orders/action/getStatus`,  {...params} ).then((res:any) => res)
    },
    /**
    * app创建订单预先检查
    */
    prepareCreateCheck(dto: FoodOrderPrepareCreateDTO): Promise<OrderPrepareCreateVO> {
      return httpPut(`/business/v1.0/pt/food-orders/action/prepareCreateCheck`, dto).then((res:any) => res)
    },
    /**
    * 获取骑手位置
    */
    riderLocation(params: { orderKid: string }): Promise<RiderLocationVO> {
      return httpGet(`/business/v1.0/pt/food-orders/action/rider-location`,  {...params} ).then((res:any) => res)
    },
    /**
    * 商家后台查询分页数据
    */
    storeListPage(pageRequest: PageRequest<FoodOrder>): Promise<PageList<FoodOrderStoreListVO>> {
      return httpPost(`/business/v1.0/pt/food-orders/action/store-list-page`, pageRequest).then((res:any) => res)
    },
    /**
    * 商家后台发货
    */
    storeDeliver(dto: ManagerOperaDTO): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/food-orders/action/storeDeliver`, dto).then((res:any) => res)
    },
    /**
    * 商家后台送达
    */
    storeDelivered(dto: ManagerOperaDTO): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/food-orders/action/storeDelivered`, dto).then((res:any) => res)
    },
    /**
    * 商家后台查询单个详情
    */
    storeDetail(params: { kid: string }): Promise<FoodOrderDetailManagerVO> {
      return httpGet(`/business/v1.0/pt/food-orders/action/storeDetail`,  {...params} ).then((res:any) => res)
    },
    /**
    * 商户后台取消美团发货
    */
    storeMeituanCancelDeliver(dto: ManagerOperaDTO): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/food-orders/action/storeMeituanCancelDeliver`, dto).then((res:any) => res)
    },
    /**
    * 商家后台美团发货
    */
    storeMeituanDeliver(dto: ManagerOperaDTO): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/food-orders/action/storeMeituanDeliver`, dto).then((res:any) => res)
    },
    /**
    * 商家后台核销
    */
    storeVerify(req: KidRequest<string>): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/food-orders/action/storeVerify`, req).then((res:any) => res)
    },
    /**
    * 商家后台工单查询分页数据
    */
    ticketsListPage(pageRequest: PageRequest<FoodOrder>): Promise<PageList<FoodOrderStoreListVO>> {
      return httpPost(`/business/v1.0/pt/food-orders/action/tickets-list-page`, pageRequest).then((res:any) => res)
    },
  },
  managerRolesWeb: {
    /**
    * 商户web后台新增ManagerRole
    */
    post(managerRoleVO: CooperationManagerRoleVO): Promise<number> {
      return httpPost(`/business/v1.0/pt/manager-roles-web`, managerRoleVO).then((res:any) => res)
    },
  },
  managerRoles: {
    /**
    * 商户后台角色删除
    */
    deleteByIds(kids: number[]): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/manager-roles/action/deleteByIds`, kids).then((res:any) => res)
    },
    /**
    * 商户后台查询ManagerRole
    */
    listAdmin(pageRequest: PageRequest<CooperationManagerRole>): Promise<PageList<CooperationManagerRole>> {
      return httpPost(`/business/v1.0/pt/manager-roles/action/list-admin`, pageRequest).then((res:any) => res)
    },
    /**
    * 商户web后台查询角色权限码
    */
    listPermissionWeb(params: { kid: string }): Promise<List<CooperationManagerRolePermission>> {
      return httpGet(`/business/v1.0/pt/manager-roles/action/list-permission-web`,  {...params} ).then((res:any) => res)
    },
    /**
    * 管理后台变更角色权限
    */
    updatePermission(rolePermissionDTO: RolePermissionDTO): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/manager-roles/action/update-permission`, rolePermissionDTO).then((res:any) => res)
    },
  },
  managerUsersWeb: {
    /**
    * 商户web后台新增ManagerUser
    */
    post(managerUserVO: CooperationManagerUserVO): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/manager-users-web`, managerUserVO).then((res:any) => res)
    },
  },
  materialClassifys: {
    /**
    * APP端查询分页数据
    */
    listForApp(): Promise<List<MaterialClassifyVO>> {
      return httpGet(`/business/v1.0/pt/material-classifys/action/listForApp`).then((res:any) => res)
    },
  },
  memberInvites: {
    /**
    * 获取我的邀请记录
    */
    invitePage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<UserInviteVO>> {
      return httpGet(`/business/v1.0/pt/member-invites/action/invite-page`,  {...params} ).then((res:any) => res)
    },
  },
  news: {
    /**
    * APP端查询资讯详情信息
    */
    detail(params: { kid: string }): Promise<NewDetailVO> {
      return httpGet(`/business/v1.0/pt/news/action/detail`,  {...params} ).then((res:any) => res)
    },
    /**
    * 用户点赞资讯对象
    */
    like(request: NewsLikeRequest): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/news/action/like`, request).then((res:any) => res)
    },
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<NewsVO>> {
      return httpGet(`/business/v1.0/pt/news/action/list-page`,  {...params} ).then((res:any) => res)
    },
  },
  orderRangeConfigs: {
    /**
    * 小程序端获取自取/配送时段配置库存接口
    */
    getOrderRangeConfigVO(params: { mealsType?: string, orderConfigDate?: string, storeId?: string }): Promise<List<OrderRangeConfigVO>> {
      return httpGet(`/business/v1.0/pt/order-range-configs/action/getOrderRangeConfigVO`,  {...params} ).then((res:any) => res)
    },
  },
  orderRulesConfigs: {
    /**
    * 商户运营后台查询配置详情
    */
    getMerchantConfig(): Promise<OrderRulesConfig> {
      return httpGet(`/business/v1.0/pt/order-rules-configs/action/getMerchantConfig`).then((res:any) => res)
    },
    /**
    * 商户运营后台新增/编辑
    */
    merchantCreateOrUpdate(orderRulesConfig: OrderRulesConfig): Promise<boolean> {
      return httpPut(`/business/v1.0/pt/order-rules-configs/action/merchantCreateOrUpdate`, orderRulesConfig).then((res:any) => res)
    },
  },
  originalMaterials: {
    /**
    * app端获取食材详情
    */
    detailApp(params: { kid: string }): Promise<OriginalMaterialVO> {
      return httpGet(`/business/v1.0/pt/original-materials/action/detail-app`,  {...params} ).then((res:any) => res)
    },
    /**
    * APP端查询分页数据
    */
    listPage(params: { classifyId: string, pageNo?: number, pageSize?: number }): Promise<PageList<OriginalMaterialVO>> {
      return httpGet(`/business/v1.0/pt/original-materials/action/list-page`,  {...params} ).then((res:any) => res)
    },
  },
  postSales: {
    /**
    * 查询订单是否能进行售后（APP端） 1:可以发起售后，0：不能发起售后
    */
    canPostSale(params: { kid: string }): Promise<number> {
      return httpGet(`/business/v1.0/pt/post-sales/action/can-post-sale`,  {...params} ).then((res:any) => res)
    },
    /**
    * 商户后台查询详情
    */
    detailCooperation(params: { kid: string }): Promise<PostSaleDetailVO> {
      return httpGet(`/business/v1.0/pt/post-sales/action/detail-cooperation`,  {...params} ).then((res:any) => res)
    },
    /**
    * 用户取消售后
    */
    doCancel(request: KidRequest<long>): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/post-sales/action/do-cancel`, request).then((res:any) => res)
    },
    /**
    * 用户发起售后
    */
    doStart(request: StartPostSaleRequest): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/post-sales/action/do-start`, request).then((res:any) => res)
    },
    /**
    * 查询售后详情（APP端）
    */
    info(params: { kid: string }): Promise<PostSaleDetailVO> {
      return httpGet(`/business/v1.0/pt/post-sales/action/info`,  {...params} ).then((res:any) => res)
    },
    /**
    * 分页查询售后列表（APP端）
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<PostSaleVO>> {
      return httpGet(`/business/v1.0/pt/post-sales/action/list-page`,  {...params} ).then((res:any) => res)
    },
    /**
    * 商户后台查询分页数据
    */
    listPageCooperation(pageRequest: PageRequest<PostSaleAdminQueryRequest>): Promise<PageList<PostSaleDetailCooperationVO>> {
      return httpPost(`/business/v1.0/pt/post-sales/action/list-page-cooperation`, pageRequest).then((res:any) => res)
    },
    /**
    * 商户后台处理用户的售后申请
    */
    processCooperation(request: ProcessPostSaleRequest): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/post-sales/action/process-cooperation`, request).then((res:any) => res)
    },
    /**
    * 计算售后应该退款的金额
    */
    refundAmount(request: StartPostSaleRequest): Promise<OrderRefundInfoVO> {
      return httpPost(`/business/v1.0/pt/post-sales/action/refund-amount`, request).then((res:any) => res)
    },
  },
  preparationMenus: {
    /**
    * 商户运营管理后台查询分页数据
    */
    merchantListPage(pageRequest: PageRequest<PreparationMenu>): Promise<PageList<PreparationMenu>> {
      return httpPost(`/business/v1.0/pt/preparation-menus/action/merchant-list-page`, pageRequest).then((res:any) => res)
    },
  },
  stallLinkedDishess: {
    /**
    * 档口关联菜品
    */
    addDishes(stallAddDishesDTO: StallAddDishesDTO): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/stall-linked-dishess/action/addDishes`, stallAddDishesDTO).then((res:any) => res)
    },
    /**
    * 档口取消关联菜品
    */
    delDishes(stallAddDishesDTO: StallAddDishesDTO): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/stall-linked-dishess/action/delDishes`, stallAddDishesDTO).then((res:any) => res)
    },
    /**
    * 查询商户所有菜品除档品关联菜品
    */
    listAlldishesPage(pageRequest: PageRequest<StallLinkedDishes>): Promise<PageList<StallLinkedDishesVO>> {
      return httpPost(`/business/v1.0/pt/stall-linked-dishess/action/list-alldishes-page`, pageRequest).then((res:any) => res)
    },
    /**
    * 商户后台查询档口菜品
    */
    listPageMerchant(pageRequest: PageRequest<StallLinkedDishes>): Promise<PageList<StallLinkedDishesVO>> {
      return httpPost(`/business/v1.0/pt/stall-linked-dishess/action/list-page-merchant`, pageRequest).then((res:any) => res)
    },
  },
  stalls: {
    /**
    * 商户后台新增档口
    */
    create(stall: Stall): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/stalls/action/create`, stall).then((res:any) => res)
    },
    /**
    * 管理后台查询单个详情
    */
    detail(params: { kid: string }): Promise<Stall> {
      return httpGet(`/business/v1.0/pt/stalls/action/detail`,  {...params} ).then((res:any) => res)
    },
    /**
    * 管理后台查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<StallVO>> {
      return httpGet(`/business/v1.0/pt/stalls/action/list-page`,  {...params} ).then((res:any) => res)
    },
    /**
    * 商户后台查询备菜单
    */
    prepareMenuListPage(pageRequest: PageRequest<StallPrepareMenuQueryDTO>): Promise<PageList<StallPrepareMenuVO>> {
      return httpPost(`/business/v1.0/pt/stalls/action/prepare-menu-list-page`, pageRequest).then((res:any) => res)
    },
    /**
    * 管理后台编辑
    */
    update(stall: Stall): Promise<boolean> {
      return httpPut(`/business/v1.0/pt/stalls/action/update`, stall).then((res:any) => res)
    },
  },
  statisticsBehavior: {
    /**
    * 添加
    */
    add(body: UserBehaviorArg): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/statistics-behavior/action/add`, body).then((res:any) => res)
    },
    /**
    * 取消
    */
    cancel(body: UserBehaviorArg): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/statistics-behavior/action/cancel`, body).then((res:any) => res)
    },
    /**
    * 查询
    */
    get(body: UserBehaviorQuery): Promise<List<UserBehaviorResult>> {
      return httpPost(`/business/v1.0/pt/statistics-behavior/action/get`, body).then((res:any) => res)
    },
  },
  statisticsCounting: {
    /**
    * 批量
    */
    batch(body: StatisticArg[]): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/statistics-counting/action/batch`, body).then((res:any) => res)
    },
    /**
    * 查询
    */
    get(body: StatisticQuery): Promise<List<StatisticResult>> {
      return httpPost(`/business/v1.0/pt/statistics-counting/action/get`, body).then((res:any) => res)
    },
    /**
    * 提交
    */
    submit(body: StatisticArg): Promise<number> {
      return httpPost(`/business/v1.0/pt/statistics-counting/action/submit`, body).then((res:any) => res)
    },
  },
  statistics: {
    /**
    * 店铺店铺近30天销售额
    */
    shopOrderAmountMonth(): Promise<LinkedHashMap<string,long>> {
      return httpGet(`/business/v1.0/pt/statistics/action/shop-orderAmountMonth`).then((res:any) => res)
    },
    /**
    * 店铺订单，销售额统计
    */
    shopOrderAndAmount(): Promise<StatisticsOrderVO> {
      return httpGet(`/business/v1.0/pt/statistics/action/shop-orderAndAmount`).then((res:any) => res)
    },
    /**
    * 店铺退款额，退款数,优惠，优惠金额统计
    */
    shopRefundAndCoupon(): Promise<StatisticsRefundAndCouponVO> {
      return httpGet(`/business/v1.0/pt/statistics/action/shop-refundAndCoupon`).then((res:any) => res)
    },
    /**
    * 店铺商品销量排名
    */
    shopDishesTop(): Promise<List<DishesTopVO>> {
      return httpGet(`/business/v1.0/pt/statistics/action/shopDishesTop`).then((res:any) => res)
    },
    /**
    * 店铺套餐销量排名
    */
    shopSetMealTopVO(): Promise<List<SetMealTopVO>> {
      return httpGet(`/business/v1.0/pt/statistics/action/shopSetMealTopVO`).then((res:any) => res)
    },
  },
  storeOrderConfigs: {
    /**
    * 商户运营管理后台获取默认天数的订单配置数据
    */
    getMerchantStoreOrderConfig(params: { queryDays?: number }): Promise<List<StoreOrderConfig>> {
      return httpGet(`/business/v1.0/pt/store-order-configs/action/getMerchantStoreOrderConfig`,  {...params} ).then((res:any) => res)
    },
    /**
    * 小程序端订餐配置信息展示接口
    */
    getStoreOrderConfigAppVO(params: { storeId: string }): Promise<StoreOrderConfigAppVO> {
      return httpGet(`/business/v1.0/pt/store-order-configs/action/getStoreOrderConfigAppVO`,  {...params} ).then((res:any) => res)
    },
    /**
    * 商户运营管理后台批量新增下单份数
    */
    merchantBacthSaveOrupdateConfig(listObj: StoreOrderConfigSaveDTO[]): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/store-order-configs/action/merchantBacthSaveOrupdateConfig`, listObj).then((res:any) => res)
    },
    /**
    * 小程序端订餐配置信息集合接口
    */
    storeOrderConfigAppVOList(params: { showDays?: number, storeId: string }): Promise<List<StoreOrderConfigAppVO>> {
      return httpGet(`/business/v1.0/pt/store-order-configs/action/storeOrderConfigAppVOList`,  {...params} ).then((res:any) => res)
    },
  },
  stores: {
    /**
    * 小程序更换门店校验
    */
    checkSwitchStore(dto: SwitchStoreDTO): Promise<SwitchStoreVO> {
      return httpPost(`/business/v1.0/pt/stores/action/checkSwitchStore`, dto).then((res:any) => res)
    },
    /**
    * 店铺配送范围 判断接口
    */
    deliveryAreaCheck(dto: StoreSearchDTO): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/stores/action/deliveryAreaCheck`, dto).then((res:any) => res)
    },
    /**
    * 商户运营后台查看店铺详情
    */
    getMerchantStoreDetail(): Promise<StoreAdminVO> {
      return httpGet(`/business/v1.0/pt/stores/action/getMerchantStoreDetail`).then((res:any) => res)
    },
    /**
    * 商户运营后台店铺信息vo
    */
    getMerchantStoreVO(): Promise<StoreManagerVO> {
      return httpGet(`/business/v1.0/pt/stores/action/getMerchantStoreVO`).then((res:any) => res)
    },
    /**
    * 商户后台批量关联套餐
    */
    merchantBatchLinkedSetmeal(batchRequest: BatchRequest<StoreRecommendSetMealDTO>): Promise<boolean> {
      return httpPut(`/business/v1.0/pt/stores/action/merchant-batch-linked-setmeal`, batchRequest).then((res:any) => res)
    },
    /**
    * 商户运营后台批量关联菜品
    */
    merchantBatchSaveDishes(batchRequest: BatchRequest<StoreLinkedDishes>): Promise<boolean> {
      return httpPut(`/business/v1.0/pt/stores/action/merchant-batch-save-dishes`, batchRequest).then((res:any) => res)
    },
    /**
    * 商户运营后台店铺取消关联菜品
    */
    merchantCancelLinkedDishes(batchRequest: BatchRequest<StoreDishesManagerVO>): Promise<boolean> {
      return httpPut(`/business/v1.0/pt/stores/action/merchant-cancel-linked-dishes`, batchRequest).then((res:any) => res)
    },
    /**
    * 商户后台店铺取消关联套餐
    */
    merchantCancelLinkedSetmeal(batchRequest: BatchRequest<StoreRecommendSetMealDTO>): Promise<boolean> {
      return httpPut(`/business/v1.0/pt/stores/action/merchant-cancel-linked-setmeal`, batchRequest).then((res:any) => res)
    },
    /**
    * 商户运营后台选择关联菜品查询分页接口
    */
    merchantListPageSelect(pageRequest: PageRequest<QueryDishesDTO>): Promise<PageList<DishesManagerVO>> {
      return httpPost(`/business/v1.0/pt/stores/action/merchant-list-page-select`, pageRequest).then((res:any) => res)
    },
    /**
    * 商户管理后台查询可添加推荐套餐分页数据
    */
    merchantSelectRecommendSetMealListPage(pageRequest: PageRequest<StoreRecommendSetMealDTO>): Promise<PageList<SetMealSelectVO>> {
      return httpPost(`/business/v1.0/pt/stores/action/merchant-select-recommend-SetMeal-list-page`, pageRequest).then((res:any) => res)
    },
    /**
    * 商户运营后台店铺关联菜品分页接口
    */
    merchantStoreDishesListPage(pageRequest: PageRequest<StoreDishesDTO>): Promise<PageList<StoreDishesManagerVO>> {
      return httpPost(`/business/v1.0/pt/stores/action/merchant-store-dishes-list-page`, pageRequest).then((res:any) => res)
    },
    /**
    * 商户运营后台查询店铺推荐套餐分页数据
    */
    merchantStoreRecommendSetMealListPage(pageRequest: PageRequest<StoreRecommendSetMealDTO>): Promise<PageList<StoreRecommendSetMealVO>> {
      return httpPost(`/business/v1.0/pt/stores/action/merchant-store-recommend-SetMeal-list-page`, pageRequest).then((res:any) => res)
    },
    /**
    * 商户运营后台编辑
    */
    merchantUpdateStore(store: StoreDTO): Promise<boolean> {
      return httpPut(`/business/v1.0/pt/stores/action/merchantUpdateStore`, store).then((res:any) => res)
    },
    /**
    * 小程序端推荐最近门店接口
    */
    nearestStore(dto: NearestStoreSearchDTO): Promise<OfflineStoreVO> {
      return httpPost(`/business/v1.0/pt/stores/action/nearestStore`, dto).then((res:any) => res)
    },
    /**
    * 商户后台选择所属类型接口
    */
    searchTarget(params: { name?: string, pageNo?: number, pageSize?: number, recommend?: number }): Promise<List<TargetSearchAdminVO>> {
      return httpGet(`/business/v1.0/pt/stores/action/searchTarget`,  {...params} ).then((res:any) => res)
    },
    /**
    * 小程序端线下门店分页接口
    */
    storeVOSearch(dto: StoreVOSearchDTO): Promise<PageList<OfflineStoreVO>> {
      return httpPost(`/business/v1.0/pt/stores/action/storeVOSearch`, dto).then((res:any) => res)
    },
  },
  userCoupons: {
    /**
    * 用户领取优惠券
    */
    createCoupon(userCouponAddDTO: UserCouponAddDTO): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/user-coupons/action/createCoupon`, userCouponAddDTO).then((res:any) => res)
    },
    /**
    * 用户下单可使用优惠券
    */
    useCheckList(couponUseCheckDTO: CouponUseCheckDTO): Promise<CouponUseCheckVO> {
      return httpPost(`/business/v1.0/pt/user-coupons/action/useCheckList`, couponUseCheckDTO).then((res:any) => res)
    },
    /**
    * 用户领取优惠券
    */
    userListPage(params: { pageNo?: number, pageSize?: number, queryType?: string }): Promise<PageList<UserCouponVO>> {
      return httpGet(`/business/v1.0/pt/user-coupons/action/user-list-page`,  {...params} ).then((res:any) => res)
    },
  },
  userDailyNutrientRecords: {
    /**
    * app查询营养详细报告(营养计划-摄入营养)
    */
    detail(params: { date: string, infoId?: string }): Promise<UserDailyNutrientReport> {
      return httpGet(`/business/v1.0/pt/user-daily-nutrient-records/action/detail`,  {...params} ).then((res:any) => res)
    },
    /**
    * app查询三大营养和能量（首页顶部）
    */
    detailMainNutrient(params: { infoId?: string }): Promise<UserDailyNutrientVO> {
      return httpGet(`/business/v1.0/pt/user-daily-nutrient-records/action/detailMainNutrient`,  {...params} ).then((res:any) => res)
    },
    /**
    * app查询餐次的营养标准
    */
    mealStandard(params: { infoId?: string, mealTime?: string }): Promise<SelfChooseMealNutrientStandard> {
      return httpGet(`/business/v1.0/pt/user-daily-nutrient-records/action/mealStandard`,  {...params} ).then((res:any) => res)
    },
  },
  userDataDailyRecords: {
    /**
    * app查询
    */
    detail(dto: UserDailyDataDTO): Promise<UserDailyDataVO> {
      return httpPost(`/business/v1.0/pt/user-data-daily-records/action/detail`, dto).then((res:any) => res)
    },
    /**
    * app提交数据记录
    */
    recordData(record: UserDataDailyRecord): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/user-data-daily-records/action/recordData`, record).then((res:any) => res)
    },
  },
  userInfos: {
    /**
    * 删除角色信息
    */
    delete(kidRequest: KidRequest<long>): Promise<boolean> {
      return httpDelete(`/business/v1.0/pt/user-infos/action/delete`, kidRequest).then((res:any) => res)
    },
    /**
    * 更改用户选择推荐
    */
    editRecommendCode(info: UserInfo): Promise<boolean> {
      return httpPut(`/business/v1.0/pt/user-infos/action/edit-recommend-code`, info).then((res:any) => res)
    },
    /**
    * 保存角色信息
    */
    saveUserInfo(dto: UserEditDTO): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/user-infos/action/save-user-info`, dto).then((res:any) => res)
    },
    /**
    * 获取我的角色信息
    */
    userInfoDetail(): Promise<LoginVO> {
      return httpGet(`/business/v1.0/pt/user-infos/action/user-info-detail`).then((res:any) => res)
    },
    /**
    * 获取该用户所有角色信息
    */
    userInfoList(): Promise<List<UserInfoVO>> {
      return httpGet(`/business/v1.0/pt/user-infos/action/user-info-list`).then((res:any) => res)
    },
  },
  userOrderNutrients: {
    /**
    * 查看订单营养报告
    */
    detail(params: { kid: string }): Promise<UserOrderNutrientReport> {
      return httpGet(`/business/v1.0/pt/user-order-nutrients/action/detail`,  {...params} ).then((res:any) => res)
    },
    /**
    * 订单支付前查看营养报告
    */
    detailBeforePay(dto: FoodOrderSingleInfoDTO): Promise<UserOrderNutrientReport> {
      return httpPost(`/business/v1.0/pt/user-order-nutrients/action/detailBeforePay`, dto).then((res:any) => res)
    },
  },
  userTastes: {
    /**
    * 获取用户所有角色口味/过敏原
    */
    getAllTaste(): Promise<List<UserTasteVO>> {
      return httpGet(`/business/v1.0/pt/user-tastes/action/get-all-taste`).then((res:any) => res)
    },
    /**
    * 获取用户所有角色口味描述
    */
    getRoleTaste(): Promise<List<RoleTasteStrVO>> {
      return httpGet(`/business/v1.0/pt/user-tastes/action/get-role-taste`).then((res:any) => res)
    },
    /**
    * 获取用户的口味/过敏原
    */
    getTaste(params: { infoId: string }): Promise<UserTasteVO> {
      return httpGet(`/business/v1.0/pt/user-tastes/action/get-taste`,  {...params} ).then((res:any) => res)
    },
    /**
    * 小程序端查询所有并标记
    */
    getChosenAllTastes(params: { userInfoId: string }): Promise<List<UserGetChosenAllTastesVO>> {
      return httpGet(`/business/v1.0/pt/user-tastes/action/getChosenAllTastes`,  {...params} ).then((res:any) => res)
    },
    /**
    * 保存口味/过敏原
    */
    saveTaste(dto: UserTasteDTO): Promise<boolean> {
      return httpPost(`/business/v1.0/pt/user-tastes/action/save-taste`, dto).then((res:any) => res)
    },
    /**
    * 小程序端查询分页用户勾选过敏源
    */
    seachChecktastes(params: { classify: string, userInfoId: string }): Promise<List<UserTasteMessageVo>> {
      return httpGet(`/business/v1.0/pt/user-tastes/action/seach-checktastes`,  {...params} ).then((res:any) => res)
    },
  },
  wx: {
    /**
    * 获取微信消息模板列表
    */
    getTemplateList(): Promise<List<WxTemplate>> {
      return httpGet(`/business/v1.0/pt/wx/action/get-template-list`).then((res:any) => res)
    },
  },
}