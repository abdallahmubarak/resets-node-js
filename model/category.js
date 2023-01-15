const mongoose = require(`mongoose`);

const categorySchema = mongoose.Schema(
  {
    categoryName: { type: String,require:true },
    categoryImg: { type:String, require:true}
  }
);

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;