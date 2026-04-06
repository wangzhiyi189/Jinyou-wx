<template>
  <div class="ticket-card" @click="handleDetail">
      <div class="time-row">
        <div class="start-time">{{ data.time }}</div>
        <div class="arrive-time" @click.stop>
          预计{{data?.arriveTime}}到达
          <u-icon name="info-circle" @click="handleUnit"></u-icon>
        </div>
      </div>
      <div class="station-row">
        {{data?.end}} <span>→</span> {{data.start}}
      </div>
      <div class="info-row">
        <div class="price">
          <span class="unit">¥</span>
          <span class="value">{{ data.price }}</span>
        </div>
        <div class="stock stock-normal">余票：{{ data.number }}张</div>
      </div>
  </div>
</template>

<script setup>
import { onMounted, ref,defineEmits } from 'vue'
// 获取父组件传过来的数据
const props = defineProps({
  data: Object
})
// 获取父组件传过来的方法
const emit = defineEmits(['unit'])
onMounted(()=>{
  
}) 
const handleDetail = (e) => {
  uni.navigateTo({url: `/pages/order/index?type=${e}`})
}
const handleUnit = () => {
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