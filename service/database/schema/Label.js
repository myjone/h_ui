const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const laebelSchema = new Schema({
	labelId:{type: mongoose.Schema.Types.ObjectId, ref:'LabelLists'},
	labelName:String,
	addTime :{type:Date,default:Date.now()},
	updateTime :{type:Date,default:Date.now()},
},{
	collections:'Labels'
})

mongoose.model('Labels',laebelSchema)
