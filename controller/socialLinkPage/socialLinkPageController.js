const SocialLinkPage = require("../../models/socialLinkPage/socialLinkPage");

// Create a Social Link Page
exports.createSocialLinkPage = async (req, res) => {
  try {
    const socialLinkPage =
      new SocialLinkPage(req.body);
    const savedSocialLinkPage =
      await socialLinkPage.save();
    res.status(201).json({
      message: "Social Link Page created successfully",
      data: savedSocialLinkPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Social Link Page",
      error: error.message,
    });
  }
};

// Get All Social Link Pages
exports.getAllSocialLinkPages = async (req, res) => {
  try {
    const socialLinkPages =
      await SocialLinkPage.find();
    res.status(200).json(socialLinkPages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Social Link Pages",
      error: error.message,
    });
  }
};

// Get Single Social Link Page by ID
exports.getSocialLinkPageById = async (req, res) => {
  try {
    const socialLinkPage =
      await SocialLinkPage.findById(req.params.id);
    if (!socialLinkPage) {
      return res
        .status(404)
        .json({
          message: "Social Link Page not found",
        });
    }
    res.status(200).json(socialLinkPage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Social Link Page",
      error: error.message,
    });
  }
};

// Update a Social Link Page
exports.updateSocialLinkPage = async (req, res) => {
  try {
    const updatedSocialLinkPage =
      await SocialLinkPage.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
    if (!updatedSocialLinkPage) {
      return res
        .status(404)
        .json({
          message: "Social Link Page not found",
        });
    }
    res.status(200).json({
      message: "Social Link Page updated successfully",
      data: updatedSocialLinkPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Social Link Page",
      error: error.message,
    });
  }
};

