var  userName = 'zhangjie';
var timeStep = Date.parse(new Date());
var jsonDatabase  ={
	"loginName":userName,
	"loginTime":timeStep,
}

var db = connect('log');  // 相当于use log

db.login.insert(jsonDatabase)

print('[demo]:log print sucess');
