const mongoose = require("mongoose");

const socialLinkPageSchema = new mongoose.Schema(
  {
    facebookLink: { type: String, required: true, trim: true },
    youtubeLink: { type: String, required: true, trim: true },
    linkDinLink: { type: String, required: true, trim: true },
    instagramLink: { type: String, required: true, trim: true },
    twitterLink: { type: String, required: true, trim: true },
    whatsAppNumber: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("socialLinkPage", socialLinkPageSchema);
