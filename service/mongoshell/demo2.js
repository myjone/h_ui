var workMan ={
	name:"zhangjie",
	age:33,
	sex:1,
	job:'前端',
	skill:{
		skillOne:'HTML+CSS',
		skillTwo:'JAVASCRIPT',
		skillThree:'PHP',		
	},
	regedTime:new Date()
}

var workMan2 ={
	name:"韩梅梅",
	age:38,
	sex:1,
	job:'后端',
	skill:{
		skillOne:'HTML+CSS',
		skillTwo:'JAVA',
		skillThree:'PHP',		
	},
	regedTime:new Date()
}


var workMan3 ={
	name:"吴朝伟",
	age:34,
	sex:1,
	job:'测试',
	skill:{
		skillOne:'HTML+CSS',
		skillTwo:'PPT',
		skillThree:'PHP',		
	},
	regedTime:new Date()
}


var db = connect('company');

var workArray = [workMan,workMan3,workMan2];

db.work.insert(workArray);


print('插入成功啦')
