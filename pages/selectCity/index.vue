<template>
	<view class="select-city">
		<u-navbar leftIconColor="#fff" :title="title" :autoBack="true" :fixed="true"  :placeholder="true"> </u-navbar>
    <view class="content">
      <u-index-list :index-list="indexList">
		    <template v-for="(item, index) in itemArr" :key="index">
		    	<!-- #endif -->
		    	<u-index-item>
		    		<!-- #ifndef APP-NVUE -->
		    		<u-index-anchor :text="indexList[index]"></u-index-anchor>
		    		<!-- #endif -->
		    		<view class="list-cell" v-for="(cell, index) in item" :key="index" @click="handleSelectCity(cell)">
		    			{{cell.cityname}}
              <span class="text">{{ cell.tag }}</span>
		    		</view>
		    	</u-index-item>
		    </template>
	    </u-index-list>
    </view>
	</view>
</template>

<script setup>
  import { onMounted , ref } from 'vue';
  import { onLoad } from '@dcloudio/uni-app';
  import cityData from '@/utils/city.json'
  const title = ref('')
  const type = ref('')
  const topcity = ref([])
  const indexList = ref(['热']);
	const itemArr = ref([])
  onLoad(options => {
    type.value = options.type;
    options.type == 'start' ? title.value = '选择出发地' : title.value = '选择目的地';
  })
  onMounted(() => {
    var keyList = cityData.cityinfo
    itemArr.value.push(cityData.topcity)
    keyList.forEach(item => {
      indexList.value.push(item.key)
      itemArr.value.push(item.departures)
    })
  });
  const handleSelectCity = (e) => {
    const formData = { id: e.id, city: e.cityname , type:type.value }
    uni.$emit('updateData', { value: formData });
    // const prevPage = getCurrentPages().at(-2)
    // prevPage.$vm.selectInfo = { id: e.id, city: e.cityname , type:type.value }
    uni.navigateBack()
  }
</script>

<style setup lang="scss">
  .select-city{
    .content{
      height:auto;
      // position: relative;
      .list-cell{
        padding: $w-padding-base;
        border-bottom: 1px solid #eee;
        display:flex;
        gap:$w-gap-sm;
        align-items: center;
        color:$w-size-base;
        color:$w-font-color-deep;
        .text{
          color:$w-font-color-light;
          font-size:$w-size-smx;
        }
      }
    }
  }
	       
</style>
