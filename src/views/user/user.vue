<template>
	<section>
		<div class="user_wrap">
			<div class="user_box" @click="center">
				<div class="user_img">

				</div>
				<div class="user_name">
					这是一头猪的时代
				</div>
			</div>
		</div>
		<ul class="list-box">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li @click="toRoute('author')">
				<span class="user">
					
				</span>
				关于作者
			</li>
		</ul>
		
		<div class="thanks_wrap">
			<div class="title">
				特别感谢
			</div>
			<ul class="thanks_box">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'User',
		data() {
			return {
			}
		},
		methods: {
			toRoute(name){
				this.$router.push({
					name:name,
				})
			},
			
			center(){
				this.$router.push({
					name:'center',
				})
			}
		},
		mounted() {

		}
	}
</script>
<style lang="scss" rel='stylesheet/scss' scoped="scoped">
	.user_wrap {
		position: relative;
		top: -10px;
		width: 100%;
		height:486px;
		background: url(../../assets/img/user/BasicsBg.png) center center no-repeat;
		background-size:cover;
		.user_box {
			position: absolute;
			width:650px;
			height: 200px;
			top:60px;
			left:50%;
			background-color: $Maincolor;
			opacity: 0.9;
			border-radius: 5px;
			box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.1);
			box-sizing: border-box;
			background-image: url(../../assets/img/common/next.png);
			background-repeat: no-repeat;
			background-position: 580px center;
			background-size:50px;
			animation: top_botom 3s infinite linear;
			.user_img {
				width: 1rem;
				height: 1rem;
				float: left;
				border-radius: 100%;
				background: #FFFFFF;
				margin-left:30px;
				margin-top:50px;
			}
			.user_name {
				float: left;
				width:400px;
				height: 100px;
				font-size: 30px;
				line-height:100px;
				text-align: left;
				margin-left: 20px;
				color: #FFFFFF;
				margin-top:50px;
			}
		}
	}
	
	@keyframes top_botom {
		0% {
			transform: scale(1.01) translateX(-50%);
		}
		25% {
			transform: scale(1.02) translateX(-50%);
		}
		50% {
			transform: scale(1.03) translateX(-50%);
		}
		50% {
			transform: scale(1.02) translateX(-50%);
		}
		100% {
			transform: scale(1.01) translateX(-50%);
		}
	}
	.list-box{
		width:690px;
		margin:0 auto;
		box-sizing:border-box;
		background:#FFFFFF;
		box-shadow:1px 4px 5px rgba(0,0,0,0.1);
		border-radius:5px;
		overflow:hidden;
		padding:0 0 0 30px;
		li{
			width:100%;
			height:80px;
			border-bottom:1px solid #e2e2e2;
			background:url(../../assets/img/common/next_default.png) 610px center no-repeat;
			background-size:30px;
			display:flex;
			align-items:center;
			font-size:26px;
			color:$Textcolor;
			.user{
				display:block;
				float:left;
				width:80px;
				height:80px;
				background:url(../../assets/img/footer/gift_active.png) center center no-repeat;
				background-size:50px;
			}
		}
	}
	.thanks_wrap{
		width:100%;
		padding:30px 30px;
		margin:50px auto;
		background:#FFFFFF;
		.title{
			width:100%;
			height:80px;
			line-height:80px;
			text-align:left;
			font-size:30px;
			font-weight:700;
			color:$titleColor;
			margin-bottom:20px;
			border-bottom:1px solid #e2e2e2;
		}
		.thanks_box{
			width:100%;
			overflow-x: auto;
			white-space: nowrap;
			font-size: 0;
			li {
				display: inline-block;
				font-size: 0;
				width:690px;
				height:200px;
				margin-right:20px;
				background:url(../../assets/img/thanks/6850742-7eed684ee7299727.webp) center center no-repeat;
				background-size:cover;
				border-radius: 5px;
			}
		}
	}
</style>