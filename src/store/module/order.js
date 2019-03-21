
export default {
	state: {
		orderId:'',
	},
	
	//提交 mutations是更改Vuex状态的唯一合法方法
	mutations: {
		modifyOrderId:(state,orderId)=>{
			 state.orderId = orderId
		}
	},
	//给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
	actions: {
		modifyOrderId:({commit},orderId)=>{
			return commit('modifyOrderId',orderId)
		}
	},
	//获取vux里面的内容
	getters:{
		orderId:state => state.orderId
	}
} 