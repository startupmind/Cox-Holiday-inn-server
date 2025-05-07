const ProjectDetails = require("../../models/projectDetails/projectDetails");

// Create a Project Details
exports.createProjectDetails = async (req, res) => {
  try {
    const projectDetails = new ProjectDetails(req.body);
    const savedProjectDetails = await projectDetails.save();
    res.status(201).json({
      message: "Project Details created successfully",
      data: savedProjectDetails,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Project Details",
      error: error.message,
    });
  }
};

// Get All Project Details
exports.getAllProjectDetails = async (req, res) => {
  try {
    const projectDetails = await ProjectDetails.find().sort({ createdAt: -1 });
    res.status(200).json(projectDetails);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Project Details",
      error: error.message,
    });
  }
};

// Get Single Project Details by ID
exports.getProjectDetailsById = async (req, res) => {
  try {
    const projectDetails = await ProjectDetails.findById(req.params.id).sort({
      createdAt: -1,
    });
    if (!projectDetails) {
      return res.status(404).json({ message: "Project Details not found" });
    }
    res.status(200).json(projectDetails);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Project Details",
      error: error.message,
    });
  }
};

// Update a Project Details
exports.updateProjectDetails = async (req, res) => {
  try {
    const updatedProjectDetails = await ProjectDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProjectDetails) {
      return res.status(404).json({ message: "Project Details not found" });
    }
    res.status(200).json({
      message: "Project Details updated successfully",
      data: updatedProjectDetails,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Project Details",
      error: error.message,
    });
  }
};
