<template>
	<view class="home">
		<view class="home-tap" :style="{ backgroundColor: `rgba(0, 122, 255, ${opacity})` }">
			<div class="tap-content" :style="{
        	marginTop: btnTop*2 + 'rpx',
					height:btnHeight*2 + 'rpx',
      	}">
				<view class="tap-left" @click="handleLocation">
					临汾市
				</view>
				<view class="tap-title">
					晋游出行
				</view>
			</div>
		</view>
		<view class="home-swiper">
			<swiper autoplay  :interval="5000" :circular="true"  >
				<swiper-item v-for="item in swiperList" :key="item.id">
					<image :src="item.img" mode="aspectFill" ></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="home-content">
			<view class="content-card">
				<view class="card-address">
					<view class="left" @click="handleSelectCity('start')">
						<view class="text" :class="{ 'none': formData.start_address == '' }">
							{{ formData.start_address || '选择出发地' }}
						</view>
					</view>
					<view class="icon" @click="handleSwitch">
						<image src="@/static/images/home/icon_stadion.png" />
					</view>
					<view class="right" @click="handleSelectCity('end')">
						<view class="text" :class="{ 'none': formData.end_address == '' }">
							{{ formData.end_address || '选择目的地' }}
						</view>
					</view>
				</view>
				<view class="card-date" @click="handleDatePicker">
					<view class="left">
						{{ formData.date }}
					</view>
					<view class="right">
						农历{{ formData.lunarDate }}
					</view>
				</view>
				<view class="card-button">
					<u-button type="primary" text="开始搜索" shape="circle" @click="handleTickets"></u-button>
				</view>
			</view>
			<view class="content-carousel">
				<swiper autoplay :interval="3000" :circular="true" :indicator-dots="true"  >
					<swiper-item v-for="item in carouselList" :key="item.id">
						<image :src="item.img" mode="aspectFill" ></image>
					</swiper-item>
				</swiper>
			</view>
			<Recommend />
		</view>
		<!-- 日期选择器 -->
		<u-calendar title="选择出行时间" :show="calendarShow" @confirm="handleDateConfirm" @close="handleDateClose"></u-calendar>
	</view>
</template>

<script setup>
	import { Lunar } from 'lunar-javascript';
	import { onPageScroll , onShow  } from '@dcloudio/uni-app'
	import Recommend from '@/components/recommend/index.vue'
	import { ref , reactive, onMounted , onUnmounted } from 'vue'
	import { useLocationStore } from '@/store'
	const locationStore = useLocationStore()
	const swiperList = ref([
		{
			id: 1,
			img: 'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00626-663.jpg'
		},
		{
			id: 2,
			img: 'https://img2.baidu.com/it/u=4070310662,2064405952&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667'
		},
	])
	const carouselList = ref([
		{
			id: 1,
			img: 'https://www.bus365.com/files/group1/M00/00/3D/CgoB7Vv9OCuAHDpWAAKqF2m8Nno599.png'
		},
		{
			id: 2,
			img: 'https://img2.baidu.com/it/u=4070310662,2064405952&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667'
		},
	])
	const btnTop = ref(20);    // 按钮距离顶部距离
	const btnRight = ref(0);     // 按钮距离右侧距离
	const btnHeight = ref(50);
	const calendarShow = ref(false)
	const opacity = ref(0)
	
	const formData = reactive({
		start_address: '',
		end_address: '',
		date:'',
		lunarDate:'',
	})
	onMounted(() => { 
		getDate();
		uni.$on('updateData', (data) => {
    	const info = data.value;
			if(!info)return 
			if(info.type == 'start'){
				formData.start_address = info.city
			}else{
				formData.end_address = info.city
			}
  	});
		// getLocation();
		if(uni.getMenuButtonBoundingClientRect()){
			const systemInfo = uni.getSystemInfoSync();
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			btnTop.value = menuButtonInfo.top;
			btnRight.value = systemInfo.screenWidth - menuButtonInfo.right;
			btnHeight.value = menuButtonInfo.height;
		}
		
	})
	onUnmounted (() => {
  	uni.$off('updateData'); // 移除监听
		console.log('页面卸载，事件监听已移除')
	})
	onPageScroll((e) => {
  	const scrollTop = e.scrollTop
  	const max = 80
  	let op = scrollTop / max
  	if (op > 1) op = 1
  	opacity.value = op
	})
	// onShow(() => {
  // 	console.log(getCurrentPages().at(-1).selectInfo)
	// 	const info = getCurrentPages().at(-1).selectInfo;
	// 	if(!info)return 
	// 	if(info.type == 'start'){
	// 		formData.start_address = info.city
	// 	}else{
	// 		formData.end_address = info.city
	// 	}
	// })
	const handleLocation = async() => {
		await locationStore.getCurrentAddress();
		console.log(locationStore)
	}

	const getDate = (now = new Date()) => {
	  // 公历
	  const month = String(now.getMonth() + 1).padStart(2, '0');
	  const day = String(now.getDate()).padStart(2, '0');
	  formData.date = `${month}月${day}日`;
	  // 农历
	  const lunar = Lunar.fromDate(now);
	  formData.lunarDate = `${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`;
	}
	const handleSwitch = () => {
		[formData.start_address, formData.end_address] = [formData.end_address, formData.start_address];
	}
	const handleDatePicker = () => {
		calendarShow.value = true;
	}
	const handleDateClose = () => {
		calendarShow.value = false;
	}
	const handleDateConfirm = (date) => {
		const newDate = new Date(date);
		getDate(newDate);
		handleDateClose();
	}
	const handleSelectCity = (e) => {
	  uni.navigateTo({url: `/pages/selectCity/index?type=${e}`})
	}
	// 开始买票
	const handleTickets = () => {
		console.log(formData);
		uni.navigateTo({url: `/pages/tickets/index`})
	}
</script>

<style scoped lang="scss">
	.home{
		.home-tap{
			width:100%;
			position:fixed;
			top: 0;
  		left: 0;
  		right: 0;
			padding:0 $w-padding-lg;
			box-sizing: border-box;
			z-index: 999;
			color:#fff;
			padding-bottom:$w-padding-lg;
			.tap-content{
				position: relative;
				display:flex;
				align-content: center;
				align-items: center;
				box-sizing:border-box;
				.tap-left{
					font-size:$w-size-smx;
				}
				.tap-title{
					position:absolute;
					left:50%;
					transform:translateX(-50%);
					font-size:$w-size-lg;
					font-weight: 600;
				}
			}
		}
		.home-swiper{
			height:560rpx;
			position: relative;
		}
		.home-swiper::after {
  		content: '';
  		position: absolute;
  		left: 0;
  		right: 0;
  		bottom: -40rpx;
  		height: 60rpx; 
  		z-index: 10;
  		backdrop-filter: blur(16rpx);
  		-webkit-backdrop-filter: blur(16rpx);
  		background: linear-gradient(to top, #fff 0%, 		transparent 100%);
  		pointer-events: none; 
		}
		.home-content{
			position:relative;
			z-index: 998;
			margin-top:-200rpx;
			padding:$w-padding-lg;
			@include flex-column-style($gap:$w-gap-lg);
			.content-card{
				height:auto;
				box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
				border-radius: 20rpx;
				padding:$w-padding-lg $w-padding-base; 
				background-color:$w-card-color;
				.card-address{
					display:flex;
					justify-content: space-between;
					gap:$w-gap-base;
					height:100rpx;
					align-items: center;
					.icon{
						image{
							width:70rpx;
							height:60rpx;
						}
					}
					.left , .right{
						flex:1;
						display:flex;
						width:100%;
						height:100%;
						border-bottom:1px solid #f6f1f1;
						align-items: center; 
						font-size:$w-size-big;
						color:$w-font-color-deep;
						font-weight: 600;
					}
					.none{
						color:$w-font-color-light;
					}
					.right{
						justify-content: flex-end;
						.text{
							text-align: right;
						}
					}
				}
				.card-date{
					display:flex;
					justify-content: space-between;
					align-items: center;
					height:100rpx;
					.left{
						font-size:$w-size-big;
						font-weight: 600;
						color:$w-font-color-deep;
					}
					.right{
						font-size:$w-size-base;
						color:$w-font-color-light;
					}
				}
			}
			.content-carousel{
				height:160rpx;
				border-radius: 20rpx;
				overflow:hidden;
			}
		}
	}
</style>
