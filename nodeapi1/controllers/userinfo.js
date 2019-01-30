var userModel =  require('../models/user');
var config = require('../config/config');

var userinfo = {
 getuserinfo : function(req,res){
  console.log(req.body.username);
  userModel.findOne({ 

    $and:[

   
    {'username':req.body.username}
]
},
function(err, user){

    console.log("*********");

    console.log(user)
   
    if(err || !user) {

    res.status(200).json({status:false, message: 'error' });
    }
    else {
     
     res.status(200).json({status:true, message: 'success',user:user});
     
   }
    });

}
}
module.exports = userinfo;
