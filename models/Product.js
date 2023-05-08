const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = new Schema({
    category:{type:String},
  status:{type:String},
  company:{type:String},
  thickness:{type:String},
  weight:{type:String},
  pieces:{type:String},
  average:{type:String},
  closingwt:{type:String},
  closingpcs:{type:String},

}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);