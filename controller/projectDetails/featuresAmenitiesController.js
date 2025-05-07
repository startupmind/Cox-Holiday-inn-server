const FeaturesAmenities = require("../../models/projectDetails/featuresAmenities");

// Create a Features Amenities
exports.createFeaturesAmenities = async (req, res) => {
  try {
    const featuresAmenities = new FeaturesAmenities(req.body);
    const savedFeaturesAmenities = await featuresAmenities.save();
    res.status(201).json({
      message: "Features Amenities created successfully",
      data: savedFeaturesAmenities,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Features Amenities",
      error: error.message,
    });
  }
};

// Get All Features Amenities
exports.getAllFeaturesAmenities = async (req, res) => {
  try {
    const featuresAmenities = await FeaturesAmenities.find().sort({
      createdAt: -1,
    });
    res.status(200).json(featuresAmenities);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Features Amenities",
      error: error.message,
    });
  }
};

// Get Single Features Amenities by ID
exports.getFeaturesAmenitiesById = async (req, res) => {
  try {
    const featuresAmenities = await FeaturesAmenities.findById(
      req.params.id
    ).sort({
      createdAt: -1,
    });
    if (!featuresAmenities) {
      return res.status(404).json({ message: "Features Amenities not found" });
    }
    res.status(200).json(featuresAmenities);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Features Amenities",
      error: error.message,
    });
  }
};

// Update a Features Amenities
exports.updateFeaturesAmenities = async (req, res) => {
  try {
    const updatedFeaturesAmenities = await FeaturesAmenities.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFeaturesAmenities) {
      return res.status(404).json({ message: "Features Amenities not found" });
    }
    res.status(200).json({
      message: "Features Amenities updated successfully",
      data: updatedFeaturesAmenities,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Features Amenities",
      error: error.message,
    });
  }
};

// Delete a Features Amenities
exports.deleteFeaturesAmenities = async (req, res) => {
  try {
    const deletedFeaturesAmenities = await FeaturesAmenities.findByIdAndDelete(
      req.params.id
    );
    if (!deletedFeaturesAmenities) {
      return res.status(404).json({ message: "Features Amenities not found" });
    }
    res
      .status(200)
      .json({ message: "Features Amenities deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Features Amenities",
      error: error.message,
    });
  }
};
