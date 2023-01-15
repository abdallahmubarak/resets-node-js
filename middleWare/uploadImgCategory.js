const multer =require('multer')
const path=require('path')

var storageCategory =  multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/img_category');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.jpg')
  }
})
var uploadCategory = multer({ storage: storageCategory });

module.exports = uploadCategory