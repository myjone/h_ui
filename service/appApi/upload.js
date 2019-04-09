const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
let router = new Router();
const qnconfig = require('../config/config.js');
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

//获取七牛token给前端试用
router.post('/token', (ctx) => {
	ctx.body = {
		code: 200,
		message: '请求成功',
		data: qnconfig.uploadToken,
	}
})



// 写入目录
const mkdirsSync = (dirname) => {
 if (fs.existsSync(dirname)) {
  return true
 } else {
  if (mkdirsSync(path.dirname(dirname))) {
   fs.mkdirSync(dirname)
   return true
  }
 }
 return false
}


//上传图片
router.post('/upload', async(ctx) => {
	console.log(ctx.request.body)
	var imgData = ctx.request.body.imageData.content;
	var fileName = Date.now() + '.png';
	var filePath = './image/' + fileName;
	var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
	var dataBuffer = Buffer.from(base64Data, 'base64');
	await qiniuWriteFile(filePath, dataBuffer).then(async(data) => {
		await qiniuUpload(filePath, fileName).then((data) => {
			fs.unlinkSync(filePath);
			ctx.body = {
				code: 200,
				message: '上传成功',
				data: data.url,
			}
		}).catch(err => {
			ctx.body = {
				code: 500,
				message: '图片上传失败',
			}
		})
	}).catch((err) => {
		ctx.body = {
			code: 500,
			message: '图片保存失败'
		}
	})
})

// 上传图片必须要用promise 
let qiniuUpload = (filePath, fileName) => {
	return new Promise((resolve, reject) => {
		client.uploadFile(filePath, {
			key: `/images/${fileName}`
		}, function(err, result) {
			if(err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	})
}

let qiniuWriteFile = (filePath, dataBuffer) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(filePath, dataBuffer, function(err) {
			if(err) {
				reject(err)
			} else {
				resolve('已保存')
			}
		})
	})
}

module.exports = router;