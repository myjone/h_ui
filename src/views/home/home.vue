<template>
	<section>
		<!--<div class="home_wrap">
			<div class="header_banner">
				<div class="item">
				<img src="../../assets/img/home/dog1.jpg" alt="" />
				 <div class="position_contain">
				 	
				 </div>
				</div>
				<div class="item">
				<img src="../../assets/img/home/dog2.jpg" alt="" />
				</div>
				<div class="item">
				<img src="../../assets/img/home/dog3.jpg" alt="" />
				</div>
				<div class="item">
				<img src="../../assets/img/home/dog4.jpg" alt="" />
				</div>
				<div class="item">
				<img src="../../assets/img/home/dog5.jpg" alt="" />
				</div>
			</div>
		</div>-->
		<div class="wrap">
			 <div class="user_contain">
			   <div class="hr">
			   	
			   </div>
			   
			  <ul>
			  	<li>
			  		<p class="title">
			  			坚持打卡天数
			  		</p>
			  		<p>
			  			2
			  		</p>
			  	</li>
			  	<li>
			  		<p class="title">
			  			超越成员比例
			  		</p>
			  		<p>
			  			2
			  		</p>
			  	</li>
			  </ul>
			 </div>
			 <div class="chengxu_icon">
			 	<div class="img_logo">
			 		
			 	</div>
			 	<div class="info">
			 		<p>小柚圈</p>
			 		<p>找兴趣圈,找小柚圈</p>
			 	</div>
			 	<div class="qr_code">
			 	
			 	</div>
			 </div>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'Directive',
		components: {
			//Editor
		},
		data() {
			return {

			}
		},
		methods: {
			test() {
				for(let i = 0; i < 10; i++) {
				  setTimeout(function(){
				  	console.log(i)
				  },i*100)
				}
			},
		},
		mounted() {
			this.test();
		},
	}
</script>
<style lang="scss" rel='stylesheet/scss' scoped="scoped">
	.home_wrap{
		width:100%;
		background:#FFFFFF;
		.header_banner{
			width:100%;
			padding:20px;
			height:468px;
			overflow-x:auto;
			box-sizing:border-box;
			white-space: nowrap;
			font-size:0;
			.item{
				position:relative;
				width:100%;
				display:inline-block;
				height:100%;
				overflow:hidden;
				margin-right:20px;
				height:428px;
				overflow:hidden;
				box-shadow:1PX 2PX 8PX rgba(0,0,0,0.1);
				box-sizing:border-box; 
				&:last-child{
					margin:0;
				}
				
				&:nth-child(2n-1){
					border-top-left-radius:70PX;
					border-bottom-right-radius:70PX;
				}
				&:nth-child(2n){
					border-top-right-radius:70PX;
					border-bottom-left-radius:70PX;
				}
				
				img{
					width:100%;
					height:100%;
				}
				.position_contain{
					position:absolute;
					width:95%;
					height:60px;
					background:rgba(0,129,255,0.6);
					left:20px;
					bottom:30px;
					border-top-left-radius:20PX;
					border-bottom-right-radius:20PX;
				}
			}
		}
	}
	.wrap{
		width:100vw;
		height:calc(100vh - 240px);
		background:#FFFFFF;
		padding-top:30px;
		position:relative;
		padding-top:750px;
        background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1689041390,1442287851&fm=26&gp=0.jpg) center center no-repeat;
        background-size:cover;
        
		.user_contain{
			width:95%;
			margin:0 auto;
			height:280px;
			border:1PX solid #E2E2E2;
			border-radius:10PX;
			position:relative;
			padding-top:140px;
			background-color:#fff;
		    .hr{
		    	position:absolute;
		    	width:90%;
		    	height:1PX;
		    	background:#e2e2e2;
		    	top:120px;
		    	left:50%;
		    	transform:translateX(-50%);
		    }
		   ul{
		   	width:90%;
		   	margin:0 auto;
		   	li{
		   		width:50%;
		   		float:left;
		   		padding-left:20px;
		   		box-sizing:border-box; 
		   		&:nth-child(1){
		   			border-right:1px solid #E2E2E2;
		   		}
		   		.title{
		   			font-size:26px;
		   			color:#666;
		   			line-height:50px;
		   		}
		   		p:nth-child(2){
		   			font-size:50px;
		   			color:#333;
		   			line-height:70px;
		   			font-weight:600;
		   			color:#FFFFFF;
		   		}
		   		
		   	}
		   }
			
			}
			
			.chengxu_icon{
				    width:95%;
					margin:0 auto;
					margin-top:20px;
					height:130px;
					border:1PX solid #E2E2E2;
					border-radius:10PX;
					padding:20px;
					box-sizing:border-box;
					background-color:#fff;
					.img_logo{
						width:90px;
						height:90px;
						background:url(../../assets/img/logo.png) center center no-repeat;
						background-size:75px;
						float:left;
						border-radius:3PX;
					}
					.info{
						float:left;
						margin-left:12px;
						p:nth-child(1){
							position:relative;
							top: -5px;
							height:50px;
							line-height:50px;
							font-size:30px;
							font-weight:600;
							color:#FF8449;
						}
						p:nth-child(2){
							height:40px;
							line-height:40px;
							font-size:24px;
							color:#999999;
						}
					}
					.qr_code{
						width:90px;
						height:90px;
						float:right;
						background:url(../../assets/imgCode.png) center center no-repeat;
						background-size:contain;
						border-radius:3PX;
					}
			}
	}
</style>