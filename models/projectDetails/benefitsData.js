const mongoose = require("mongoose");

const benefitsDataSchema = new mongoose.Schema(
  {
    benefit: { type: String, required: true, trim: true },
    standard: { type: String, required: true, trim: true },
    premium: { type: String, required: true, trim: true },
    platinum: { type: String, required: true, trim: true },
    royal: { type: String, required: true, trim: true },
    suite: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("benefitsData", benefitsDataSchema);
