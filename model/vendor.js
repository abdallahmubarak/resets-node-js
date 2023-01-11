const mongoose = require(`mongoose`);

const productSchema = mongoose.Schema(
  {
    productName: { type: String },
    price: { type: Number },
    vendorImg: { type: String,default:''}

  }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
