const mongoose = require("mongoose");

const faqPageHeroSectionSchema = new mongoose.Schema(
  {
    faqTitle: { type: String, required: true, trim: true },
    faqThumbnail: { type: String, required: true, trim: true },
    faqBodyTitle: { type: String, required: true, trim: true },
    faqBodyThumbnail: { type: String, required: true, trim: true },
    hotelDetails: { type: String, required: true, trim: true },
    isTrue: { type: Boolean, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("faqPageHeroSection", faqPageHeroSectionSchema);
