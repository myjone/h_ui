const Koa = require('koa')
const app = new Koa();
const koaBodyparser = require('koa-bodyparser')
app.use(koaBodyparser())

app.use(async (ctx)=>{
	if(ctx.url === '/' && ctx.method==='GET'){
		//显示表单页面
	let html = `
	    <h1>sb zhang koa reqest</h1>
	    <form method='POST' action='/'>
	    <p>username</p>
	    <input name='userName'><br/>
	     <p>age</p>
	    <input name='age'><br/>
	     <p>website</p>
	    <input name='webSite'><br/>
	    <button type='submit'>提交</button>
	    </form>
	`
	ctx.body = html;
	}else if(ctx.url === '/' && ctx.method==='POST'){
	   let postData = ctx.request.body
		ctx.body = postData
	}else{
		ctx.body = '<h1>404</h1>'
	}
});

function parsePostData(ctx){
	return new Promise((resolve,reject)=>{
        try{
            let postdata="";
            ctx.req.on('data',(data)=>{
                postdata += data
            })
            ctx.req.addListener("end",function(){
                resolve(postdata);
            })
        }catch(error){
            reject(error);
        }
    });
}


app.listen('3001',()=>{
	console.log('server starting at 3001')
})
