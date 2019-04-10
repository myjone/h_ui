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
		width:690px;
		height: 100px;
		padding:10px 0rem;
		margin: 0 auto;
		position: relative;
		.user_image {
			width:80px;
			height:80px;
			border-radius:80px;
			background-color: #E2E2E2;
			float: left;
			background-size: contain;
		}
		.user_info {
			float: left;
			margin-left:20px;
			text-align: left;
			font-size: 0;
			p:nth-child(1) {
				font-size:28px;
				line-height:45px;
				color: $titleColor;
				height:45px;
			}
			p:nth-child(2) {
				font-size:22px;
				line-height:35px;
				height:35px;
				color: $rgbColor;
			}
		}
		.user_btn {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			height:60px;
			font-size:30px;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 30px;
			border: 1PX solid $purpleColor;
			color: $purpleColor;
			border-radius: 3px;
		}
	}
	.title_active{
		width:650px;
		height: 100px;
		padding: 10px 0;
		margin: 0 auto;
		position: relative;
		.user_info{
			p:nth-child(1) {
				font-size: 28px;
				line-height:45px;
				color: #FFFFFF;
				height: 45px;
			}
			p:nth-child(2) {
				font-size: 22px;
				line-height:35px;
				height: 35px;
				color: #FFFFFF;
			}
		}
		.user_btn {
			border: 1PX solid #FFFFFF;
			color: #FFFFFF;
		}
	}
</style>