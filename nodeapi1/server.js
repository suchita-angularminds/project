var express = require('express');
var cors = require('cors');
var app = express();
// var multer  = require('multer');
var userinfo1 = require('./controllers/userinfo');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/config');
// var users = require('./controllers/users');
// var states = require('./controllers/states');
// var fileupload = require('./controllers/fileupload');



app.use(cors());
// var db;
app.use(bodyparser.json());
app.use("/uploads",express.static('uploads'));


app.all('/*',function(req,res,next){

  res.header("Access-Control-Access-Origin","*");
  res.header("Allow-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS");
  res.header("Allow-Control-Allow-Headers","Content-type,X-Acces-Token,X-Key");

  if(req.method == 'OPTIONS') {
    res.status(200).end();
  }
  else{
    next();
  }

});




app.all('/myapi/*',require('./middlewares/validateRequest'));

app.use('/',require('./routes'));


app.use(function(req,res,next){
  res.status(404).json({status:"Page Not Found,Sorry Buddy..."}).end();
});


//database connection
mongoose.connect(config.mongo.url, function(err, database){
    if(err) {
      console.log(err);
      process.exit(1);
    }

    // db = database;
    console.log("database connection done, baby!");

});

app.set('port',config.port);

app.listen(app.get('port'),function(){
  console.log("App started on port.",app.get('port'));
});












