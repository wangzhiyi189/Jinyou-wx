<template>
  <u-popup :round="15"  mode="bottom" :show="show" @close="show = false" closeOnClickOverlay>
		<view class="pax-head">
			<view class="head-close">
				<span @click="show = false">取消</span>
			</view>
			<view class="head-title">
				常用旅客
			</view>
			<view class="head-submit">
				<span @click="handleSubmit">确定</span>
			</view>
		</view>
		<view class="pax-module">
			<view class="main">
				<view class="add" @click="handleAdd">
					<u-icon name="plus-circle-fill" color="#2979ff" size="26"></u-icon>
					新增乘客
				</view>
				<view class="list">
					<up-checkbox-group
            v-model="checkboxValue"
            placement="column"
            @change="checkboxChange"
						shape="circle"
        	>
            <up-checkbox class="passeng-checkbox" v-for="item in paxList" :key="item.passengerId" :name="item.passengerId">
							<template #label>
                  <view class="address-info">
                    <view class="info-head">
                      <view class="info-title">
                        {{ item.name }}
                      </view>
                      <view class="edit" @click.stop="handleEdit(item)">
                        <up-icon name="edit-pen-fill" size="20"></up-icon>
                      </view>
                    </view>
                    <view class="info-text">
                      <view class="name">
                        手机号
                      </view>
                      <view class="phone">
                        {{ item.phone }}
                      </view>
                    </view>
                  </view>
                </template>
						</up-checkbox>	
					</up-checkbox-group>
				</view>
			</view>
			
		</view>
	</u-popup>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { PassengerData } from '@/api'
const show = ref(false);
const checkboxValue = ref<Array<number>>([])
const paxList = ref<PassengerData[]>([]);
const emits = defineEmits(['select'])
const props = defineProps({
	data:{
    type: Object as () => PassengerData[],
    required: false, // 可选：如果是必填，改成 true
    default: () => ({})
  }
})
watch(() => props.data, (val : PassengerData[]) => {
	paxList.value = val
})
const handleOpen = (e : Array<number>) => {
	show.value = true;
	checkboxValue.value = e;
}
const checkboxChange = (value : any , item : PassengerData) => {
	if(value.length > 6){
		value.splice(6); 
    checkboxValue.value = value;
		uni.showToast({
			title:'最多选择6位乘客',
			icon:'none'
		})
	}
}
const handleAdd = () => {
	uni.navigateTo({
		url:'/pages/my/passenger/index'
	})
}
const handleEdit = (row : PassengerData) => {
	uni.navigateTo({
		url:`/pages/my/passenger/add/index?id=${row.passengerId}`
	})
}
const handleSubmit = () => {
	show.value = false;
	emits('select',checkboxValue.value)
}
defineExpose({ handleOpen })
</script>
<style lang="scss">
.pax-head{
	@include flex-content-style;
	padding:$w-padding-lg;
	font-size:$w-size-base;
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
.pax-module {
	padding:$w-padding-lg;
	background-color:$w-background-color;
	max-height:500rpx;
	overflow-x: auto;
	.main{
		background-color:$w-card-color;
		border-radius: $w-border-sm;
		.add{
			@include flex-center-style;
			justify-content: center;
			color:$w-theme-color;
			font-size:$w-size-base;
			border-bottom:1px solid $w-border-color;
			padding:$w-padding-lg;
			:deep(.u-icon){
				.u-icon__icon{
					color:$w-theme-size-color!important;
					font-size:$w-size-big!important;
				}
			}
		}
		.list{
			padding:$w-padding-lg;
		}
	}
}

/* ========== ✅ 修复后的正确样式 ========== */
/* 1. 直接命中你给组件加的 passeng-checkbox 类 */
.passeng-checkbox {
  width: 100% ;
  padding: $w-padding-sm 0 ;
  @include flex-center-style;
}


.u-checkbox__label-wrap {
  width: 100% ;
	flex-shrink: 0;
  margin-right: $w-gap-base ;
}

/* 3. 直接写你自定义的 address-info 样式，不依赖组件内部 */
.address-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .info-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8rpx;

    .info-title {
      font-size: $w-size-base;
      color: $w-font-color-deep;
    }

    .edit {
      :deep(.u-icon) {
        color: $w-theme-color !important;
        font-size: $w-size-max !important;
      }
    }
  }

  .info-text {
    display: flex;
    align-items: center;
    gap: 8rpx;
    color: $w-font-color-shallow;
    font-size: $w-size-sm;
  }
}
</style>
