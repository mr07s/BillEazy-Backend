const mongoose = require("mongoose");

const deliveryChallanTransportDetailsSchema = mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["None", "Road", "Rail", "Air", "Ship/Road cum Ship"],
    },
    lrDate: {
      type: Date,
    },
    lrNumber: {
      type: Number,
    },
    dateOfSupply: {
      type: Date,
    },
    placeOfSupply: {
      type: String,
    },
    vehicleNumber: {
      type: Number,
    },
    supplyType: {
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
const deliveryChallanTransportDetails = mongoose.model(
  "Delivery Challan Transport Details",
  deliveryChallanTransportDetailsSchema
);
module.exports = deliveryChallanTransportDetails;
