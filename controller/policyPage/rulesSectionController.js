const RulesPage = require("../../models/policyPage/rulesSection");

// Create a Rules Page
const formatBackgroundColor = (value) => {
  if (value && !value.startsWith("bg-[")) {
    return `bg-[${value}]`;
  }
  return value;
};

exports.createRulesPage = async (req, res) => {
  try {
    if (req.body.backgroundColor) {
      req.body.backgroundColor = formatBackgroundColor(req.body.backgroundColor);
    }

    const rulesPage = new RulesPage(req.body);
    const savedRulesPage = await rulesPage.save();

    res.status(201).json({
      message: "Rules Page created successfully",
      data: savedRulesPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Rules Page",
      error: error.message,
    });
  }
};



// Get All Rules Pages
exports.getAllRulesPages = async (req, res) => {
  try {
    const rulesPages = await RulesPage.find();
    res.status(200).json(rulesPages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Rules Pages",
      error: error.message,
    });
  }
};

// Get Single Rules Page by ID
exports.getRulesPageById = async (req, res) => {
  try {
    const rulesPage = await RulesPage.findById(req.params.id).sort({
      createdAt: -1,
    });
    if (!rulesPage) {
      return res.status(404).json({ message: "Rules Page not found" });
    }
    res.status(200).json(rulesPage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Rules Page",
      error: error.message,
    });
  }
};

// Update a Rules Page
exports.updateRulesPage = async (req, res) => {
  try {
    if (req.body.backgroundColor) {
      req.body.backgroundColor = formatBackgroundColor(req.body.backgroundColor);
    }

    const updatedRulesPage = await RulesPage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedRulesPage) {
      return res.status(404).json({ message: "Rules Page not found" });
    }

    res.status(200).json({
      message: "Rules Page updated successfully",
      data: updatedRulesPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Rules Page",
      error: error.message,
    });
  }
};



// Delete a Rules Page
exports.deleteRulesPage = async (req, res) => {
  try {
    const deletedRulesPage = await RulesPage.findByIdAndDelete(req.params.id);
    if (!deletedRulesPage) {
      return res.status(404).json({ message: "Rules Page not found" });
    }
    res.status(200).json({ message: "Rules Page deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Rules Page",
      error: error.message,
    });
  }
};
