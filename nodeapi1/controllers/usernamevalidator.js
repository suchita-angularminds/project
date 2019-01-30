var userModel =  require('../models/user');
var config = require('../config/config');

 uniqueusername = function(req,res){
  userModel.findOne({ 

    $and:[

   
    {'username':req.body.username}
]
},
function(err, user){

    console.log("*********");
   
    if(err || !user) {
    res.status(200).json({status:true, message: 'you can use this username' });
    }
    else {
     
     res.status(200).json({status:false, message: 'username already exist,please try another'});
   }
    });

}

module.exports = uniqueusername;
