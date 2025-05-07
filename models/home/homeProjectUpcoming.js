const mongoose = require("mongoose");

const homeProjectUpcomingSchema = new mongoose.Schema(
  {
    image: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    url: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "homeProjectUpcoming",
  homeProjectUpcomingSchema
);
