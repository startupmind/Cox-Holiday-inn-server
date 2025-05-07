const mongoose = require("mongoose");

const dataItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
  },
);

const homeContentSchema = new mongoose.Schema(
  {
    contentMessage: { type: String, required: true, trim: true },
    discountMessage: { type: String, trim: true },
    data: [dataItemSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("homeContent", homeContentSchema);
