<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/static/css/public.scss";
	/* 轮播图 */
	uni-swiper , swiper{
		height:100%;
		.uni-swiper-wrapper{
			height:100%;
			uni-swiper-item{
				uni-image{
					width:100%;
					height:100%;
				}
			}
		}
		 swiper-item{
			 image{
				width:100%;
				height:100%;
			}
		}
	}
</style>
