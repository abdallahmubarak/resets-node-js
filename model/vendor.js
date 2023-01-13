const mongoose = require(`mongoose`);

const productSchema = mongoose.Schema(
  {
    productName: { type: String ,require:true},
    price: { type: Number,require:true },
    vendorImg: { type: String,default:'vendor image',require:true}

  }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
