<template>
	<section class="my_section">
		<div class="wrap">
			<div class="title">
				vue 学习指南
			</div>
			<ul class="list">
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'recommend',
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
<style lang="scss" rel='stylesheet/scss' scoped="scoped">
	.my_section{
		width:100%;
		.wrap{
			width:6.9rem;
			margin:0 auto;
			background:#FFFFFF;
			box-sizing:border-box;
			border-radius:3px;
			box-shadow:1px 3px 5px rgba(0,0,0,0.08);
			margin-top:0.2rem;
			.title{
				width:100%;
				font-size:0.3rem;
				padding-left:0.3rem;
				line-height:0.8rem;
				border-bottom:1px solid #E2E2E2;
				font-weight:600;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow:hidden;
			}
			.list{
				width:100%;
				padding-left:0.3rem;
				box-sizing:border-box;
				li{
					width:100%;
					height:0.8rem;
					border-bottom:1px solid #E2E2E2;
					background:url(../../assets/img/common/next_default.png) 6.1rem center no-repeat;
					background-size:0.3rem;
					&:last-child{
						border-bottom:none;
					}
				}
			}
		}
	}
</style>