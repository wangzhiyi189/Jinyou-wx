<template>
    <u-popup :round="15" mode="bottom" :show="show" @close="show = false" closeOnClickOverlay>
    <view class="tabs-head">
      <view class="head-title">
        <!-- 绑定 current -->
        订单信息
      </view>
      <view class="head-submit">
        <u-icon name="close" @click="show = false"></u-icon>
      </view>
    </view>
    <view class="info-main">
      <view class="card">
        <view class="card-item">
          <view class="item-title">订单号</view>
          <view class="item-content">{{ data?.orderNo }}</view>
        </view>
        <view class="card-item">
          <view class="item-title">订单时间</view>
          <view class="item-content">{{ data?.createTime }}</view>
        </view>
        <view class="card-item">
          <view class="item-title">手机号</view>
          <view class="item-content">{{ data?.contactPhone }}</view>
        </view>
      </view>
    </view>
  </u-popup>
</template>
<script lang="ts" setup> 
import { ref , defineProps } from 'vue'
const props = defineProps({
  data: Object
})
const show = ref(false);

const handleOpen = () => {
  show.value = true;
}

defineExpose({
  handleOpen
})
</script>
<style scoped lang="scss">
.tabs-head {
  display: flex;
  align-items: center;
  padding: $w-padding-lg;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  border-radius: 20rpx 20rpx 0 0;
  .head-title { 
    flex: 1; 
    text-align: center;
    font-weight: 600;
    font-size:$w-size-base;
  }
}
.info-main{
  background-color:$w-background-color;
  padding: $w-padding-base;
  .card{
    padding:0 $w-padding-base;
    background-color:$w-card-color;
    border-radius: $w-border-sm;
    .card-item{
      border-bottom:1px solid $w-border-color;
      padding:$w-padding-lg 0;
      @include flex-content-style($w-gap-base);
      .item-title{
        color:$w-font-color-deep;
        font-size:$w-size-base;
      }
      .item-content{
        color:$w-font-color-shallow;
        font-size:$w-size-smx;
        font-family: 'NumberSong';
        src: local('SimSun'), local('宋体');
      }
    }
    .card-item:last-child{
      border-bottom:0;
    }
  }
}
</style>