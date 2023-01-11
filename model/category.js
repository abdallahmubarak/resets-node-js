const mongoose = require(`mongoose`);

const restaurantSchema = mongoose.Schema(
  {
    restaurantName: { type: String },
    address: { type: String},
    contact: { type: String},
    categoryImg: { type: String,default:''},
   // user: [{user:{type: mongoose.Schema.Types.ObjectId,ref: 'user'}}],

  }
);


const restaurantModel = mongoose.model("restaurant", restaurantSchema);

module.exports = restaurantModel;
