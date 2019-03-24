import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
Vue.use(Router)
let title = document.title;
const router = new Router({
	routes,
	mode: 'history'
})

router.beforeEach((to, from, next) => {
	if(to.meta && to.meta.title){
		title = to.meta.title;
	}	
	next();
})

router.afterEach(to => {
	document.title = title;
//	window.scrollTo(0, 0)
})

export default router