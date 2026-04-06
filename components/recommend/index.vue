<template>
  <view class="recommend">
    <view class="title">
      <image class="icon" :src="recommendIcon"/>
      为您推荐
      {{imgUrl}}
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
<script setup>
import { ref } from 'vue'
import recommendIcon from '@/static/images/public/recommend.png'
// import hukou from '@/static/images/ceshi/hukou.png'
// import xiaoxitian from '@/static/images/ceshi/xiaoxitian.png'
// import yunqiushan from '@/static/images/ceshi/yunqiushan.png'
const list = ref([
  {
    id:1,
    title:'临汾-壶口瀑布',
    img:'',
    address:'吉县',
  },
  {
    id:2,
    title:'临汾-小西天',
    img:'',
    address:'隰县',
  },
  {
    id:3,
    title:'临汾-云丘山',
    img:'',
    address:'乡宁',
  },
])
const getImg = (name) => {

}
</script>
<style lang="scss" scoped>
.recommend{
  .title{
    font-size:$w-size-lg;
    color:$w-font-color-deep;
    margin-bottom:$w-margin-base;
    display:flex;
    align-items:center;
    gap:$w-gap-sm;
    .icon{
      width:40rpx;
      height:40rpx;
    }
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
        left:2r0px;
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