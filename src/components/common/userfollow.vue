<template>
	<section>
		<div :class="['user_wrap',className]">
			<div class="user_image" v-lazy:background-image="user.userImage">
			</div>
			<div class="user_info">
				<p>{{user.userName}}</p>
				<p>{{user.userTips}}</p>
			</div>
			<div class="user_btn">
				关注
			</div>
		</div>
	</section>
</template>
<script>
	import { axiosData } from '@/api/api';
	import { mapGetters } from 'vuex';
	export default {
		name: 'UerFollow',
		props: {
			user: {
				type: Object,
			},
			className:{
				Type:String,
				default:'',
			}
		},
		data() {
			return {
				articleId: '',
				articleDetail: {},
			}
		},
		methods: {
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" rel='stylesheet/scss' scoped="scoped">
	.user_wrap {
		width: 6.9rem;
		height: 1rem;
		padding: 0.1rem 0rem;
		margin: 0 auto;
		position: relative;
		.user_image {
			width: 0.8rem;
			height: 0.8rem;
			border-radius: 0.8rem;
			background-color: #E2E2E2;
			float: left;
			background-size: contain;
		}
		.user_info {
			float: left;
			margin-left: 0.2rem;
			text-align: left;
			font-size: 0;
			p:nth-child(1) {
				font-size: 0.28rem;
				line-height: 0.45rem;
				color: $titleColor;
				height: 0.45rem;
			}
			p:nth-child(2) {
				font-size: 0.22rem;
				line-height: 0.35rem;
				height: 0.35rem;
				color: $rgbColor;
			}
		}
		.user_btn {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			height: 0.6rem;
			font-size: 0.3rem;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 0.3rem;
			border: 1px solid $purpleColor;
			color: $purpleColor;
			border-radius: 3px;
		}
	}
	.title_active{
		width: 6.5rem;
		height: 1rem;
		padding: 0.1rem 0rem;
		margin: 0 auto;
		position: relative;
		.user_info{
			p:nth-child(1) {
				font-size: 0.28rem;
				line-height: 0.45rem;
				color: #FFFFFF;
				height: 0.45rem;
			}
			p:nth-child(2) {
				font-size: 0.22rem;
				line-height: 0.35rem;
				height: 0.35rem;
				color: #FFFFFF;
			}
		}
		.user_btn {
			border: 1px solid #FFFFFF;
			color: #FFFFFF;
		}
	}
</style>