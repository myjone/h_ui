var db = connect('zhangjie'); //链接数据库

let articleModel = {
	'articleImg': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2146046871,2611785107&fm=27&gp=0.jpg',
	'articleTitle': '全面分析前端的网络请求方式',
	'articleContent': '',
	"addTime": new Date(),
	"updateTime": new Date(),
	"userId": "5c99f71f4ae6294030b14259",
}
db.articles.insert(articleModel)
print('insert success')