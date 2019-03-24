const mongoose = require('mongoose')

const Schema = mongoose.Schema;
let ArticleId = Schema.Types.ObjectId  //定义主键
const articleSchema = new Schema({
	ID:ArticleId,
	articleTitle:String,
	articleContent:String,
	articleImg:String,
	userId:String,
	addTime :{type:Date,default:Date.now()},
	updateTime :{type:Date,default:Date.now()},
},{
	collections:'Articles'
})


mongoose.model('Articles',articleSchema)
