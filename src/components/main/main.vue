<template>
	<section>
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
  .main_wrap{
  	margin-top:1.2rem;
  }
</style>