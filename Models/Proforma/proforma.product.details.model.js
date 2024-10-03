const mongoose = require("mongoose");

const proformaProductSchema = mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);
const proformaProduct = mongoose.model(
  "Proforma Product",
  proformaProductSchema
);
module.exports = proformaProduct;
