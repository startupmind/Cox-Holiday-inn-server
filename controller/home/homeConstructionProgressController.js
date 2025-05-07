const ConstructionProgress = require("../../models/home/homeConstructionProgress");

exports.createProgress = async (req, res) => {
  try {
    const progress = new ConstructionProgress(req.body);
    const savedProgress = await progress.save();

    res.status(201).json({
      message: "Construction progress created successfully",
      data: savedProgress,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating construction progress",
      error: error.message,
    });
  }
};

exports.getAllProgress = async (req, res) => {
  try {
    const allProgress = await ConstructionProgress.find().sort({
      createdAt: -1,
    });
    res.status(200).json(allProgress);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching construction progress entries",
      error: error.message,
    });
  }
};

exports.getProgressById = async (req, res) => {
  try {
    const progress = await ConstructionProgress.findById(req.params.id);
    if (!progress) {
      return res.status(404).json({ message: "Progress entry not found" });
    }

    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching progress entry",
      error: error.message,
    });
  }
};

exports.updateProgress = async (req, res) => {
  try {
    const updatedProgress = await ConstructionProgress.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProgress) {
      return res.status(404).json({ message: "Progress entry not found" });
    }

    res.status(200).json({
      message: "Construction progress updated successfully",
      data: updatedProgress,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating progress entry",
      error: error.message,
    });
  }
};
