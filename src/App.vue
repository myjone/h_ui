<template>
	<div id="app">
		<!--<transition name="transitionRouter" mode="out-in">-->
			<router-view></router-view>
		<!--</transition>-->
	</div>
</template>

<style lang="scss" rel="stylesheet/scss">
	@import '@/assets/root.scss' 
</style>
<style scoped="scoped">
	/*.transitionRouter-enter-active,
	.transitionRouter-leave-active {
		transition: all 0.4s;
	}
	
	.transitionRouter-enter,
	.transitionRouter-leave {
		transform: translate3d(100%, 0, 0);
	}*/
</style>