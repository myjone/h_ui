const Koa = require('koa');

const app = new Koa();

const Router = require('koa-router');

let router = new Router();

const mongoose = require('mongoose');

router.post('/insertArticle',async(ctx)=>{
	 let Article = new mongoose.model('Articles');
	 let newArtcle = new Article(ctx.request.body);
	 await newArtcle.save().then(()=>{
	 	ctx.body = {
	 		code:200,
	 		message:'添加成功'
	 	}
	 }).catch((error)=>{
	 	ctx.body = {
	 		code:500,
	 		message:error
	 	}
	 })
})

router.post('/list',async(ctx)=>{
	 const Article = mongoose.model('Articles');
	  await Article.find({}).exec().then((result)=>{
	  	 if(result){
	  	 	ctx.body = {
	  	 		code:200,
	  	 		message:'请求成功',
	  	 		data:result,
	  	 	}
	  	 }
	  }).catch((error)=>{
	  	ctx.body = {
	  		code:'500',
	  		message:error,
	  	}
	  })
})


module.exports = router;
