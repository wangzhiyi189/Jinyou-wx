<template>
  <u-popup :round="15"  mode="bottom" :show="show" @close="show = false" closeOnClickOverlay>
		<view class="rmk-head">
      <view></view>
			<view class="head-title">
				行程备注
			</view>
			<view class="head-submit">
				<u-icon name="close" @click="show = false"></u-icon>
			</view>
		</view>
		<view class="rmk-module">
      <view class="mian">
        <view class="mian-card">
          <view class="card-label">
            行李数量
          </view>
          <view class="card-content">
            <view class="card-list">
              <view class="list-item" :class="{active : luggage==item }" v-for="item in dataList" :key="item" @click="handleSelect(item)">
                {{ item }}
              </view>
            </view>
          </view>
        </view>
        <view class="mian-card">
          <view class="card-label">
            备注
          </view>
          <view class="card-content">
            <u-textarea
               placeholder="如有特殊需求，请提前告知，便于更好的为您服务"
               v-model="remark"
               maxlength="100" 
               count  
              ></u-textarea>
          </view>
        </view>
        <view class="main-btn">
          <u-button type="primary" @click="handleSubmit">确定</u-button>
        </view>
      </view>
    </view>
	</u-popup>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
const emits = defineEmits(['change'])
const show = ref(false);
const dataList = ref([1,2,3,4,5,6])
const luggage = ref<number>()
const remark = ref('')
const handleOpen = () => {
	show.value = true;
}
const handleSelect = (item : number) => {
	luggage.value = item;
}
const handleSubmit = () => {
  var str = '';
  if(luggage.value){
    str = `行李数量：${luggage.value}，`;
  }
  emits('change',str + remark.value);
  show.value = false;
}
defineExpose({ handleOpen })
</script>
<style lang="scss" scoped>
.rmk-head{
	@include flex-content-style;
	padding:$w-padding-lg;
	font-size:$w-size-base;
  border-bottom:1px solid $w-border-color;
	.head-title{
		font-weight: 600;
		font-size:$w-size-lg;
	}
	.head-close{
		color:$w-font-color-shallow;
	}
	.head-submit{
		color:$w-theme-size-color;
	}
}
.rmk-module {
	padding:$w-padding-lg;
	max-height:500rpx;
	overflow-x: auto;
  .mian{
    @include flex-column-style($gap: $w-gap-big);
    .mian-card{
      .card-label{
        font-size:$w-size-base;
        color:$w-font-color-deep;
      }
      .card-content{
        margin-top:$w-gap-base;
        .card-list{
          @include flex-center-style($gap: $w-gap-base);
          .list-item{
            flex:1;
            text-align: center;
            background-color:$w-background-color;
            border-radius: $w-border-sm;
            padding:$w-padding-sm;
            color:$w-font-color-deep;
            font-size:$w-size-base;
          }
          .active{
            color:$w-theme-size-color;
            background-color:$w-theme-background;
          }
        }
        .u-textarea{
          background-color:$w-background-color;
        }
      }
    }
  }
}
</style>
