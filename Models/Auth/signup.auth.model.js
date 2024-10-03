const mongoose = require("mongoose");
const companyModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Owner", "User", "Cashier"],
      default: "Owner",
    },
    organisation: {
      type: mongoose.Schema.ObjectId,
      ref: "Organisations",
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", companyModel);
module.exports = User;
