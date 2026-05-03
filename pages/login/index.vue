<template>
	<view class="login">
		<u-navbar leftIconColor="#fff" :title="title" :autoBack="true" :fixed="true"  :placeholder="true"> </u-navbar>
		<view class="main">
			<u-button type="primary" ghost @click="handleSubmit">登录</u-button>
			<view class="agreement">
				<view class="agreement-item">
					<u-checkbox-group
            v-model="checked"
            placement="column"
        	>
						<u-checkbox shape="square"></u-checkbox>
					</u-checkbox-group>	
					<text>我已阅读并同意</text>
					<text class="agreement-item-link">《用户协议》</text>
					<text>和</text>
					<text class="agreement-item-link">《隐私政策》</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { useUserStore } from '@/store'
	const userStore = useUserStore()
	const title = ref('授权登录')
	const checked = ref(false)
	const handleSubmit = async() : Promise<void> => {
		userStore.login();
	}
</script>

<style scoped lang="scss">
	.login{
		.main{
			margin-top:100px;
			padding: $w-padding-big;
			.u-button{
				width:80%;
				border-radius: 30px;
				height:70rpx
			}
			.agreement{
				margin-top:$w-margin-lg;
				.u-checkbox{
					margin-right:$w-margin-sm;
				}
				.agreement-item{
					@include flex-center-style($gap:0);
				}
			}
		}
	}
	       
</style>
