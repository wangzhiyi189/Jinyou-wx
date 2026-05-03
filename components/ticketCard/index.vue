<template>
  <view class="ticket-card" :class="(!isPassed && !isNoTicket) || 'expired'" @click="handleDetail" >
      <view class="time-row">
        <view class="start-time">{{ dateFormat(data?.departTime) }}</view>
        <view class="arrive-time" @click.stop>
          预计{{dateFormat(data?.arriveTime)}}到达
          <u-icon name="info-circle" @click="handleUnit"></u-icon>
        </view>
      </view>
      <view class="station-row">
        {{cityJson(data?.startCity)}} <span>→</span> {{cityJson(data?.endCity)}}
      </view>
      <view class="info-row">
        <view class="price">
          <span class="unit">¥</span>
          <span class="value">{{ data?.price }}</span>
        </view>
        <view class="stock stock-normal">
          <!-- 没票了 -->
          <span v-if="isNoTicket">
            无票
          </span>
          <!-- 已发车 -->
          <span v-else-if="isPassed">
            已发车
          </span>
          <span v-else>
            余票：{{ data?.seatRemaining }}张
          </span>
        </view>
      </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref,defineEmits , watch } from 'vue'
import { isDepartTimePassed } from '@/utils/date'
// 获取父组件传过来的数据
const props = defineProps({
  data: Object
})
// 获取父组件传过来的方法
const emit = defineEmits(['unit'])
const isPassed = ref(false)
const isNoTicket = ref(false)
onMounted(()=>{
  
}) 
watch(props.data, (newVal : any) => { 
  isPassed.value = isDepartTimePassed(props.data?.departTime)
  if(props.data?.seatRemaining == 0){
    isNoTicket.value = true
  }
},{immediate: true})
const handleDetail = () => {
  if(isPassed.value)return uni.showToast({
    title:'已过发车时间，请更换出行日期',
    icon:'none'
  })
  if(isNoTicket.value)return uni.showToast({
    title:'该班次余票不足，请选择其他班次',
    icon:'none'
  })
  const id = props.data?.scheduleId
  uni.navigateTo({url: `/pages/order/index/index?id=${id}`})
}
const cityJson = (e : string) : string => {
  let cityArray = JSON.parse(e);
  return cityArray[cityArray.length - 1]
}
const dateFormat = (e: string) : string => {
  const date = new Date(e);
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const result = `${hour}:${minute}`;
  return result
}
const handleUnit = () : void => {
  emit('unit')
}
</script>

<style scoped lang="scss">
.expired{
  opacity: 0.5;
}
 .ticket-card {
  background: #fff;
  border-radius: 24rpx;
  padding: $w-padding-lg;
  margin-bottom: $w-margin-base;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: transform 0.2s;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer; /* 保留鼠标悬浮的手型样式 */
  /* 时间区域 */
  .time-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $w-margin-base;
    .start-time {
      font-size: $w-size-big;
      font-weight: bold;
      color: $w-font-color-deep;
    }
    .arrive-time {
      font-size: $w-size-lg;
      color: $w-font-color-shallow;
      @include flex-center-style($gap:$w-gap-sm);
    }
  }
  /* 站点区域 */
  .station-row {
    font-size: $w-size-lg;
    color: $w-font-color-deep;
    margin-bottom: $w-margin-lg;
    display: flex;
    align-items: center;
    gap: $w-gap-base;
  }
  .station-row span {
    color: $w-font-color-light;
  }
  /* 票价 + 余票 */
  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .price {
      color: $w-red-color;
      .value{
        font-size: $w-size-max;
      }
      .unit{
        font-size: $w-size-base;
      }
    }
    .stock {
      font-size: $w-size-base;
    }
    /* 余票状态颜色 */
    .stock-normal {
        color: #333;
    }
    .stock-warning {
        color: #FF7D00;
    }
    .stock-danger {
        color: #FF4D4F;
    }
  }
  
}

.ticket-card:active {
    transform: scale(0.98);
}
/* 禁用/无票状态 */
.ticket-card.disabled {
    opacity: 0.5;
    pointer-events: none;
}
</style>