const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
router.post('/insertLabel', async(ctx) => {
	let Label = new mongoose.model('Labels');
	let newLabel = new Label(ctx.request.body);
	await newLabel.save().then((data) => {
		console.log(data + "**********************************")
		ctx.body = {
			code: 200,
			message: '添加成功',
			data: {
				messsage: 'success'
			}
		}
	}).catch((error) => {
		ctx.body = {
			code: 500,
			message: error
		}
	})
})


router.post('/list',async(ctx)=>{
	const Article = mongoose.model('Labels');
	let total = '';
	try {
		let result = await Article.find({}).populate('labelId').exec();
		console.log(result)
	} catch(err) {
		ctx.body = {
			code: 500,
			message: err
		}
	}
})

module.exports = router;