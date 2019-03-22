<template>
<transition name="fade">
    <div class="message" :class="type" v-show="show">
      <span class="text">{{text}}</span>
    </div>
</transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'message',
    props: {
      type: {
        type: String,
        default: 'info',
        validator: val => ['info', 'success', 'warning', 'error'].includes(val)
      },
      text: {
        type: String,
        default: ''
      },
      show:{
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped="scoped">
	.message{
		position:fixed;
		width:80%;
		top:120px;
		text-align:center;
		font-size:18px;
		text-align:center;
		background-color:blue;
		z-index:99;
		left:50%;
		transform:translateX(-50%);
	}
</style>