const HomeProjectUpcoming = require("../../models/home/homeProjectUpcoming");

// Create a Home Project Upcoming
exports.createHomeProjectUpcoming = async (req, res) => {
  try {
    const homeProjectUpcoming = new HomeProjectUpcoming(req.body);
    const savedHomeProjectUpcoming = await homeProjectUpcoming.save();
    res.status(201).json({
      message: "Home Project Upcoming created successfully",
      data: savedHomeProjectUpcoming,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Home Project Upcoming",
      error: error.message,
    });
  }
};

// Get All Home Project Upcomings
exports.getAllHomeProjectUpcomings = async (req, res) => {
  try {
    const homeProjectUpcomings = await HomeProjectUpcoming.find().sort({
      createdAt: -1,
    });
    res.status(200).json(homeProjectUpcomings);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Home Project Upcomings",
      error: error.message,
    });
  }
};

// Get Single Home Project Upcoming by ID
exports.getHomeProjectUpcomingById = async (req, res) => {
  try {
    const homeProjectUpcoming = await HomeProjectUpcoming.findById(
      req.params.id
    ).sort({ createdAt: -1 });
    if (!homeProjectUpcoming) {
      return res
        .status(404)
        .json({ message: "Home Project Upcoming not found" });
    }
    res.status(200).json(homeProjectUpcoming);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Home Project Upcoming",
      error: error.message,
    });
  }
};

// Update a Home Project Upcoming
exports.updateHomeProjectUpcoming = async (req, res) => {
  try {
    const updatedHomeProjectUpcoming =
      await HomeProjectUpcoming.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
    if (!updatedHomeProjectUpcoming) {
      return res
        .status(404)
        .json({ message: "Home Project Upcoming not found" });
    }
    res.status(200).json({
      message: "Home Project Upcoming updated successfully",
      data: updatedHomeProjectUpcoming,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Home Project Upcoming",
      error: error.message,
    });
  }
};

// Delete a Home Project Upcoming
exports.deleteHomeProjectUpcoming = async (req, res) => {
  try {
    const deletedHomeProjectUpcoming =
      await HomeProjectUpcoming.findByIdAndDelete(req.params.id);
    if (!deletedHomeProjectUpcoming) {
      return res
        .status(404)
        .json({ message: "Home Project Upcoming not found" });
    }
    res
      .status(200)
      .json({ message: "Home Project Upcoming deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Home Project Upcoming",
      error: error.message,
    });
  }
};
