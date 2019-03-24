<template>
	<section class="main_APP">
		<Header/>
		<div class="main_wrap">
		<transition name="transitionRouter" mode="out-in">
			<router-view/>
		</transition>
		</div>
		<Footer/>
	</section>
</template>
<script>
	import Header from '@/components/common/header.vue';
	import Footer from '@/components/common/footer.vue';
	export default {
		name: 'Main',
		components: {
			Header,
			Footer
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
		padding-bottom:1.2rem;
	}
	.transitionRouter-enter-active,
	.transitionRouter-leave-active {
		transition: all 0.35s;
	}
	
	.transitionRouter-enter,
	.transitionRouter-leave {
		transform: translate3d(100%, 0, 0);
	}
</style>