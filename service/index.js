const Koa = require('koa')
const app = new Koa();
const { connect ,initSchema} = require('./database/init.js')
const mongoose = require('mongoose')
const koaBody = require('koa-body');
const Router = require('koa-router')
const cors = require('koa2-cors')
const path = require('path');
let router = new Router();


//app.use(koaBody({
//multipart:true, // 支持文件上传
//encoding:'gzip',
//patchKoa:true,
//formidable:{
//  uploadDir:path.join(__dirname,'/image/'), // 设置文件上传目录
//  keepExtensions: true,    // 保持文件的后缀
//  maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
//  onFileBegin:(name,file) => { // 文件上传前的设置
//    console.log(file)
//  },
//}
//}));
app.use(koaBody({
	multipart: true,
    formidable:{
        maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
    }
}))
app.use(cors())
let user = require('./appApi/user.js')
let article = require('./appApi/articles.js')
let label = require('./appApi/label.js')
let labelList = require('./appApi/labelList.js')
let upload = require('./appApi/upload.js')
//装在所有子路由
app.use(router.routes());
app.use(router.allowedMethods)
router.use('/user',user.routes())
router.use('/article',article.routes())
router.use('/label',label.routes())
router.use('/labelList',labelList.routes())
router.use('',upload.routes())
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
