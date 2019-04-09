<template>
	<section class="my_section">
		<div :class="['imageUploadWrap',isactive]" :style="{backgroundImage: 'url(' + src + ')'}">
			<van-uploader :after-read="onRead" accept="image/gif,image/jpeg,image/jpg,image/png" multiple>
				<van-icon name="photograph" />
			</van-uploader>
		</div>
	</section>
</template>
<script>
	import axios from 'axios';
	import { axiosData } from '@/api/api';
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data() {
			return {
				token: '',
				isactive: 'default',
			}
		},
		computed: {
			...mapGetters(['src']),
		},
		methods: {
			...mapActions(['img']),
			onRead(file) {
				this.uploadFile(file)
			},
			uploadFile(file) {
				this.$toast.loading({
					forbidClick: true,
					loadingType: 'spinner',
					duration: 0
				});
				axios.post('/api/upload',{
					imageData:file,
				}).then(data=>{
					this.isactive = 'active_img';
					let src = `http://${data.data.data}`
					this.img(src)
					this.$toast.clear();
				})
		},
			},
              
			watch: {'src': function() {
				if(this.src) {
					this.isactive = 'active_img'
				} else {
					this.isactive = 'default'
				}
			}
		},
		mounted() {
			//组件重新加载的时候清楚vuex里面的数据
			this.img('');
		}
	}
</script>

<style lang="scss" rel='stylesheet/scss' scoped="scoped">
	.my_section {
		display: block;
		width: 100%;
		height: 100%;
		.imageUploadWrap {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;
			.van-uploader {
				width: 100%;
				height: 100%;
				position: relative;
				.van-uploader__input {
					position: relative !important;
				}
				.van-icon {
					position: absolute;
					font-size: 0.6em;
					left: 0px;
					right: 0px;
					top: 0px;
					bottom: 0px;
					margin: auto;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
		.active_img {
			.van-icon {
				opacity: 0;
			}
		}
	}
</style>

<style>
	.imageUploadWrap .van-uploader__input {
		position: static !important;
	}
</style>