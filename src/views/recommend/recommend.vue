<template>
	<section class="my_section">
	    <div class="input">
	    	<input type="text"  placeholder="请输入标签" v-model='labelName'/>
	         <div @click="label">添加</div>
	    </div>
	    <div class="input">
	    	<input type="text"  placeholder="请输入标签" v-model='labelListName'/>
	    	<input type="text"  placeholder="请输入标签" v-model='labelListContent'/>
	         <div @click="label1">添加</div>
	         
	         <div @click="getList">列表</div>
	    </div>
		<div class="wrap">
			<div class="title">
				vue 学习指南
			</div>
			<ul class="list">
				<li></li>
				<li></li>
				<li></li>
			</ul>
			
			<button @click="getUserArticleList">获取用户下面的所有文章</button>
		</div>
	</section>
</template>
<script>
	import {axiosData} from '@/api/api';
	import {mapGetters} from 'vuex';
	export default {
		name: 'recommend',
		data() {
			return {
				labelName:'',
				labelListName:'',
				labelListContent:'',
			}
		},
		computed:{
			...mapGetters(['userId'])
		},
		methods: {
              getUserArticleList(){
              	let  url = '/api/article/fingByUser';
              	let param = {};
                param.userId = this.userId;
                console.log(param.userId)
                let _callback =(res)=>{
                	console.log(res)
                }
                
                axiosData('post',url,param,_callback,this)
              },
              //添加分类
              label(){
              	let url = '/api/label/insertLabel';
              	let param = {};
              	param.labelName = this.labelName;
              	console.log(this.labelName)
              	let _callback =(res)=>{
              		console.log(res);
              	}
              	 axiosData('post',url,param,_callback,this)
              },
               label1(){
              	let url = '/api/labelList/insertLabelList';
              	let param = {};
              	param.labelListName = this.labelListName;
              	param.labelListContent = this.labelListContent;
              	param.labelId = '5c9b2b5b3dcd9a1d1c4d280c'
              	console.log(this.labelName)
              	let _callback =(res)=>{
              		console.log(res);
              	}
              	 axiosData('post',url,param,_callback,this)
              },
              
              //获取列表
              getList(){	
              	let url = '/api/label/list';
              	let param = {};
              	let _callback =(res)=>{
              		console.log(res);
              	}
              	 axiosData('post',url,param,_callback,this)
              }
		},
		mounted() {

		}
	}
</script>
<style lang="scss" rel='stylesheet/scss' scoped="scoped">
	.my_section{
		width:100%;
		.input{
			width:100%;
			input{
				display:block;
				width:100%;
				height:0.6rem;
				border:1px solid #E2E2E2;
				font-size:0.26rem;
				text-align:left;
			}
			div{
				width:2rem;
				height:0.6rem;
				font-size:0.24rem;
				line-height:0.6rem;
				text-align:center;
				background:blue;
				margin:0.2rem auto;
			}
		}
		.wrap{
			width:6.9rem;
			margin:0 auto;
			background:#FFFFFF;
			box-sizing:border-box;
			border-radius:3px;
			box-shadow:1px 3px 5px rgba(0,0,0,0.08);
			margin-top:0.2rem;
			.title{
				width:100%;
				font-size:0.3rem;
				padding-left:0.3rem;
				line-height:0.8rem;
				border-bottom:1px solid #E2E2E2;
				font-weight:600;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow:hidden;
			}
			.list{
				width:100%;
				padding-left:0.3rem;
				box-sizing:border-box;
				li{
					width:100%;
					height:0.8rem;
					border-bottom:1px solid #E2E2E2;
					background:url(../../assets/img/common/next_default.png) 6.1rem center no-repeat;
					background-size:0.3rem;
					&:last-child{
						border-bottom:none;
					}
				}
			}
		}
	}
</style>