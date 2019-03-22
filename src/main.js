
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Filter from './filter'
import vMessage from './components/GlobalUserComponents/message/index';
Vue.use(vMessage)
Vue.use(Filter)
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})