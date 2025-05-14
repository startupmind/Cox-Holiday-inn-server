const mongoose = require("mongoose");

const investmentOpportunityProjectSchema = new mongoose.Schema(
  {
    img: { type: String, required: true, trim: true },
    text: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("investmentOpportunityProject", investmentOpportunityProjectSchema);
