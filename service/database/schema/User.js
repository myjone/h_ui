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
				console.log(err)
				if(!err) resolve(isMatch)
				else reject(err)
			})
		})
	}
}


//发布模型
mongoose.model('Users',userSchema)
