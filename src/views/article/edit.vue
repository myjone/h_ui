<template>
	<section>
		<div class="edit_wrap">
			<div class="edit_title">
				<div class="back_icon" @click="back">
				</div>
				{{msg}}
			</div>

			<div class="content_title">
				<textarea style="outline:none;" placeholder="请输入您的标题" :maxlength="40" v-model='articleModel.articleTitle'></textarea>
			</div>
			<div class="edit_content">
				<textarea name="" id="" cols="" rows="" style="vertical-align:top;outline:none;" placeholder="请输入您的内容" v-model='articleModel.articleContent'></textarea>
			</div>
			<div class="submit">
				<div class="cancel" @click="cancel">
					取消
				</div>
				<div class="submit_btn" @click="submit">
					提交
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import { axiosData } from '@/api/api';
	import { mapGetters } from 'vuex';
	export default {
		name: 'Home',
		data() {
			return {
				msg: '文章书写',
				articleModel: {
					articleTitle: '',
					articleContent: '',
				}
			}
		},
		methods: {
			...mapGetters(['userId']),

			back() {
				this.$router.go(-1)
			},
			submit() {
				let url = '/api/article/insertArticle';
				let param = {};
				param = Object.assign({}, param, this.articleModel)
				param.userId = this.userId;
				let _callback = (res) => {
					if(res.messsage == 'success') {
						this.$toast('文章已经保');
						this.articleModel = {
							articleTitle: '',
							articleContent: '',
						}
						let _this = this;
						setTimeout(function() {
							_this.$router.push({
								name: 'home'
							})
						}, 800)

					}
				}
				axiosData('post', url, param, _callback, this)
			},

			//quxiao 
			cancel() {
				this.articleModel = {
					articleTitle: '',
					articleContent: '',
				};
				this.$router.push({
					name: 'home'
				})
			}
		},
		mounted() {

		}
	}
</script>
<style lang="scss" rel='stylesheet/scss'>
	.edit_wrap {
		width: 100%;
		height: 100vh;
		background: #FFFFFF;
		position: relative;
		padding-top: 1rem;
		box-sizing: border-box;
		.edit_title {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 1rem;
			box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
			line-height: 1rem;
			font-size: 0.3rem;
			font-weight: 600;
			text-align: center;
			color: $titleColor;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			.back_icon {
				position: absolute;
				width: 0.5rem;
				height: 0.5rem;
				background: url(../../assets/img/common/next_default.png) center center no-repeat;
				background-size: 0.4rem;
				transform: rotate(180deg);
				top: 0.25rem;
			}
		}
		.content_title {
			width: 100%;
			overflow: hidden;
			textarea {
				width: 100%;
				border: none;
				font-size: 0.36rem;
				font-weight: 600;
				text-align: left;
				line-height: 0.5rem;
				border-bottom: 1px solid #e2e2e2;
				padding: 0.1rem 0.2rem;
				box-sizing: border-box;
				display: flex;
				align-items: center;
			}
		}
		.edit_content {
			width: 100%;
			height: 70vh;
			overflow-x: hidden;
			overflow-y: scroll;
			background: blue;
			textarea {
				width: 100%;
				border: none;
				display: flex;
				font-size: 0.28rem;
				text-align: left;
				line-height: 0.5rem;
				padding: 0.1rem 0.2rem;
				height: 70vh;
			}
		}
		.submit {
			position: absolute;
			width: 100%;
			height: 1rem;
			bottom: 0;
			left: 0;
			box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.06);
			font-size: 0.32rem;
			font-weight: 600;
			overflow: hidden;
			.cancel {
				width: 50%;
				float: left;
				height: 1rem;
				line-height: 1rem;
				text-align: center;
				color: $rgbColor;
			}
			.submit_btn {
				width: 50%;
				float: right;
				background: #0081ff;
				height: 1rem;
				line-height: 1rem;
				text-align: center;
				color: #FFFFFF;
			}
		}
	}
</style>