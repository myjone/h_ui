const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/insertArticle', async(ctx) => {
	let Article = new mongoose.model('Articles');
	let newArtcle = new Article(ctx.request.body);
	await newArtcle.save().then(() => {
		ctx.body = {
			code: 200,
			message: '添加成功',
			data:{
				messsage:'success'
			}
		}
	}).catch((error) => {
		ctx.body = {
			code: 500,
			message: error
		}
	})
})

router.post('/list', async(ctx) => {
	const Article = mongoose.model('Articles');	
	let total = '';
	 Article.countDocuments({},(err,count)=>{
	 	if(err){
	 		next(err)
	 	}else{
	 		total = count;
	 	}
	 })
	try{
		let reqParam= ctx.request.body;//
        let page = Number(reqParam.pageNum);//当前第几页
		let size = 10 //每页显示数量
		let start = (page - 1) * size
		let result = await Article.find({})
			.skip(start).limit(size).exec()
		let hasMore=total-(page-1)*size>size?true:false;
		ctx.body = {
			code: 200,
			message:'请求成功',
			data:{
				list:result,
				pageNation:{
					hasMore:hasMore,
					total:total,
					currentPage:page,
				}
			}
		}
	} catch(err){
		ctx.body = {
			code: 500,
			message: err
		}
	}
})


router.post('/detail',async(ctx)=>{
	const Article = mongoose.model('Articles');	
	console.log(ctx.request.query)
})

module.exports = router;