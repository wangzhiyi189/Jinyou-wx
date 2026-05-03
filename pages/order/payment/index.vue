<template>
  <view class="payment">
    <u-navbar bgColor="#fff" leftIconColor="#fff" title="支付订单" :autoBack="true" :fixed="true"  :placeholder="true"> </u-navbar>
    <view class="main">
      <view class="main-info">
        <view class="card">
          <view class="card-date">
            {{ dateInfo?.dateData.date }}{{ dateInfo?.dateData.week }}{{ dateInfo?.hourMinute }}出发
          </view>
          <view class="card-address">
            乘车点：{{ info?.boardPointName }}
          </view>
        </view>
      </view>
      <view class="main-tip">
        还有
        <u-count-down :time="dateExprie" format="mm:ss" @finish="handleFinish"></u-count-down>
        订单自动取消，请尽快支付
      </view>
      <view class="main-price main-box">
        <view class="price-title">应付金额</view>
        <view class="price-money">￥{{ info?.totalAmount }}</view>
      </view>
      <view class="main-radio">
        <u-radio-group 
          v-model="radioValue"
          iconPlacement="right">
	        <view 
            v-for="item in paymentOptains" 
            :key="item.id"
            class="pay-option"
            @click="radioValue = item.id"
          >
            <!-- 自定义图标+文字区域 -->
            <view class="pay-left">
              <image :src="item.icon" class="pay-icon" mode="aspectFit" />
              <text class="pay-name">{{ item.name }}</text>
            </view>
            <!-- uView 原生单选框（只显示圆圈） -->
            <u-radio 
              :name="item.id"
              active-color="red"
              icon-placement="right"
            ></u-radio>
          </view>
        </u-radio-group>
      </view>
      <u-button type="primary" @click="handleSubmit">确认支付</u-button>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getOrderDetail , postPayOrder } from '@/api';
import { getDepartTime , getMinuteDiff } from '@/utils/date';
import { paymentOptains } from '@/utils/payment'
console.log(paymentOptains)
const orderNo = ref<string>()
const info = ref()
const dateInfo = ref()
const dateExprie = ref(0)
const radioValue = ref(paymentOptains[0].id)
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
  const date = getDepartTime(data.departTime);
  // dateExprie.value = getMinuteDiff(data.expireTime);
  const diffMs = new Date(data.expireTime).getTime() - Date.now();
  console.log(dateExprie.value)
  // 手动添加20秒，有误差
   dateExprie.value = diffMs;
  if(dateExprie.value <= 0){
    handleExpire();
  }
  dateInfo.value = date;
  info.value = data;
}
// 倒计时结束
const handleFinish = () => {
  if(dateExprie.value == 0)return 
  handleExpire();
}

const handleSubmit = async() => {
  console.log(radioValue.value)
  const { data ,code,msg} = await postPayOrder({
    orderNo: orderNo.value,
  })
  console.log(data ,code,msg)
  return 
  uni.requestPayment({
      provider: 'weixin',
      timeStamp: payData.timeStamp,
      nonceStr: payData.nonceStr,
      package: payData.package,
      signType: payData.signType,
      paySign: payData.paySign,
      success() {
        uni.showToast({ title: '支付流程走完（测试）' });
      },
      fail(err) {
        // 取消支付的情况不提示
        if (err.errMsg !== 'requestPayment:fail cancel') {
          console.log('支付错误信息：', err);
          uni.showToast({ title: '已触发支付弹窗', icon: 'none' });
        }
      }
    })
}
// 订单过期
const handleExpire = () => {
  uni.showToast({
    title: '订单已过期',
    icon: 'error'
  })
  uni.navigateBack()
}
</script>
<style lang="scss" scoped>
.payment{
  height:100vh;
  background-color: $w-background-color;
  .main{
    @include flex-column-style($gap:$w-gap-base);
    .main-info{
      padding:$w-padding-lg;
      padding-bottom:0;
      .card{
        padding:$w-padding-lg;
        background-color:$w-card-color;
        border-radius: 10rpx;
        @include flex-column-style($gap:$w-gap-base);
        .card-date{
          font-size:$w-size-big;
          font-weight: 600;
          color:$w-font-color-deep;
        }
        .card-address{
          font-size:$w-size-lg;
          color:$w-font-color-deep;
        }
      }
    }
    .main-tip{
      background-color:$w-tip-color;
      padding:$w-padding-sm $w-padding-lg;
      @include flex-center-style($gap:0);
      color:$w-tip-deep;
      font-size:$w-size-smx;
      :deep(.u-count-down){
        .u-count-down__text{
          color:$w-font-color-error;
        }
      }
    }
    .main-box{
      background-color:$w-card-color;
      padding:$w-margin-base $w-padding-lg;
      @include flex-center-style($gap:$w-gap-base);
    }
    .main-price{
      font-size:$w-size-base;
      .price-money{
        color:$w-price-color;
      }
    }
    .main-radio{
      @include flex-column-style($gap:$w-gap-base);
      .pay-option{
        width:100%;
        height:40rpx;
        background-color:$w-card-color;
        padding:$w-padding-lg;
        @include flex-content-style($gap:$w-gap-base);
        .pay-left{
          @include flex-center-style($gap:$w-gap-base);
          .pay-icon{
            width:60rpx;
          }
        }
      }
    }
    .u-button{
      margin-top:$w-margin-big;
      width:80%;
    }
  }
}
</style>