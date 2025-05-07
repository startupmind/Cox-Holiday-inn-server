const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  text: { type: String, required: true, trim: true },
});

const ownershipCardSchema = new mongoose.Schema(
  {
    hue: { type: String, required: true },
    caption: { type: String, required: true, trim: true },
    details: [detailSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("OwnershipCard", ownershipCardSchema);
