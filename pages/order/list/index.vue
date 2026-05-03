<template>
  <view class="list">
    <u-navbar bgColor="#fff" leftIconColor="#fff" title="全部订单" :autoBack="true" :fixed="true" :placeholder="true"> </u-navbar>
    <u-subsection :list="orderStatus" :current="activeIndex" @change="handleSubsection" keyName="text"></u-subsection>
    <view class="list-main">
     <PullRefreshList
        :refreshing="refreshing"
        :loading="loading"
        :no-more="noMore"
        @refresh="onRefresh"
        @load-more="onLoadMore"
      >
        <!-- 订单列表 -->
        <view class="order-list" v-if="orderList.length > 0">
        <view class="list-item" v-for="item in orderList" :key="item.wxOrderId">
          <view class="item-head">
            <view class="code">
              {{ item.orderNo }}
            </view>
            <view class="status">
                {{ getOrderStatusLabel(item.orderStatus) }}
            </view>
          </view>
          <view class="item-info">
            <view class="info-line">
              <view class="address"> 
                {{ item.startStation }} - {{ item.endStation }}
              </view>
              <view class="date">
                出发时间：{{ item.deparTime }}
              </view>
            </view>
            <view class="info-price">
              ¥{{ item.totalAmount }}
            </view>
          </view>
          <view class="item-btn">
            <view class="btn" @click="handleDetail(item.orderNo)">
              详情
            </view>
            <view class="btn" @click="handleDelete(item.orderNo)">
              删除
            </view>
            <!--  -->
            <view class="btn pay" v-if="item.orderStatus == 0" @click="handlePay(item)">
              去支付
            </view>
          </view>
        </view>
        </view>
        <u-empty mode="order" text="还没有订单" v-else></u-empty>
      </PullRefreshList>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app';
import { getOrderList , deleteOrderDelete } from '@/api'
import PullRefreshList from '@/components/pullRefresh/index.vue'
import { orderStatusOptions , getOrderStatusLabel } from '@/utils/orderStatus.ts'
import { orderStatus } from '@/utils/my'

const orderList = ref<any[]>([])
const activeIndex = ref(0)
const total = ref(0)
const formData = reactive({
  pageNum: 1,
  pageSize: 10,
  status: 6
})

const refreshing = ref(false)
const loading = ref(true)
const noMore = ref(false)
onLoad((option)=>{
  console.log(option.value)
  formData.status = option.value
  var index = orderStatus.findIndex(item => item.value == option.value);
  activeIndex.value = index;
  requestList()
})
const requestList = async (): Promise<void> => {
  uni.showLoading({
    title: '加载中...',
    mask: true
  })
  try {
    const { data } = await getOrderList({
      ...formData,
      status: formData.status == 6 ? '' : formData.status
    })
    // 第一页清空
    if (formData.pageNum === 1) {
      orderList.value = []
    }

    // 追加数据
    orderList.value.push(...data.items)
    total.value = data.total

    // 判断是否还有更多
    noMore.value = orderList.value.length >= total.value
  } finally {
    uni.hideLoading()
    refreshing.value = false
    loading.value = false
  }
}

const handleSubsection = (index: number): void => {
  console.log(index)
  activeIndex.value = index
  formData.status = orderStatus[index].value
  formData.pageNum = 1
  orderList.value = []
  requestList()
}

// ✅ 下拉刷新（保持展开，不回弹）
const onRefresh = () => {
  refreshing.value = true
  formData.pageNum = 1
  noMore.value = false
  orderList.value = []
  requestList()
}

// 上拉加载
const onLoadMore = () => {
  if (noMore.value || refreshing.value) return
  loading.value = true
  formData.pageNum++
  requestList()
}

// 去支付
const handlePay = (row:any) => {
  if(row.orderStatus != 0){
    uni.showToast({
      title: '状态已过期',
      icon: 'none'
    })
    onRefresh();
    return 
  }
  uni.navigateTo({
		url:`/pages/order/payment/index?orderNo=${row.orderNo}`
	})
}
// 删除订单
const handleDelete = async(orderNo:string) :Promise<void> => {
  uni.showModal({
    title: '提示',
    content: '确定要删除吗？',
    success: async function (res) {
      if (res.confirm) {
        uni.showLoading({
          title: '删除中...',
          mask: true
        })
        try{
          const { code, msg } = await deleteOrderDelete(orderNo);
          if(code != 200)return uni.showToast({
              title: msg,
              icon: 'error'
            })
            uni.showToast({
              title: msg,
              icon: 'success'
            })
            onRefresh()
        }finally{
          uni.hideLoading()
        }
      }
    }
  })
}
// 订单详情
const handleDetail = (orderNo:string) => {
  uni.navigateTo({
		url:`/pages/order/detail/index?orderNo=${orderNo}`
	})
}
</script>

<style scoped lang="scss">
.list {
  background-color: $w-background-color;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .list-main{
    flex: 1;
    overflow-y: auto;
    height:100%;
    background-color: #f5f5f5;
  }
}
:deep(.u-subsection) {
  flex-shrink: 0;
}
.order-list {
  padding:$w-padding-base;
  @include flex-column-style($gap: $w-gap-base);
  .list-item{
    background-color:$w-card-color;
    border-radius: 10px;
    padding:$w-padding-base;
    @include flex-column-style($gap: $w-gap-base);
    .item-head{
      @include flex-content-style($gap: $w-gap-base);
      border-bottom:1px solid $w-border-color;
      padding-bottom:$w-padding-base;
      .code{
        font-size: $w-size-base;
        color: $w-font-color-deep;
      }
      .status{
        font-size: $w-size-sm;
        color: $w-font-color-shallow;
      }
    }
    .item-info{
      @include flex-style($gap: $w-gap-base);
      justify-content: space-between;
      .info-line{
        .address{
          font-size: $w-size-base;
          color: $w-font-color-deep;
        }
        .date{
          font-size: $w-size-sm;
          color: $w-font-color-light;
        }
      }
      .info-price{
        font-size: $w-size-base;
        color: $w-price-color;
      }
    }
    .item-btn{
      @include flex-style($gap: $w-gap-base);
      justify-content:flex-end;
      .btn{
        padding:5rpx 30rpx;
        border-radius: 30px;
        border:1px solid $w-font-color-light;
        text-align: center;
        font-size: $w-size-sm;
        color:$w-font-color-shallow;
      }
      .pay{
        background-color: $w-theme-size-color;
        border:1px solid $w-theme-size-color;
        color:$w-font-color-white;
      }
    }
  }
}
.u-empty{
  padding:100rpx 0;
}
</style>