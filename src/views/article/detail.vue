<template>
	<section>
		<div class="section">
			<div class="title">
				<div class="back_icon" @click="back">
				</div>
				<div :class="['title_container',titleActive]">
					<div class="page_title">文章详情</div>
					<UserFollow v-if='articleDetail.userId' :user='articleDetail.userId' :className='titleActive' />
				</div>
			</div>
			<UserFollow v-if='articleDetail.userId' :user='articleDetail.userId' />
			<div class="article_title">
				{{articleDetail.articleTitle}}
			</div>
			<div class="iamge" v-show='articleDetail.articleImg'>
				<img :src="articleDetail.articleImg" alt="" width="100%" />
			</div>
			<div class="content" v-html="articleDetail.articleContent">
			</div>
		</div>
	</section>
</template>
<script>
	import { axiosData } from '@/api/api';
	import { mapGetters } from 'vuex';
	import UserFollow from '@/components/common/userfollow.vue'
	export default {
		name: 'Detail',
		components: {
			UserFollow,
		},
		data() {
			return {
				articleId: '',
				articleDetail: {},
				titleActive: '',
				i: 0,
			}
		},
		methods: {
			getDetail() {
				let url = '/api/article/detail';
				let param = {};
				param._id = this.$route.params.id;
				let _callback = (res) => {
					this.articleDetail = res;
				}
				axiosData('post', url, param, _callback, this)
			},
			back() {
				this.$router.go(-1)
			},
			
			//判断滚动条事件
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				var scroll = scrollTop - this.i;
				this.i = scrollTop;
				if(scroll < 0) {
					this.titleActive = '';
				}else{
					if(scrollTop > 60) {
						this.titleActive = 'title_active';
					} else {
						this.titleActive = '';
					}
				}
			}
		},
		mounted() {
			this.articleId = this.$route.params.id;
			this.getDetail();
			//监听滚动条事件
			window.addEventListener('scroll', this.handleScroll)
		}
	}
</script>
<style lang="scss" rel='stylesheet/scss' scoped="scoped">
	.section {
		width: 100%;
		min-height: 100vh;
		background: #FFFFFF;
		padding-top:110px;
		webkit-overflow-scrolling: touch;
		.title {
			width: 100%;
			height: 100px;
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			box-shadow: 0 1PX 5PX rgba(0, 0, 0, 0.1);
			overflow: hidden;
			background: linear-gradient(to right, $Maincolor 10%, $Subcolor 100%);
			z-index: 1;
			.back_icon {
				position: absolute;
				width: 50px;
				height:50px;
				background: url(../../assets/img/common/back.png) center center no-repeat;
				background-size:40px;
				top: 25px;
				z-index: 2;
			}
			.title_container {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				transition: 0.5s ease-in;
				.page_title {
					line-height: 100px;
					width: 100%;
					height:100px;
					font-size:30px;
					font-weight: 600;
					text-align: center;
					color: #FFFFFF;
				}
			}
			.title_active {
				top: -100px;
				transition: 0.5s ease-in;
			}
		}
		.article_title {
			width:690px;
			margin:20px auto;
			font-size:38px;
			font-weight: 700;
			line-height:60px;
			text-align: left;
		}
		.iamge {
			width:690px;
			margin: 0 auto;
			margin-top:10px;
			border-radius: 5PX;
			box-shadow: 1PX 3PX 5PX rgba(0, 0, 0, 0.09);
			overflow: hidden;
			font-size: 0;
			opacity: 0.8;
		}
		.content{
			width:690px;
			margin: 0 auto;
			font-size:30px;
			line-height:60px;
			text-align: left;
			color: $Textcolor;
			margin-top:30px;
			overflow-x:hidden;
			.figure{
				width:100%;
				overflow-x:auto;
			}
		}
		img{
			display:block;
			max-width:100%;
		}
	}
</style>
<style>
	figure{
		width:100%;
		overflow-x:auto;
	}
	img{
		max-width:100%;
		margin: 0 auto;
		display:block;
	}
</style>