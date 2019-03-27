import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
Vue.use(Router)
Vue.use(NProgress)
let title = document.title;
const router = new Router({
	routes,
	mode: 'history'
})

//获取token ----此处用userId--- 代替
let token = '';
router.beforeEach((to, from, next) => {
	token = store.getters.userId
	NProgress.start();
	if((!token || token == null) && to.name == 'add'){
		next({
			name:'login'
		})
	}
	if(to.meta && to.meta.title){
		NProgress.done();
		title = to.meta.title;
	}	
	
	next()
	
})

router.afterEach(to => {
	NProgress.done();
	document.title = title;
//	window.scrollTo(0, 0)
})

export default router