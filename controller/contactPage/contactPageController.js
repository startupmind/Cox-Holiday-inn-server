const ContactPage = require("../../models/contactPage/contactPage");

// Create a Contact Page
exports.createContactPage = async (req, res) => {
  try {
    const contactPage = new ContactPage(req.body);
    const savedContactPage = await contactPage.save();
    res.status(201).json({
      message: "Contact Page created successfully",
      data: savedContactPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Contact Page",
      error: error.message,
    });
  }
};

// Get All Contact Pages
exports.getAllContactPages = async (req, res) => {
  try {
    const contactPages = await ContactPage.find().sort({ createdAt: -1 });
    res.status(200).json(contactPages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Contact Pages",
      error: error.message,
    });
  }
};

// Get Single Contact Page by ID
exports.getContactPageById = async (req, res) => {
  try {
    const contactPage = await ContactPage.findById(req.params.id).sort({ createdAt: -1 });
    if (!contactPage) {
      return res.status(404).json({ message: "Contact Page not found" });
    }
    res.status(200).json(contactPage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Contact Page",
      error: error.message,
    });
  }
};

// Update a Contact Page
exports.updateContactPage = async (req, res) => {
  try {
    const updatedContactPage = await ContactPage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedContactPage) {
      return res.status(404).json({ message: "Contact Page not found" });
    }
    res.status(200).json({
      message: "Contact Page updated successfully",
      data: updatedContactPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Contact Page",
      error: error.message,
    });
  }
};


