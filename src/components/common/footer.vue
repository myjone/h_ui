<template>
	<section>
		<div class="footerNative">
			<div>
				<router-link to="/" :class='active'>
					<div class="icon"></div>
					<p class="span">首页</p>
				</router-link>
			</div>
			<div>
				<router-link to="/recommend">
					<div class="icon"></div>
					<p class="span">推荐</p>
				</router-link>
			</div>
			<div>
				<router-link to="/search">
					<div class="icon"></div>
					<p class="span">搜索</p>
				</router-link>
			</div>
			<div>
				<router-link to="/user">
					<div class="icon"></div>
					<p class="span">个人中心</p>
				</router-link>
			</div>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'Footer',
		data() {
			return {
				active: 'router-link-exact-active',
			}
		},
		methods: {
			
		},
		mounted() {
			if(this.$route.name =='home'){
					this.active =  'router-link-exact-active'
				}else{
					this.active =  'router-link-active'
				}
		},
		watch: {
			$route:function(){
				if(this.$route.name =='home'){
					this.active =  'router-link-exact-active'
				}else{
					this.active =  'router-link-active'
				}
			},
			 deep:true ,
		},
	}
</script>
<style lang="scss" scoped="scoped" rel="stylesheet/scss">
	.footerNative {
		width: 100%;
		height:120px;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #FFFFFF;
		box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: space-around;
		padding: 10px 0;
		div {
			width: 25%;
			color: $rgbColor;
			.span {
				font-size: 28px;
				text-align: center;
			}
			.icon {
				width: 100%;
				height: 60px;
				background-position: center center;
				background-repeat: no-repeat;
				background-size:50px;
			}
			&:nth-child(1) .icon {
				background-image: url(../../assets/img/footer/home.png);
			}
			&:nth-child(2) .icon {
				background-image: url(../../assets/img/footer/list.png);
			}
			&:nth-child(3) .icon {
				background-image: url(../../assets/img/footer/search.png);
			}
			&:nth-child(4) .icon {
				background-image: url(../../assets/img/footer/user.png);
			}
			&:nth-child(1) .router-link-exact-active {
				color: $Maincolor;
				.icon {
					background-image: url(../../assets/img/footer/home_active.png);
				}
			}
			&:nth-child(2) .router-link-exact-active {
				color: $Maincolor;
				.icon {
					background-image: url(../../assets/img/footer/list_active.png);
				}
			}
			&:nth-child(3) .router-link-exact-active {
				color: $Maincolor;
				.icon {
					background-image: url(../../assets/img/footer/search_active.png);
				}
			}
			&:nth-child(4) .router-link-exact-active {
				color: $Maincolor;
				.icon {
					background-image: url(../../assets/img/footer/user_active.png);
				}
			}
		}
	}
</style>