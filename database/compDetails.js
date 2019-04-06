const mongoose = require("mongoose");

const compDetailsSchema = new mongoose.Schema({
  compName: String,
  city: String,
  pin: Number,
  turn: String,
  type: String
});

const compDetailsModel = mongoose.model("compDetails", compDetailsSchema);

module.exports = compDetailsModel;
