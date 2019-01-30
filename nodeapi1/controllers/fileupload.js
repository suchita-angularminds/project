
//  var multer  = require('multer');




// var fileupload = { 
//     uploadimage: function(req,res){

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })

//  const filefilters = (req,file,cb)=>{
 
   
//    if (file.mimetype === 'image/jpg' ||file.mimetype === 'image/png') {
//      return cb(null, true);
//    }
//       else{
//    cb("Error: File upload only supports the following filetypes - jpg/png" );

//       }

//    }


   
// var upload = multer({ storage: storage,
//   limits:{fileSize:2*1024*1024},
//   fileFilter:filefilters
//  }).single('profilepicture');

  
//  upload(req, res, function (err) {
//       if (err instanceof multer.MulterError) {
//         // A Multer error occurred when uploading.
//         res.status(500).json({status:'error', message: 'Multer Error:' + err , docs:'doc'});

//       } else {
//         // An unknown error occurred when uploading.
//         res.status(200).json({status:'success', message: 'Success', docs: 'doc' });
//       }
   
//       // Everything went fine.

    
//     })

// }
// }

// module.exports = fileupload;