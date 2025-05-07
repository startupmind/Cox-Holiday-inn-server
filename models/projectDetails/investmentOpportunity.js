const mongoose = require("mongoose");

const investmentOpportunitySchema = new mongoose.Schema(
  {
    img: { type: String, required: true, trim: true },
    text: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("investmentOpportunity", investmentOpportunitySchema);
