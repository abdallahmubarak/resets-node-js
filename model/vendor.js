const mongoose = require(`mongoose`);

const vendorSchema = mongoose.Schema(
  {
    name: { type: String ,require:true},
    vendorImg: { type: String,default:'vendor image',require:true}

  }
);

const vendorModel = mongoose.model("vendor", vendorSchema);

module.exports = vendorModel;
