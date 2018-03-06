var express = require('express');
var router = express.Router();
var email_tools = require('../sendmail.js');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/sendmail', function(req, res) {
	const name = req.body.name;
	const email = req.body.email;
	const company = req.body.company;
	const department = req.body.department;
	const street = req.body.street;
	const city = req.body.city;
	const code = req.body.code;
	const country = req.body.country;
	const tel = req.body.tel;
	const question = req.body.question;

	var text_content = '姓名：' + name + '\n';
	text_content = text_content + '邮箱：' + email + '\n';
	text_content = text_content + '公司：' + company + '\n';
	text_content = text_content + '电话：' + tel + '\n';
	text_content = text_content + '部门：' + department + '\n';
	text_content = text_content + '国家：' + country + '\n';
	text_content = text_content + '城市：' + email + '\n';
	text_content = text_content + '街道：' + street + '\n';
	text_content = text_content + '邮编：' + code + '\n';
	text_content = text_content + '---------------问题内容------------\n';
	text_content = text_content + question;



  // res.render('index', { title: 'Express' });
  //发送邮箱配置
var config = {
	// service: 'qq',
	// auth: {
	// 	user: '870****9@qq.com',
	// 	pass: '******'
	// }
};

//收件箱配置
var options = {
	subject: "[Pyonex网站客户咨询]"+ question.substr(0, 20)+'...',
	text: text_content,
	to: "y.tan@seirin.jp",
	// cc:"870***29@qq.com,51****78@qq.com",
	sender: name,
	// attachments:[
	// 	{
	// 		filename: 'app.js',
    //                     //content: 'hello world!'
	// 		path:"app.js"
	// 	}
	// ],
	// html:{path:"tpl/index.html"}
};

email_tools.sendEmail(config, options);


	res.json({error:0});
});


module.exports = router;
