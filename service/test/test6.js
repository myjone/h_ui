const Koa = require('koa');

const app = new Koa();

const Router = require('koa-router');

const router = new Router();

router.get('/',async(ctx,next)=>{
	  ctx.body = ctx.request.query
})


app.use(router.routes()).use(router.allowedMethods())

app.listen('3001',()=>{
	console.log('server starting at 3001')
})
