<template>
	<section>
		<div class="headerNative">
				<div class="logo">
					
				</div>
				<div class="menu_wap" @click="toWrite">
				     	写文章
				</div>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'Header',
		data() {
			return {

			}
		},
		methods: {
			toWrite(){
				this.$router.push({
					name:"add",
				})
			}
		},
		mounted() {

		}
	}
</script>
<style lang="scss" scoped="scoped" rel="stylesheet/scss">
     .headerNative {
	 		width:100%;
	 		height:1.2rem;
	 		position:fixed;
	 		background:$Maincolor;
	 		left:0;
	 		top:0;
	 		z-index:99;
	 		.logo{
	 			float: left;
	 			width:1.2rem;
	 			height:1.2rem;
	 			background:url(../../assets/img/common/login.png) center center no-repeat;
	 			background-size:0.8rem;
	 		}
	 		.menu_wap{
	 			float:right;
	 			width:2rem;
	 			height:0.6rem;
	 			border-radius:0.3rem;
	 			background-color:rgba(0,0,0,0.3);
	 			background-image: url(../../assets/img/common/write.png);
	 			background-size:0.5rem;
	 			background-position:1.25rem center;
	 			background-repeat:no-repeat;
	 			margin-right:.3rem;
	 			margin-top:.3rem;
	 			border:1px solid rgba(235,235,235,.5);
	 			color:#fff;
	 			font-size:0.24rem;
	 			line-height:0.58rem;
	 			text-align:center;
	 			padding-right:0.3rem;
	 		}
	 	}
</style>