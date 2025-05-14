const ProjectTimeline = require("../../models/projectDetails/projectTimeline");

// Create a Project Timeline
exports.createProjectTimeline = async (req, res) => {
  try {
    const projectTimeline = new ProjectTimeline(req.body);
    const savedProjectTimeline = await projectTimeline.save();
    res.status(201).json({
      message: "Project Timeline created successfully",
      data: savedProjectTimeline,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Project Timeline",
      error: error.message,
    });
  }
};

// Get All Project Timelines
exports.getAllProjectTimelines = async (req, res) => {
  try {
    const projectTimelines = await ProjectTimeline.find();
    res.status(200).json(projectTimelines);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Project Timelines",
      error: error.message,
    });
  }
};

// Get Single Project Timeline by ID
exports.getProjectTimelineById = async (req, res) => {
  try {
    const projectTimeline = await ProjectTimeline.findById(req.params.id).sort({
      createdAt: -1,
    });
    if (!projectTimeline) {
      return res.status(404).json({ message: "Project Timeline not found" });
    }
    res.status(200).json(projectTimeline);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Project Timeline",
      error: error.message,
    });
  }
};

// Update a Project Timeline
exports.updateProjectTimeline = async (req, res) => {
  try {
    const updatedProjectTimeline = await ProjectTimeline.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProjectTimeline) {
      return res.status(404).json({ message: "Project Timeline not found" });
    }
    res.status(200).json({
      message: "Project Timeline updated successfully",
      data: updatedProjectTimeline,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Project Timeline",
      error: error.message,
    });
  }
};

// Delete a Project Timeline
exports.deleteProjectTimeline = async (req, res) => {
  try {
    const deletedProjectTimeline = await ProjectTimeline.findByIdAndDelete(
      req.params.id
    );
    if (!deletedProjectTimeline) {
      return res.status(404).json({ message: "Project Timeline not found" });
    }
    res.status(200).json({ message: "Project Timeline deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Project Timeline",
      error: error.message,
    });
  }
};
