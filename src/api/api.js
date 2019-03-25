import axios from 'axios';
import qs from 'qs';
//import Cookies from 'js-cookie';
export const serverUrl = " "
const baseURL = ''
export const axiosData = (type, url, data, _callback, that) => {
	that.$toast.loading({
		forbidClick: true,
		loadingType: 'spinner',
		duration: 0
	});
	axios.defaults.baseURL = serverUrl;
	let sign = localStorage.getItem("sign");
	let sid = localStorage.getItem("sid");
	let userId = localStorage.getItem("userId");
	/*axios.defaults.headers.common['sign'] = "Janhv5e_voDP6xsEagbu8dK2grP2ND9M6N9WD_Yzqvc"
	axios.defaults.headers.common['sid'] = '3651242dae7946c7925580eb36ae463f';*/
	axios.defaults.headers.common['sign'] = sign;
	axios.defaults.headers.common['sid'] = sid;
	axios.defaults.headers.common['channel'] = 'H5';
	//	axios.defaults.headers.common['uid'] = userId;
	let config = {
		method: type,
		url: url,
		data: qs.stringify(data, {
			skipNulls: true
		}),
		requestHeader: {
			'Content-Type': 'application/json',
			"Access-Control-Allow-Origin": "*",
		},
		responseType: ''
	}
	axios(config).then(
		function(res) {
			that.$toast.clear();
			if(res.data.code == 200) {
				_callback(res.data.data)
			}else if(res.data.code == 20004) {
				_callback(res.data.data)
			}else {
				that.$toast(res.data.message.errmsg)
			}
			that.loading = false;
			that.listLoading = false;
			that.modal_loading = false;
			that.btnloading = false;
		}
	).catch(
		function(err) {
			if(err && err.response) {
				switch(err.response.status) {
					case 400:
						err.message = '请求错误'
						break

					case 401:
						err.message = '未授权，请登录'
						break

					case 403:
						err.message = '拒绝访问'
						break

					case 404:
						err.message = `请求地址出错`
						break

					case 408:
						err.message = '请求超时'
						break

					case 500:
						if(err.response.data.msg) {
							err.message = err.response.data.msg
						} else {
							err.message = '服务器内部错误'
						}
						break

					case 501:
						err.message = '服务未实现'
						break

					case 502:
						err.message = '网关错误'
						break

					case 503:
						err.message = '服务不可用'
						break

					case 504:
						err.message = '网关超时'
						break

					case 505:
						err.message = 'HTTP版本不受支持'
						break

					default:
				}
			}
			if(that) {
				if(that.loading !== undefined) {
					that.loading = false;
				}
				if(that.btnloading !== undefined) {
					that.btnloading = false;
				}

				if(that.listLoading !== undefined) {
					that.listLoading = false;
				}

				if(that.modal_loading !== undefined) {
					that.modal_loading = false;
				}

				if(that.savePassLoading !== undefined) {
					that.savePassLoading = false;
				}
			}
		}
	)

};