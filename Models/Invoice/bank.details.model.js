const mongoose = require("mongoose");

const bankDetailsSchema = mongoose.Schema(
  {
    accountHolderName: {
      type: String,
    },
    accountNumber: {
      type: Number,
    },
    ifscNumber: {
      type: String,
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
const bankDetails = mongoose.model("Bank Details", bankDetailsSchema);
module.exports = bankDetails;
