const mongoose = require("mongoose");

const deliveryChallanSchema = new mongoose.Schema({
  deliveryChallanType: {
    type: String,
    enum: ["Tax Delivery Challan", "Bill of supply"],
  },
  deliveryChallanPrefix: {
    type: String,
  },
  deliveryChallanNo: { type: Number },
  deliveryChallanDate: { type: Date },

  supplierDetails: {
    type: mongoose.Schema.ObjectId,
    ref: "Delivery Challan Supplier Details",
    // required: true
  },
  buyerDetails: {
    type: mongoose.Schema.ObjectId,
    ref: "Delivery Challan Buyer Details",
    // required: true
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Delivery Challan Product",
    // required: true
  },
  transportDetails: {
    type: mongoose.Schema.ObjectId,
    ref: "Delivery Challan Transport Details",
    // required: true
  },
  //   deliveryChallanbankDetails: {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "Delivery Challan Bank Details",
  //     // required: true
  //   },
  TermsAndConditions: {
    type: String,
    // required: true
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  // deliveryChallanNumber:{
  //     type:Number,
  //     required:true
  // },
});
const deliveryChallanModel = mongoose.model(
  "deliveryChallan",
  deliveryChallanSchema
);
module.exports = deliveryChallanModel;
