<template>
  <view class="passenger">
    <u-navbar leftIconColor="#fff" :title="title" :autoBack="true" :fixed="true"  :placeholder="true"> </u-navbar>
    <view class="btn" @click="handleAdd">
      + 新增旅客
    </view>
    <view class="main">
      <view class="main-list">
        <view class="list-item" v-for="item in passengerList" :key="item?.passengerId">
          <view class="item-content">
            <view class="item-content__name">{{item?.name}}</view>
            <view class="item-content__phone">手机号：{{item?.phone}}</view>
          </view>
          <view class="item-btn">
            <u-icon name="edit-pen" @click="handleEdit(item.passengerId!)"></u-icon>
            <u-icon name="trash" @click="handleDelete(item.passengerId!)"></u-icon>
          </view>
        </view>
      </view>
    </view>
  </view>  
</template>
<script setup lang="ts">
import {onMounted, ref } from 'vue'
import { onPageScroll, onShow } from '@dcloudio/uni-app'
import { getPassengerList , PassengerData , postPassengerDelete } from '@/api'
const title = ref('乘客信息');
const passengerList = ref<PassengerData[]>()
// onMounted(()=>{ 
//   requestPassenger();
// })
onMounted(() => {
  requestPassenger()
})
const requestPassenger = async () :Promise<void> => {
  const {data,code,msg} = await getPassengerList()
  passengerList.value = data;
}
const handleAdd = () :void => {
  uni.navigateTo({
		url:"/pages/my/passenger/add/index"
	})
}
// 编辑
const handleEdit = (id:number) :void => {
  uni.navigateTo({
		url:`/pages/my/passenger/add/index?id=${id}`
	})
}
// 删除
const handleDelete = (id:number) :void => {
  uni.showModal({
    title: '提示',
    content: '确定删除吗？',
    success: async function (res) {
      if (res.confirm) {
        const {data,code,msg} = await postPassengerDelete(id);
        console.log(data,code,msg)
        uni.showToast({
          title:msg,
          icon:'none'
        })
        if(code === 200){
          requestPassenger()
        }
      } else if (res.cancel) {
        
      }
    }
  });
}
defineExpose({
  requestPassenger
})
</script>
<style lang="scss" scoped>
.passenger{
  height:100vh;
  overflow:hidden;
  background:$w-background-color;
  @include flex-column-style($gap:$w-gap-sm);
  .btn{
    padding:$w-padding-base;
    background-color:$w-card-color;
    color:$w-theme-color;
    @include flex-center-style($gap:$w-gap-sm);
    justify-content: center;
  }
  .main{
    flex:1;
    overflow-y: auto;
    .main-list{
      @include flex-column-style($gap:$w-gap-sm);
      .list-item{
        background-color:$w-card-color;
        padding:$w-padding-base;
        @include flex-content-style($gap:$w-gap-sm);
        .item-content__phone{
            color:$w-font-color-shallow;
            font-size:$w-size-smx;
          }
        .item-btn{
          @include flex-center-style($gap:$w-gap-lg);
          :deep(.u-icon__icon){
            font-size:$w-size-big!important;
          }
        }
        
      }
    }
  }
}
</style>