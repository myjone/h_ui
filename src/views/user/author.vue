<template>
	<section>
		<div class="author_wrap">
		<div class="back_icon" @click="goBack">
		
		</div>
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
			goBack(){
				this.$router.go(-1)
			}
		},
		mounted() {

		}
	}
</script>
<style lang="scss" rel='stylesheet/scss' scoped="scoped">
		.author_wrap{
			width:100%;
			min-height:100vh;
			background:#FFFFFF;
			position:relative;
			.back_icon{
				position:absolute;
				width:0.5rem;
				height:0.5rem;
				background:url(../../assets/img/common/back_active.png) center center no-repeat;
				background-size:0.7rem;
				left:0.3rem;
				top:0.3rem;
			}
		}		
</style>