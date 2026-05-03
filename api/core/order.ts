import request from '@/api/request'
import { DateData  } from '@/utils/date'
export interface InfoDetailData {
	/** 车次ID */
  scheduleId: number
  /** 创建人ID */
  createUser: number
  /** 车次名称 */
  scheduleName: string
  /** 线路ID */
  lineId: number
  /** 发车时间 原始后端格式 yyyy-MM-dd HH:mm */
  departTime: string
  /** 到达时间 原始后端格式 yyyy-MM-dd HH:mm */
  arriveTime: string
  /** 运行时长 */
  duration: string
  /** 车牌号 */
  plateNumber: string
  /** 车型 */
  vehicleType: string
  /** 票价 */
  price: number
  /** 总座位数 */
  seatTotal: number
  /** 剩余座位 */
  seatRemaining: number
  /** 状态 0-禁用 1-启用 */
  status: number
  /** 是否推荐 */
  isRecommend: number
  /** 排序号 */
  sort: number
  /** 创建时间 */
  createTime: string
  /** 更新时间 */
  updateTime: string
  /** 备注 */
  remark: string
  // ======================== 联表扩展字段 ========================
  /** 出发城市（JSON数组格式） */
  startCity: string
  /** 到达城市（JSON数组格式） */
  endCity: string
  /** 途经站点完整列表（严格按照线路顺序） */
  stationList: StationInfo[]
  // ======================== 新增：前端展示用时间格式化对象 ========================
  /** 发车时间拆分（月日+星期） */
  departDateData: DateData
  /** 发车时分 格式：12:00 */
  departHourMinute: string
}
export interface StationInfo {
  /** 站点ID */
  stationId: number
  /** 站点名称 */
  stationName: string
  /** 经度 */
  lng: number
  /** 纬度 */
  lat: number
  /** 站点详细地址 */
  address: string
}
export interface listData {
  pageNum: number // 页码
  pageSize: number // 页大小
	status:number // 订单状态 0待支付 1已支付 2已出票 3已取消 4已退票 5已出行
}

export interface OrderData {
  scheduleId : number // 班次id
	ticketCount : number// 购票数量
	boardPointId : number// 用户选择 / 填写的上车点id
	contactPhone: string // 联系方式
	remark : string // 留言
	passengerIdList:number[], // 乘客id列表
	// startCity: '', // 起点城市
  // endCity: '', // 终点城市
}
// 获取订单列表
export function getOrderList(data:listData) {
  return request.get('/order/list',data)
}
// 获取订单列表

// 提交订单
export function postOrdeSubmit(data:OrderData) {
  return request.post('/order/submit', data)
}
// 取消订单
export function postOrderCancel(data:any) {
  return request.post('/order/cancel',data)
}
// 订单详情
export function getOrderDetail(data:any) {
  return request.get(`/order/details/`,data)
}

// 调用支付
export function postPayOrder(data:any) {
  return request.post('/order/wxpay',data)
}

// 删除订单
export function deleteOrderDelete(data:any) {
  return request.delete(`/order/delete`,data)
}