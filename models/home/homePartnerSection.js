const mongoose = require("mongoose");

const partnerPageSchema = new mongoose.Schema(
  {
    img: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("partnerPage", partnerPageSchema);
