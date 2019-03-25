const Koa = require('koa');

const app = new Koa();

const fs = require('fs');

const koaBodyparser = require('koa-bodyparser')
app.use(koaBodyparser())


async function router(url){
	let page = '404.html';
	switch(url){
		case "/" :
		   page = 'index.html';
		   break;
		case "/index" :
		   page = 'index.html';
		   break;
		case "/index" :
		   page = 'todo.html';
		   break;
		 case "/404" :
		   page = '404.html';
		   break;
		 default:
		    break;
	}
	let html = await render(page);
	return html;
}

function render(page){
	return new Promise((resolve,reject)=>{
		let pageUrl = `./page/${page}`;
		fs.readFile(pageUrl,'binary',(err,data)=>{
			if(err){
				reject(err)
			}else{
				console.log(data)
				resolve(data)
			}
		})
		
	})
}



app.use(async(ctx)=>{
	let url = ctx.request.url;
	let html = await router(url)
	ctx.body = html;
})


app.listen('3001',()=>{
	console.log('server starting at 3001')
})
