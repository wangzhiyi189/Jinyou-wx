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
				<view class="list-item" v-for="item in listData" :key="item.id">
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

<script setup>
	import {onMounted, ref} from 'vue';
	import { onLoad , onReachBottom } from '@dcloudio/uni-app';
	import ticketCard from '@/components/ticketCard/index.vue'
	const title = ref('购买车票')
	const dateList = ref([])
	const active = ref(0)
	const calendarShow = ref(false)
	const listData = ref([
		// 有时间，大约到达时间，开始地点，结束地点，票价，剩余数量
		{
			id:1,
			time: '09:00',
			arriveTime: '09:30',
			start: '上海',
			end: '苏州',
			price: '100.00',
			number: '10'
		},
		{
			id:2,
			time: '09:00',
			arriveTime: '09:30',
			start: '上海',
			end: '苏州',
			price: '100.00',
			number: '10'
		},
		{
			id:2,
			time: '09:00',
			arriveTime: '09:30',
			start: '上海',
			end: '苏州',
			price: '100.00',
			number: '10'
		},
		{
			id:2,
			time: '09:00',
			arriveTime: '09:30',
			start: '上海',
			end: '苏州',
			price: '100.00',
			number: '10'
		},
		{
			id:2,
			time: '09:00',
			arriveTime: '09:30',
			start: '上海',
			end: '苏州',
			price: '100.00',
			number: '10'
		},
		{
			id:2,
			time: '09:00',
			arriveTime: '09:30',
			start: '上海',
			end: '苏州',
			price: '100.00',
			number: '10'
		},
		{
			id:2,
			time: '09:00',
			arriveTime: '09:30',
			start: '上海',
			end: '苏州',
			price: '100.00',
			number: '10'
		},
		{
			id:2,
			time: '09:00',
			arriveTime: '09:30',
			start: '上海',
			end: '苏州',
			price: '100.00',
			number: '10'
		}
	])
	onMounted(()=>{
		dateList.value = getDaysIn15Days(15);
		console.log(dateList.value)
	})
	onLoad(options => {
    console.group(options)
  })
	// 上拉加载触发
  onReachBottom(()=>{
		console.log('触底了')
	}) 
	const getDaysIn15Days = (num) => {
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
	const handleTabChange = (e) => {
		console.log(e)
	}
	const handleCalendar = () => {
		calendarShow.value = true
	}
	const handleDateClose = () => {
		calendarShow.value = false
	}
	const handleDateConfirm = (e) => {
		console.log(e)
		active.value = 8;
	}
	const tipShow = ref(false);
	const TipTitle = ref('温馨提示');
	const TipContent = ref('耗时仅供参考，实际时间可能会有所不同，请合理安排出行时间。');
	const handleUnit = () => {
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
