const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const articleSchema = new Schema({
	articleId:{type: mongoose.Schema.Types.ObjectId},
	articleTitle:String,
	articleContent:String,
	articleImg:{type:String},
	addTime :{type:Date,default:Date.now()},
	updateTime :{type:Date,default:Date.now()},
	userId: {
       type: Schema.Types.ObjectId,
       ref: 'Users'
    },
    labelId:{
		 type: Schema.Types.ObjectId,
         ref: 'Labels'
	}
},{
	collections:'Articles'
})


mongoose.model('Articles',articleSchema)
