const mongoose = require("mongoose");

const supplierDetailsSchema = mongoose.Schema(
  {
    firmName: {
      type: String,
      required: true,
    },
    companyGstin: {
      type: String,
    },
    dlNo: {
      type: Number,
    },
    companyAddress: {
      type: String,
    },
    companyMobile: {
      type: Number,
    },
    state: {
      type: String,
    },
    pincode: {
      type: Number,
    },
    companyEmail: {
      type: String,
    },
    city: {
      type: String,
    },
    companyPan: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const supplierModel = mongoose.model("Supplier Details", supplierDetailsSchema);
module.exports = supplierModel;
