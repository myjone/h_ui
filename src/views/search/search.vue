<template>
	<section>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		<van-list v-model="loading" :finished="!finished" finished-text="没有更多了" @load="onLoad">
			<ul class="list">
				<li v-for="(item,index) in list" :key='index' @click="toDetail(item._id)" v-if='item.userId'>
					<div class="bar" v-show="item.userId">
						<div class="img" v-lazy:background-image="item.userId.userImage">
							
						</div>
						<div class="user_name">
							{{item.userId.userName}}
						</div>
						<div class="sign">
							{{item.labelId.labelName}}
						</div>
					</div>
					<div class="article_title">
						{{item.articleTitle}}
					</div>
					<div class="article_box" v-show='!item.articleImg'>
						<div class="article_info">
							{{item.articleInfo}}
						</div>
					</div>
					<div class="article_box article_box_wrap" v-show='item.articleImg'>
						<div class="article_info">
							{{item.articleInfo}}
						</div>
						<div class="article_img"  v-lazy:background-image="item.articleImg">

						</div>
					</div>
					<div class="article_tips">
						<div class="left">
							<div class="icon">
								你好
							</div>
							<div class="icon">
								评论
							</div>
						</div>
						<div class="time">
							{{item.addTime}}
						</div>
					</div>
				</li>
		</ul>
		</van-list>
		</van-pull-refresh>
	</section>
</template>
<script>
	import { axiosData } from '@/api/api';
	export default {
		name: 'Home',
		data() {
			return {
				loading:false,
				finished:false,
				isLoading:false,
				page:{
					pageNum:1,
				},
				list:[],
				sign:'onRefresh',
			}
		},
		methods: {
			//获取列表数据
			getList(){
				let url = '/api/article/list';
				let param = {};
				param = Object.assign({},this.page,param)
				let _callback =(res)=>{
					if(this.sign == 'onRefresh'){
						this.list = [];
					}
					this.list = [...res.list,...this.list];
					this.finished = res.pageNation.hasMore;
					let _this = this;
					setTimeout(function(){
						_this.isLoading = false;
						_this.loading = false;
					},800)
					
				}
				axiosData('post',url,param,_callback,this)
			},
			//上拉加载
			onLoad(){
				if(this.finished){
					this.page.pageNum++;
					this.sign = 'load';
					this.getList();
				}else{
					return;
				}
			},
			//下拉刷新
			onRefresh(){
				this.isLoading = true;
				this.page.pageNum = 1;
				this.sign = 'onRefresh';
				this.getList();
			},
			
			//跳转到文章详情页面
			toDetail(id){
				this.$router.push({
					name:'detail',
					params:{
						id:id
					}
				})
			}
			
		},
		mounted() {
				this.getList();
		}
	}
</script>
<style lang="scss" rel='stylesheet/scss' scoped="scoped">
	.banner {
		width: 100%;
		background: #FFFFFF;
		.banner_ul {
			width: 100%;
			overflow-x: auto;
			padding:20px;
			white-space: nowrap;
			font-size: 0;
			li {
				display: inline-block;
				font-size: 0;
				width:680px;
				height:250px;
				margin-right:20px;
				background-color: rgba(245, 245, 245, 0.6);
				border-radius: 5px;
			}
		}
	}
	.list {
		width: 100vw;
		padding:20px;
		box-sizing: border-box;
		li {
			width: 100%;
			margin-bottom:20px;
			background: #FFFFFF;
			padding: 0.2rem;
			box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
			box-sizing: border-box;
			border-radius: 5px;
			.bar {
				width: 100%;
				height:50px;
				line-height:50px;
				.img {
					width: 50px;
					height: 50px;
					overflow: hidden;
					background-color: rgb(245, 245, 245);
					border-radius: 100%;
					float: left;
					background-size:contain;
				}
				.user_name {
					width:300px;
					height:60px;
					text-align: left;
					float: left;
					font-size:24px;
					color: $titleColor;
					margin-left:20px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.sign {
					float: right;
					width: 300px;
					text-align: right;
					font-size:24px;
					color: $titleColor;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
			.article_title {
				width: 100%;
				font-size:30px;
				color: $titleColor;
				font-weight: 700;
				line-height:40px;
				text-align: left;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				margin: 15px 0;
			}
			.article_box {
				overflow: hidden;
				.article_info {
					width: 100%;
					font-size:26px;
					color: $Textcolor;
					line-height:40px;
					text-align: left;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3;
					overflow: hidden;
				}
			}
			.article_box_wrap {
				.article_info {
					font-size:26px;
					color: $Textcolor;
					line-height:40px;
					text-align: left;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3;
					overflow: hidden;
					float: left;
					width: 500px;
					height:120px;
				}
				.article_img {
					width:120px;
					height:120px;
					background-color: rgb(245, 245, 245);
					background-position:center center;
					background-repeat:no-repeat;
					background-size:cover;
					float: right;
					border-radius: 5px;
				}
			}
			.article_tips {
				width: 100%;
				height:50px;
				margin-top:15px;
				font-size:20px;
				color: $rgbColor;
				display: flex;
				justify-content: space-between;
				.left {
					height:50px;
					.icon {
						height:50px;
						padding: 0 15px 0 45px;
						min-width:50px;
						display: flex;
						align-items: center;
						float: left;
						&:nth-child(1) {
							background: url(../../assets/img/common/zan.png) left center no-repeat;
							background-size:50px;
						}
						&:nth-child(2) {
							background: url(../../assets/img/common/comment.png) left center no-repeat;
							background-size:35px;
						}
					}
				}
				.time {
					display: flex;
					align-items: center;
					height:50px;
					justify-content: flex-end;
				}
			}
		}
	}
</style>