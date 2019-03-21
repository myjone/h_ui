<template>
	<section>
		<Header/>
		<div>
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