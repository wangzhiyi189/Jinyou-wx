<template>
	<view class="tickets">
		<u-navbar leftIconColor="#fff" :title="title" :autoBack="true" :fixed="true"  :placeholder="true"> </u-navbar>
		<u-tabs :current="active" :list="dateList" scrollable @change="handleTabChange">
				<template v-slot:default="{item}">
      		<view class="custom-tab">
      		  <text class="date">{{ item.date }}</text>
      		  <text class="week">{{ item.week }}</text>
      		</view>
				</template>

				<template #right>
					<view @click.stop>
    				<u-icon name="calendar" size="30px" color="#fff" @click="handleCalendar"></u-icon>
					</view>
  			</template>
    </u-tabs>
		<view class="tickets-main">
			<view class="main-list" v-if="listData.length > 0">
				<view class="list-item" v-for="item in listData" :key="item.scheduleId">
					<ticketCard :data="item" @unit="handleUnit" />
				</view>
				
			</view>
			<u-empty mode="search" text="亲未查询到可售班次" v-else></u-empty>
		</view>
		<!-- 日期选择器 -->
		<u-calendar title="选择出行时间" :defaultDate="formData.departDate" :show="calendarShow" :maxDate="new Date(Date.now() + 7*24*60*60*1000).toISOString().slice(0, 10)" @confirm="handleDateConfirm" @close="handleDateClose"></u-calendar>
		<!-- 提示框 -->
		<u-modal :show="tipShow" :title="TipTitle" :content='TipContent' @confirm="tipShow = false"></u-modal>
	</view>
</template>

<script setup lang="ts">
	import {onMounted, ref , reactive} from 'vue';
	import { onLoad , onReachBottom , onShow } from '@dcloudio/uni-app';
	import { getTicketList } from '@/api'
	import ticketCard from '@/components/ticketCard/index.vue'
	import { DateData , getDays } from '@/utils/date'
	interface TicketListData {
		scheduleId: number; // 班次id
		arriveTime: string; // 到达时间
		departTime: string; // 出发时间
		duration:number, // 耗时
		startCity: string; // 出发城市
		endCity: string; // 到达城市
		lineId: number; // 线路id
		price: number; // 价格
		seatRemaining: number; // 剩余座位数
	}
	const title = ref('购买车票')
	const dateList = ref<DateData[]>([])
	const active = ref(2)
	const calendarShow = ref(false)
	const listData = ref<TicketListData[]>([])
	const formData = reactive({
		startCity:'',
		endCity:'',
		departDate:'',
	})
	onMounted(()=>{
		console.log(formData.departDate)
		dateList.value = getDays(8);
		console.log(dateList.value)
		active.value = handleActive(formData.departDate);
	})
	onLoad(options => {
		formData.departDate = options.time;
		formData.startCity = options.start;
		formData.endCity = options.end
		requestTicketList();
  })
	onShow(()=>{
		const app = getApp();
		if (app.globalData!.needRefreshTicketList) {
    	// 只有标记为 true 时，才刷新接口
    	requestTicketList();
    	// 刷新后重置标记，避免每次返回都刷新
    	app.globalData!.needRefreshTicketList = false;
  	}
	})
	const requestTicketList = async () => {
		console.log(formData)
		const {message,data,code} = await getTicketList(formData);
		console.log(data)
		listData.value = data;
	}
	const handleActive = (e : any) => {
		const monthDay = e.slice(5);
		return dateList.value.findIndex(item => item.date === monthDay);
	}
	// 上拉加载触发
  onReachBottom(()=>{
		console.log('触底了')
	}) 
	const handleTabChange = (e : any) : void => {
		formData.departDate = formatToBackendDate(e.date);
		requestTicketList();
	}
	const formatToBackendDate = (dateStr:string) => {
  	// 1. 获取当前年份（比如 2026）
  	const currentYear = new Date().getFullYear();
  	// 2. 拼接成年-月-日格式
  	return `${currentYear}-${dateStr}`;
	}
	const handleCalendar = () : void => {
		calendarShow.value = true
		// requestTicketList();
	}
	const handleDateClose = () : void => {
		calendarShow.value = false
	}
	const handleDateConfirm = (e : any) : void => {
		formData.departDate = e[0];
		active.value = handleActive(e[0]);
		requestTicketList();
		handleDateClose()
	}
	const tipShow = ref<boolean>(false);
	const TipTitle = ref<string>('温馨提示');
	const TipContent = ref<string>('耗时仅供参考，实际时间可能会有所不同，请合理安排出行时间。');
	const handleUnit = () : void => {
		tipShow.value = true;
	}
</script>

<style lang="scss" scoped>
.tickets{
	@include flex-column-style($gap:0);
	height:100vh;
	
	.tickets-main{
		overflow-y: auto;
		padding:$w-padding-big;
	}
}
:deep(.u-tabs){
	background-color:$w-theme-color;
	padding:5px;
	.custom-tab{
  	width: 80rpx;
  	height: 80rpx;
		border-radius: 5px;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
  	color: #fff;
		margin:0 5px;
		font-size: $w-size-base;
		white-space: nowrap;
	}
	.u-tabs__wrapper__nav__item-active{
			.custom-tab{
				background: $w-card-color;
				color:$w-theme-color;
			}
	}
	.u-tabs__wrapper__nav__line{
		display:none!important;
	}
	.uni-scroll-view-content{
		.u-tabs__wrapper__nav__item{
			padding:0;
		}
		
		
	}
}
</style>
