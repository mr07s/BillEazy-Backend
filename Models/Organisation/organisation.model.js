const mongoose = require("mongoose");
const organisation = mongoose.Schema(
  {
    logo: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    gstIn: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    accountHolder: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: Number,
      required: true,
    },
    ifsc: {
      type: String,
      required: true,
    },
    branchName: {
      type: String,
      required: true,
    },
    subscription: {
      type: mongoose.Schema.ObjectId,
      ref: "Subscriptions",
    },
  },
  {
    timestamps: true,
  }
);
const Organisation = mongoose.model("Organisations", organisation);
module.exports = Organisation;
