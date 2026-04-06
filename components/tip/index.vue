<template>
	<view >
		<u-modal :show="show" :title="title" :content='content'></u-modal>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script setup>
  import { ref } from 'vue';
	const show = ref(false);
	const title = ref('温馨提示');
	const content = ref('耗时仅供参考，实际时间可能会有所不同，请合理安排出行时间。');
</script>