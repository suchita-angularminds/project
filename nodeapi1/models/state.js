var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var state =  new Schema({

    name:{type:String},
    
});



module.exports = mongoose.model('state', state); 

