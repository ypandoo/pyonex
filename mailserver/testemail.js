var email_tools = require('./sendmail.js');

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

var mailOptions = {
	from: 'vnewcd@126.com',
	to: 'ypandoo@126.com',
	subject: '测试邮件',
	text: '测试邮件内容，请不要回复'
  };

email_tools.sendEmail(config, options);