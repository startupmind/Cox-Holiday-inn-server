const mongoose = require("mongoose");

const milestonesSchema = new mongoose.Schema(
  {
    date: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("milestones", milestonesSchema);
