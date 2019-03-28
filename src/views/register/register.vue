<template>
	<section>
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
						<Upload style='width:100%;height:100%;'></Upload>
				</div>
			</div>
			<div class="box">
				<div class="form_group">
					<div class="input_item">
						<input type="text" placeholder="手机号" class="input"  v-model='user.phone'/>
					</div>
				</div>
				<div class="form_group">
					<div class="input_item">
						<input type="text" placeholder="昵称" class="input"  v-model='user.userName' :maxlength="8"/>
					</div>
				</div>
				<div class="form_group">
					<div class="input_item">
						<input type="text" placeholder="一句话描述你自己" class="input"  v-model='user.userTips' :maxlength="18"/>
					</div>
				</div>
				<div class="form_group">
					<div class="input_item">
						<input type="password" placeholder="密码" class="input"  v-model='user.passWord'/>
					</div>
				</div>
				<div class="form_group">
					<div class="input_item">
						<div class="button" @click="toHome">注 &nbsp;册</div>
					</div>
				</div>
				<div class="bar">
					<router-link :to='{name:"login"}'>已有账号</router-link>
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
	import Upload from'@/components/upload/upload.vue';
	import {mapGetters,mapActions} from 'vuex'
	export default {
		components:{
			Upload,
		},
		data() {
			return {
               user:{
               	userName:"",
               	passWord:"",
               	phone:'',
               	userTips:'',
               }
			}
		},
		computed:{
			...mapGetters(['src']),
		},
		methods: {
			...mapActions(['img']),
				goBack(){
					this.$router.go(-1);
				},
				toHome(){
					console.log(this.user)
					let url = '/api/user/register';
					let param  = {};
					param = Object.assign({},param,this.user);
					param.userImage = this.src;
					let _callback =(res)=>{
						 this.$toast('注册成功');
						 let _this = this;
						 setTimeout(function(){
						 	_this.$router.push({
						 		name:'login'
						 	})
						 },800)
					}
					axiosData('post',url,param,_callback,this)
				}
		},
		mounted(){
			//页面加载的时候删除vuex里面的数据
			this.img('')
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped="scoped">
	.full_wrap {
		width: 100vw;
		height: 100vh;
		background: #FFFFFF;
		.zr {
			background: $Maincolor;
			width: 100%;
			height: 4rem;
			position: relative;
			.return_back {
				position: absolute;
				width: 0.5rem;
				height: 0.5rem;
				top: 0.5rem;
				left: 0.2rem;
				background: url(../../assets/img/common/back.png) center center no-repeat;
				background-size: 0.4rem;
			}
			.logo {
				position: absolute;
				width: 1.4rem;
				height: 1.4rem;
				background-color: #FFFFFF;
				left: 50%;
				transform: translateX(-50%);
				top: 1.2rem;
				border-radius: 1.5rem;
				overflow:hidden;
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
			margin-top: 1.3rem;
			padding:0 0.5rem;
			.form_group {
				width: 100%;
				margin-bottom:0.5rem;
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
						font-size: 0.26rem;
						line-height: 0.6rem;
						display:flex;
						align-items:center;  
						&:focus {
							border-bottom: 1px solid $Maincolor;
						}
					}
					.button {
						width: 100%;
						height: 0.7rem;
						display: flex;
						color: #FFFFFF;
						border-radius: 5px;
						align-items: center;
						justify-content: center;
						font-size: 0.26rem;
						background: linear-gradient(to right, $Subcolor 10%, $Maincolor 100%);
						margin-top:0.8rem;
						box-shadow:1px 5px 10px rgba(0,0,0,0.08);
						transition:0.35s all ease-in; 
						&:hover{
							background: linear-gradient(to right, $Maincolor 10%, $Subcolor 100%);
						}
					}
				}
			}
			.bar{
				width:100%;
				height:0.5rem;
				display:flex;
				justify-content:space-between;
				font-size:0.24rem;
				align-items:center;
				a:nth-child(1){
					color:$Maincolor;
				}
			}
		}
	}
</style>