<template>
  <div class="ticket-card" @click="handleDetail">
      <div class="time-row">
        <div class="start-time">{{ dateFormat(data?.departTime) }}</div>
        <div class="arrive-time" @click.stop>
          预计{{dateFormat(data?.arriveTime)}}到达
          <u-icon name="info-circle" @click="handleUnit"></u-icon>
        </div>
      </div>
      <div class="station-row">
        {{cityJson(data?.startCity)}} <span>→</span> {{cityJson(data?.endCity)}}
      </div>
      <div class="info-row">
        <div class="price">
          <span class="unit">¥</span>
          <span class="value">{{ data?.price }}</span>
        </div>
        <div class="stock stock-normal">余票：{{ data?.seatRemaining }}张</div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref,defineEmits } from 'vue'
// 获取父组件传过来的数据
const props = defineProps({
  data: Object
})
// 获取父组件传过来的方法
const emit = defineEmits(['unit'])
onMounted(()=>{
  
}) 
const handleDetail = () : void => {
  const id = props.data?.scheduleId
  uni.navigateTo({url: `/pages/order/index?type=${id}`})
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
 .ticket-card {
  background: #fff;
  border-radius: 24rpx;
  padding: $w-padding-lg;
  margin-bottom: $w-margin-base;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: transform 0.2s;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
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