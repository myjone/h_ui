<template>
	<section style="height:100%;">
		<div class="full_wrap">
			<div class="zr">
				<div class="water">
					<div class="water-c">
						<div class="water-1"> </div>
						<div class="water-2"> </div>
					</div>
				</div>
				<div class="return_back" @click="goBack">

				</div>
				<div class="logo">

				</div>
			</div>
			<div class="box">
				<div class="input-fil-x" >
					<input type="text" class="input-fill" placeholder='手机号' v-model='user.phone' />
				    <label class="input-label">手机号</label>
				    <div class="hr"></div>
				</div>
				<div class="input-fil-x" >
					<input type="password" class="input-fill" placeholder='密码' v-model='user.passWord' />
				    <label class="input-label">密码</label>
				    <div class="hr"></div>
				</div>
				<div class="input-fil-x">
						<div class="button" @click="toHome">登 &nbsp;录</div>
				</div>
				<div class="bar">
					<router-link :to="{name:'register'}">注册</router-link>
					<a href="">忘记密码?</a>
				</div>
			</div>
		</div>
		<!--https://www.uplabs.com
		 https://www.behance.net-->
		<!-- https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=15623-->
	</section>
</template>

<script>
	
	import { axiosData } from '@/api/api';
	import { mapActions } from 'vuex';
	export default {
		data() {
			return {
               user:{
               	phone:"",
               	passWord:"",
               }
			}
		},
		methods: {
			...mapActions(['handleLogin','userSet']),
	
				goBack(){
					this.$router.go(-1);
				},
				toHome(){
					let url = '/api/user/login';
					let param  = {};
					param = Object.assign({},param,this.user);
					let _callback =(res)=>{
						 let userName = res.userName;
						 let userId = res._id;
						 this.userSet(res);
						 this.handleLogin({userName,userId});
						 this.$router.push({
						 	name:'home'
						 })
					}
					axiosData('post',url,param,_callback,this)
				}
		},
		mounted() {

		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped="scoped">
 html,body{
	background:#FFFFFF;
}
	.full_wrap {
		width: 100vw;
		height:100%;
		background: #FFFFFF;
		.zr {
			background: $Maincolor;
			width: 100%;
			height:400px;
			position: relative;
			.return_back {
				position: absolute;
				width:50px;
				height:50px;
				top:50px;
				left:20px;
				background: url(../../assets/img/common/back.png) center center no-repeat;
				background-size:40px;
			}
			.logo {
				position: absolute;
				width:140px;
				height:140px;
				background-image:url(../../assets/img/common/login.png);
				background-position:center center;
				background-repeat:no-repeat;
				background-size:contain;
				background-color:rgba(0,0,0,0.3);
				left: 50%;
				transform: translateX(-50%);
				top:120px;
				border-radius:150px;
			}
		}
		.water {
			position: absolute;
			left: 0;
			bottom: -10px;
			height: 30px;
			width: 100%;
			z-index: 1
		}
		.water-c {
			position: relative
		}
		.water-1 {
			background: url(../../assets/img/login/water-1.svg) repeat-x;
			background-size: 600px;
			-webkit-animation: wave-animation-1 3.5s infinite linear;
			animation: wave-animation-1 3.5s infinite linear
		}
		.water-2 {
			top: 5px;
			background: url(../../assets/img/login/water-2.svg) repeat-x;
			background-size: 600px;
			-webkit-animation: wave-animation-2 6s infinite linear;
			animation: wave-animation-2 6s infinite linear
		}
		.water-1,
		.water-2 {
			position: absolute;
			width: 100%;
			height: 30px
		}
		.back-white {
			background: #fff
		}
		@keyframes wave-animation-1 {
			0% {
				background-position: 0 top
			}
			100% {
				background-position: 600px top
			}
		}
		@keyframes wave-animation-2 {
			0% {
				background-position: 0 top
			}
			100% {
				background-position: 600px top
			}
		}
		.box {
			width: 100%;
			margin-top: 130px;
			padding:0 50px;
			.form_group {
				width: 100%;
				margin-bottom:50px;
				.input_item {
					width: 100%;
					font-size: 0;
					.input {
						display: inline-block;
						width: 100%;
						border: none;
						border-bottom: 1px solid #e2e2e2;
						font-size: $Textcolor;
						outline: none;
						font-size:26px;
						line-height:60px;
						display:flex;
						align-items:center;  
						&:focus {
							border-bottom: 1px solid $Maincolor;
						}
					}
					
				}
			}
			
		}
		.box{
			width:100%;
			padding:0 30px;
			box-sizing:border-box;
			margin-top:100px;
			.input-fill{
				width:100%;
				height:80px;
				font-size:30px;
				border:0;
				border-bottom:1px solid #EEEEEE;
				padding:0 30px;
				transition: .5s linear left;
				position:relative;
			}
			
			/*清除浏览器默认的placeholder 样式*/
			.input-fill:placeholder-shown::placeholder {
    			color: transparent;
			}
			.input-fil-x{
				width:100%;
				height:80px;
				position:relative;
				font-size:0;
				 margin-bottom:60px;
				.hr{
					width:0;
					position:absolute;
					left:50%;
					bottom:0;
					height:2px;
					background:#0081ff;
					transition:0.5s ease-in-out;
				}
				.button {
						width: 100%;
						height:70px;
						display: flex;
						color: #FFFFFF;
						border-radius: 5px;
						align-items: center;
						justify-content: center;
						font-size:26px;
						background: linear-gradient(to right, $Subcolor 10%, $Maincolor 100%);
						margin-top:80px;
						box-shadow:1px 5px 10px rgba(0,0,0,0.08);
						transition:0.35s all ease-in; 
						&:hover{
							background: linear-gradient(to right, $Maincolor 10%, $Subcolor 100%);
						}
					}
			}
			.input-label{
				position:absolute;
				left:30px;
				top:50%;
				transform:translateY(-50%);
				font-size:30px;
				color:#eee;
				pointer-events: none; /*让元素虚幻*/
				transition:0.35s ease-in;
			}
			.input-fill:not(:placeholder-shown)~.input-label,
			.input-fill:focus~.input-label {
				transform: scale(0.8) translate(-30px,-80px);
				color:#0081ff;
			}
			.input-fill:not(:placeholder-shown)~.hr,
			.input-fill:focus~.hr{
				width:100%;
				left:0;
			}
			.bar{
				width:100%;
				height:50px;
				display:flex;
				justify-content:space-between;
				font-size:24px;
				align-items:center;
				margin-top:-50px;
				a:nth-child(1){
					color:$Disabledcolor;
				}
				a:nth-child(2){
					color:$Maincolor;
				}
			}
			
		}
		
	}
</style>