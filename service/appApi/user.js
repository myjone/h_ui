const Router = require('koa-router');
const mongoose = require('mongoose')

let router = new Router();

router.post('/',async(ctx)=>{
	ctx.body = '这是用户操作首页'
})

router.post('/register',async(ctx)=>{
	 const User = mongoose.model('Users');
	 let newUser = new User(ctx.request.body);
	 await newUser.save().then(()=>{
	 	ctx.body = {
	 		code:200,
	 		message:'注册成功'
	 	}
	 }).catch(error=>{
	 	ctx.body={
	 		code:500,
	 		message:error,
	 	}
	 })
})

router.post('/login',async(ctx)=>{
	 let loginUser = ctx.request.body;
	 console.log(loginUser)
	 let userName = loginUser.userName;
	 let passWord = loginUser.passWord;
	 //映入user中的model
	 const User = mongoose.model('Users');
	 await User.findOne({userName:userName}).exec().then(async(result)=>{
	 	console.log(result)
	 	if(result){
	 		let newUser = new User();
	 		await newUser.comparaPassword(passWord,result.passWord)
	 		.then((isMatch)=>{
	 			ctx.body ={
	 				code:200,
	 				message:isMatch
	 			}
	 		}).catch(error =>{
	 			ctx.body ={
	 				code:200,
	 				message:'密码错误'
	 			}
	 		})
	 	}else{
	 		ctx.body={
	 		code:500,
	 		message:'用户名不存在',
	 		}
	 	}
	 }).catch(error=>{
	 	console.log(error)
	 	ctx.body={
	 		code:500,
	 		message:error,
	 	}
	 })
})


module.exports = router;

