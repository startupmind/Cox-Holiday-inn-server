const BenefitsMateriality = require("../../models/investmentOpportunity/benefitsMateriality");

// Create a Benefits Materiality
exports.createBenefitsMateriality = async (req, res) => {
  try {
    const benefitsMateriality = new BenefitsMateriality(req.body);
    const savedBenefitsMateriality = await benefitsMateriality.save();
    res.status(201).json({
      message: "Benefits Materiality created successfully",
      data: savedBenefitsMateriality,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Benefits Materiality",
      error: error.message,
    });
  }
};

// Get All Benefits Materiality
exports.getAllBenefitsMateriality = async (req, res) => {
  try {
    const benefitsMateriality = await BenefitsMateriality.find().sort({
      createdAt: -1,
    });
    res.status(200).json(benefitsMateriality);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Benefits Materiality",
      error: error.message,
    });
  }
};

// Get Single Benefits Materiality by ID
exports.getBenefitsMaterialityById = async (req, res) => {
  try {
    const benefitsMateriality = await BenefitsMateriality.findById(
      req.params.id
    ).sort({ createdAt: -1 });
    if (!benefitsMateriality) {
      return res
        .status(404)
        .json({ message: "Benefits Materiality not found" });
    }
    res.status(200).json(benefitsMateriality);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Benefits Materiality",
      error: error.message,
    });
  }
};

// Update a Benefits Materiality
exports.updateBenefitsMateriality = async (req, res) => {
  try {
    const updatedBenefitsMateriality =
      await BenefitsMateriality.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
    if (!updatedBenefitsMateriality) {
      return res
        .status(404)
        .json({ message: "Benefits Materiality not found" });
    }
    res.status(200).json({
      message: "Benefits Materiality updated successfully",
      data: updatedBenefitsMateriality,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Benefits Materiality",
      error: error.message,
    });
  }
};

// Delete a Benefits Materiality
exports.deleteBenefitsMateriality = async (req, res) => {
  try {
    const deletedBenefitsMateriality =
      await BenefitsMateriality.findByIdAndDelete(req.params.id);
    if (!deletedBenefitsMateriality) {
      return res
        .status(404)
        .json({ message: "Benefits Materiality not found" });
    }
    res
      .status(200)
      .json({ message: "Benefits Materiality deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Benefits Materiality",
      error: error.message,
    });
  }
};
