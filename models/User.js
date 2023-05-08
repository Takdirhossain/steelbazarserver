const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true,  },
    email: { type: String, required: true, unique: true },
    phone: {type:Number, unique:true},
    password: { type: String, required: true },
    businessName:{type: String},
    gst:{type:Number},
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true },
 );

module.exports = mongoose.model("User", userSchema);