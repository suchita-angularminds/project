const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');



"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
var sendmail1 ={
  sendmail:async function(req,res){

    // let account = await nodemailer.createTestAccount();
 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
       user: "suchita@amdev.in", 
      pass: "tinu1087",
    }
  });

  const encryptedemail = cryptr.encrypt(req.body.email);
  // setup email data with unicode symbols
  let mailOptions = {
    from: "suchita@amdev.in", // sender address
    to: "suchitadagabaj@gmail.com", // list of receivers req.body.email 
    subject: "Hello restet passwordlink ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "http://localhost:4200/newpassword/"+encryptedemail// html body
  };

  await transporter.sendMail(mailOptions,function(err,email)
  { 
    if(err || !email)
    { 
      res.status(500).json({ status: 'false', message: 'Some Errors:' + err });
     } 
    else{ res.status(200).json({ status: 'true', message: 'Send Email Succefully' }); } 
  });
 
}



}

module.exports = sendmail1;