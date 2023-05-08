const mongoose = require("mongoose");
const { Schema } = mongoose;
const CategorySchema = new Schema({
  catename: { type: String, require: true },
}, { timestamps: true });

module.exports = mongoose.model("Category", CategorySchema);