<template>
	<section>
		<div v-zhangjie='color'>{{count}}</div>

		<div class="button" @click="add">add</div>
	</section>
</template>
<script>
//import Editor from '@/components/editor'
import Vue from 'vue';
Vue.directive('zhangjie',function(el,binding){
	el.style='color:'+binding.value;
	console.log(binding)
})
	export default {
		name: 'Directuve',
		components: {
			//Editor
		},
		data() {
			return {
				count:0,
				color:'green',
			}
		},
		methods: {
			add:function(){
				this.count++
			}
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