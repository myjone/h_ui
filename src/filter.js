import Vue from 'vue'

// 时间转换
const filter = {
	install(Vue) {
		Vue.filter('applyStatus', function(value) {
			let out = '';
			if(value == '0') {
				out = '申请中'
			} else if(value == '1') {
				out = '通过'
			} else if(value == '-1') {
				out = '拒绝'
			}
			return out;
		})

	}
}
export default filter