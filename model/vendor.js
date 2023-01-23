const mongoose = require(`mongoose`);

const vendorSchema = mongoose.Schema(
  {
    vendorName: { type: String ,require:true},
    vendorImg: { type: String, require:true},
    recipts: [{reciptId:{type: mongoose.Schema.Types.ObjectId,ref: 'recipt',require:true}}],


  }
);

const vendorModel = mongoose.model("vendor", vendorSchema);

module.exports = vendorModel;
