const mongoose = require(`mongoose`);

const restaurantSchema = mongoose.Schema(
  {
    restaurantName: { type: String,require:true },
    address: { type: String,require:true},
    contact: { type: String,require:true},
    categoryImg: { type: String,require:true},
    //user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
  }
);


const restaurantModel = mongoose.model("restaurant", restaurantSchema);

module.exports = restaurantModel;
