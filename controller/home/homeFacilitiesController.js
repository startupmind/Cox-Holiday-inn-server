const FacilitiesPage = require("../../models/home/homeFacilities");

// Create Facilities Page
exports.createFacilitiesPage = async (req, res) => {
  try {
    const facilitiesPage = new FacilitiesPage(req.body);
    const savedPage = await facilitiesPage.save();
    res.status(201).json({
      message: "Facilities Page created successfully",
      data: savedPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Facilities Page",
      error: error.message,
    });
  }
};

// Get All Facilities Pages
exports.getAllFacilitiesPages = async (req, res) => {
  try {
    const pages = await FacilitiesPage.find().sort({ createdAt: -1 });
    res.status(200).json(pages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Facilities Pages",
      error: error.message,
    });
  }
};

// Get Single Facilities Page by ID
exports.getFacilitiesPageById = async (req, res) => {
  try {
    const page = await FacilitiesPage.findById(req.params.id);
    if (!page) {
      return res.status(404).json({ message: "Facilities Page not found" });
    }
    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Facilities Page",
      error: error.message,
    });
  }
};

// Update Facilities Page
exports.updateFacilitiesPage = async (req, res) => {
  try {
    const updatedPage = await FacilitiesPage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedPage) {
      return res.status(404).json({ message: "Facilities Page not found" });
    }
    res.status(200).json({
      message: "Facilities Page updated successfully",
      data: updatedPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Facilities Page",
      error: error.message,
    });
  }
};

// Delete Facilities Page
exports.deleteFacilitiesPage = async (req, res) => {
  try {
    const deletedPage = await FacilitiesPage.findByIdAndDelete(req.params.id);
    if (!deletedPage) {
      return res.status(404).json({ message: "Facilities Page not found" });
    }
    res.status(200).json({ message: "Facilities Page deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Facilities Page",
      error: error.message,
    });
  }
};

// Add Image to Facility's facilitiesImage Array
exports.addFacilityImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { img } = req.body;

    const page = await FacilitiesPage.findById(id);
    if (!page) return res.status(404).json({ message: "Page not found" });

    page.facilitiesImage.push({ img });
    const updatedPage = await page.save();

    res.status(201).json({
      message: "Facility image added successfully",
      data: updatedPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding facility image",
      error: error.message,
    });
  }
};

// Update a Specific Facility Image by ID
exports.updateFacilityImage = async (req, res) => {
  try {
    const { id, imageId } = req.params;
    const { img } = req.body;

    const page = await FacilitiesPage.findById(id);
    if (!page) return res.status(404).json({ message: "Page not found" });

    const image = page.facilitiesImage.id(imageId);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    image.img = img;
    const updatedPage = await page.save();

    res.status(200).json({
      message: "Facility image updated successfully",
      data: updatedPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating facility image",
      error: error.message,
    });
  }
};

// Delete a Facility Image by ID
exports.deleteFacilityImage = async (req, res) => {
  try {
    const { id, imageId } = req.params;

    const page = await FacilitiesPage.findById(id);
    if (!page) return res.status(404).json({ message: "Page not found" });

    const imageExists = page.facilitiesImage.id(imageId);
    if (!imageExists) {
      return res.status(404).json({ message: "Image not found" });
    }

    page.facilitiesImage = page.facilitiesImage.filter(
      (img) => img._id.toString() !== imageId
    );

    const updatedPage = await page.save();

    res.status(200).json({
      message: "Facility image deleted successfully",
      data: updatedPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting facility image",
      error: error.message,
    });
  }
};
