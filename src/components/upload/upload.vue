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
				//this.getToken();
				console.log(file)
				axios.post('/api/article/upload',{
					imageData:file,
				}).then(data=>{
					console.log(data)
				})
//				//进制携带cookie
//				let filetype = ''
//				if(file.type === 'image/png') {
//					filetype = 'png'
//				} else {
//					filetype = 'jpg'
//				}
//				const keyname = 'images' + new Date().getTime() + '.' + filetype
//				const axiosInstance = axios.create({
//					withCredentials: false,
//				});
//				
//				this.getToken().then((result)=>{
//					const formdata = new FormData()
//				formdata.append('file', file)
//				formdata.append('token', this.token)
//				formdata.append('key', keyname);
//				this.$toast.loading({
//					forbidClick: true,
//					loadingType: 'spinner',
//					duration: 0
//				});
//				axiosInstance({
//					method: 'POST',
//					url: 'http://upload.qiniup.com/', //上传地址
//					data: formdata,
//					timeout: 30000, //超时时间，因为图片上传有可能需要很久
//					onUploadProgress: (progressEvent) => {
//						//Math.round(progressEvent.loaded * 100 / progressEvent.total); 设置进度条
//					},
//				}).then(data => {
//					this.$toast.clear();
//					let imageUrl = `http:\//\pp29kwezr.bkt.clouddn.com/${data.data.key}`
//					let src1 = ""
//					src1 = imageUrl;
//					this.isactive = 'active_img'
//					this.img(src1)
//				}).catch(function(err) {
//					//上传失败
//					this.$toast.clear();
//				});
//				}).catch(function(err){
//					console.log(err)
//				})
//				

			},
			//获取七牛Token
//			getToken() {
//				return new Promise((resolve, reject) => {
//					let url = '/api/article/token';
//					let param = {};
//					let _callback = (res) => {
//						if(res){
//							this.token = res;
//							resolve(res)
//						}else{
//							reject(error)
//						}
//						
//					}
//					axiosData('post', url, param, _callback, this)
//				})
//			},


			getToken() {
					let url = '/api/article/upload';
					let param = {};
					let _callback = (res) => {
					  console.log(res)
					}
					axiosData('post', url, param, _callback, this)
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