const mongoose = require(`mongoose`);

const reciptSchema = mongoose.Schema(
  {
    creationAt: { type: Date ,default:Date.now()},
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "vendor" },
    categoryId: { type: "String" },
    amount: { type: Number },
    status: { type: Boolean },
    tax:{ type: Number },
    service:{ type: Number },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    resetDetails: [
      {
        item: { type: String },
        count: { type: Number },
        price: { type: Number },
      },
    ],
  },
  {
    timeStamps: true,
  }
);

const reciptModel = mongoose.model("recipt", reciptSchema);

module.exports = reciptModel;
