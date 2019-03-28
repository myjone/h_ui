<template>
	<section>
		<div class="title">
			<div class="back_icon" @click="back">
			</div>
			个人中心
		</div>
		<div class="user_wrap">
			 <div class="user_info">
			 	<div class="user_img" v-lazy:background-image="user.userImage">
			 	</div>
			 	<div class="user_tips">
			 		<p>{{user.userName}}</p>
			 		<p>{{user.userTips}}</p>
			 	</div>
			 </div>
			 <ul class="info_list">
			 	<li>
			 		<p>原创</p>
			 		<p>1</p>
			 	</li>
			 	<li>
			 		<p>关注者</p>
			 		<p>2</p>
			 	</li>
			 </ul>
			 <div class="cahnge_btn ripple" @click="toLink">编辑</div>
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
			toLink(){
				this.$router.push({
					name:'edit'
				})
			}
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
	.user_wrap{
			width:100%;
			height:3rem;
			margin:1.1rem auto;
			background:#FFFFFF;
			padding:0.3rem;
			position:relative;
			.user_info{
				width:100%;
				height:1.2rem;
				.user_img{
					width:1.2rem;
					height:1.2rem;
					background-size:cover;
					border-radius:100%;
					margin-right:0.3rem;
					float:left;
				}
				.user_tips{
					height:1.2rem;
					float:left;
					padding:0.1rem 0;
					box-sizing:border-box;
					p:nth-child(1){
						font-size: 0.3rem;
						line-height: 0.5rem;
						color: #333;
						height: 0.5rem;
						font-weight:600;
					}
					p:nth-child(2){
						font-size: 0.26rem;
						line-height: 0.5rem;
						height: 0.5rem;
						color: #909090;
					}
				}
			}
			.info_list{
				width:100%;
				height:1rem;
				font-size:0;
				margin-top:0.2rem;
				li{
					display:inline-block;
					p{
						padding:0 0.3rem;
						box-sizing:border-box;
						text-align:center;
						line-height: 0.5rem;
						&:nth-child(1){
							font-size: 0.24rem;
							color: #333;
						}
						&:nth-child(2){
							font-size: 0.24rem;
							color: #909090;
						}
					}
				}
			}
			.cahnge_btn{
				position:absolute;
				height: 0.6rem;
    			font-size: 0.3rem;
    			padding: 0 0.3rem;
    			display:flex;
    			justify-content:center;
    			align-items:center;
    			border:1px solid #6739b6;
    			color: #6739b6;
    		    border-radius:3px;
    		    right:0.3rem;
    		    bottom:0.5rem;
			}
		}
</style>