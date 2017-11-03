var express = require('express');
var router = express.Router();
var email_tools = require('../sendmail.js');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/sendmail', function(req, res) {

  const params = req.params;
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
	subject: "测试邮件",
	text: "我是邮件内容",
	to: "ypandoo@126.com",
	// cc:"870***29@qq.com,51****78@qq.com",
	sender:"vnewcd",
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
});


module.exports = router;
