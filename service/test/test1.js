const Koa = require('koa')
const app = new Koa();

app.use(async(ctx)=>{
	let url = ctx.url;
	let request = ctx.request;
	let req_query = request.query;
	let req_querystring = request.querystring;
	ctx.body = {
		url,
		req_query,
		req_querystring
	}
});

app.listen('3001',()=>{
	console.log('服启动了 at start 3001')
})
