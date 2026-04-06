<template>
	<view class="order">
		<u-navbar bgColor="#fff" leftIconColor="#fff" title="填写订单" :autoBack="true" :fixed="true"  :placeholder="true"> </u-navbar>
		<view class="order-bg"></view>
		<view class="order-main">
			<view class="order-card">
				<view class="order-card_info">
					<view class="info-departtime">
						4月1日 周三 12:00 发车
					</view>
					<view class="info-stationinfo">
						<view class="stationinfo">
							<view class="upstation">
								上海浦东机场站
							</view>
							<view class="downstation">
								上海虹桥站
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
					<view class="btn">
						预定须知 >
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
					<span class="price">70</span>
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
				<view class="passenger-mian">
					<view class="main-list">
						<view class="list-item" v-for="item in passengerList" :key="item.id">
							<viwe class="delete" @click="handlePassengerDelete(item)">
								<u-icon name="minus-circle-fill"></u-icon>
							</viwe>
        		  <view class="info">
								<view class="info-name">
									{{ item.name }}
								</view>
								<view class="info-code">
									身份证 {{ item.code }}
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
						<u--input
    					placeholder="请输入联系手机"
    					border="0"
    					clearable
  					></u--input>
					</view>
				</view>
			</view>
			<view class="order-remark">
				<view class="title">
					<image :src="remarkIcon"></image>
					行程备注
				</view>
				<view class="text">
					<view class="text-value">
						<span>请填写真实信息，以免无法检票乘车</span>
					</view>
					
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="order-btn">
			<view class="btn-price">
				¥ {{ price }}
			</view>
			<view class="submit-btn">
				提交订单
			</view>
		</view>
		<u-action-sheet title="常用旅客" round="15" :show="passengerShow" @close="passengerShow = false" closeOnClickOverlay>
			<view class="custom-content">
				<view class="add">
					<u-icon name="plus-circle-fill"></u-icon>
					新增乘客
				</view>
			</view>
		</u-action-sheet>
	</view>
</template>
<script setup>
import { ref, watch } from 'vue'
	import topUnrulesImg from '@/static/images/order/top-unrules-img.png'
	import duiIcon from '@/static/images/order/dui.png'
	import walletIcon from '@/static/images/order/wallet.png'
	import remarkIcon from '@/static/images/order/remark.png'
	import phoneIcon from '@/static/images/order/phone.png'
	const price = ref(0)
	const passengerShow = ref(false)
	const options = ref([{
      text: '删除'
  }])
	const passengerList = ref([
		{
			id:1,
			name:'张三',
			code:'12345678'
		},
		{
			id:2,
			name:'李四',
			code:'12345678'
		}
	])
	watch(()=>passengerList.value.length, (newValue, oldValue) => {
		price.value = newValue * 70
	},{immediate: true})
	const handleClick = (index) => {
		console.log(index)
	}
	// 选择旅客
	const handlePassenger = () => {
		passengerShow.value = true
	}
	// 删除旅客
	const handlePassengerDelete = (row) => {
		console.log(row)
		passengerList.value = passengerList.value.filter(item => item.id !== row.id);
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
				width:220rpx;
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
				color:$w-font-color-light;
				.text-value{
					@include ellipsis-style();
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