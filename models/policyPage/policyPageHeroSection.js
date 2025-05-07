const mongoose = require("mongoose");

const policyPageSchema = new mongoose.Schema(
  {
    rulesImg: { type: String, required: true, trim: true },
    rulesTitle: { type: String, required: true, trim: true },
    rulesThumbnail: { type: String, required: true, trim: true },
    isTrue: { type: Boolean, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("policyPage", policyPageSchema);
