<template>
	<view class="my">
		<view class="my-head">
			<image :src="myuserbackground" class="img_usermesbg" />
			<view class="my-info" v-if="info?.openid">
				<view class="avatar">
					<u-avatar :src="info.avatar"></u-avatar>
				</view>
				<view class="info-detail">
						<view class="tex">
							尊敬的会员
						</view>
						<view class="phone">
							{{ info.phone }}
						</view>
					</view>
			</view>
			<view class="my-login" v-else>
				<view class="login-text" @click="handleLogin">登录</view>
			</view>
			
		</view>
		<view class="main">
			<view class="ordermes">
				<view class="orderall">
					<view class="order-item" v-for="item in orderStatus" :key="item.id" @click="handleOrderList(item.value)">
						<image :src="item.img" class="item-icon" />
						<view class="item-text">{{ item.text }}</view>
					</view>
				</view>
				<view class="vipmes">
					<view class="order-item" v-for="item in vipmesList" :key="item.id">
						<view class="item-num">{{ item.value }}</view>
						<view class="item-text">{{ item.text }}</view>
					</view>
				</view>
			</view>
			<view class="selectmes">
				<view class="selectmes-item" v-for="item in moreList" :key="item.id" @click="handleReture(item.url)">
					<image :src="item.img" class="item-icon" />
					<view class="item-text">{{ item.text }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
// ===================== TS 改造备注：统一导入图片 =====================
import myuserbackground from '@/static/images/my/myuserbackground.png'

import eticketIcon from '@/static/images/my/eticket_logo.png'
import myticketIcon from '@/static/images/my/myticket.png'
import invoiceIcon from '@/static/images/my/invoice.png'
import myhelpIcon from '@/static/images/my/my_help.png'
import searchticketIcon from '@/static/images/my/search_ticket.png'
import aboutusIcon from '@/static/images/my/about_us.png'
import extensionimgIcon from '@/static/images/my/extensionimg.png'
import shopIcon from '@/static/images/my/icon_shop.png'

import { ref, reactive, onMounted , watch } from 'vue'
import { useUserStore } from '@/store'
import { orderStatus } from '@/utils/my'
import { getToken } from '@/utils/auth.ts'
const userStore = useUserStore()
interface moreItem {
  id: number
  text: string
  img: string,
	url:string,
}
/** VIP 信息项类型 */
interface VipItem {
  id: number
  text: string
  value: number
}

const vipmesList = reactive<VipItem[]>([
	{
		id: 1,
		text: '优惠券',
		value: 0,
	},
	{
		id: 2,
		text: '积分',
		value: 0,
	},
	{
		id: 3,
		text: '金币',
		value: 0,
	},
])

const moreList = reactive<moreItem[]>([
	{
		id: 1,
		text: '电子客票',
		img: eticketIcon,
		url:'',
	},
	{
		id: 2, // TS 改造备注：修复重复 id 为 2
		text: '常用旅客',
		img: myticketIcon,
		url:'/pages/my/passenger/index',
	},
	{
		id: 3,
		text: '我的发票',
		img: invoiceIcon,
		url:'',
	},
	{
		id: 4,
		text: '帮助中心',
		img: myhelpIcon,
		url:'',
	},
	{
		id: 5,
		text: '客服中心',
		img: searchticketIcon,
		url:'',
	},
	{
		id: 6,
		text: '关于我们',
		img: aboutusIcon,
		url:'',
	},
	{
		id: 7,
		text: '推广中心',
		img: extensionimgIcon,
		url:'',
	},
	{
		id: 8,
		text: '口令兑换',
		img: shopIcon,
		url:'',
	},
])

const info = ref<any>({})
watch(userStore.userInfo, (newVal : any) => {
	info.value = newVal
},{immediate: true,deep: true})
onMounted(() => {
	// 获取用户信息
	console.log(userStore.userInfo)
	if(getToken()){
		userStore.info();
	}
	
})
// 登录
const handleLogin = () : void => {
	uni.navigateTo({
		url: '/pages/login/index',
	})
}
const handleOrderList = (value : number) : void => {
	uni.navigateTo({
		url: `/pages/order/list/index?value=${value}`,
	})
}
const handleReture = (url : string) => {
	if(!url) return uni.showToast({
		title:'敬请期待',
		icon:'none'
	})
	uni.navigateTo({
		url
	})
}
</script>

<style lang="scss" scoped>
.my{
	background-color: rgb(241, 245, 246);
	min-height:100vh;
	.my-head{
		position: relative;
		height:340rpx;
		.img_usermesbg{
			width: 100%;
			height:100%;
			vertical-align: middle;
		}
		.my-login{
			position: absolute;
			top:50%;
			left: 50%;
			transform: translate(-50%,-50%);
			border:1px solid #fff;
			padding: 5px 30px;
			border-radius: 20px;
			.login-text{
				font-size: 16px;
				color: #fff;
			}
		}
		.my-info{
			position:absolute;
			top:45%;
			padding:0 $w-padding-big;
			width:100%;
			box-sizing: border-box;
			@include flex-center-style($gap:$w-gap-base);
			.avatar{
				width: 100rpx;
				height: 100rpx;
				:deep(.u-avatar){
					width:100%!important;
					height:100%!important;
					.u-avatar__image{
						width:100%!important;
						height:100%!important;
					}
				}
			}
			.info-detail{
				color:$w-font-color-white;
				font-size:$w-size-base;
				.phone{
					font-size:$w-size-sm;
				}
			}
		}
	}
	.main{
		position: relative;
		padding:0 $w-padding-big;
		margin-top:-60rpx;
		display: flex;
		flex-direction: column;
		gap:$w-gap-lg;
		
		.selectmes , .ordermes{ 
			padding:$w-padding-base;
			background-color:$w-card-color;
			box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
			border-radius: 5px;
		}
		.ordermes{
			.orderall{
				border-bottom:1px solid $w-border-color;
			}
			.orderall , .vipmes{
				display: flex;
				justify-content: space-around;
				gap:$w-gap-base;
				padding:$w-padding-base 0;
				.order-item{
					width:100%;
					display: flex;
					flex-direction: column;
					gap:$w-gap-base;
					align-items: center;
					.item-icon{
						width: 24px;
						height: 24px;
					}
					.item-num{
						font-size:$w-size-base;
						color:$w-theme-color;
					}
					.item-text{
						font-size:$w-size-smx;
						color:$w-font-color-deep;
					}
				}
			}
		}
		.selectmes{
			display: flex;
    	flex-wrap: wrap;
			padding:0;
    	.selectmes-item{
    	  position: relative;
    	  width: 25%;
				font-size:$w-size-base;
				color:$w-font-color-deep;
				display: flex;
				flex-direction: column;
				gap:$w-gap-sm;
				align-items: center;
				border-right:1px solid $w-border-color;
				border-bottom:1px solid $w-border-color;
				box-sizing: border-box;
				padding:$w-padding-big 0;
				.item-icon{
					width:24px;
					height:24px;
				}
			}
			.selectmes-item:nth-child(n+5){
				border-bottom:0;
			}
			.selectmes-item:nth-child(4),.selectmes-item:nth-child(8){
				border-right:0;
			}
		}
	}
}
</style>