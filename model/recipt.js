const mongoose = require(`mongoose`);

const reciptSchema = mongoose.Schema(
  {
    creationAt: { type: Date ,default:Date.now()},
    dateTime: { type: Date ,default:Date.now()},
    serialNumber:{ type: "String" },
    vendor: { name: "String",image:"string" },
    category: { name: "String",image:"string" },
    amount: { type: Number },
    totalAmount: { type: Number },
    status: { type: "String" },
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
