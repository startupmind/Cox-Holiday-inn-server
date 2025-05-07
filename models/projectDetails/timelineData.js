const mongoose = require("mongoose");

const timelineDataSchema = new mongoose.Schema(
  {
    stage: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    status: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("timelineData", timelineDataSchema);
