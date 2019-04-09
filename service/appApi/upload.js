const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
let router = new Router();
const qnconfig = require('../config/config.js');
const fs = require('fs');
const qn = require('qn');

//获取七牛token给前端试用
router.post('/token', (ctx) => {
	ctx.body = {
		code: 200,
		message: '请求成功',
		data: qnconfig.uploadToken,
	}
})

module.exports = router;