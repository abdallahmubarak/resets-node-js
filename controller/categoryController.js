const categorytModel = require(`../model/category`);
const path=require('path')
const fs = require("fs");
exports.addCategory = async (req, res) => {
  try {

    var categoryObj = {
      categoryName: req.body.categoryName,
      categoryImg:req.file.filename
      }
     categorytModel.create(categoryObj, (err, item) => {
      if (err) {
          console.log(err);
      }
      else {
        console.log(categoryObj.categoryName,categoryObj.categoryImg)
           item.save();
           res.status(500).json({ item, message: " succes category added" });

      }})
  } catch (error) {
    res.status(500).json({ message: "error in category" });
  }
};