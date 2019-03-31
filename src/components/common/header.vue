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
	 		height:120px;
	 		position:fixed;
	 		background:$Maincolor;
	 		left:0;
	 		top:0;
	 		z-index:99;
	 		.logo{
	 			float: left;
	 			width:120px;
	 			height:120px;
	 			background:url(../../assets/img/common/login.png) center center no-repeat;
	 			background-size:80px;
	 		}
	 		.menu_wap{
	 			float:right;
	 			width:200px;
	 			height:60px;
	 			border-radius:30px;
	 			background-color:rgba(0,0,0,0.3);
	 			background-image: url(../../assets/img/common/write.png);
	 			background-size:50px;
	 			background-position:125px center;
	 			background-repeat:no-repeat;
	 			margin-right:30px;
	 			margin-top:30px;
	 			border:1px solid rgba(235,235,235,.5);
	 			color:#fff;
	 			font-size:24px;
	 			line-height:58px;
	 			text-align:center;
	 			padding-right:30px;
	 		}
	 	}
</style>