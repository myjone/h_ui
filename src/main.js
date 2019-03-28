
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Filter from './filter'
import vMessage from './components/GlobalUserComponents/message/index';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';

Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(vMessage)
Vue.use(Filter)
new Vue({
	//el: '#app',
	router,
	store,
	render: h => h(App)
}).$mount("#app")