<template>
	<section>
		<div class="headerNative">
				<div class="logo">
					
				</div>
				<div class="menu_wap">
				
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
	 			background:rgba(0,0,0,0.3);
	 			margin-right:.3rem;
	 			margin-top:.3rem;
	 			border:1px solid rgba(235,235,235,.5);
	 		}
	 	}
</style>