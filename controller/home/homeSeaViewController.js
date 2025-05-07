const HomeSeaView = require("../../models/home/homeSeaView");

// Create a Home Sea View
exports.createHomeSeaView = async (req, res) => {
  try {
    const homeSeaView = new HomeSeaView(req.body);
    const savedHomeSeaView = await homeSeaView.save();
    res.status(201).json({
      message: "Home Sea View created successfully",
      data: savedHomeSeaView,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Home Sea View",
      error: error.message,
    });
  }
};

// Get All Home Sea Views
exports.getAllHomeSeaViews = async (req, res) => {
  try {
    const homeSeaViews = await HomeSeaView.find().sort({ createdAt: -1 });
    res.status(200).json(homeSeaViews);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Home Sea Views",
      error: error.message,
    });
  }
};

// Get Single Home Sea View by ID
exports.getHomeSeaViewById = async (req, res) => {
  try {
    const homeSeaView = await HomeSeaView.findById(req.params.id).sort({
      createdAt: -1,
    });
    if (!homeSeaView) {
      return res.status(404).json({ message: "Home Sea View not found" });
    }
    res.status(200).json(homeSeaView);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Home Sea View",
      error: error.message,
    });
  }
};

// Update a Home Sea View
exports.updateHomeSeaView = async (req, res) => {
  try {
    const updatedHomeSeaView = await HomeSeaView.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedHomeSeaView) {
      return res.status(404).json({ message: "Home Sea View not found" });
    }
    res.status(200).json({
      message: "Home Sea View updated successfully",
      data: updatedHomeSeaView,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Home Sea View",
      error: error.message,
    });
  }
};
