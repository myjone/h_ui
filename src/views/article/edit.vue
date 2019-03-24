<template>
	<section>
		<div class="author_wrap">
			<div class="back_icon" @click="goBack">

			</div>
			<div class="form_group">
				<div class="input_item">
					<input type="text" placeholder="标题" class="input"  v-model='article.articleTitle'/>
				</div>
			</div>
			<div class="form_group">
				<div class="input_item">
					<input type="text" placeholder="内容" class="input"  v-model='article.articleContent'/>
				</div>
			</div>
			<div class="form_group">
				<div class="input_item">
					<input type="text" placeholder="图片" class="input"  v-model='article.articleImg'/>
				</div>
			</div>
			<div class="form_group">
					<div class="input_item">
						<div class="button" @click="addAricle">提交</div>
					</div>
				</div>
			
		</div>
	</section>
</template>
<script>
	import {axiosData} from '@/api/api'
	export default {
		name: 'User',
		data() {
			return {
				article:{
					articleTitle:"",
					articleContent:"",
					userId:"",
					articleImg:"",
				}
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1)
			},
			addAricle(){
				let url = '/api/article/insertArticle';
				let param = {};
				param = Object.assign({},param,this.article);
				param.userId = '5c97831ba2d88d3ed8e35690'
				let _callback =(res)=>{
					console.log(res);
				}
				axiosData('post',url,param,_callback,this)
			},
			// 获取文章列表
			getList(){
				let url = '/api/article/list';
				let param = {};
				param = Object.assign({},param);
				let _callback =(res)=>{
					console.log(res);
				}
				axiosData('post',url,param,_callback,this)
			}
		},
		mounted() {
			this.getList();
		}
	}
</script>
<style lang="scss" rel='stylesheet/scss'>
	.author_wrap {
		width: 100%;
		min-height: 100vh;
		background: #FFFFFF;
		position: relative;
		.back_icon {
			position: absolute;
			width: 0.5rem;
			height: 0.5rem;
			background: url(../../assets/img/common/back_active.png) center center no-repeat;
			background-size: 0.7rem;
			left: 0.3rem;
			top: 0.3rem;
		}
		
			.form_group {
				width: 100%;
				margin-bottom:0.5rem;
				.input_item {
					width: 100%;
					font-size: 0;
					.input {
						display: inline-block;
						width: 100%;
						border: none;
						border-bottom: 1px solid #e2e2e2;
						font-size: $Textcolor;
						outline: none;
						font-size: 0.26rem;
						line-height: 0.6rem;
						display:flex;
						align-items:center;  
						&:focus {
							border-bottom: 1px solid $Maincolor;
						}
					}
					.button {
						width: 100%;
						height: 0.7rem;
						display: flex;
						color: #FFFFFF;
						border-radius: 5px;
						align-items: center;
						justify-content: center;
						font-size: 0.26rem;
						background: linear-gradient(to right, $Subcolor 10%, $Maincolor 100%);
						margin-top:0.8rem;
						box-shadow:1px 5px 10px rgba(0,0,0,0.08);
						transition:0.35s all ease-in; 
						&:hover{
							background: linear-gradient(to right, $Maincolor 10%, $Subcolor 100%);
						}
					}
				}
				.button {
						width: 100%;
						height: 0.7rem;
						display: flex;
						color: #FFFFFF;
						border-radius: 5px;
						align-items: center;
						justify-content: center;
						font-size: 0.26rem;
						background: linear-gradient(to right, $Subcolor 10%, $Maincolor 100%);
						margin-top:0.8rem;
						box-shadow:1px 5px 10px rgba(0,0,0,0.08);
						transition:0.35s all ease-in; 
						&:hover{
							background: linear-gradient(to right, $Maincolor 10%, $Subcolor 100%);
						}
					}
			}
	}
</style>