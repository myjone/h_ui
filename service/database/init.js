const mongoose = require('mongoose')
//const db = 'mongodb://localhost/zhangjie'
const db = 'mongodb://120.77.242.239:27017/zhangjie'
const glob = require('glob');
const {
	resolve
} = require('path');
exports.initSchema = () => {
	glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require)
}
exports.connect = () => {
	//链接数据库
	mongoose.connect(db, {
		useCreateIndex: true,
		useNewUrlParser: true
	})
	let maxConnectTimes = 0;
	return new Promise((resolve, reject) => {

		//增加数据库监听事件
		mongoose.connection.on('disconnected', () => {
			console.log('****数据库断开*****')
			if(maxConnectTimes <= 3) {
				maxConnectTimes++
				mongoose.connect(db, {
					useCreateIndex: true,
					useNewUrlParser: true
				})
			} else {
				reject(err)
				throw new Error('数据库出现问题，程序无法搞定')
			}
		})
		//数据库出错的时候
		mongoose.connection.on('error', (err) => {
			console.log('****数据库错误*****')
			mongoose.connect(db)
			if(maxConnectTimes <= 3) {
				maxConnectTimes++
				mongoose.connect(db, {
					useCreateIndex: true,
					useNewUrlParser: true
				})
			} else {
				reject(err)
				throw new Error('数据库出现问题，程序无法搞定')
			}
		})

		//数据库链接打开时
		mongoose.connection.once('open', () => {
			console.log('MongDB connected success');
			resolve()
		})

	})
}