var stateModel =  require('../models/state');
var states = {

              show: function(req,res){
                res.status(200).json({status:'success', message: 'Success'});
              },

              getAll: function(req, res) {

                                          stateModel.find(function(err, docs){
                                          if(err) {
                                            res.status(500).json({status:'error', message: 'Datebase Error:' + err , docs:''});
                                          }
                                          else {
                                            res.status(200).json({status:'success', message: 'Success', docs: docs });
                                          }
                                          });
              },
            
              create: function(req, res) {
                                          var state =  new stateModel();
                                          state.name = req.body.name;
                                          

                                          state.save(function(err){
                                            if(err) {
                                              res.status(500).json({status:'error', message: 'Datebase Error:' + err , docs:''});
                                            }
                                            else {
                                              res.status(200).json({status:'success', message: 'Added to Mongo successfully', doc: '' });
                                            }

                                          });
              },
           

};


    
module.exports = states;