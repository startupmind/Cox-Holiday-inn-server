const AboutPageHeroSection = require("../../models/aboutPage/aboutPageHeroSection");

// Create a About Page Hero Section
exports.createAboutPageHeroSection = async (req, res) => {
  try {
    const aboutPageHeroSection = new AboutPageHeroSection(req.body);
    const savedAboutPageHeroSection = await aboutPageHeroSection.save();
    res.status(201).json({
      message: "About Page Hero Section created successfully",
      data: savedAboutPageHeroSection,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating About Page Hero Section",
      error: error.message,
    });
  }
};

// Get All About Page Hero Sections
exports.getAllAboutPageHeroSections = async (req, res) => {
  try {
    const aboutPageHeroSections = await AboutPageHeroSection.find().sort({ createdAt: -1 });
    res.status(200).json(aboutPageHeroSections);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching About Page Hero Sections",
      error: error.message,
    });
  }
};

// Get Single About Page Hero Section by ID
exports.getAboutPageHeroSectionById = async (req, res) => {
  try {
    const aboutPageHeroSection = await AboutPageHeroSection.findById(req.params.id).sort({ createdAt: -1 });
    if (!aboutPageHeroSection) {
      return res.status(404).json({ message: "About Page Hero Section not found" });
    }
    res.status(200).json(aboutPageHeroSection);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching About Page Hero Section",
      error: error.message,
    });
  }
};

// Update a About Page Hero Section
exports.updateAboutPageHeroSection = async (req, res) => {
  try {
    const updatedAboutPageHeroSection = await AboutPageHeroSection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAboutPageHeroSection) {
      return res.status(404).json({ message: "About Page Hero Section not found" });
    }
    res.status(200).json({
      message: "About Page Hero Section updated successfully",
      data: updatedAboutPageHeroSection,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating About Page Hero Section",
      error: error.message,
    });
  }
};


