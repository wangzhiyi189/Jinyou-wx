import request from '@/api/request'
// 获取首页轮播图


interface TicketData {
  startCity: string;
  endCity: string;
  departDate: string;
}
export function getTicketList(data:TicketData) {
  return request.get('/ticket/list',{...data})
}