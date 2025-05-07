const HomeContent = require("../../models/home/homeContentSection");

// Create Home Content
exports.createHomeContent = async (req, res) => {
  try {
    const homeContent = new HomeContent(req.body);
    const savedHomeContent = await homeContent.save();
    res.status(201).json({
      message: "Home content created successfully",
      data: savedHomeContent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating home content",
      error: error.message,
    });
  }
};

// Get All Home Content Entries
exports.getAllHomeContent = async (req, res) => {
  try {
    const contents = await HomeContent.find().sort({ createdAt: -1 });
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching home content",
      error: error.message,
    });
  }
};

// Get Single Home Content by ID
exports.getHomeContentById = async (req, res) => {
  try {
    const content = await HomeContent.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: "Home content not found" });
    }
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching home content",
      error: error.message,
    });
  }
};

// Update Home Content by ID
exports.updateHomeContent = async (req, res) => {
  try {
    const updatedContent = await HomeContent.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedContent) {
      return res.status(404).json({ message: "Home content not found" });
    }
    res.status(200).json({
      message: "Home content updated successfully",
      data: updatedContent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating home content",
      error: error.message,
    });
  }
};

// Delete Home Content by ID
exports.deleteHomeContent = async (req, res) => {
  try {
    const deletedContent = await HomeContent.findByIdAndDelete(req.params.id);
    if (!deletedContent) {
      return res.status(404).json({ message: "Home content not found" });
    }
    res.status(200).json({ message: "Home content deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting home content",
      error: error.message,
    });
  }
};

// Add a Data Item to Home Content
exports.addDataItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, value } = req.body;

    const content = await HomeContent.findById(id);
    if (!content) {
      return res.status(404).json({ message: "Home content not found" });
    }

    content.data.push({ title, value });
    const updatedContent = await content.save();

    res.status(201).json({
      message: "Data item added successfully",
      data: updatedContent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding data item",
      error: error.message,
    });
  }
};

// Update a Data Item in Home Content by ID
exports.updateDataItem = async (req, res) => {
  try {
    const { id, itemId } = req.params; 
    const { title, value } = req.body;

    const content = await HomeContent.findById(id);
    if (!content) {
      return res.status(404).json({ message: "Home content not found" });
    }

    const item = content.data.find(item => item._id.toString() === itemId);
    if (!item) {
      return res.status(404).json({ message: "Data item not found" });
    }

    item.title = title;
    item.value = value;

    const updatedContent = await content.save();

    res.status(200).json({
      message: "Data item updated successfully",
      data: updatedContent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating data item",
      error: error.message,
    });
  }
};

// Delete a Data Item from Home Content by ID
exports.deleteDataItem = async (req, res) => {
  try {
    const { id, itemId } = req.params; 

    const content = await HomeContent.findById(id);
    if (!content) {
      return res.status(404).json({ message: "Home content not found" });
    }

    const itemIndex = content.data.findIndex(item => item._id.toString() === itemId);
    if (itemIndex === -1) {
      return res.status(404).json({ message: "Data item not found" });
    }

    content.data.splice(itemIndex, 1); 
    const updatedContent = await content.save();

    res.status(200).json({
      message: "Data item deleted successfully",
      data: updatedContent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting data item",
      error: error.message,
    });
  }
};
