const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const laebelListSchema = new Schema({
	labelListId:{type: mongoose.Schema.Types.ObjectId},
	labelListName:String,
	labelListContent:String,
	addTime :{type:Date,default:Date.now()},
	updateTime :{type:Date,default:Date.now()},
	labelId:{
		 type: Schema.Types.ObjectId,
         ref: 'Labels'
	}
},{
	collections:'LabelLists'
})

mongoose.model('LabelLists',laebelListSchema)
