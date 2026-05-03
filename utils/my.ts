interface OrderItem {
  id: number
  text: string
  img: string,
	url:string,
	value:number,
}
import allorderIcon from '@/static/images/my/icon_allorder.png'
import waitpayIcon from '@/static/images/my/icon_waitpay.png'
import waitgoIcon from '@/static/images/my/icon_waitgo.png'
import waitreviewIcon from '@/static/images/my/icon_waitreview.png'
export const orderStatus = <OrderItem[]>([
	{
		id: 1,
		text: '全部订单',
		img: allorderIcon,
		url:'',
		value:6,
	},
	{
		id: 0,
		text: '待付款',
		img: waitpayIcon,
		url:'',
		value:0,
	},
	{
		id: 1,
		text: '待出行',
		img: waitgoIcon,
		url:'',
		value:1,
	},
	{
		id: 5,
		text: '已出行',
		img: waitreviewIcon,
		url:'',
		value:5
	},
])