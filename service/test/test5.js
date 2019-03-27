const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

let home = new Router();
home.get('/jspang',async(ctx)=>{
	ctx.body = 'home 下的 jspang的配置 '
}).get('/todo',async(ctx)=>{
	ctx.body= 'home 下的  todo的配置'
})


let page = new Router();
page.get('/jspang',async(ctx)=>{
	ctx.body = 'page 下的 jspang的配置 '
}).get('/todo',async(ctx)=>{
	ctx.body= 'page 下的  todo的配置'
})


//父级路由
let router = new Router();

router.use('/home',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),page.allowedMethods())

app
   .use(router.routes())
   .use(router.allowedMethods())


app.listen('3001',()=>{
	console.log('server starting at 3001')
})
