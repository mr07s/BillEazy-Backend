const mongoose = require("mongoose");

const ProformaSchema = new mongoose.Schema({
  proformaType: {
    type: String,
    enum: ["Tax Proforma", "Bill of supply"],
  },
  proformaPrefix: {
    type: String,
  },
  proformaNo: { type: Number },
  proformaDate: { type: Date },
  supplierDetails: {
    type: mongoose.Schema.ObjectId,
    ref: "Proforma Supplier Details",
    // required: true
  },
  buyerDetails: {
    type: mongoose.Schema.ObjectId,
    ref: "Proforma Buyer Details",
    // required: true
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Proforma Product Details",
    // required: true
  },
  transportDetails: {
    type: mongoose.Schema.ObjectId,
    ref: "Proforma Transport Details",
    // required: true
  },
  bankDetails: {
    type: mongoose.Schema.ObjectId,
    ref: "Proforma Bank Details",
    // required: true
  },
  termsAndConditions: {
    type: String,
    // required: true
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  // proformaNumber:{
  //     type:Number,
  //     required:true
  // },
});
const proformaModel = mongoose.model("proforma", ProformaSchema);
module.exports = proformaModel;
