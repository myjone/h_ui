const mongoose = require('mongoose')

const Schema = mongoose.Schema;
let ArticleId = Schema.Types.ObjectId  //定义主键
const articleSchema = new Schema({
	ID:ArticleId,
	articleTitle:String,
	articleContent:String,
	articleImg:{type:String,default:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2066864154,87086712&fm=26&gp=0.jpg'},
	userId:String,
	addTime :{type:Date,default:Date.now()},
	updateTime :{type:Date,default:Date.now()},
},{
	collections:'Articles'
})


mongoose.model('Articles',articleSchema)
