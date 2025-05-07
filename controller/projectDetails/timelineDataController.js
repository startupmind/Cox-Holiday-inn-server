const TimelineData = require("../../models/projectDetails/timelineData");

// Create a Timeline Data
exports.createTimelineData = async (req, res) => {
  try {
    const timelineData = new TimelineData(req.body);
    const savedTimelineData = await timelineData.save();
    res.status(201).json({
      message: "Timeline Data created successfully",
      data: savedTimelineData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Timeline Data",
      error: error.message,
    });
  }
};

// Get All Timeline Datas
exports.getAllTimelineDatas = async (req, res) => {
  try {
    const timelineDatas = await TimelineData.find().sort({
      createdAt: -1,
    });
    res.status(200).json(timelineDatas);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Timeline Datas",
      error: error.message,
    });
  }
};

// Get Single Timeline Data by ID
exports.getTimelineDataById = async (req, res) => {
  try {
    const timelineData = await TimelineData.findById(req.params.id).sort({
      createdAt: -1,
    });
    if (!timelineData) {
      return res.status(404).json({ message: "Timeline Data not found" });
    }
    res.status(200).json(timelineData);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Timeline Data",
      error: error.message,
    });
  }
};

// Update a Timeline Data
exports.updateTimelineData = async (req, res) => {
  try {
    const updatedTimelineData = await TimelineData.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTimelineData) {
      return res.status(404).json({ message: "Timeline Data not found" });
    }
    res.status(200).json({
      message: "Timeline Data updated successfully",
      data: updatedTimelineData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Timeline Data",
      error: error.message,
    });
  }
};

// Delete a Timeline Data
exports.deleteTimelineData = async (req, res) => {
  try {
    const deletedTimelineData = await TimelineData.findByIdAndDelete(
      req.params.id
    );
    if (!deletedTimelineData) {
      return res.status(404).json({ message: "Timeline Data not found" });
    }
    res.status(200).json({ message: "Timeline Data deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Timeline Data",
      error: error.message,
    });
  }
};
