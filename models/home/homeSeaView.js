const mongoose = require("mongoose");

const homeSeaViewSchema = new mongoose.Schema(
  {
    seaTitle: { type: String, required: true, trim: true },
    seaThumbnail: { type: String, required: true, trim: true },
    isTrue: { type: Boolean, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("homeSeaView", homeSeaViewSchema);
