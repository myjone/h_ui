<template>
	<section>
		<ul class="list">
			<li>
				<router-link :to='{name:"directive"}'>
			  自定义指令
			  </router-link>
			</li>
		</ul>
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
			
		},
		mounted() {

		}
	}
</script>
<style lang="scss" rel='stylesheet/scss' scoped="scoped">
	.list{
		width:690px;
		margin:0 auto;
		li{
			width:100%;
			height:80px;
			line-height:80px;
			font-size:28px;
			border-bottom:1px solid #e2e2e2;
			text-align: left;
			cursor:pointer;
			
		}
	}
</style>