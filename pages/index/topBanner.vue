<template>
  <swiper autoplay  :interval="interval" :circular="true"  >
		<swiper-item v-for="item in bannerList" :key="item.bannerId">
			<image :src="item.imgUrl" mode="aspectFill" ></image>
		</swiper-item>
	</swiper>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { getTopBanners } from '@/api'
interface BannerList {
  bannerId: number;
  imgUrl: string;
  linkType:number,
  linkUrl:string
}
const bannerList = ref<BannerList[]>([])
const interval = ref<number>(5000)
onMounted(() => {
  requestBanners()
})
// 获取轮播图
const requestBanners = async () => {
	const {message,data,code} = await getTopBanners();
  bannerList.value = data;
}
</script>