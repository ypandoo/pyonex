var nodemailer = require('nodemailer');

var internals = {};

internals.extend = function (o, n) {
  for (var p in n) {
    if (n.hasOwnProperty(p)) {
      o[p] = n[p];
    }
  };
  return o;
};

var mailConfig = {
  service: '126',
  auth: {
    user: 'vnewcd@126.com',
    pass: 'Lei000Lei'
  }
};

var mailOptions = {
  from: 'vnewcd@126.com',
  to: 'ypandoo@126.com',
  subject: '测试邮件',
  text: '测试邮件内容，请不要回复'
};

internals.sendEmail = function (_config,_options, attachment) {
  mailConfig = internals.extend(mailConfig,_config);
  mailOptions = internals.extend(mailOptions,_options);
  
  //执行发送操作
  var transporter = nodemailer.createTransport(mailConfig);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("邮件发送错误:" + error);
    } else {
      console.log("邮件发送成功:" + info.response);
    }
  });
};

exports = module.exports = internals;