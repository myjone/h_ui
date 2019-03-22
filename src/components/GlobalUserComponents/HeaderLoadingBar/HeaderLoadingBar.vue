<template>
	<div class="w__loading-bar">
    <div
      class="w__loading-bar--bar"
      :class="isError ? 'w__loading-bar--error' : ''"
      role="bar"
      :style="{transform: 'translate3d(-'+(100-totalProgress)+'%, 0, 0)'}">
      <div class="w__loading-bar--peg"></div>
    </div>
    <div class="w__loading-bar--spinner" role="spinner" v-if="showSpinner">
      <div class="spinner-icon" :class="isError ? 'spinner-icon--error' : ''"
           :style="{'animation': 'w-spinner 400ms '+easing+' infinite'}">
      </div>
    </div>
 </div>
</template>

<script>
  export default{
    name: 'WLoadingBar',
    data () {
      return {
        speed: 5,
        easing: 'linear',//加载动画
        percentNum: 0,//每次前进的百分比
        totalProgress: 0,//控制顶部条形进度条x轴的位移
        showSpinner: true,//是否显示圆圈加载
        isError: false//是否发生错误
      }
    }
  }
</script>
<style>
</style>