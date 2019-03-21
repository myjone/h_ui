<template>
	<section class="main_APP">
		<Header/>
		<div class="main_wrap">
			<router-view/>
		</div>
	</section>
</template>
<script>
	import Header from '@/components/common/header.vue'
	export default {
		name: 'Main',
		components: {
			Header,
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
<style lang="scss" rel='stylesheet/scss'>
	.main_APP {
		width: 100%;
		padding-top: 1.2rem;
	}
</style>