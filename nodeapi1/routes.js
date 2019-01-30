var express = require('express');

var users = require('./controllers/users');
var states = require('./controllers/states');
// var fileupload = require('./controllers/fileupload');
var auth = require('./controllers/auth');
var emailvalidator =require('./controllers/emailvalidator');
var usernamevalidator =require('./controllers/usernamevalidator');
var forgotpassword =require('./controllers/forgotpassword');
var sendmail1 =require('./controllers/sendmail');
var userinfo = require('./controllers/userinfo');


var router = express.Router();


console.log(router);






 //router.get('/myapi/show/',users.show);


 router.post('/myapi/register/',users.create);
 router.post('/myapi/login/',auth);
//  router.post('/myapi/updatepassword',users.updatepassword);
 router.post('/myapi/createstate/',states.create);
 router.get('/myapi/states/',states.getAll);
 router.post('/myapi/profile/',users.uploadimage);
 router.post('/myapi/checkemail',emailvalidator);
 router.post('/myapi/checkusername',usernamevalidator);
 router.post('/myapi/forgotpassword',forgotpassword);
 router.post('/myapi/newpassword',sendmail1.sendmail);
 router.post('/myapi/updatepassword',users.updatepassword);
 router.post('/secure/userdata',userinfo.getuserinfo);
 



module.exports = router;