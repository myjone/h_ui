var db = connect('company');

//false 表示没有就不修改 true 表示查找全部
db.work.update({sex:1},{$set:{money:1000}},false,true);

var result = db.runCommand({getLastError:1})


printjson(result)
