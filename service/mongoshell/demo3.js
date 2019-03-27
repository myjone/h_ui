var db = connect('company');

//var workMan3 ={
//	name:"垃圾",
//	age:34,
//	sex:0,
//	job:'测试',
//	skill:{
//		skillOne:'HTML+CSS',
//		skillTwo:'PPT',
//		skillThree:'PHP',		
//	},
//	regedTime:new Date()
//}

//——------------------------------------------

//$set 修改器  可以优雅的修改数据库里面的内容

//db.work.update({name:'吴朝伟'},{$set:{'skill.skillThree':'吃屎'}})
//db.work.update({name:'吴朝伟'},{$unset:{age:''}})
//db.work.update({name:'吴朝伟'},{$set:{age:100}})

//$inc 操作修饰符号
//db.work.update({name:'吴朝伟'},{$inc:{age:-10}}) //在原来数字上加减

//db.work.update({},{$set:{interset:[]}}) 

//multi  想加入所有的

//db.work.update({},{$set:{interset:[]}},{multi:true}) 

//upsert
//db.work.update({name:'xiaowang'},{$set:{age:10,interest:[]}},{upsert:true}) 
 //使用$push 添加数组
//db.work.update({name:'xiaowang'},{$push:{interest:'draw'}})

//$ne 修饰符 没有就添加没有就不修改
//db.work.update({name:'xiaowang',interest:{$ne:'Game'}},{$push:{interest:'Game'}})

//$addToSet 修改器
//db.work.update({name:'xiaowang'},{$addToSet:{interest:'read'}})

//$each 批量插入
//var newInterests = ['Sing','Code','Dance']
//db.work.update({name:'xiaowang'},{$addToSet:{interest:{$each:newInterests}}})

//$pop 1 从数组末端进行删除 -1 从数组开始位置开始删除
//db.work.update({name:'xiaowang'},{$pop:{interest:1}})

//数组定位修改非应答式操作 没有返回值
//db.work.update({name:'xiaowang'},{$set:{'interest.2':'吃屎啦啦啦'}})

//db.runCommand();
print('修改成功啦')