const RecentMilestones = require("../../models/projectDetails/recentMilestones");

// Create a Recent Milestones
exports.createRecentMilestones = async (req, res) => {
  try {
    const recentMilestones = new RecentMilestones(req.body);
    const savedRecentMilestones = await recentMilestones.save();
    res.status(201).json({
      message: "Recent Milestones created successfully",
      data: savedRecentMilestones,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Recent Milestones",
      error: error.message,
    });
  }
};

// Get All Recent Milestones
exports.getAllRecentMilestones = async (req, res) => {
  try {
    const recentMilestones = await RecentMilestones.find().sort({
      createdAt: -1,
    });
    res.status(200).json(recentMilestones);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Recent Milestoness",
      error: error.message,
    });
  }
};

// Get Single Recent Milestones by ID
exports.getRecentMilestonesById = async (req, res) => {
  try {
    const recentMilestones = await RecentMilestones.findById(
      req.params.id
    ).sort({ createdAt: -1 });
    if (!recentMilestones) {
      return res.status(404).json({ message: "Recent Milestones not found" });
    }
    res.status(200).json(recentMilestones);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Recent Milestones",
      error: error.message,
    });
  }
};

// Update a Recent Milestones
exports.updateRecentMilestones = async (req, res) => {
  try {
    const updatedRecentMilestones = await RecentMilestones.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRecentMilestones) {
      return res.status(404).json({ message: "Recent Milestones not found" });
    }
    res.status(200).json({
      message: "Recent Milestones updated successfully",
      data: updatedRecentMilestones,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Recent Milestones",
      error: error.message,
    });
  }
};

// Delete a Recent Milestones
exports.deleteRecentMilestones = async (req, res) => {
  try {
    const deletedRecentMilestones = await RecentMilestones.findByIdAndDelete(
      req.params.id
    );
    if (!deletedRecentMilestones) {
      return res.status(404).json({ message: "Recent Milestones not found" });
    }
    res.status(200).json({ message: "Recent Milestones deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Recent Milestones",
      error: error.message,
    });
  }
};
