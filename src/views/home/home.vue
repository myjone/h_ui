<template>
	<section>
		<ul class="list">
		  <li></li>
		  <li></li>
		  <li></li>
		  <li></li>
		</ul>
	</section>
</template>
<script>
	export default {
		name: 'Home',
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
  .list{
  	width:100vw;
  	padding:0.2rem;
  	box-sizing:border-box;
  	li{
  		width:100%;
  		margin-bottom:0.2rem;
  		background:#FFFFFF;
  		height:4rem;
  		box-shadow:1px 2px 8px rgba(0,0,0,0.1);
  		box-sizing:border-box;
  		border-radius:5px;
  	}
  }
</style>