<template>
  <view class="detail">
    <u-navbar leftIconColor="#fff" :title="title" :autoBack="true" :fixed="true"  :placeholder="true"> </u-navbar>
    <view class="detail-head">
      <!-- 待付款 -->
      <view class="head-info" v-if="info?.orderStatus == 0">
        <view class="info-icon">
          <u-icon name="rmb-circle"></u-icon>
        </view>
        <view class="info-content">
          <view class="content-text">
            待付款
          </view>
          <view class="content-desc">
            请在<u-count-down :time="dateExprie" format="mm:ss" @finish="handleFinish"></u-count-down>分内完成支付，超时订单将取消
          </view>
        </view>
      </view>
      <!-- 已取消 -->
      <view class="head-info" v-if="info?.orderStatus == 3">
        <view class="info-icon">
          <u-icon name="close-circle"></u-icon>
        </view>
        <view class="info-content">
          <view class="content-text">
            已取消
          </view>
          <view class="content-desc">
            订单已取消，您可以重新预定
          </view>
        </view>
      </view>
      <!-- 已支付待出行 -->
      <view class="head-info" v-if="info?.orderStatus == 1">
        <view class="info-icon">
          <u-icon name="pause-circle"></u-icon>
        </view>
        <view class="info-content">
          <view class="content-text">
            待出行
          </view>
          <view class="content-desc">
            请您合理安排出行时间
          </view>
        </view>
      </view>
      <!-- 已出行 -->
      <view class="head-info" v-if="info?.orderStatus == 5">
        <view class="info-icon">
          <u-icon name="checkmark-circle"></u-icon>
        </view>
        <view class="info-content">
          <view class="content-text">
            已出行
          </view>
          <view class="content-desc">
            订单已完成
          </view>
        </view>
      </view>
    </view>
    <view class="order-main">
			<view class="order-card">
				<view class="order-card_info">
					<view class="info-departtime">
            <view class="date">
              {{ dateInfo?.dateData.date }} {{ dateInfo?.dateData.week }} {{ dateInfo?.hourMinute }}出发
            </view>
						<view class="price">¥{{ info?.totalAmount }}</view>
					</view>
					<view class="info-stationinfo">
						<view class="stationinfo">
							<view class="upstation">
								{{ info?.stationInfo[0]?.stationName }}
							</view>
							<view class="downstation">
								{{ info?.stationInfo[info.stationInfo.length - 1]?.stationName }}
							</view>
						</view>
					</view>
					<view class="info-otherinfo">
						<view class="otherinfo-item">
              <u-icon name="clock"></u-icon>
              约{{ totalDate }}小时
            </view>
            <view class="otherinfo-item" v-if="info?.orderStatus != 0 && info?.orderStatus != 3">
              <u-icon name="car"></u-icon>
              {{ info?.plateNumber }}
            </view>
					</view>
				</view>
				<view class="order-card_hr">
					<image class="hr" :src="topUnrulesImg" />
				</view>
				<view class="scheduletips">
					<view class="tiplist">
            <view class="tiplist-item" @click="handleDetailInfo">
              <u-icon name="info-circle"></u-icon>
              详细说明
              <u-icon name="arrow-right"></u-icon>
            </view>
            <view class="tiplist-item" @click="handleOrderInfo">
              <u-icon name="order"></u-icon>
              订单信息
              <u-icon name="arrow-right"></u-icon>
            </view>
            <view class="tiplist-item" @click="handleAmountInfo(1)">
              <u-icon name="rmb-circle"></u-icon>
              金额明细
              <u-icon name="arrow-right"></u-icon>
            </view>
					</view>
					<view class="btn">
						<!-- 预定须知 > -->
					</view>
				</view>
			</view>
      <view class="order-more">
        <view class="more-item">
          <view class="item-label">
            <image class="icon" :src="passengerImg"></image>
            出行乘客
          </view>
          <view class="item-value"  @click="handleAmountInfo(2)">
            {{ passengerName }}
            <u-icon name="arrow-right"></u-icon>
          </view>
        </view>
        <view class="more-item">
          <view class="item-label">
            <image class="icon" :src="addressImg"></image>
            上车地点
          </view>
          <view class="item-value">
            {{ boardPointName }}
            <u-icon name="arrow-right"></u-icon>
          </view>
        </view>
        <view class="more-item">
          <view class="item-label">
            <image class="icon" :src="phoneIcon"></image>
            预定手机号
          </view>
          <view class="item-value">
            {{ info.contactPhone }}
            <!-- <u-icon name="arrow-right"></u-icon> -->
          </view>
        </view>
      </view>
		</view>
    <view class="oreder-btn">
      <view class="btn-flex" v-if="info?.orderStatus == 0">
        <u-button @click="handlePayCancel">取消订单</u-button>
        <u-button type="primary" @click="handlePayOrder">立即支付</u-button>
      </view>
      <view class="btn-flex" v-if="info?.orderStatus == 3 || info?.orderStatus == 5">
        <u-button type="primary" @click="handleReserve">再次预定</u-button>
      </view>
    </view>
    <TabsPanel :data="info" :stationList="infoDetail" ref="tabsPanelRef" />
    <OrderInfoModule :data="info" ref="orderInfoModuleRef" />
    <AmountModule :data="info" :passenger="passengerList" ref="amountModuleRef" />
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app';
import { getOrderDetail , postPayOrder , postOrderCancel } from '@/api';
import { getDepartTime , getTimeInterval } from '@/utils/date';
import TabsPanel from '@/components/tabsPanel/index.vue'
import OrderInfoModule from './orderInfoModule.vue'
import AmountModule from './amountModule.vue'
import topUnrulesImg from '@/static/images/order/top-unrules-img.png'
import passengerImg from '@/static/images/order/passenger.png'
import addressImg from '@/static/images/order/address.png'
import phoneIcon from '@/static/images/order/phone.png'

const title = ref('订单详情')
const info = ref()
const dateInfo = ref()
const dateExprie = ref(0)
const orderNo = ref<string>()
const infoDetail = ref([])
const totalDate = ref(''); // 总时长
const boardPointName = ref('') // 上车地点
const passengerName = ref('')
const passengerList = ref([])
const tabsPanelRef = ref()
const orderInfoModuleRef = ref()
const amountModuleRef = ref()
onLoad((options:{orderNo:string}) => {
  orderNo.value = options.orderNo;
  requestDetail()
});
const requestDetail = async () => {
  if(!orderNo.value){
    uni.showToast({
      title: '订单号不存在',
      icon: 'error'
    })
    return;
  }
  const {data,code,msg} = await getOrderDetail({orderNo: orderNo.value});
  if(code != 200)return uni.showToast({
    title: msg,
    icon: 'error'
  })
  const date = getDepartTime(data.departTime);
  infoDetail.value = data.stationInfo;
  if(data.orderStatus == 0){
    const diffMs = new Date(data.expireTime).getTime() - Date.now();
    dateExprie.value = diffMs;
  }
  dateInfo.value = date;
  info.value = data;
  // 获取总时长
  totalDate.value = getTimeInterval(data.departTime,data.arriveTime).simpleFormat
  // 获取乘车地点
  boardPointName.value = data.stationInfo.filter((item:any) => item.stationId == data.boardPointId)[0].stationName
  // 获取乘客
  passengerList.value = JSON.parse(data.passengerSnapshot)
  passengerName.value = passengerList.value.map((p : any) => p.name).join(',')
  
}
// 线路详情
const handleLineDetail = () : void => { 
  console.log(info.value.stationInfo)
}
// 再次预定
const handleReserve = () : void => {
  // 回到首页
  uni.switchTab({
    url: '/pages/index/index'
  })
}
// 立即支付
const handlePayOrder = () : void => {
  uni.navigateTo({
		url:`/pages/order/payment/index?orderNo=${info.value.orderNo}`
	})
}
// 取消订单
const handlePayCancel = async() => { 
  const { code,msg,data} = await postOrderCancel(info.value.orderNo)
  console.log(code,msg,data)
  if(code == 200){
    requestDetail()
    uni.showToast({
      title: '取消成功',
      icon: 'success'
    })
  }else{
    uni.showToast({
      title: msg,
      icon: 'error'
    })
  }
}
// 倒计时结束
const handleFinish = () : void => { 
  console.log('倒计时结束')
  // info.value.orderStatus = 3
}
// 详细说明
const handleDetailInfo = () : void => { 
  tabsPanelRef.value.handleOpen();
}
// 订单信息
const handleOrderInfo = () : void => { 
  orderInfoModuleRef.value.handleOpen();
}
// 金额明细
const handleAmountInfo = (e : number) : void => { 
  amountModuleRef.value.handleOpen(e);
}
</script>
<style setup lang="scss"> 
.detail{
  height:100vh;
  overflow:auto;
  @include flex-column-style($gap:0);
  background-color:$w-background-color;
  .detail-head{
    background-color:$w-theme-color;
    height:350rpx;
    padding:$w-padding-lg;
    color:$w-font-color-white;
    .head-info{
      @include flex-center-style($gap:$w-gap-base);
      .info-icon{
        :deep(.u-icon){
          .u-icon__icon{
            font-size:60rpx!important;
            color:$w-font-color-white!important;
          }
        }
      }
      .info-content{
        .content-text{
          font-size:$w-size-max;
          font-weight: 600;
        }
        .content-desc{
          margin-top:$w-margin-sm;
          font-size:$w-size-sm;
          @include flex-content-style;
          :deep(.u-count-down){
            .u-count-down__text{
              font-size:$w-size-sm;
              color:$w-font-color-white;
            }
          }
        }
      }
    }
  }
  .order-main{
    margin-top:-250rpx;
		position:relative;
		padding:$w-padding-base;
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
          @include flex-content-style($gap:$w-gap-base);
          .date{
            font-size: $w-size-max;
					  font-weight: 600;
          }
          .price{
            color:$w-price-color;
            font-size:$w-size-big;
          }
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
          .line{
            font-size:$w-size-smx;
            @include flex-center-style($gap:0);
            min-width:50rpx;
            color:$w-theme-color;
            .u-icon{
              margin-top:2rpx;
              .u-icon__icon{
                color:$w-theme-color!important;
              }
            }
          }
				}
				.info-otherinfo{
					@include flex-center-style($gap:$w-gap-base);
					font-size:$w-size-sm;
					color:$w-font-color-light;
					.otherinfo-item{
            @include flex-center-style($gap:5rpx);
            .u-icon{
              margin-top:2rpx;
              .u-icon__icon{
                color:$w-font-color-light!important;
              }
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
				.tiplist{
          width:100%;
					@include flex-content-style($gap:$w-gap-sm);
					.tiplist-item{
						@include flex-center-style($gap:3rpx);
						font-size:$w-size-smx;
						color:$w-font-color-shallow;
						.u-icon{
              margin-top:5rpx;
              .u-icon__icon{
                font-size:$w-size-base!important;
                color:$w-font-color-shallow!important;
              }
            }
					}
				}
				.btn{
					color:$w-theme-color;
					font-size:$w-size-smx;
				}
			}
		}
    .order-more{
      background-color: $w-card-color;
      border-radius:20rpx;
      padding:0 $w-padding-lg;
      .more-item{
        padding:$w-padding-lg 0;
        @include flex-content-style($gap:$w-gap-base);
        border-bottom:1rpx solid $w-border-color;
        .item-label{
          font-weight: 600;
          font-size:$w-size-lg;
          @include flex-center-style($gap:$w-gap-sm);
          .icon{
            width:40rpx;
            height:40rpx;
          }
        }
        .item-value{
          font-size:$w-size-smx;
          color:$w-font-color-shallow;
          @include flex-center-style($gap:5rpx);
        }
      }
      .more-item:last-of-type {
        border:0;
      }
    }
	}
  .oreder-btn{
    width:100%;
    padding:$w-padding-base $w-padding-lg;
    box-sizing:border-box;
    position: fixed;
    bottom:0;
    background-color:$w-card-color;
    .btn-flex{
      @include flex-content-style($gap:30rpx);
    }
    .u-button{
      max-width:80%;
      border-radius: 50rpx;
      height:70rpx;
      font-size:$w-size-smx;
    }
  }
}
</style>