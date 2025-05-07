const FaqPageHeroSection = require("../../models/faqPage/faqPageHeroSection");

// Create a Faq Page Hero Section
exports.createFaqPageHeroSection = async (req, res) => {
  try {
    const faqPageHeroSection = new FaqPageHeroSection(req.body);
    const savedFaqPageHeroSection = await faqPageHeroSection.save();
    res.status(201).json({
      message: "Faq Page Hero Section created successfully",
      data: savedFaqPageHeroSection,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Faq Page Hero Section",
      error: error.message,
    });
  }
};

// Get All Faq Page Hero Sections
exports.getAllFaqPageHeroSections = async (req, res) => {
  try {
    const faqPageHeroSections = await FaqPageHeroSection.find().sort({
      createdAt: -1,
    });
    res.status(200).json(faqPageHeroSections);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Faq Page Hero Sections",
      error: error.message,
    });
  }
};

// Get Single Faq Page Hero Section by ID
exports.getFaqPageHeroSectionById = async (req, res) => {
  try {
    const faqPageHeroSection = await FaqPageHeroSection.findById(
      req.params.id
    ).sort({ createdAt: -1 });
    if (!faqPageHeroSection) {
      return res
        .status(404)
        .json({ message: "Faq Page Hero Section not found" });
    }
    res.status(200).json(faqPageHeroSection);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Faq Page Hero Section",
      error: error.message,
    });
  }
};

// Update a Faq Page Hero Section
exports.updateFaqPageHeroSection = async (req, res) => {
  try {
    const updatedFaqPageHeroSection =
      await FaqPageHeroSection.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
    if (!updatedFaqPageHeroSection) {
      return res
        .status(404)
        .json({ message: "Faq Page Hero Section not found" });
    }
    res.status(200).json({
      message: "Faq Page Hero Section updated successfully",
      data: updatedFaqPageHeroSection,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Faq Page Hero Section",
      error: error.message,
    });
  }
};
