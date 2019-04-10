const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
router.post('/insertArticle', async(ctx) => {
	let Article = new mongoose.model('Articles');
	let newArtcle = new Article(ctx.request.body);
	await newArtcle.save().then((data) => {
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
router.post('/list', async(ctx) => {
	const Article = mongoose.model('Articles');
	let total = '';
	Article.countDocuments({}, (err, count) => {
		if(err) {
			next(err)
		} else {
			total = count;
		}
	})
	try {
		let reqParam = ctx.request.body; //
		let page = Number(reqParam.pageNum); //当前第几页
		let size = 10 //每页显示数量
		let start = (page - 1) * size
		let result = await Article.find({}).sort({
			_id: -1
		}).populate('userId').populate('labelId').skip(start).limit(size).exec();
		let hasMore = total - (page - 1) * size > size ? true : false;
		ctx.body = {
			code: 200,
			message: '请求成功',
			data: {
				list: result,
				pageNation: {
					hasMore: hasMore,
					total: total,
					currentPage: page,
				}
			}
		}
	} catch(err) {
		ctx.body = {
			code: 500,
			message: err
		}
	}
})

router.post('/detail', async(ctx) => {
	const Article = mongoose.model('Articles');
	let _id = ctx.request.body._id
	try {
		let result = await Article.findOne({
			_id: _id
		}).populate('userId').exec();
		ctx.body = {
			code: 200,
			message: '请求成功',
			data: result
		}
	} catch(err) {
		ctx.body = {
			code: 500,
			message: err
		}
	}
})

//查询用户的所有文章
router.post('/fingByUser', async(ctx) => {
	let loginUser = ctx.request.body;
	const Article = mongoose.model('Articles');
	const User = mongoose.model('Users');
	await User.findOne({
		"_id": loginUser.userId
	}).exec().then(async(result) => {
		await Article.find({
			"userId": result._id
		}).populate('userId').exec().then((data) => {
			ctx.body = {
				code: 200,
				message: '请求成功',
				data: data,
			}
		});
	}).catch((error) => {
		ctx.body = {
			code: 500,
			message: error
		}
	})
})

module.exports = router;