var userModel =  require('../models/user');
var config = require('../config/config');

 uniqueemail = function(req,res){
  console.log(req.body.email);
  userModel.findOne({ 

    $and:[

   
    {'email':req.body.email}
]
},
function(err, user){

    console.log("*********");
   
    if(err || !user) {

    res.status(200).json({status:true, message: 'you can use this email' });
    }
    else {
     
     res.status(200).json({status:false, message: 'email already exist,so please write unique'});
   }
    });

}

module.exports = uniqueemail;


