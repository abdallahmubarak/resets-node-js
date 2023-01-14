const mongoose = require(`mongoose`);

const reciptSchema = mongoose.Schema(
  {
    creationAt: { type: Date ,default:Date.now()},
    serialNumber:{ type: "String" },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: "vendor" },
    category: { type: "String" },
    amount: { type: Number },
    totalAmount: { type: Number },
    status: { type: Boolean },
    tax:{ type: Number },
    service:{ type: Number },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    items: [
      {
        item: { type: String },
        quantity: { type: Number },
        price: { type: Number },
        finalPrice: { type: Number }
      },
    ],
  },
  {
    timeStamps: true,
  }
);

const reciptModel = mongoose.model("recipt", reciptSchema);

module.exports = reciptModel;
