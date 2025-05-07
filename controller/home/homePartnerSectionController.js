const PartnerPage = require("../../models/home/homePartnerSection");

// Create a Partner Page
exports.createPartnerPage = async (req, res) => {
  try {
    const partnerPage = new PartnerPage(req.body);
    const savedPartnerPage = await partnerPage.save();
    res.status(201).json({
      message: "Partner Page created successfully",
      data: savedPartnerPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Partner Page",
      error: error.message,
    });
  }
};

// Get All Partner Pages
exports.getAllPartnerPages = async (req, res) => {
  try {
    const partnerPages = await PartnerPage.find().sort({ createdAt: -1 });
    res.status(200).json(partnerPages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Partner Pages",
      error: error.message,
    });
  }
};

// Get Single Partner Page by ID
exports.getPartnerPageById = async (req, res) => {
  try {
    const partnerPage = await PartnerPage.findById(req.params.id).sort({ createdAt: -1 });
    if (!partnerPage) {
      return res.status(404).json({ message: "Partner Page not found" });
    }
    res.status(200).json(partnerPage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Partner Page",
      error: error.message,
    });
  }
};

// Update a Partner Page
exports.updatePartnerPage = async (req, res) => {
  try {
    const updatedPartnerPage = await PartnerPage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPartnerPage) {
      return res.status(404).json({ message: "Partner Page not found" });
    }
    res.status(200).json({
      message: "Partner Page updated successfully",
      data: updatedPartnerPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Partner Page",
      error: error.message,
    });
  }
};

// Delete a Partner Page
exports.deletePartnerPage = async (req, res) => {
  try {
    const deletedPartnerPage = await PartnerPage.findByIdAndDelete(
      req.params.id
    );
    if (!deletedPartnerPage) {
      return res.status(404).json({ message: "Partner Page not found" });
    }
    res.status(200).json({ message: "Partner Page deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Partner Page",
      error: error.message,
    });
  }
};
