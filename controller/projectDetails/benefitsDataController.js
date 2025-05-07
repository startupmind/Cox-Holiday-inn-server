const BenefitsData = require("../../models/projectDetails/benefitsData");

// Create a Benefits Data
exports.createBenefitsData = async (req, res) => {
  try {
    const benefitsData = new BenefitsData(req.body);
    const savedBenefitsData = await benefitsData.save();
    res.status(201).json({
      message: "Benefits Data created successfully",
      data: savedBenefitsData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Benefits Data",
      error: error.message,
    });
  }
};

// Get All Benefits Data
exports.getAllBenefitsData = async (req, res) => {
  try {
    const benefitsData = await BenefitsData.find().sort({
      createdAt: -1,
    });
    res.status(200).json(benefitsData);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Benefits Data",
      error: error.message,
    });
  }
};

// Get Single Benefits Data by ID
exports.getBenefitsDataById = async (req, res) => {
  try {
    const benefitsData = await BenefitsData.findById(
      req.params.id
    ).sort({
      createdAt: -1,
    });
    if (!benefitsData) {
      return res.status(404).json({ message: "Benefits Data not found" });
    }
    res.status(200).json(benefitsData);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Benefits Data",
      error: error.message,
    });
  }
};

// Update a Benefits Data
exports.updateBenefitsData = async (req, res) => {
  try {
    const updatedBenefitsData = await BenefitsData.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBenefitsData) {
      return res.status(404).json({ message: "Benefits Data not found" });
    }
    res.status(200).json({
      message: "Benefits Data updated successfully",
      data: updatedBenefitsData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Benefits Data",
      error: error.message,
    });
  }
};

// Delete a Benefits Data
exports.deleteBenefitsData = async (req, res) => {
  try {
    const deletedBenefitsData = await BenefitsData.findByIdAndDelete(
      req.params.id
    );
    if (!deletedBenefitsData) {
      return res.status(404).json({ message: "Benefits Data not found" });
    }
    res
      .status(200)
      .json({ message: "Benefits Data deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Benefits Data",
      error: error.message,
    });
  }
};
