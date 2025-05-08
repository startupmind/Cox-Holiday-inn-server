const mongoose = require("mongoose");

const roomFeatureSchema = new mongoose.Schema({
  img: { type: String, required: true, trim: true },
  text: { type: String, required: true, trim: true },
});

const serviceAmenitySchema = new mongoose.Schema({
  img: { type: String, required: true, trim: true },
  text: { type: String, required: true, trim: true },
});

const roomSchema = new mongoose.Schema(
  {
    image: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    servicesAmenities: [serviceAmenitySchema],
    roomFeatures: [roomFeatureSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
