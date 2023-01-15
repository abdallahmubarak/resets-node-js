const multer =require('multer')
const path=require('path')

const storageVendor = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'images/img_vendor');
  },
 
  filename: function(req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
  }
});
const uploadVendor = multer({ storage:storageVendor })
 
 
module.exports = uploadVendor