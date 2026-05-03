<template>
	<view class="order">
		<u-navbar bgColor="#fff" leftIconColor="#fff" title="填写订单" :autoBack="true" :fixed="true"  :placeholder="true"> </u-navbar>
		<view class="order-bg"></view>
		<view class="order-main">
			<view class="order-card">
				<view class="order-card_info">
					<view class="info-departtime">
						{{ infoDetail.departDateData.date }} {{ infoDetail.departDateData.week }} {{ infoDetail.departHourMinute }} 发车
					</view>
					<view class="info-stationinfo">
						<view class="stationinfo">
							<view class="upstation">
								{{ infoDetail.stationList[0]?.stationName }}
							</view>
							<view class="downstation">
								{{ infoDetail.stationList[infoDetail.stationList.length - 1]?.stationName }}
							</view>
						</view>
					</view>
					<view class="info-otherinfo">
						<u-icon name="volume" color="#999" size="28"></u-icon>
						请填写真实信息，以免无法检票乘车
					</view>
				</view>
				<view class="order-card_hr">
					<image class="hr" :src="topUnrulesImg" />
				</view>
				<view class="scheduletips">
					<view class="tiplist">
						<view class="tiplist-item">
							<image :src="duiIcon" class="icon" />
							请至少选择一张成人票
						</view>
						<view class="tiplist-item">
							<image :src="duiIcon" class="icon" />
							一经售出概不退换
						</view>
					</view>
					<view class="btn" @click="handleTabsPanel">
						预定须知 
						<u-icon name="arrow-right" color="#2979ff" size="16"></u-icon>
					</view>
				</view>
			</view>
			<view class="order-money">
				<view class="money-text">
					<image :src="walletIcon"></image>
					票价
				</view>
				<view class="money-price">
					<span class="unit">¥</span>
					<span class="price">{{ infoDetail.price }}</span>
					<span>元/张</span>
				</view>
			</view>
			<view class="order-passenger">
				<view class="passenger-head">
					<view class="head_title">
						<view class="title">
							乘客
						</view>
						<view class="text">
							单笔订单最多6人
						</view>
					</view>
					<view class="head-btn" @click="handlePassenger">
						<u-icon name="plus-circle-fill"></u-icon>
						添加乘客
					</view>
				</view>
				<view class="passenger-box">
					<view class="box-list">
						<view class="list-item" :class="{ selected: isSelected(item.passengerId!) }" v-for="item in passengerList" :key="item.passengerId" @click="handlePassengerSelect(item)">
							{{ item.name }}
						</view>
					</view>
				</view>
				<view class="passenger-mian">
					<view class="main-list">
						<view class="list-item" v-for="item in passengerSelect" :key="item.passengerId">
							<view class="delete" @click="handlePassengerDelete(item.passengerId!)">
								<u-icon name="minus-circle-fill"></u-icon>
							</view>
        		  <view class="info">
								<view class="info-name">
									{{ item.name }}
								</view>
								<view class="info-code">
									手机号 {{ item.phone }}
								</view>
							</view>
        		</view>
					</view>
				</view>
				<view class="passenger-phone">
					<view class="phone-text">
						<image :src="phoneIcon"></image>
						手机号
					</view>
					<view class="phone-value">
						<u-input
							v-model="formData.contactPhone"
    					placeholder="请输入联系手机"
							type="number" :min="11" :max="11"
    					border="0"
    					clearable
  					></u-input>
					</view>
				</view>
			</view>
			<view class="order-remark">
				<view class="title">
					<image :src="addressIcon"></image>
					乘车地点
				</view>
				<view class="text" @click="handleAddress">
					<view class="text-value">
						<span class="value" v-if="selectAddress">{{ selectAddress }}</span>
						<span class="empty" v-else>请选择上车地点</span>
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="order-remark">
				<view class="title">
					<image :src="remarkIcon"></image>
					行程备注
				</view>
				<view class="text">
					<view class="text-value" @click="handleRemake">
						<span v-if="formData.remark"> {{ formData.remark }}</span>
						<span class="empty" v-else>请填写真实信息，以免无法检票乘车</span>
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="order-btn">
			<view class="btn-price">
				¥ {{ price }}
			</view>
			<view class="submit-btn" @click="handleSubmit">
				提交订单
			</view>
		</view>
		<!-- 乘客模块 -->
		<PaxModule :data="passengerList" ref="paxModuleRef" @select="handlePaxSelect"/>
		<RmkModule ref="rmkModuleRef" @change="handleRmkChange" />
		<TabsPanel ref="tabsPanelRef" :data="infoDetail" :stationList="columnsAddress" />
		<u-picker :show="addressShow"  :columns="[columnsAddress]" keyName="stationName" @cancel="addressShow = false" @confirm="handleSelectAddress"></u-picker>
	</view>
</template>
<script setup lang="ts">
 import { onMounted, ref, watch , reactive } from 'vue'
	import topUnrulesImg from '@/static/images/order/top-unrules-img.png'
	import duiIcon from '@/static/images/order/dui.png'
	import walletIcon from '@/static/images/order/wallet.png'
	import remarkIcon from '@/static/images/order/remark.png'
	import phoneIcon from '@/static/images/order/phone.png'
	import addressIcon from '@/static/images/order/address.png'
	import { getTicketDetail , getPassengerList , postOrdeSubmit , PassengerData , OrderData , postOrderCancel ,InfoDetailData , StationInfo } from '@/api'
	import { onLoad, onShow  } from '@dcloudio/uni-app';
	import { DateData , getDepartTime } from '@/utils/date'
	import PaxModule from './paxModule.vue'
	import RmkModule from './rmkModule.vue'
	import TabsPanel from '@/components/tabsPanel'
	const appData = getApp();
	
	
	const price = ref<number>(0)
	const scheduleId = ref<number>()

	const options = ref<{ text: string }[]>([{
      text: '删除'
  }])
	const infoDetail = ref<InfoDetailData>({
		scheduleId: 0,
  	createUser: 0,
  	scheduleName: '',
  	lineId: 0,
  	departTime: '',
  	arriveTime: '',
  	duration: '',
  	plateNumber: '',
  	vehicleType: '',
  	price: 0,
  	seatTotal: 0,
  	seatRemaining: 0,
  	status: 0,
  	isRecommend: 0,
  	sort: 0,
  	createTime: '',
  	updateTime: '',
  	remark: '',
  	startCity: '',
  	endCity: '',
  	stationList: [],
  	departDateData: {
  	  date: '',
  	  week: ''
  	},
  	departHourMinute: ''
	})
	const formData = reactive<OrderData>({
		scheduleId:0, // 班次id
		ticketCount:0,// 购票数量
		boardPointId:0, // 用户选择 / 填写的上车点id
		contactPhone:'18649570396', // 联系方式
		remark:'', // 留言
		passengerIdList:[], // 乘客id列表
		// startCity: '',
  	// endCity: '',
	})
	const passengerList = ref<PassengerData[]>([])
	const passengerSelect = ref<PassengerData[]>([])
	const addressShow = ref<boolean>(false)
	const columnsAddress = ref<StationInfo[]>([])
	const selectAddress = ref<string>('')
	const paxModuleRef = ref()
	const rmkModuleRef = ref()
	const tabsPanelRef = ref()
	onLoad((options:{id:number}) => {
    // 所有url参数全部在 options 对象里
		scheduleId.value = options.id;
		formData.scheduleId = options.id;
    console.log('跳转传参id', scheduleId.value) // 11
		requestTicketDetail();
  })
	onShow(() => {
		requestPassenger()
	})
	watch(()=>passengerSelect.value.length, (newValue, oldValue) => {
		price.value = newValue * infoDetail.value.price
	},{immediate: true})
	const requestPassenger = async () :Promise<void> => {
  	const {data,code,msg} = await getPassengerList()
  	passengerList.value = data;
		
	}
	const requestTicketDetail = async () => {
		const {message,data,code} = await getTicketDetail({
			scheduleId: scheduleId.value as number
		});
		const date = getDepartTime(data.departTime)
		infoDetail.value = data;
		infoDetail.value.departDateData = date.dateData;
		infoDetail.value.departHourMinute = date.hourMinute;
		columnsAddress.value = data.stationList;
		console.log(columnsAddress.value,'========312')
	}
	const handleClick = (index: number) => {
		console.log(index)
	}
	const handlePassengerSelect = (item:PassengerData) => {
		const index = passengerSelect.value.findIndex(i => i.passengerId === item.passengerId);
		if (index !== -1) {
    	passengerSelect.value.splice(index, 1)
    	return
  	}
		if(passengerSelect.value.length+1 > infoDetail.value.seatRemaining){
			uni.showToast({
				title:'该班次已无剩余座位',
				icon:'none'
			})
			return 
		}
		if(passengerSelect.value.length+1 >= 6){
			uni.showToast({
				title:'最多选择6位乘客',
				icon:'none'
			})
			return 
		}
		passengerSelect.value.push(item)
	}
	const handlePaxSelect = (data:Array<number>)=>{
		const selectedList = passengerList.value.filter(item => data.includes(item.passengerId!));
		passengerSelect.value = selectedList;
	}
	// 备注
	const handleRmkChange = (e : string) => {
		formData.remark = e
	}
	const isSelected = (id : number) => {
  	return passengerSelect.value.some(item => item.passengerId === id)
	}
	// 选择旅客
	const handlePassenger = () => {
		var obj = passengerSelect.value.map(item => item.passengerId)
		paxModuleRef.value.handleOpen(obj);
	}
	// 删除旅客
	const handlePassengerDelete = (row :number) => {
		passengerSelect.value = passengerSelect.value.filter(item => item.passengerId !== row);
	}
	// 选择上车地点
	const handleAddress = () => {
		addressShow.value = true
	}
	const handleSelectAddress = (e : any) => {
		selectAddress.value = e.value[0].stationName
		formData.boardPointId = e.value[0].stationId
		addressShow.value = false
	}
	// 提交订单
	const handleSubmit = async() : Promise<void> => {
		if(passengerSelect.value.length === 0){
			uni.showToast({
				title:'请选择旅客',
				icon:'none'
			})
			return
		}
		if(formData.contactPhone.length !== 11){
			uni.showToast({
				title:'请输入正确的手机号',
				icon:'none'
			})
			return 
		}
		if(!formData.boardPointId){
			uni.showToast({
				title:'请选择乘车地点',
				icon:'none'
			})
			return 
		}
		var passengerObj : number[] = [];
		passengerSelect.value.map((item:PassengerData) => { 
			passengerObj.push(item.passengerId!)
    })
		formData.ticketCount = passengerSelect.value.length
		formData.passengerIdList = passengerObj
		try{
			uni.showLoading({
				title:'提交中...',
				showCancel: false,
				mask: true
			})
			const { data , code , msg } = await postOrdeSubmit(formData);
			appData.globalData!.needRefreshTicketList = true;
			// 有订单未支付
			if(code == 200){
				handlePushPayment(data)
			}else{
				uni.showToast({
					title:msg,
					icon:'error'
				})
			}
		}catch(err : any){
			if(err.code == 500){
				uni.showModal({
					title:'提示',
					content:err.msg,
					confirmText:'查看订单',
					cancelText:'取消订单',
					success: async function (res) {
						if (res.confirm) {
							handlePushPayment(err.data)
						} else if (res.cancel) {
							const { code,msg,data} = await postOrderCancel(err.data);
							if(code == 200){
								uni.showToast({
									title:msg,
									icon:'success'
								})
							}else{
								uni.showToast({
									title:msg,
									icon:'error'
								})
							}
						}
					},
				})
			}
		}finally{
			uni.hideLoading()
		}
		
	}
	const handlePushPayment = (codeNo:string) : void => {
		uni.navigateTo({
			url:`/pages/order/payment/index?orderNo=${codeNo}`
		})
	}
	// 备注
	const handleRemake = () => {
		rmkModuleRef.value.handleOpen()
	}
	// 预定须知
	const handleTabsPanel = () => {
		tabsPanelRef.value.handleOpen()
	}
</script>

<style scoped lang="scss">
.order{
	background-color:$w-background-color;
	min-height:100vh;
	.order-bg{
		width: 100%;
    height: 60%;
    background: linear-gradient(to bottom, #009eff 0%, #f4f4f4 80% , $w-background-color);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
	}
	.order-main{
		position:relative;
		padding:$w-padding-big;
		overflow-y: auto;
		box-sizing: border-box;
		padding-bottom:140rpx;
		@include flex-column-style($gap:$w-gap-base);
		.order-card{
			margin: 0;
  		padding: 0;
			.order-card_info{
				background-color:#fff;
				border-radius: 20rpx 20rpx 0 0;
				padding:$w-padding-big;
				padding-bottom:0;
				.info-departtime{
					font-size: $w-size-max;
					font-weight: 600;
				}
				.info-stationinfo{
					@include flex-content-style($gap:$w-gap-lg);
					.stationinfo{
						padding:$w-padding-lg 0 ;
						font-size:$w-size-lg;
						color:$w-font-color-deep;
						.upstation{
							padding-left:$w-padding-big;
							padding-bottom:$w-padding-big;
							position: relative;
						}
						.downstation{
							padding-left:$w-padding-big;
							position: relative;
						}
						.upstation::before{
							content: '';
    					width: 16rpx;
    					height: 16rpx;
    					border-radius: 50%;
    					background: #ff9000;
    					position: absolute;
    					left: 0;
    					top: 16rpx;
						}
						.upstation::after {
    					content: '';
    					width: 1rpx;
    					height: 100%;
    					background: #f4f6fa;
    					position: absolute;
    					left: 8rpx;
    					top: 40rpx;
						}
						.downstation::before {
    					content: '';
    					width: 16rpx;
    					height: 16rpx;
    					border-radius: 50%;
    					background: #00d09b;
    					margin-top: -6rpx;
    					position: absolute;
    					left: 0;
    					top: 50%;
						}
					}
				}
				.info-otherinfo{
					@include flex-center-style($gap:$w-gap-sm);
					font-size:$w-size-sm;
					color:$w-font-color-light;
					:deep(.u-icon){
						.u-icon__icon{
							font-size:$w-size-smx!important;
						}
					}

				}
			}
			.order-card_hr{
				width:100%;
				height:40rpx;
				.hr{
					width:100%;
					height:100%;
				}
			}
			.scheduletips{
				background-color:#fff;
				border-radius: 0 0 20rpx 20rpx ;
				padding:$w-padding-base $w-padding-big;
				padding-top:0;
				@include flex-content-style($gap:$w-gap-lg);
				.tiplist{
					@include flex-column-style($gap:$w-gap-sm);
					.tiplist-item{
						@include flex-center-style($gap:$w-gap-sm);
						font-size:$w-size-sm;
						color:$w-font-color-light;
						image{
							width:20rpx;
							height:20rpx;
						}
					}
				}
				.btn{
					color:$w-theme-color;
					font-size:$w-size-smx;
					@include flex-center-style($gap:4rpx);
				}
			}
		}
		.order-passenger , .order-money , .order-remark{
			background: #fff;
			padding:$w-padding-base;
			border-radius: 15rpx;
		}
		.order-money{
			color:$w-font-color-deep;
			font-size:$w-size-base;
			@include flex-content-style($gap:$w-gap-lg);
			.money-text{
				@include flex-center-style($gap:$w-gap-sm);
				font-size:$w-size-base;
				image{
					width:35rpx;
					height:35rpx;
				}

			}
			.money-price{
				.unit{
					font-size:$w-size-sm;
					color:$w-red-color;
				}
				.price{
					color:$w-red-color;
				}
			}
		}
		.order-passenger{
			padding:$w-padding-lg 0;
			.passenger-head{
				width:100%;
				padding:0 $w-padding-lg;
				box-sizing: border-box;
				padding-bottom:$w-padding-lg;
				@include flex-content-style($gap:$w-gap-lg);
				.head_title{
					@include flex-center-style($gap:$w-gap-sm);
					.title{
						font-size:$w-size-lg;
						color:$w-font-color-deep;
					}
					.text{
						font-size:$w-size-sm;
						color:$w-font-color-light;
					}
				}
				.head-btn{
					@include flex-center-style($gap:$w-gap-sm);
					font-size:$w-size-base;
					color:$w-font-color-light;
					color:$w-theme-color;
					:deep(.u-icon){
						margin-top:5rpx;
						.u-icon__icon{
							font-size:$w-size-big!important;
							color:$w-theme-size-color!important;
						}
					}

				}
			}
			.passenger-box{
				padding:0 $w-padding-lg $w-padding-lg $w-padding-lg;
				.box-list{
					@include flex-center-style($gap:$w-gap-lg);
					flex-wrap: wrap;
					.list-item{
						width:120rpx;
						text-align: center;
						border-radius: 5px;
						border:1px solid $w-font-color-light;
						font-size:$w-size-smx;
						color:$w-font-color-shallow;
						padding:5rpx 0;
					}
					.selected{
						border:1px solid $w-theme-color;
						color:$w-theme-color;
					}
				}
			}
			.passenger-mian{
				.main-list{
					@include flex-column-style($gap:0);
					padding:0 $w-padding-lg;
					.list-item{
						@include flex-center-style($gap:$w-gap-base);
						border-bottom:1px solid $w-border-color;
						padding:$w-padding-base 0;
						.delete{
							:deep(.u-icon){
								.u-icon__icon{
									font-size:$w-size-big!important;
									color:$w-red-color!important;
								}
							}
						}
						.info{
							.info-name{
								font-size:$w-size-lg;
								color:$w-font-color-deep;
							}
							.info-code{
								font-size:$w-size-sm;
								color:$w-font-color-light;

							}
						}
					}
					.list-item:last-child{
						border-bottom:0;
					}
				}
			}
			.passenger-phone{
				@include flex-center-style($gap:$w-gap-lg);
				border-top:1px solid $w-border-color;
				padding:0 $w-padding-lg;
				padding-top:$w-padding-base;
				.phone-text{
					width:180rpx;
					@include flex-center-style($gap:$w-gap-sm);
					font-size:$w-size-lg;
					color:$w-font-color-deep;
					font-weight: 600;
					image{
						width:45rpx;
						height:45rpx;
					}
				}
				.phone-value{
					font-size:$w-size-lg;
					color:$w-font-color-deep;
					:deep(.u-input){
						.u-input__content__field-wrapper__field{
							font-size:$w-gap-lg!important;
						}
					}
				}
			}
		}
		.order-remark{
			@include flex-content-style($gap:$w-gap-lg);
			.title{
				@include flex-center-style($gap:$w-gap-sm);
				min-width:220rpx;
				font-size:$w-size-lg;
				color:$w-font-color-deep;
				font-weight: 600;
				image{
					width:30rpx;
					height:30rpx;
				}
			}
			.text{
				@include flex-center-style($gap:$w-gap-sm);
				font-size:$w-size-smx;
				
				.text-value{
					@include ellipsis-style();
					color:$w-font-color-shallow;
					.empty{
						color:$w-font-color-light;
					}
				}
			}
		}
	}
	.order-btn{
		height:100rpx;
		position:fixed;
		width:100%;
		bottom:0;
		@include flex-content-style($gap:$w-gap-base);
		border-top:1px solid $w-border-color;
		box-sizing: border-box;
		background-color:$w-card-color;
		.submit-btn{
			background:$w-button-color;
			height:100%;
			display:flex;
			align-items: center;
			width:250rpx;
			justify-content: center;
			font-size:$w-size-big;
			color:$w-font-color-white;
		}
		.btn-price{
			padding-left:$w-size-big;
			font-size:$w-size-big;
			font-weight: 600;
			color:$w-red-color;
		}
	}
	:deep(.u-navbar){
  	.u-status-bar , .u-navbar__content{
  	  background-color:#25abff!important;
  	}
	}
}	    

</style>