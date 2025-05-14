const mongoose = require("mongoose");

const businessOpportunitySchema = new mongoose.Schema(
  {
    opportunityImg: { type: String, required: true, trim: true },
    opportunityTitle: { type: String, required: true, trim: true },
    opportunityThumbnail: { type: String, required: true, trim: true },
    materialityTitle: { type: String, required: true, trim: true },
    materialityThumbnail: { type: String, required: true, trim: true },
    interiorsTitle: { type: String, required: true, trim: true },
    interiorsThumbnail: { type: String, required: true, trim: true },
    interiorsDetails: { type: String, required: true, trim: true },
    brochureThumbnail: { type: String, required: true, trim: true },
    isTrue: { type: Boolean, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "businessOpportunity",
  businessOpportunitySchema
);
