const mongoose = require("mongoose");

const facilityImageSchema = new mongoose.Schema({
  img: { type: String, required: true, trim: true },
});


const facilitiesPageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    facilitiesImage: [facilityImageSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("FacilitiesPage", facilitiesPageSchema);
