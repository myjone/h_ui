const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
router.post('/insertLabelList', async(ctx) => {
	let Label = new mongoose.model('LabelLists');
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
router.post('/labellist', async(ctx) => {
	let  labelList = mongoose.model('LabelLists');
     try{
     	
     	let result = await labelList.find({}).populate('labelId').exec();
     	
     	console.log(result  +'-----------------')
     	
     	
     }catch(error){
     	ctx.body = {
     		code:500,
     		message:error
     	}
     }
})

module.exports = router;