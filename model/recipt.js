const mongoose = require(`mongoose`);

const reciptSchema = mongoose.Schema(
  {
    creationAt: { type: Date ,default:Date.now(),require:true},
    dateTime: { type: Date ,default:Date.now(),require:true},
    serialNumber:{ type: "String" ,require:true },
    vendor: [{
      vendorId:{type: mongoose.Schema.Types.ObjectId,ref: 'vendor',require:true}
  }],

    vendor: { name: "String",image:"string" },
    
    //category: { name: "String",image:"string" },
    category: [{
      categoryId:{type: mongoose.Schema.Types.ObjectId,ref: 'category',require:true}
  }],

    amount: { type: Number ,require:true},
    totalAmount: { type: Number ,require:true},
    status: { type: "String",require:true },
    tax:{ type: Number ,require:true},
    service:{ type: Number ,require:true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    items: [
      {
        item: { type: String ,require:true},
        quantity: { type: Number ,require:true},
        price: { type: Number ,require:true},
        finalPrice: { type: Number,require:true}
      },
    ],
  },
  {
    timeStamps: true,
  }
);

const reciptModel = mongoose.model("recipt", reciptSchema);

module.exports = reciptModel;
