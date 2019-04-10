const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const articleSchema = new Schema({
	articleId:{type: mongoose.Schema.Types.ObjectId},
	articleTitle:String,
	articleContent:String,
	articleInfo:String,
	articleImg:{type:String},
	addTime :{type:Number,default:(new Date()).getTime()},
	updateTime :{type:Number,default:(new Date()).getTime()},
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
