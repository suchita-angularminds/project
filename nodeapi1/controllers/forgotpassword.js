var userModel =  require('../models/user');
var config = require('../config/config');

forgotpassword = function( req, res) {

userModel.findOne({ 

    $and:[

    {'email':req.body.email},
  
]
},
function(err, user){

    console.log("*********");
    console.log(user);
    if(err || !user) {
    res.status(400).json({status:'error', message: 'You Are Not Found' });
    }
    else {
          res.status(200).json({status:'success', message: 'Success...We found You',user :user});
   }
    });
}

module.exports = forgotpassword;