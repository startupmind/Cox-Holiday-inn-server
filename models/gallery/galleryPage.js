const mongoose = require("mongoose");

const galleryPageSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("galleryPage", galleryPageSchema);
