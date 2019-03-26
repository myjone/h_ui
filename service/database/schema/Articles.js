const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const articleSchema = new Schema({
	articleId:{type: mongoose.Schema.Types.ObjectId, ref:'Users'},
	articleTitle:String,
	articleContent:String,
	articleImg:{type:String,default:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2066864154,87086712&fm=26&gp=0.jpg'},
	addTime :{type:Date,default:Date.now()},
	updateTime :{type:Date,default:Date.now()},
	userId: {
       type: Schema.Types.ObjectId,
       ref: 'Users'
    }
},{
	collections:'Articles'
})


mongoose.model('Articles',articleSchema)
