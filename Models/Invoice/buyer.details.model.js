const mongoose = require("mongoose");

const buyerDetailsSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
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
    gstTreatmentType: {
      type: String,
      enum: ["NONE", "B2B", "SEZWP", "SEZWOP", "EXPWP", "EXPWOP", "DEXP"],
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
const buyerModel = mongoose.model("Buyer Details", buyerDetailsSchema);
module.exports = buyerModel;
