const mongoose = require("mongoose");

const contactPageSchema = new mongoose.Schema(
  {
    contactImg: { type: String, required: true, trim: true },
    contactTitle: { type: String, required: true, trim: true },
    contactThumbnail: { type: String, required: true, trim: true },
    isTrue: { type: Boolean, required: true, trim: true },
    titleText: { type: String, required: true, trim: true },
    emailTitleText: { type: String, required: true, trim: true },
    emailData: { type: String, required: true, trim: true },
    callUsTitleText: { type: String, required: true, trim: true },
    callUsNumber: { type: String, required: true, trim: true },
    addressText: { type: String, required: true, trim: true },
    detailsText: { type: String, required: true, trim: true },
    formTitleText: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contactPage", contactPageSchema);
