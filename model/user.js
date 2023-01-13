const mongoose = require(`mongoose`);

const userSchema = mongoose.Schema(
  {
    userName: { type: String,require:true },
    creationAt: { type: Date ,default:Date.now(),require:true},
    Gender:  { type:String ,enum:['male','female','others'],require:true},
    dateOfBirth: { type: String ,require:true},
    Email: { type: String ,require:true},
    status: { type:String, enum:['active','inactive','frequent'], default:'active',require:true },
    password: { type: String ,require:true},
    token:{ type:String ,require:true},
    restaurants: [{restaurant:{type: mongoose.Schema.Types.ObjectId,ref: 'restaurant'}}],
    products: [{product:{type: mongoose.Schema.Types.ObjectId,ref: 'product'}}],


    
  },
);


const user = mongoose.model("user", userSchema);

module.exports = user;
