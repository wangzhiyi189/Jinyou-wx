<template>
  <view class="popular">
    <view class="title">
      <image class="icon" :src="popularIcon"/>
      热门线路
    </view>
    <view class="main">
      <view class="ticket-card" v-for="item in popularList" :key="item.lineId" > 
        <view class="ticket-route">
          {{handleCity(item.startCity)}}-{{ handleCity(item.endCity) }}
        </view>
        <view class="ticket-footer">
          <view class="ticket-price">
            <text class="price-symbol">¥</text>
            <text class="price-number">{{ item.price }}</text>
            <text class="price-unit">起</text>
          </view>
          <button class="ticket-btn" @click="handlePay(handleCity(item.startCity), handleCity(item.endCity))">购票</button>
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { getPopular , popularData } from '@/api'
import popularIcon from '@/static/images/public/popular.png'
const popularList = ref<popularData[]>([])
onMounted(()=>{
  requestPopular();
}) 
const requestPopular = async () => {
  const {data,code,msg} = await getPopular();
  console.log(data,code,msg)
  popularList.value = data;
}
const handleCity = (city:string) => {
  console.log(city)
  if(!city) return '未知'
  const cityArray = JSON.parse(city);
  return cityArray[cityArray.length - 1]
}
const handlePay = (start : string,end : string) => {
  const time = new Date().toISOString().split('T')[0]
  uni.navigateTo({ url: `/pages/tickets/index?start=${start}&end=${end}&time=${time}` });
}
</script>
<style lang="scss" scoped>
.popular{
  .title{
    font-size:$w-size-lg;
    color:$w-font-color-deep;
    margin-bottom:$w-margin-base;
    display:flex;
    align-items:center;
    gap:$w-gap-sm;
    font-weight: 600;
    position: relative;
    .icon{
      width:40rpx;
      height:40rpx;
    }
  }
  .title::after {
    content: "";
    position: absolute;
    left: 115rpx;
    bottom: 0;
    width: 60rpx; /* 可以根据需要调整，比如设为 80% 让线条比文字短一点 */
    height: 6rpx; /* 线条高度 */
    background: linear-gradient(90deg, #ff477e, #ff8c42, #ffd32a);
    filter: blur(1px);
    opacity: 0.9;
  }
  .main{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $w-gap-base;
    margin: 0 auto;
    .ticket-card {
      background-color: $w-card-color;
      border-radius: 20rpx;
      padding: $w-padding-base;
      box-shadow: 
      inset 0 0 10rpx rgba(255, 70, 70, 0.1),
      inset 0 0 20rpx rgba(255, 150, 150, 0.05);
      background: linear-gradient(to bottom, #fff8f8, #ffffff);
      /* 线路标题 */
      .ticket-route {
        font-size: $w-size-lg;
        font-weight: 600;
        color: $w-font-color-deep;
        text-align: center;
        margin-bottom: $w-margin-base;
      }

      /* 途经信息 */
      .ticket-via {
        font-size: $w-size-smx;
        color: $w-font-color-light;
        margin: $w-margin-sm 0 $w-margin-base;
        padding-bottom: $w-padding-base;
        border-bottom: 2px dashed #eee;
      }

      /* 价格+购票按钮行 */
      .ticket-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #ffeeee;
        border-radius:40rpx;
        overflow:hidden;
        /* 价格区域 */
        .ticket-price {
          display: flex;
          align-items: baseline;
          padding: 0 $w-padding-base;
          flex: 1;
          height:100%;
          .price-symbol {
            font-size: $w-size-base;
            color: $w-price-color;
            font-weight: 500;
          }
        
          .price-number {
            font-size:$w-size-lg;
            color: $w-price-color;
            font-weight: bold;
            margin: 0 4px;
          }
        
          .price-unit {
            font-size:$w-size-sm;
            color: $w-price-color;
          }
        }
        /* 购票按钮 */
        .ticket-btn {
          background-color: $w-price-color;
          color: #fff;
          border: none;
          border-radius: 0;
          padding: 0 $w-padding-lg;
          font-size: $w-size-smx;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          box-sizing: border-box;
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
        }
      }

      
    }
  }
}
</style>