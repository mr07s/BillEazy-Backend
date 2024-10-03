const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  invoiceType: {
    type: String,
    enum: ["Tax Invoice", "Bill of supply"],
  },
  invoicePrefix: {
    type: String,
  },
  invoiceNo: { type: Number },
  invoiceDate: { type: Date, default: Date.now() },
  supplierDetails: {
    type: mongoose.Schema.ObjectId,
    ref: "Supplier Details",
    // required: true
  },
  buyerDetails: {
    type: mongoose.Schema.ObjectId,
    ref: "Buyer Details",
    // required: true
  },
  // product: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "Product",
  //   // required: true
  // },
  product: [{ type: mongoose.Schema.ObjectId, ref: "Product" }],

  transportDetails: {
    type: mongoose.Schema.ObjectId,
    ref: "Transport Details",
    // required: true
  },
  totalTaxAmount: {
    type: Number,
  },
  totalProductPrice: {
    type: Number,
  },
  paidAmount: {
    type: Number,
  },
  pendingAmount: {
    type: Number,
  },
  bankDetails: {
    type: mongoose.Schema.ObjectId,
    ref: "Bank Details",
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
  // invoiceNumber:{
  //     type:Number,
  //     required:true
  // },
});
const invoiceModel = mongoose.model("Invoice", InvoiceSchema);
module.exports = invoiceModel;
