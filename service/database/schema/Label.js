const mongoose = require('mongoose')
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId  //定义主键
const laebelSchema = new Schema({
	laeblId:ObjectId,
	labelName:String,
	addTime :{type:Date,default:Date.now()},
	updateTime :{type:Date,default:Date.now()},
},{
	collections:'Labels'
})


mongoose.model('Labels',laebelSchema)
