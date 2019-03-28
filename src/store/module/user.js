export default {
	state: {
		userName: '',
		userId: '',
		user:{},
	},

	//提交 mutations是更改Vuex状态的唯一合法方法
	mutations: {
		setUserName(state, userName) {
			state.userName = userName
		},
		setUserId(state, userId) {
			state.userId = userId
		},
		userSet(state,user){
			state.user = user
		}
	},
	//给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
	actions: {
		handleLogin({
			commit
		}, {
			userName,
			userId
		}) {
			userName = userName.trim()
			commit('setUserName',userName)
			commit('setUserId',userId)
		},
		
		userSet:({commit},user)=>{
			 commit('userSet',user)
		}
		
		
	},
	//获取vux里面的内容
	getters: {
		userId: state => state.userId,
		user: (state)=>{
			return state.user
		}
	}
}