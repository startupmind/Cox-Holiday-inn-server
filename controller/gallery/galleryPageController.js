const GalleryPage = require("../../models/gallery/galleryPage");

// Create a Gallery Page
exports.createGalleryPage = async (req, res) => {
  try {
    const galleryPage = new GalleryPage(req.body);
    const savedGalleryPage = await galleryPage.save();
    res.status(201).json({
      message: "Gallery Page created successfully",
      data: savedGalleryPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Gallery Page",
      error: error.message,
    });
  }
};

// Get All Gallery Pages
exports.getAllGalleryPages = async (req, res) => {
  try {
    const galleryPages = await GalleryPage.find().sort({ createdAt: -1 });
    res.status(200).json(galleryPages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Gallery Pages",
      error: error.message,
    });
  }
};

// Get Single Gallery Page by ID
exports.getGalleryPageById = async (req, res) => {
  try {
    const galleryPage = await GalleryPage.findById(req.params.id).sort({ createdAt: -1 });
    if (!galleryPage) {
      return res.status(404).json({ message: "Gallery Page not found" });
    }
    res.status(200).json(galleryPage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Gallery Page",
      error: error.message,
    });
  }
};

// Update a Gallery Page
exports.updateGalleryPage = async (req, res) => {
  try {
    const updatedGalleryPage = await GalleryPage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedGalleryPage) {
      return res.status(404).json({ message: "Gallery Page not found" });
    }
    res.status(200).json({
      message: "Gallery Page updated successfully",
      data: updatedGalleryPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Gallery Page",
      error: error.message,
    });
  }
};

// Delete a Gallery Page
exports.deleteGalleryPage = async (req, res) => {
  try {
    const deletedGalleryPage = await GalleryPage.findByIdAndDelete(
      req.params.id
    );
    if (!deletedGalleryPage) {
      return res.status(404).json({ message: "Gallery Page not found" });
    }
    res.status(200).json({ message: "Gallery Page deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Gallery Page",
      error: error.message,
    });
  }
};
