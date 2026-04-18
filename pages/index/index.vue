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
			<TopBannerModel />
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
				<BannerModel />
			</view>
			<Recommend />
		</view>
		<!-- 日期选择器 -->
		<u-calendar title="选择出行时间" :show="calendarShow" @confirm="handleDateConfirm" @close="handleDateClose"></u-calendar>
	</view>
</template>

<script setup lang="ts">
	// ===================== TS 改造备注：修复 lunar 导入报错（uniapp 兼容写法） =====================
	import * as LunarJS from 'lunar-javascript';
	const { Lunar } = LunarJS;

	import { onPageScroll, onShow } from '@dcloudio/uni-app'
	// declare function onPageScroll(callback: (e: { scrollTop: number }) => void): void;
	import Recommend from '@/components/recommend/index.vue'
	import { ref, reactive, onMounted, onUnmounted } from 'vue'
	import { useLocationStore } from '@/store'
	import TopBannerModel from './topBanner.vue';
	import BannerModel from './banner.vue'
	const locationStore = useLocationStore()


	// ===================== TS 改造备注：明确变量类型 =====================
	const btnTop = ref<number>(20);
	const btnRight = ref<number>(0);
	const btnHeight = ref<number>(50);
	const calendarShow = ref<boolean>(false);
	const opacity = ref<number>(0);

	// ===================== TS 改造备注：给表单定义严格类型 =====================
	interface FormData {
		start_address: string;
		end_address: string;
		date: string;
		lunarDate: string;
	}
	const formData = reactive<FormData>({
		start_address: '',
		end_address: '',
		date: '',
		lunarDate: '',
	})

	// ===================== TS 改造备注：给全局事件定义参数类型 =====================
	interface UpdateDataEvent {
		value: {
			type: 'start' | 'end';
			city: string;
		};
	}

	onMounted(() => {
		getDate();
		uni.$on('updateData', (data: UpdateDataEvent) => {
			const info = data.value;
			if (!info) return;
			if (info.type === 'start') {
				formData.start_address = info.city;
			} else {
				formData.end_address = info.city;
			}
		});

		// 获取胶囊按钮位置（安全区适配）
		const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
		if (menuButtonInfo) {
			const systemInfo = uni.getSystemInfoSync();
			btnTop.value = menuButtonInfo.top;
			btnRight.value = systemInfo.screenWidth - menuButtonInfo.right;
			btnHeight.value = menuButtonInfo.height;
		}
	})

	onUnmounted(() => {
		uni.$off('updateData');
	})

	// ===================== TS 改造备注：滚动事件已加类型，无报错 =====================
	onPageScroll((e: { scrollTop: number }) => {
		const scrollTop = e.scrollTop;
		const max = 80;
		let op = scrollTop / max;
		if (op > 1) op = 1;
		opacity.value = op;
	})

	// ===================== TS 改造备注：异步函数添加返回值类型 =====================
	const handleLocation = async (): Promise<void> => {
		await locationStore.getCurrentAddress();
		console.log(locationStore);
	}

	// ===================== TS 改造备注：日期函数参数添加类型 =====================
	const getDate = (now: Date = new Date()): void => {
		const month = String(now.getMonth() + 1).padStart(2, '0');
		const day = String(now.getDate()).padStart(2, '0');
		formData.date = `${month}月${day}日`;
		const lunar = Lunar.fromDate(now);
		formData.lunarDate = `${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`;
	}
	
	const handleSwitch = (): void => {
		[formData.start_address, formData.end_address] = [formData.end_address, formData.start_address];
	}

	const handleDatePicker = (): void => {
		calendarShow.value = true;
	}

	const handleDateClose = (): void => {
		calendarShow.value = false;
	}

	// ===================== TS 改造备注：日历返回值类型 =====================
	const handleDateConfirm = (date: number | Date): void => {
		const newDate = new Date(date);
		getDate(newDate);
		handleDateClose();
	}

	// ===================== TS 改造备注：参数只能是 start / end，更安全 =====================
	const handleSelectCity = (e: 'start' | 'end'): void => {
		uni.navigateTo({ url: `/pages/selectCity/index?type=${e}` });
	}

	// 开始搜索车票
	const handleTickets = (): void => {
		console.log(formData);
		uni.navigateTo({ url: `/pages/tickets/index` });
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
			display: flex;
			flex-direction: column;
			gap:$w-gap-lg;
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