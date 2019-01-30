var userModel =  require('../models/user');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var multer  = require('multer');

var profileurl;

var users = {

 

              show: function(req,res){
                res.status(200).json({status:'success', message: 'Success'});
              },

            //   getAll: function(req, res) {

            //                               userModel.find(function(err, docs){
            //                               if(err) {
            //                                 res.status(500).json({status:'error', message: 'Datebase Error:' + err , docs:''});
            //                               }
            //                               else {
            //                                 res.status(200).json({status:'success', message: 'Success', docs: docs });
            //                               }
            //                               });
            //   },
              
              create: function(req, res) {
                                          var user =  new userModel();
                                          user.first_name = req.body.first_name;
                                          user.last_name = req.body.last_name;
                                          user.birth_date = req.body.birth_date;
                                          user.gender = req.body.gender;
                                          hobbies = filter_array(req.body.hobbies);
                                          user.hobbies = hobbies;
                                          user.phone_no = req.body.phone_no;
                                          user.address = req.body.address;
                                          user.city = req.body.city;
                                          user.state = req.body.state;
                                          user.zipcode = req.body.zipcode;
                                          user.email = req.body.email;
                                          user.password  =  req.body.password;
                                          user.username  =  req.body.username;
                                          user.profilepicture = this.profileurl;

                                          user.save(function(err){
                                            if(err) {
                                              res.status(500).json({status:'error', message: 'Datebase Error:' + err , docs:''});
                                            }
                                            else {
                                              res.status(200).json({status:'success', message: 'Added to Mongo successfully', doc: '' });
                                            }

                                          });

              },

              uploadimage: function(req,res){

                var storage = multer.diskStorage({
                    destination: function (req, file, cb) {
                      cb(null, 'uploads/')
                    },
                    filename: function (req, file, cb) {
                      cb(null, file.fieldname + '-' + Date.now() + file.originalname) 
                    }
                  })
                
                 const filefilters = (req,file,cb)=>{
                 
                   
                   if (file.mimetype === 'image/jpeg' ||file.mimetype === 'image/png') {
                     return cb(null, true);
                   }
                      else{
                   cb("Error: File upload only supports the following filetypes - jpg/png" );
                
                      }
                
                   }
                
                
                   
                var upload = multer({ storage: storage,
                  limits:{fileSize:2*1024*1024},
                  fileFilter:filefilters
                 }).single('profilepicture');
                
                  
                 upload(req, res, function (err) {
                   console.log( req.file.path);
                   this.profileurl = req.file.path;
                   console.log('hi',this.profileurl);
                   
                      if (err instanceof multer.MulterError) {
                        // A Multer error occurred when uploading.
                        res.status(500).json({status:'error', message: 'Multer Error:' + err , docs:'doc'});
                
                      } else {
                        // An unknown error occurred when uploading.
                        res.status(200).json({status:'success', message: 'Success', docs: 'doc' });
                      }
                   
                      // Everything went fine.
                
                    
                    })
                
                },

              updatepassword: function(req, res) {
                  console.log(req.body.email);
                const decryptedemail = cryptr.decrypt(req.body.email);
                var Query ={email:decryptedemail};
                var newvalues = { $set:{password : req.body.password} } ;
               

                userModel.updateOne(Query,newvalues,function(err){
                  if(err) {
                    res.status(500).json({status:'error', message: 'Datebase Error:' + err , docs:''});
                  }
                  else {
                    res.status(200).json({status:'success', message: 'Newpassword updated to Mongo successfully', doc: '' });
                  }

                });
                
              },


             
                

};

// function to remove empty values from array
function filter_array(test_array) {
  var index = -1,
      arr_length = test_array ? test_array.length : 0,
      resIndex = -1,
      result = [];

  while (++index < arr_length) {
      var value = test_array[index];

      if (value) {
          result[++resIndex] = value;
      }
  }

  return result;
}


    
module.exports = users;