<template>
  <scroll-view
    class="pull-refresh"
    scroll-y
    refresher-enabled
    :refresher-triggered="refreshing"
    @refresherrefresh="onRefresh"
    @scrolltolower="onLoadMore"
    lower-threshold="100"
    refresher-default-style="none"
    :refresher-threshold="60"
    refresher-background="#f5f5f5"
  >
    <!-- 自定义下拉头部 -->
    <view class="custom-refresh">
      <view v-if="refreshing" class="refresh-text">正在刷新...</view>
      <view v-else class="refresh-text">下拉刷新</view>
    </view>

    <!-- 列表内容插槽 -->
    <slot></slot>

    <!-- 底部加载提示 -->
    <u-divider :text="noMore ? '没有更多了' : '加载中...'"></u-divider>
  </scroll-view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  /** 是否正在下拉刷新 */
  refreshing: boolean
  /** 是否正在加载更多 */
  loading: boolean
  /** 是否没有更多数据 */
  noMore: boolean
}>()

const emit = defineEmits<{
  /** 下拉刷新 */
  refresh: []
  /** 上拉加载 */
  loadMore: []
}>()

// 下拉刷新
const onRefresh = () => {
  emit('refresh')
}

// 上拉加载
const onLoadMore = () => {
  if (props.refreshing || props.noMore) return
  emit('loadMore')
}
</script>

<style scoped lang="scss">
.pull-refresh {
  width:100%;
  height:100%;
  position: relative;
  .custom-refresh {
    width: 100%;
    position: absolute;
    margin-top: -50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    color: #666;
  }
  .load-tip {
    text-align: center;
    padding: 20rpx;
    color: #999;
  }

}
  :deep(.u-divider){
    padding-bottom:$w-padding-big;
  }
</style>