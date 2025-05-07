const HistoryPage = require("../../models/aboutPage/aboutHistorySection");

// Create a History Page
exports.createHistoryPage = async (req, res) => {
  try {
    const historyPage = new HistoryPage(req.body);
    const savedHistoryPage = await historyPage.save();
    res.status(201).json({
      message: "History Page created successfully",
      data: savedHistoryPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating History Page",
      error: error.message,
    });
  }
};

// Get All History Pages
exports.getAllHistoryPages = async (req, res) => {
  try {
    const historyPages = await HistoryPage.find().sort({ createdAt: -1 });
    res.status(200).json(historyPages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching History Pages",
      error: error.message,
    });
  }
};

// Get Single History Page by ID
exports.getHistoryPageById = async (req, res) => {
  try {
    const historyPage = await HistoryPage.findById(req.params.id).sort({
      createdAt: -1,
    });
    if (!historyPage) {
      return res.status(404).json({ message: "History Page not found" });
    }
    res.status(200).json(historyPage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching History Page",
      error: error.message,
    });
  }
};

// Update a History Page
exports.updateHistoryPage = async (req, res) => {
  try {
    const updatedHistoryPage = await HistoryPage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedHistoryPage) {
      return res.status(404).json({ message: "History Page not found" });
    }
    res.status(200).json({
      message: "History Page updated successfully",
      data: updatedHistoryPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating History Page",
      error: error.message,
    });
  }
};

// Delete a History Page
exports.deleteHistoryPage = async (req, res) => {
  try {
    const deletedHistoryPage = await HistoryPage.findByIdAndDelete(
      req.params.id
    );
    if (!deletedHistoryPage) {
      return res.status(404).json({ message: "History Page not found" });
    }
    res.status(200).json({ message: "History Page deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting History Page",
      error: error.message,
    });
  }
};
