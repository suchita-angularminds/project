var mongoose = require('mongoose');
var Schema = mongoose.Schema;


  

var user =  new Schema({
    first_name: {type:String ,required:true},
    last_name: {type:String ,required:true},
    birth_date: {type:Date ,required:true},
    gender: {type: String,
        enum: ['male','female','other']},
    hobbies:  {type: [String],enum:['Cricket', 'Dancing', 'Singing','Acting'] },
    phone_no:  {type:Number ,required:true},
    
    address: {type:String},
    city: {type:String ,required:true},
    state: {type:String ,required:true},
    zipcode: {type:Number ,required:true},
    
    email: {
        type: String,
        unique: true,
        required: true
      },
    password:{
        type: String,
        required: true
      },
    username:{
        type: String,
        unique: true,
        required: true
      },
    profilepicture:{
        type: String,
        // required:true
        
      },
    
    
});


  

module.exports = mongoose.model('user', user); 




