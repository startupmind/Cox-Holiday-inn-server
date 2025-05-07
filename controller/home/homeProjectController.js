const HomeProject = require("../../models/home/homeProject");

// Create a ome Project
exports.createHomeProject = async (req, res) => {
  try {
    const homeProject = new HomeProject(req.body);
    const savedHomeProject = await homeProject.save();
    res.status(201).json({
      message: "Home Project created successfully",
      data: savedHomeProject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Home Project",
      error: error.message,
    });
  }
};

// Get All Home Projects
exports.getAllHomeProjects = async (req, res) => {
  try {
    const homeProjects = await HomeProject.find().sort({ createdAt: -1 });
    res.status(200).json(homeProjects);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Home Projects",
      error: error.message,
    });
  }
};

// Get Single Home Project by ID
exports.getHomeProjectById = async (req, res) => {
  try {
    const homeProject = await HomeProject.findById(req.params.id).sort({
      createdAt: -1,
    });
    if (!homeProject) {
      return res.status(404).json({ message: "Home Project not found" });
    }
    res.status(200).json(homeProject);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Home Project",
      error: error.message,
    });
  }
};

// Update a Home Project
exports.updateHomeProject = async (req, res) => {
  try {
    const updatedHomeProject = await HomeProject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedHomeProject) {
      return res.status(404).json({ message: "Home Project not found" });
    }
    res.status(200).json({
      message: "Home Project updated successfully",
      data: updatedHomeProject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Home Project",
      error: error.message,
    });
  }
};

// Delete a Home Project
exports.deleteHomeProject = async (req, res) => {
  try {
    const deletedHomeProject = await HomeProject.findByIdAndDelete(
      req.params.id
    );
    if (!deletedHomeProject) {
      return res.status(404).json({ message: "Home Project not found" });
    }
    res.status(200).json({ message: "Home Project deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Home Project",
      error: error.message,
    });
  }
};
