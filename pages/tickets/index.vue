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
		<u-calendar title="选择出行时间" :show="calendarShow" @confirm="handleDateConfirm" @close="handleDateClose"></u-calendar>
		<!-- 提示框 -->
		<u-modal :show="tipShow" :title="TipTitle" :content='TipContent' @confirm="tipShow = false"></u-modal>
	</view>
</template>

<script setup lang="ts">
	import {onMounted, ref} from 'vue';
	import { onLoad , onReachBottom } from '@dcloudio/uni-app';
	import { getTicketList } from '@/api'
	import ticketCard from '@/components/ticketCard/index.vue'
	interface DateData{
		date:string,
		week:string
	}
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
	const active = ref(0)
	const calendarShow = ref(false)
	const listData = ref<TicketListData[]>([])
	onMounted(()=>{
		dateList.value = getDaysIn15Days(15);
		requestTicketList();
	})
	const requestTicketList = async () => {
		const {message,data,code} = await getTicketList({
			startCity:'洪洞',
			endCity:'小店',
			departDate:'2026-4-19'
		});
		console.log(data)
		listData.value = data;
	}
	onLoad(options => {
    console.group(options)
  })
	// 上拉加载触发
  onReachBottom(()=>{
		console.log('触底了')
	}) 
	const getDaysIn15Days = (num:number) : Array<DateData> => {
		const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  	const today = new Date()
  	return Array.from({ length: num }, (_, i) => {
  	  const d = new Date(today.getTime() + i * 86400000)
  	  const m = String(d.getMonth() + 1).padStart(2, '0')
  	  const day = String(d.getDate()).padStart(2, '0')
  	  return {
  	    date: `${m}-${day}`,
  	    week: i === 0 ? '今天' : week[d.getDay()]
  	  }
  	})
	}
	const handleTabChange = (e : any) : void => {
		console.log(e)
	}
	const handleCalendar = () : void => {
		// calendarShow.value = true
		requestTicketList();
	}
	const handleDateClose = () : void => {
		calendarShow.value = false
	}
	const handleDateConfirm = (e : any) : void => {
		console.log(e)
		active.value = 8;
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
