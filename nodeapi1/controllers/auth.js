 var jwt = require('jwt-simple');

var userModel =  require('../models/user');
var config = require('../config/config');

userLogin = function( req, res) {

userModel.findOne({ 

    $and:[

    {'username':req.body.username},
    {'password':req.body.password}
]
},
function(err, user){

    console.log("*********");
    console.log(user);
    if(err || !user) {
    res.status(400).json({status:'error', message: 'You Are Not Found' });
    }
    else {
      var payload = {username: user.username};
      var token = jwt.encode(payload,config.secretkey);
      
    //  console.log(decoded);

     res.status(200).json({status:'success', message: 'Success...We found You',Token:token,username : user.username});
   }
    });
}

module.exports = userLogin;