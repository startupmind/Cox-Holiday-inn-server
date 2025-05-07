const mongoose = require("mongoose");

const benefitsMaterialitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    imageSrc: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "benefitsMateriality",
  benefitsMaterialitySchema
);
