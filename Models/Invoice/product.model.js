const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    itemName: {
      type: String,
    },
    itemDescription: {
      type: String,
    },
    hsn: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    unit: {
      type: Number,
    },
    salePrice: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    discountType: {
      type: String,
      enum: ["Percent Wise", "Value Wise"],
    },
    taxType: {
      type: String,
      enum: ["Inclusive", "Exclusive"],
    },
    gst: {
      type: Number,
      enum: [0, 0.1, 0.25, 1.5, 3, 5, 6, 12, 14, 18, 28],
    },
    cess: {
      type: Number,
    },
    _: {
      type: String,
      enum: ["Percent Wise", "Unit Wise"],
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    final_price: {
      type: Number,
    },
    paid_amount: {
      type: Number,
    },
    pending_amount: {
      type: Number,
    },
    total_tax: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const product = mongoose.model("Product", productSchema);
module.exports = product;
