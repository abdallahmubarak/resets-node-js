const mongoose = require(`mongoose`);

const userSchema = mongoose.Schema(
  {
    userName: { type: String },
    creationAt: { type: Date ,default:Date.now()},
    Gender:  { type:String ,enum:['male','female','others']},
    dateOfBirth: { type: String },
    Email: { type: String },
    status: { type:String, enum:['active','inactive','frequent'], default:'active' },
    password: { type: String },
    token:{ type:String },
    restaurants: [{restaurant:{type: mongoose.Schema.Types.ObjectId,ref: 'restaurant'}}],
    products: [{product:{type: mongoose.Schema.Types.ObjectId,ref: 'product'}}],


    
  },
);


const user = mongoose.model("user", userSchema);

module.exports = user;
