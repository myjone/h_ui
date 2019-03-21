
export default {
	state: {
		returnNo:'',
	},
	
	//提交 mutations是更改Vuex状态的唯一合法方法
	mutations: {
		modifyReturnNo:(state,returnNo)=>{
			 state.returnNo = returnNo
		}
	},
	//给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
	actions: {
		modifyReturnNo:({commit},returnNo)=>{
			return commit('modifyReturnNo',returnNo)
		}
	},
	//获取vux里面的内容
	getters:{
		returnNo:(state)=>state.returnNo
	}
} 