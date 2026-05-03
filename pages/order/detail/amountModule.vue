<template>
    <u-popup :round="15" mode="bottom" :show="show" @close="show = false" closeOnClickOverlay>
    <view class="tabs-head">
      <view class="head-title">
        <view class="text" :class="{active:current == item.value}" v-for="item in tabList" :key="item.value" @click="handleTab(item)">
          <text>{{ item.label }}</text>
        </view>
      </view>
      <view class="head-submit">
        <u-icon name="close" @click="show = false"></u-icon>
      </view>
    </view>
    <view class="info-main" v-show="current == 1">
      <view class="card">
        <view class="card-item">
          <view class="item-title">票价</view>
          <view class="item-content">¥{{ data?.unitPrice }}×1人</view>
        </view>
        <view class="card-item">
          <view class="item-title">购票数量</view>
          <view class="item-content">{{ data?.ticketCount }}张</view>
        </view>
        <view class="card-item">
          <view class="item-title">实付金额</view>
          <view class="item-content price">¥{{ data?.totalAmount }}</view>
        </view>
      </view>
    </view>
    <view class="info-main" v-show="current == 2">
      <view class="passenger">
        <view class="passenger-item" v-for="(item,index) in passenger" :key="index">
          <view class="item-title">{{ item.name }}</view>
          <view class="item-content">手机号：{{ item.phone }}</view>
        </view>
      </view>
    </view>
  </u-popup>
</template>
<script lang="ts" setup> 
import { ref , defineProps } from 'vue'
const props = defineProps({
  data: Object,
  passenger: Object
})
const current = ref(1);
const tabList = ref([
  {
    label:"金额明细",
    value:1
  },
  {
    label:"乘客信息",
    value:2
  }
])
const show = ref(false);
const handleOpen = (e = 1) => {
  current.value = e;
  show.value = true;
}
const handleTab = (item:any) => {
  console.log(item.value)
  current.value = item.value;
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
    font-size:$w-size-base;
    @include flex-center-style($w-gap-base);
    .text{
      flex:1;
      
    }
    .active{
      color:$w-theme-color;
      text{
        border-bottom:4px solid $w-theme-color;
        border-radius: 4rpx;
        padding-bottom:20rpx;
      }
      
    }
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
      .price{
        color:$w-price-color;
        font-size:$w-size-big;
      }
    }
    .card-item:last-child{
      border-bottom:0;
    }
  }
  .passenger{
    @include flex-column-style($gap:$w-gap-base);
    .passenger-item{
      padding:$w-padding-lg $w-padding-base;
      background-color:$w-card-color;
      border-radius: $w-border-sm;
      @include flex-column-style($w-gap-base);
      .item-title{
        color:$w-font-color-deep;
        font-size:$w-size-base;
      }
      .item-content{
        color:$w-font-color-shallow;
        font-size:$w-size-sm;
      }
    }

  }
}
</style>