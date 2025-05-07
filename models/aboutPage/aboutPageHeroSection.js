const mongoose = require("mongoose");

const aboutPageSchema = new mongoose.Schema(
  {
    aboutTitle: { type: String, required: true, trim: true },
    aboutThumbnail: { type: String, required: true, trim: true },
    isTrue: { type: Boolean, required: true, trim: true },
    whatWeDoDetails: { type: String, required: true, trim: true },
    ourProcessDetails: { type: String, required: true, trim: true },
    strategyDetails: { type: String, required: true, trim: true },
    messageDetails: { type: String, required: true, trim: true },
    advantagesDetails: { type: String, required: true, trim: true },
    groupTeamImg: { type: String, required: true, trim: true },
    groupTeamTitle: { type: String, required: true, trim: true },
    groupTeamThumbnail: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("aboutPage", aboutPageSchema);
