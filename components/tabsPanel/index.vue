<template>
  <u-popup :round="15" mode="bottom" :show="show" @close="show = false" closeOnClickOverlay>
    <view class="tabs-head">
      <view class="head-title">
        <!-- 绑定 current -->
        <u-tabs :list="list" :current="currentTab" @click="handleTabs"></u-tabs>
      </view>
      <view class="head-submit">
        <u-icon name="close" @click="show = false"></u-icon>
      </view>
    </view>

    <!-- 滚动区域 -->
    <scroll-view
      class="mian"
      scroll-y
      enable-flex
      :scroll-with-animation="true"
      :scroll-top="scrollTop"
      @scroll="onScroll"
    >
      <view class="main-card" id="detail">
        <view class="card-label">
          <image class="icon" :src="busIcon" />
          车次详情
        </view>
        <view class="card-main">
          <view class="main-box">
            <view class="box-title">
              经停信息
            </view>
            <view class="box-stopover">
              <view class="route-line">
              <!-- 起点 -->
              <view class="station-item start">
                <view class="circle"></view>
                <text  class="name">{{ startStation }}</text>
              </view>
              <!-- 途经站（可展开/收起） -->
              <view class="passing-section">
                <!-- 收起状态：只显示按钮 -->
                <button 
                  v-if="!expanded" 
                  class="toggle-btn" 
                  @click="expanded = true"
                >
                  途经{{ passingStations.length }}站 ∨
                </button>
                <!-- 展开状态：显示所有途经站 -->
                <view v-if="expanded" class="passing-list">
                  <view 
                    class="station-item" 
                    v-for="(station, index) in passingStations" 
                    :key="index"
                  >
                    <view class="circle circle-passing"></view>
                    <text class="name">{{ station }}</text>
                  </view>
                </view>
                <!-- 展开时，可点击收起 -->
                <button 
                  v-if="expanded" 
                  class="toggle-btn" 
                  @click="expanded = false"
                >
                  收起 ∧
                </button>
              </view>
              <!-- 终点 -->
              <view class="station-item end">
                <view class="circle"></view>
                <text  class="name">{{ endStation }}</text>
              </view>
              </view>
            </view>
          </view>

          <view class="main-box">
            <view class="box-title">
              班次信息
            </view>
            <view class="box-shift">
              <view class="shift-item">
                发车时间：{{ data?.departTime }}
              </view>
              <view class="shift-item">
                到达时间：{{ data?.arriveTime }}
              </view>
              <view class="shift-item">
                行程时间：{{ data?.duration }}小时
              </view>
              <view class="shift-item">
                车辆类型：{{ data?.vehicleType }}
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="main-card" id="pay">
        <view class="card-label">
          <image class="icon" :src="payIcon" />
          购票须知
        </view>
      </view>
      <view class="main-card" id="take">
        <view class="card-label">
          <image class="icon" :src="takeIcon" />
          取票须知
        </view>
      </view>
      <view class="main-card" id="retreat">
        <view class="card-label">
          <image class="icon" :src="retreatIcon" />
          退票须知
        </view>
      </view>
    </scroll-view>
  </u-popup>
</template>

<script setup lang="ts">
import { ref, onMounted, watch,watchEffect } from 'vue'
import busIcon from '@/static/images/order/bus.png'
import payIcon from '@/static/images/order/pay.png'
import takeIcon from '@/static/images/order/take.png'
import retreatIcon from '@/static/images/order/retreat.png'
import { InfoDetailData } from "@/api"
interface Station {
  stationName: string;
}
const show = ref(false)
const scrollTop = ref(0)
const currentTab = ref(0) // 当前选中tab
const props = defineProps<{
  data: InfoDetailData,
  stationList: Station[],
}>()
const startStation = ref('')
const passingStations = ref<string[]>([])
const endStation = ref('')

// 控制展开/收起
const expanded = ref(false)
watchEffect(()=>{
  const list = props.stationList ||  []
  if (!list.length) return
  startStation.value = list[0]?.stationName ?? ''
  endStation.value = list[list.length - 1]?.stationName ?? ''
  passingStations.value = list.length > 2
    ? list.slice(1, -1).map((item : any) => item.stationName)
    : []
})
// 配置项
const list = ref([
  { name: '车次详情', id: 'detail' },
  { name: '购票须知', id: 'pay' },
  { name: '取票须知', id: 'take' },
  { name: '退票须知', id: 'retreat' },
])

// 每个区域高度（你写的是300px）
const itemHeight = 300
type TabId = 'detail' | 'pay' | 'take' | 'retreat';
const idToIndex= { detail: 0, pay: 1, take: 2, retreat: 3 }
const indexToTop = [0, 300, 600, 900]

// 打开弹窗
const handleOpen = () => {
  show.value = true
}

// 点击tab → 滚动
const handleTabs = (row: { id: TabId }) => {
  scrollTop.value = indexToTop[idToIndex[row.id]]
}

// 滚动 → 自动切换tab
const onScroll = (e: any) => {
  const top = e.detail.scrollTop
  const index = Math.round(top / itemHeight)
  if (index >= 0 && index <= 3 && index !== currentTab.value) {
    currentTab.value = index
    console.log(currentTab.value)
  }
}

defineExpose({ handleOpen })
</script>

<style lang="scss" scoped>
.tabs-head {
  display: flex;
  align-items: center;
  padding:$w-padding-sm $w-padding-base;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  border-radius: 20rpx 20rpx 0 0;
  .head-title { flex: 1; }
}
.mian {
  height: 70vh;
  background: $w-background-color;
}
.main-card {
  margin-top:$w-margin-base;
  background: $w-card-color;
  padding:$w-padding-base;
  .card-label {
    padding-bottom:$w-padding-base;
    border-bottom: 1px solid #f1f1f1;
    font-weight: 600;
    @include flex-center-style($gap:$w-gap-sm);
    .icon {
      width: 30rpx;
      height: 30rpx;
    }
  }
  .card-main{
    .main-box{
      .box-title{
        font-size:$w-size-base;
        padding:$w-padding-base 0;
      }
      .box-stopover{
        .route-line {
          position: relative;
          @include flex-column-style($gap:$w-gap-base);
          // 中间的竖线
          &::before {
            content: '';
            position: absolute;
            left: 18rpx;
            top: 0;
            bottom: 0;
            width: 2px;
            background-color: #e0e0e0;
            z-index: 0;
          }
        }
        .station-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 1;
          .circle {
            width: 32rpx;
            height: 32rpx;
            border-radius: 50%;
            background-color: #fff;
            border: 2px solid #e0e0e0;
          }
          .circle-passing{
            width:22rpx;
            height:22rpx;
            margin-left:6rpx;
            margin-right:6rpx;
          }
          .name {
            font-size: $w-size-base;
            color: #333;
          }
          // 起点样式
          &.start {
            .circle {
              background-color: #fff;
              border-color: #27ae60;
              background-image: radial-gradient(circle, #27ae60 0%, #27ae60 30%, transparent 30%);
            }
          }
          // 终点样式
          &.end {
            .circle {
              background-color: #fff;
              border-color: #e74c3c;
              background-image: radial-gradient(circle, #e74c3c 0%, #e74c3c 30%, transparent 30%);
            }
          }
        }
        .passing-section {
          display: flex;
          flex-direction: column;
          gap: 24rpx;
        }
        .toggle-btn {
          position: relative;
          margin-left: 48rpx;
          padding:0 24rpx;
          border: 1px solid #3498db;
          border-radius: 12px;
          background: #fff;
          color: #3498db;
          font-size: 24rpx;
          cursor: pointer;
          z-index: 1;
          &:hover {
            background: #f0f8ff;
          }
        }
        .passing-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      }
      .box-shift{
        @include flex-column-style($gap:$w-gap-sm);
        font-size:$w-size-smx;
        color:$w-font-color-shallow;
      }
    }
  }
}
</style>