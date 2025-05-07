const mongoose = require("mongoose");

const historyPageSchema = new mongoose.Schema(
  {
    year: { type: String, required: true, trim: true },
    text: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("historyPage", historyPageSchema);
