const mongoose = require("mongoose");

const rulesPageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    bgColor: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("rulesPage", rulesPageSchema);
