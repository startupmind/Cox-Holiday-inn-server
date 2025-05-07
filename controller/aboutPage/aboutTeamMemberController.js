const TeamMember = require("../../models/aboutPage/aboutTeamMember");

// Create a Team Member
exports.createTeamMember = async (req, res) => {
  try {
    const teamMember = new TeamMember(req.body);
    const savedTeamMember = await teamMember.save();
    res.status(201).json({
      message: "Team Member created successfully",
      data: savedTeamMember,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Team Member",
      error: error.message,
    });
  }
};

// Get All Team Members
exports.getAllTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find().sort({ createdAt: -1 });
    res.status(200).json(teamMembers);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Team Members",
      error: error.message,
    });
  }
};

// Get Single Team Member by ID
exports.getTeamMemberById = async (req, res) => {
  try {
    const teamMember = await TeamMember.findById(req.params.id).sort({
      createdAt: -1,
    });
    if (!teamMember) {
      return res.status(404).json({ message: "Team Member not found" });
    }
    res.status(200).json(teamMember);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Team Member",
      error: error.message,
    });
  }
};

// Update a Team Member
exports.updateTeamMember = async (req, res) => {
  try {
    const updatedTeamMember = await TeamMember.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTeamMember) {
      return res.status(404).json({ message: "Team Member not found" });
    }
    res.status(200).json({
      message: "Team Member updated successfully",
      data: updatedTeamMember,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Team Member",
      error: error.message,
    });
  }
};

// Delete a Team Member
exports.deleteTeamMember = async (req, res) => {
  try {
    const deletedTeamMember = await TeamMember.findByIdAndDelete(req.params.id);
    if (!deletedTeamMember) {
      return res.status(404).json({ message: "Team Member not found" });
    }
    res.status(200).json({ message: "Team Member deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Team Member",
      error: error.message,
    });
  }
};
