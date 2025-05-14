const mongoose = require("mongoose");

const projectDetailsSchema = new mongoose.Schema(
  {
    benefitsImg: { type: String, required: true, trim: true },
    benefitsTitle: { type: String, required: true, trim: true },
    benefitsThumbnail: { type: String, required: true, trim: true },
    projectTitle: { type: String, required: true, trim: true },
    projectThumbnail: { type: String, required: true, trim: true },
    projectDetails: { type: String, required: true, trim: true },
    constructionTitle: { type: String, required: true, trim: true },
    constructionThumbnail: { type: String, required: true, trim: true },
    interiorsTitle: { type: String, required: true, trim: true },
    interiorsThumbnail: { type: String, required: true, trim: true },
    interiorsDetails: { type: String, required: true, trim: true },
    callToActionTitle: { type: String, required: true, trim: true },
    isTrue: { type: Boolean, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("projectDetails", projectDetailsSchema);
