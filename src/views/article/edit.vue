<template>
	<section>
		<div class="edit_wrap">
			<div class="absolute_wrap">
				<div class="btn" @click="isFabu=!isFabu">发布</div>
			</div>
			<Editor @on-change="handleChange" ></Editor>
		</div>
		<div class="fixed" v-show="isFabu">
			<div class="contain">
					<div class="title">
						发布文章
					</div>
					<input type="text" placeholder="请输入文章标题"  class="title_input" v-model='articleModel.articleTitle'/>
					<div class="img">
						<Upload></Upload>
					</div>
					<div class="label_wrap">
						<div class="label_title">
						   选择标签
						</div>
						<div class="label_group">
							<div :class="['label',{active:index===labelIndex}]" v-for="(item,index) in labelList" @click="changeLabel(item,index)">
								{{item.labelName}}
							</div>
						</div>
					</div>
					<div class="btn_group">
						<div @click="isFabu = !isFabu">取消</div>
						<div @click="submit">提交</div>
					</div>
			</div>
		</div>
	</section>
</template>
<script>
	import { axiosData } from '@/api/api';
	import { mapGetters } from 'vuex';
	import Upload from'@/components/upload/upload.vue';
	import Editor from '@/components/editor';
	export default {
		name: 'Home',
		components:{
			Upload,
			Editor
		},
		data(){
			return{
				msg: '文章书写',
				articleModel: {
					articleTitle: '',
					articleContent: '',
					labelId:'',
				},
				isFabu:false,
				labelList:[],
				labelIndex:null,
			}
		},
		computed:{
			...mapGetters(['userId','src']),
		},
		methods: {
			handleChange(html, text) {
				console.log(html)
			},
			back() {
				this.$router.go(-1)
			},
			submit(){
				let url = '/api/article/insertArticle';
				let param = {};
				param = Object.assign({}, param, this.articleModel)
				param.userId = this.userId;
				param.articleImg = this.src;
				console.log(param)
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
			//获取所有标签
			getLabelList(){
				let url = '/api/label/labelList';
				let param = {};
				let _callback =(res)=>{
					this.labelList = [...res];
				}
				axiosData('post', url, param, _callback, this)
			},
			//标签选择
			changeLabel(item,index){
				this.labelIndex = index;
				this.articleModel.labelId = item._id;
			},
			//监听富文本的内容
			handleChange(html, text) {
			  this.articleModel.articleContent = html;
			},
		},
		mounted() {
			this.getLabelList();
		}
	}
</script>
<style lang="scss" rel='stylesheet/scss' scoped="scoped">
	.edit_wrap {
		width: 100%;
		height:100vh;
		background: #FFFFFF;
		position: relative;
		box-sizing: border-box;
		.absolute_wrap{
			position:absolute;
			width:100px;
			height:50px;
			top:9px;
			right:10px;
			color:#FFFFFF;
			font-size:18px;
			line-height:50px;
			text-align:center;
			font-weight:600;
			border-radius:60px;
			background:#1cbbb4;
		}
	}
	.fixed{
		position:fixed;
		width:100%;
		height:100vh;
		top:0;
		right:0;
		background:rgba(0,0,0,0.6);
		z-index:98;
		.contain{
			width:90%;
			margin:0 auto;
			margin-top:200px;
			background:#FFFFFF;
			border-radius:8PX;
			box-shadow:1px 3px 20px rgba(0,0,0,0.2);
			overflow-x:hidden;
			.title{
				width:100%;
				height:80px;
				text-align:center;
				line-height:80px;
				background:#0081ff;
				font-size:18px;
				font-weight:600;
				color:#FFFFFF;
			}
			.title_input{
				display:block;
				width:98%;
				height:80px;
				margin:0 auto;
				margin-top:20px;
				border:1px solid #e2e2e2;
				font-size:30px;
				padding:0 10px;
				box-sizing:border-box;
				transition:0.35s;
				&:focus{
					border:1px solid #0081ff;
				}
			}
			.img{
				width:98%;
				height:4rem;
				margin:20px auto;
				border:1px solid #e2e2e2;
				box-sizing:border-box;
			}
			.label_wrap{
				width:98%;
				margin:20px auto;
				box-sizing:border-box;
				.label_title{
					width:100%;
					height:60px;
					font-size:24px;
					line-height:60px;
					border-bottom:1px solid #0081ff;
					color:#0081ff;
					margin-bottom:20px;
				}
				.label_group{
					width:100%;
					display:flex;
					justify-content:flex-start;
					height:80px;
					overflow-x:auto;
					white-space: nowrap;
					.label{
						padding:0px 20px;
						border:1Px solid #e2e2e2;
						border-radius:3PX;
						margin:10px;
						font-size:26px;
						color:#999999;
						height:60px;
						line-height:58px;
						transition:0.3s;
					}
					.active{
						border:1PX solid #0081ff;
						color:#0081ff;
						position:relative;
						padding-right:58px;
						&::after{
							content:"";
							position:absolute;
							width:35px;
							height:35px;
							border-radius:100%;
							background-color:#0081ff;
							right:8px;
							top:50%;
							transform:translateY(-50%);
							background-image:url(../../assets/img/common/yes.png);
							background-position:center center;
							background-repeat:no-repeat;
							background-size:16PX;
						}
					}
				}
			}
			.btn_group{
					width:100%;
					div{
						width:50%;
						height:60px;
						line-height:60px;
						float:left;
						text-align:center;
						font-size:14px;
						color:#fff;
						&:nth-child(1){
							    background: linear-gradient(to right, #1cbbb4 10%, #0081ff 100%);
						}
						&:nth-child(2){
							    background: linear-gradient(to right, #0081ff 100%, #1cbbb4 10%);
						}
					}
				}
		}
	}
</style>