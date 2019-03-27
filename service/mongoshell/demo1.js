var startTime = (new Date()).getTime();

var db = connect('log');

//for(let i=0;i<1000;i++){
//	db.test.insert({'number':i});
//}

var tempArray =[];

for(let i=0;i<1000;i++){  //结果显示批量操作更快点
	tempArray.push({num:1})
}

db.tset.insert(tempArray)

var runTime = (new Date()).getTime();


print(runTime-startTime)
