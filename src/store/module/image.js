
export default {
	state: {
		src:'',
	},
	
	//提交 mutations是更改Vuex状态的唯一合法方法
	mutations: {
		img:(state,src)=>{
			console.log(src)
			 state.src = src
		}
	},
	//给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
	actions: {
		img:({commit},src)=>{
			//console.log(src)
			console.log(1111)
		     return commit('img',src)
		}
	},
	//获取vux里面的内容
	getters:{
		src:state => state.src
	}
} 