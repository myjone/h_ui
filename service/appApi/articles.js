const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
//const qnconfig = require('../config/config.js');
const fs = require('fs');
const qn = require('qn');

//七牛上传图片相关的内容
const bucket = 'images';
// 七牛云
var client = qn.create({
// 秘钥在控制模板->个人中心->密钥管理中可以看到
    accessKey: 'kgfcH_oDX9NZOHAc2l3Uy5WFCbzKyQfJw6p1RwTU',
    secretKey: '4siJwH7EKFf6Q3w--DoMsuXZPuDRaZYN4e5Msejt',
// 空间名
    bucket: bucket,
// 这个是你要生成的前缀（你的外链地址，可以在空间中查看）
// 其实写不写都行，不写后面也得写.
    origin: 'pp29kwezr.bkt.clouddn.com'
})

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
		let result = await Article.find({}).sort({_id: -1}).populate('userId').skip(start).limit(size).exec();
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

router.post('/detail', async(ctx) =>{
	const Article = mongoose.model('Articles');
	let _id = ctx.request.body._id
	try {
		let result = await Article.findOne({
			_id: _id
		}).populate('userId').exec();
		ctx.body = {
			code: 200,
			message: '请求成功',
			data:result
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
		await Article.find({"userId":result._id}).populate('userId').exec().then((data)=>{
			ctx.body = {
				code:200,
				message:'请求成功',
				data:data,
			}
		});
	}).catch((error)=>{
		ctx.body = {
			code:500,
			message:error
		}
	})
})

router.post('/token', (ctx) => {
      ctx.body = {
      	 code:200,
      	 message:'请求成功',
      	 data:qnconfig.uploadToken,
      }
})
//上传图片
router.post('/upload',async(ctx)=>{
   	var imgData = ctx.request.body.imageData.content;
   	var fileName = Date.now() + '.png';
   	var  filePath = './image/' + fileName;
   	var  base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var  dataBuffer = Buffer.from(base64Data, 'base64');
     try {
     	let path = '';
        fs.writeFile(filePath, dataBuffer, function (err) {
            if (err) {
                ctx.body = {
                	code:500,
                	message:"文件写入失败"
                }
            } else {
                client.uploadFile(filePath, {key: `/images/${fileName}`}, function (err1, result) {
                  console.log(err1 +'err1')
                  console.log(result.url)
                   path = result.url;
                   //console.log(result.path + "********")
                   // 上传成功之后删除 
                   fs.unlinkSync(filePath);
                 //  console.log(path)
                });
            }
        })
         ctx.body = {
                   	 code:200,
                   	 message:'上传成功',
                   	 data:{
                   	 	path:path
                   	 }
                   }
    } catch (err) {
    	console.log(err)
        ctx.body ={
        	code:500,
        	message:err.meaaage,
        }
    }

})

module.exports = router;