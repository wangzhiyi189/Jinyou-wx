<template>
  <view class="stack-swiper-container">
    <!-- 外层容器固定宽高，居中 -->
    <view class="stack-wrapper">
      <swiper 
        class="stack-swiper"
        :current="currentIndex"
        @change="handleSwiperChange"
        circular
        autoplay
        interval="3500"
        duration="600"
        previous-margin="60rpx"
        next-margin="60rpx"
      >
        <swiper-item v-for="(item, index) in swiperList" :key="index">
          <view 
            class="stack-swiper-item"
            :style="{
              zIndex: index === currentIndex ? 10 : 1,
              transform: index === currentIndex 
                ? 'translateY(0)' 
                : 'translateY(20rpx)',
              boxShadow: index === currentIndex 
                ? '0 10rpx 30rpx rgba(0,0,0,0.2)' 
                : '0 5rpx 10rpx rgba(0,0,0,0.1)',
              transition: 'all 0.6s ease'
            }"
          >
            <image :src="item.image" mode="widthFix" class="stack-img"></image>
            <view class="stack-text">{{ item.title }}</view>
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script >
export default {
  data() {
    return {
      currentIndex: 0,
      swiperList: [
        { image: '/static/swiper1.png', title: '卡片1' },
        { image: '/static/swiper2.png', title: '卡片2' },
        { image: '/static/swiper3.png', title: '卡片3' }
      ]
    };
  },
  methods: {
    handleSwiperChange(e) {
      this.currentIndex = e.detail.current;
    }
  }
};
</script>

<style scoped>
.stack-swiper-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40rpx;
}
.stack-wrapper {
  width: 80%;
  height: 350rpx;
}
.stack-swiper {
  width: 100%;
  height: 100%;
}
.stack-swiper-item {
  width: 100%;
  height: 100%;
  border-radius: 15rpx;
  overflow: hidden;
  background: #fff;
}
.stack-img {
  width: 100%;
  height: 80%;
}
.stack-text {
  text-align: center;
  margin-top: 10rpx;
  font-size: 28rpx;
  color: #333;
}
</style>