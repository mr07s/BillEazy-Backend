const mongoose = require("mongoose");

const proformaBankDetailsSchema = mongoose.Schema(
  {
    accountHolderName: {
      type: String,
    },
    accountNumber: {
      type: Number,
    },
    ifscNumber: {
      type: Number,
    },
    bankName: {
      type: String,
    },
    branchName: {
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
const proformaBankDetails = mongoose.model(
  "Proforma Bank Details",
  proformaBankDetailsSchema
);
module.exports = proformaBankDetails;
