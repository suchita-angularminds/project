var jwt = require('jwt-simple');
var userModel =  require('../models/user');
var config = require('../config/config');


module.exports = function(req,res,next){
    
    var token = req.body.token || req.headers['token'];

    try{

        if(req.path =='/myapi/register/'||req.path =='/myapi/states/'||req.path =='/myapi/profile/'||req.path =='/myapi/login/'||req.path =='/myapi/checkemail'||req.path =='/myapi/checkusername'||req.path =='/myapi/updatepassword'||req.path =='/myapi/forgotpassword'||req.path =='/myapi/newpassword'){
           
            next();

        }
        else{

        var decoded = jwt.decode(token,config.secretkey);

        userModel.findOne({ 
            $and:[
                {'username':decoded.username},
            ]
        },
        function(err, user){
        
            console.log("*********");
            console.log(user);
            if(err || !user) {
            res.status(400).json({status:'error', message: 'Bad Request , token not valid' });
            }
            else {
                console.log('Valid Token');
            next();
        }
        });

    }
    } catch (err){

        console.log(err);
        res.status(400);
        res.json({
            "status": "Error",
            "message": err.message || "Opps Something went wrong"
        });
    }
};