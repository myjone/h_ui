<template>
	<section>
		
		<ul class="list">
			<li>
				<div class="bar">
					<div class="img">

					</div>
					<div class="user_name">
						这是一头猪的时代啊！！！！！
					</div>
					<div class="sign">
						web前端
					</div>
				</div>
				<div class="article_title">
					详解箭头函数和普通函数的区别以及箭头函数的注意事项、不适用场景
				</div>
				<div class="article_box">
				<div class="article_info">
					箭头函数是ES6的API，相信很多人都知道，因为其语法上相对于普通函数更简洁，深受大家的喜爱。就是这种我们日常开发中一直在使用的API，大部分同学却对它的了解程度还是不够深...
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
						2019-10-10:10:12:12
					</div>
				</div>
			</li>
			<li>
				<div class="bar">
					<div class="img">
					</div>
					<div class="user_name">
						这是一头猪的时代啊！！！！！
					</div>
					<div class="sign">
						web前端
					</div>
				</div>
				<div class="article_title">
					详解箭头函数和普通函数的区别以及箭头函数的注意事项、不适用场景
				</div>
				<div class="article_box article_box_wrap">
					<div class="article_info">
						箭头函数是ES6的API，相信很多人都知道，因为其语法上相对于普通函数更简洁，深受大家的喜爱。就是这种我们日常开发中一直在使用的API，大部分同学却对它的了解程度还是不够深...
					</div>
					<div class="article_img">
						
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
						2019-10-10:10:12:12
					</div>
				</div>
			</li>
		</ul>
	</section>
</template>
<script>
	export default {
		name: 'Home',
		data() {
			return {

			}
		},
		methods: {

		},
		mounted() {

		}
	}
</script>
<style lang="scss" rel='stylesheet/scss'>
	.banner {
		width: 100%;
		background: #FFFFFF;
		.banner_ul {
			width: 100%;
			overflow-x: auto;
			padding: 0.2rem;
			white-space: nowrap;
			font-size: 0;
			li {
				display: inline-block;
				font-size: 0;
				width: 6.8rem;
				height: 2.5rem;
				margin-right: 0.2rem;
				background-color: rgba(245, 245, 245, 0.6);
				border-radius: 5px;
			}
		}
	}
	
	.list {
		width: 100vw;
		padding: 0.2rem;
		box-sizing: border-box;
		li {
			width: 100%;
			margin-bottom: 0.2rem;
			background: #FFFFFF;
			padding: 0.2rem;
			box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
			box-sizing: border-box;
			border-radius: 5px;
			.bar {
				width: 100%;
				height: 0.5rem;
				line-height: 0.5rem;
				.img {
					width: 0.5rem;
					height: 0.5rem;
					overflow: hidden;
					background-color: rgb(245, 245, 245);
					border-radius: 100%;
					float: left;
				}
				.user_name {
					width: 3rem;
					height: 0.6rem;
					text-align: left;
					float: left;
					font-size: 0.24rem;
					color: $titleColor;
					margin-left: 0.2rem;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.sign {
					float: right;
					width: 3rem;
					text-align: right;
					font-size: 0.24rem;
					color: $titleColor;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
			.article_title {
				width: 100%;
				font-size: 0.3rem;
				color: $titleColor;
				font-weight: 700;
				line-height: 0.4rem;
				text-align: left;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				margin: 0.15rem 0;
			}
			.article_box {
				overflow:hidden;
				.article_info {
					width: 100%;
					font-size: 0.26rem;
					color: $Textcolor;
					line-height: 0.4rem;
					text-align: left;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3;
					overflow: hidden;
				}
			}
			.article_box_wrap{
				.article_info {
					font-size: 0.26rem;
					color: $Textcolor;
					line-height: 0.4rem;
					text-align: left;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3;
					overflow: hidden;
					float:left;
					width:5rem;
					height:1.2rem;
				}
				.article_img{
					width:1.2rem;
					height:1.2rem;
					background:rgb(245,245,245);
					float:right;
					border-radius:5px;
				}
			}
			.article_tips {
				width: 100%;
				height: 0.5rem;
				margin-top: 0.15rem;
				font-size: 0.2rem;
				color: $rgbColor;
				display: flex;
				justify-content: space-between;
				.left {
					height: 0.5rem;
					.icon {
						height: 0.5rem;
						padding: 0 0.15rem 0 0.45rem;
						min-width: 0.5rem;
						display: flex;
						align-items: center;
						float: left;
						&:nth-child(1) {
							background: url(../../assets/img/common/zan.png) left center no-repeat;
							background-size: 0.5rem;
						}
						&:nth-child(2) {
							background: url(../../assets/img/common/comment.png) left center no-repeat;
							background-size: 0.35rem;
						}
					}
				}
				.time {
					display: flex;
					align-items: center;
					height: 0.5rem;
					justify-content: flex-end;
				}
			}
		}
	}
</style>