const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10
let ObjectId = Schema.Types.ObjectId  //定义主键
//创建UserSchema
const userSchema =  new Schema({
	UserId :ObjectId,
	userName :{unique:true,type:String},
	passWord :String,
	userImage:{type:String,default:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=391334800,1376169448&fm=200&gp=0.jpg'},
	userTips:{type:String,default:'这是一头猪的时代'},
	createAt :{type:Date,default:Date.now()},
	lastLoginAt :{type:Date,default:Date.now()},
})
userSchema.pre('save',function(next){
	bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt)=>{
		if(err) return next(err)
		bcrypt.hash(this.passWord,salt,(err,hash)=>{
			if(err) return next(err)
			this.passWord =  hash
			next();
		})
	})
})

userSchema.methods = {
	comparaPassword:(_passWord,passWord)=>{
		return new Promise((resolve,reject)=>{
			bcrypt.compare(_passWord,passWord,(err,isMatch)=>{
				if(!err) resolve(isMatch)
				else reject(err)
			})
		})
	}
}


//发布模型
mongoose.model('Users',userSchema)
