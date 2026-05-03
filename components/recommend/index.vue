<template>
  <view class="recommend">
    <view class="title">
      <image class="icon" :src="recommendIcon"/>
      为您推荐
      <!-- {{imgUrl}} -->
    </view>
    <view class="list">
      <view class="list-item" v-for="item in list" :key="item.id">
        <view class="item-head">
          {{ item.title }}
        </view>
        <view class="item-address">
          <u-icon name="map" color="#fff"></u-icon>
          {{item.address}}
        </view>
        <image :src="item.img" mode="aspectFill"></image>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import recommendIcon from '@/static/images/public/recommend.png'

// ===================== TS 改造备注：定义推荐列表项类型 =====================
interface RecommendItem {
  id: number;
  title: string;
  img: string;
  address: string;
}

// ===================== TS 改造备注：给列表指定类型 =====================
const list = ref<RecommendItem[]>([
  {
    id: 1,
    title: '临汾-壶口瀑布',
    img: '',
    address: '吉县',
  },
  {
    id: 2,
    title: '临汾-小西天',
    img: '',
    address: '隰县',
  },
  {
    id: 3,
    title: '临汾-云丘山',
    img: '',
    address: '乡宁',
  },
])

// ===================== TS 改造备注：给函数参数 + 返回值加类型 =====================
const getImg = (name: string): string => {
  // 你后续可以在这里写逻辑
  return ''
}
</script>

<style lang="scss" scoped>
.recommend{
  position: relative;
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
      width:35rpx;
      height:35rpx;
    }
  }
  .title::after {
    content: "";
    position: absolute;
    left: 120rpx;
    bottom: 0;
    width: 60rpx; /* 可以根据需要调整，比如设为 80% 让线条比文字短一点 */
    height: 6rpx; /* 线条高度 */
    background: linear-gradient(90deg, #ff477e, #ff8c42, #ffd32a);
    filter: blur(1px);
    opacity: 0.9;
  }
  .list{
    display: flex;
    flex-wrap: wrap; 
    gap: 20rpx; 
    .list-item{
      position: relative;
      width: calc(50% - 10rpx); 
      background: #f5f5f5;
      border-radius: 12rpx;
      overflow:hidden;
      .item-head{
        background:linear-gradient(45deg, $w-theme-color, #a0cfff);
        color:$w-font-color-white;
        font-size:$w-size-sm;
        padding:$w-padding-sm;
      }
      .item-address{
        position:absolute;
        top:70rpx;
        left:20rpx; /* 修复你写错的 2r0px => 20rpx */
        padding:2px $w-padding-sm;
        border-radius: 20rpx;
        z-index: 995;
        color:$w-font-color-white;
        font-size:$w-size-sm;
        background-color:rgba(0,0,0,0.5);
        display:flex;
        gap:$w-gap-sm;
      }
      image{
        width:100%;
        height:320rpx;
        border-radius: 0 0 10rpx 10rpx ;
      }
    }
  }
}
</style>