const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    // required: true,
  },
  mrp: {
    type: Number,
    // required: true,
  },
  hsn: {
    type: String,
    // required: true,
  },
  type: {
    type: String,
    // required: true,
  },
  pack: {
    type: String,
    // required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },
  expiry: {
    type: Date,
    // required: true,
  },
  mfg: {
    type: String,
    required: true,
  },
  batchno: {
    type: String,
    required: true,
  },
  composition: {
    type: Array,
    // required: true,
    default: [],
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
});

const medicineModel = mongoose.model("Medicine", medicineSchema);

module.exports = medicineModel;
