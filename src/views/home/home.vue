<template>
	<section>
		<Editor ref="editor"  @on-change="handleChange" />
	</section>
</template>
<script>
	import Editor from '@/components/editor'
	export default {
		name: 'Home',
		components: {
			Editor
		},
		data() {
			return {

			}
		},
		methods: {
			handleChange(html, text) {
				console.log(html)
			},
		},
		mounted() {

		}
	}
</script>
<style lang="scss" rel='stylesheet/scss' scoped="scoped">
	.block_list{
		width:100%;
		display:flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding:0.2rem;
		li{
			width:2rem;
			height:2rem;
			background:blue;
			box-sizing:border-box;
			border-radius:2px;
			text-align:center;
			margin-bottom:0.3rem;
			color:#FFFFFF;
			font-size:0.26rem;
		}
	}
</style>