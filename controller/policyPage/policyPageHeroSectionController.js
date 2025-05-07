const PolicyPage = require("../../models/policyPage/policyPageHeroSection");

// Create a Policy Page
exports.createPolicyPage = async (req, res) => {
  try {
    const policyPage = new PolicyPage(req.body);
    const savedPolicyPage = await policyPage.save();
    res.status(201).json({
      message: "Policy Page created successfully",
      data: savedPolicyPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Policy Page",
      error: error.message,
    });
  }
};

// Get All Policy Pages
exports.getAllPolicyPages = async (req, res) => {
  try {
    const policyPages = await PolicyPage.find().sort({ createdAt: -1 });
    res.status(200).json(policyPages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Policy Pages",
      error: error.message,
    });
  }
};

// Get Single Policy Page by ID
exports.getPolicyPageById = async (req, res) => {
  try {
    const policyPage = await PolicyPage.findById(req.params.id).sort({
      createdAt: -1,
    });
    if (!policyPage) {
      return res.status(404).json({ message: "Policy Page not found" });
    }
    res.status(200).json(policyPage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Policy Page",
      error: error.message,
    });
  }
};

// Update a Policy Page
exports.updatePolicyPage = async (req, res) => {
  try {
    const updatedPolicyPage = await PolicyPage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPolicyPage) {
      return res.status(404).json({ message: "Policy Page not found" });
    }
    res.status(200).json({
      message: "Policy Page updated successfully",
      data: updatedPolicyPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Policy Page",
      error: error.message,
    });
  }
};
