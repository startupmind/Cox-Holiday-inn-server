const mongoose = require("mongoose");

const constructionProgressSchema = new mongoose.Schema(
  {
    img: { type: String, required: true, trim: true },
    percentComplete: { type: Number, required: true, min: 0, max: 100 },
    constructionText: { type: String, required: true, trim: true },
    updateText: { type: String, required: true, trim: true },
    currentText: { type: String, required: true, trim: true },
    interiorText: { type: String, required: true, trim: true },
    milestoneText: { type: String, required: true, trim: true },
    detailsText: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ConstructionProgress",
  constructionProgressSchema
);
