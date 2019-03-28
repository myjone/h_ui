<template>
	<section>
		<div class="title">
			<div class="back_icon" @click="back">
			</div>
			修改资料
		</div>
	</section>
</template>
<script>
	import axios from 'axios';
	import Upload from '@/components/upload/upload.vue';
	import {mapGetters} from 'vuex'
	export default {
		components: {
			Upload,
		},
		data() {
			return {

			}
		},
		computed:{
			...mapGetters(['user']),
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
		},
	}
</script>
<style lang="scss" rel='stylesheet/scss' scoped="scoped">
	.title {
		width: 100%;
		height: 1rem;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		background: linear-gradient(to right, $Maincolor 10%, $Subcolor 100%);
		z-index: 1;
		font-size: 0.3rem;
		font-weight: 600;
		text-align: center;
		color: #FFFFFF;
		line-height: 1rem;
		.back_icon {
			position: absolute;
			width: 0.5rem;
			height: 0.5rem;
			background: url(../../assets/img/common/back.png) center center no-repeat;
			background-size: 0.4rem;
			top: 0.25rem;
			z-index: 2;
		}
		
	}	
</style>