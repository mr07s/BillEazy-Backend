const mongoose = require("mongoose");
const subscription = mongoose.Schema(
  {
    startDate: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    endDate: {
      type: Date,
      required: Date.now(),
    },
    price: {
      type: Number,
      required: true,
    },
    plan: {
      type: String,
      enum: ["Free Trial", "Monthly", "Annually", "Pending", "No Subscription"],
    },
    eligibleForFreeTrial: {
      type: Boolean,
      default: false,
    },
    coupon: {
      type: String,
      enum: ["FREEMOJO"],
    },
  },
  {
    timestamps: true,
  }
);
const Subscription = mongoose.model("Subscriptions", subscription);
module.exports = Subscription;
