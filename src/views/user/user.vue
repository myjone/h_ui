<template>
	<section>
		<div class="user_wrap">
			<div class="user_box">
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
			}
		},
		mounted() {

		}
	}
</script>
<style lang="scss" rel='stylesheet/scss'>
	.user_wrap {
		position: relative;
		top: -0.1rem;
		width: 100%;
		height: 4.86rem;
		background: url(../../assets/img/user/BasicsBg.png) center center no-repeat;
		background-size: contain;
		.user_box {
			position: absolute;
			width: 6.5rem;
			height: 2rem;
			top: 0.6rem;
			left:50%;
			background-color: $Maincolor;
			opacity: 0.9;
			border-radius: 5px;
			box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.1);
			box-sizing: border-box;
			background-image: url(../../assets/img/common/next.png);
			background-repeat: no-repeat;
			background-position: 5.8rem center;
			background-size: .5rem;
			animation: top_botom 3s infinite linear;
			.user_img {
				width: 1rem;
				height: 1rem;
				float: left;
				border-radius: 100%;
				background: #FFFFFF;
				margin-left: 0.3rem;
				margin-top: 0.5rem;
			}
			.user_name {
				float: left;
				width: 4rem;
				height: 1rem;
				font-size: 0.3rem;
				line-height: 1rem;
				text-align: left;
				margin-left: 0.2rem;
				color: #FFFFFF;
				margin-top: 0.5rem;
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
		width:6.9rem;
		margin:0 auto;
		box-sizing:border-box;
		background:#FFFFFF;
		box-shadow:1px 4px 5px rgba(0,0,0,0.1);
		border-radius:5px;
		overflow:hidden;
		padding:0 0 0 0.3rem;
		li{
			width:100%;
			height:0.8rem;
			border-bottom:1px solid #e2e2e2;
			background:url(../../assets/img/common/next_default.png) 6.1rem center no-repeat;
			background-size:0.3rem;
			display:flex;
			align-items:center;
			font-size:0.26rem;
			color:$Textcolor;
			.user{
				display:block;
				float:left;
				width:0.8rem;
				height:0.8rem;
				background:url(../../assets/img/footer/gift_active.png) center center no-repeat;
				background-size:0.5rem;
			}
		}
	}
	.thanks_wrap{
		width:100%;
		padding:0.3rem 0.3rem;
		margin:0.5rem auto;
		background:#FFFFFF;
		.title{
			width:100%;
			height:0.8rem;
			line-height:0.8rem;
			text-align:left;
			font-size:0.3rem;
			font-weight:700;
			color:$titleColor;
			margin-bottom:0.2rem;
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
				width: 6.9rem;
				height: 2rem;
				margin-right: 0.2rem;
				background:url(../../assets/img/thanks/6850742-7eed684ee7299727.webp) center center no-repeat;
				background-size:cover;
				border-radius: 5px;
			}
		}
		
		
	}
</style>