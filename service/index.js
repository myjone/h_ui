const Koa = require('koa')
const app = new Koa();
const { connect ,initSchema} = require('./database/init.js')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const cors = require('koa2-cors')
let router = new Router();
app.use(bodyParser())
app.use(cors())
let user = require('./appApi/user.js')
//装在所有子路由
app.use(router.routes());
app.use(router.allowedMethods)
router.use('/user',user.routes())

;(async ()=>{
	await connect();
	initSchema();
})()

app.use(async(ctx)=>{
	console.log(ctx)
	ctx.body='<h1>Hello Koa2</h1>'
})

app.listen(3000,()=>{
	console.log('[Serveer] starting at  port 3000')
})
