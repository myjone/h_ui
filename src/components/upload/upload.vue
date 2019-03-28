<template>
	<section>
		<div class="imageUploadWrap">
			<van-uploader :after-read="onRead" accept="image/gif,image/jpeg,image/jpg,image/png" multiple>
				<van-icon name="photograph" />
			</van-uploader>
		</div>
	</section>
</template>
<script>
	import axios from 'axios';
	import { axiosData } from '@/api/api';
	export default {
		data() {
			return {
				token: '',
			}
		},
		methods: {
			onRead(file) {
				this.uploadFile(file.file)
			},
			uploadFile(file) {
				//进制携带cookie
				let filetype = ''
				if(file.type === 'image/png') {
					filetype = 'png'
				} else {
					filetype = 'jpg'
				}
				const keyname = 'images' + new Date().getTime() + '.' + filetype
				const axiosInstance = axios.create({
					withCredentials: false,
				});
				const formdata = new FormData()
				formdata.append('file', file)
				formdata.append('token', this.token)
				formdata.append('key', keyname)
				axiosInstance({
					method: 'POST',
					url: 'http://upload.qiniup.com/', //上传地址
					data: formdata,
					timeout: 30000, //超时时间，因为图片上传有可能需要很久
					onUploadProgress: (progressEvent) => {
						//Math.round(progressEvent.loaded * 100 / progressEvent.total); 设置进度条
					},
				}).then(data => {
					let imageUrl = `http:\//\pp29kwezr.bkt.clouddn.com/${data.data.key}`
					this.src = imageUrl;
				}).catch(function(err) {
					//上传失败
				});

			},
			//获取七牛Token
			getToken() {
				let url = '/api/article/token';
				let param = {};
				let _callback = (res) => {
					this.token = res;
				}
				axiosData('post', url, param, _callback, this)
			},
		},
		mounted() {
			this.getToken();
		}
	}
</script>

<style lang="scss" rel='stylesheet/scss' scoped="scoped">
	.imageUploadWrap {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
</style>