const FaqPageQuestion = require("../../models/faqPage/faqPageQuestion");

// Create a Faq Page Question
exports.createFaqPageQuestion = async (req, res) => {
  try {
    const faqPageQuestion = new FaqPageQuestion(req.body);
    const savedFaqPageQuestion = await faqPageQuestion.save();
    res.status(201).json({
      message: "Faq Page Question created successfully",
      data: savedFaqPageQuestion,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Faq Page Question",
      error: error.message,
    });
  }
};

// Get All Faq Page Questions
exports.getAllFaqPageQuestions = async (req, res) => {
  try {
    const faqPageQuestions = await FaqPageQuestion.find().sort({
      createdAt: -1,
    });
    res.status(200).json(faqPageQuestions);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Faq Page Questions",
      error: error.message,
    });
  }
};

// Get Single Faq Page Question by ID
exports.getFaqPageQuestionById = async (req, res) => {
  try {
    const faqPageQuestion = await FaqPageQuestion.findById(req.params.id).sort({
      createdAt: -1,
    });
    if (!faqPageQuestion) {
      return res.status(404).json({ message: "Faq Page Question not found" });
    }
    res.status(200).json(faqPageQuestion);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Faq Page Question",
      error: error.message,
    });
  }
};

// Update a Faq Page Question
exports.updateFaqPageQuestion = async (req, res) => {
  try {
    const updatedFaqPageQuestion = await FaqPageQuestion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFaqPageQuestion) {
      return res.status(404).json({ message: "Faq Page Question not found" });
    }
    res.status(200).json({
      message: "Faq Page Question updated successfully",
      data: updatedFaqPageQuestion,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Faq Page Question",
      error: error.message,
    });
  }
};

// Delete a Faq Page Question
exports.deleteFaqPageQuestion = async (req, res) => {
  try {
    const deletedFaqPageQuestion = await FaqPageQuestion.findByIdAndDelete(
      req.params.id
    );
    if (!deletedFaqPageQuestion) {
      return res.status(404).json({ message: "Faq Page Question not found" });
    }
    res.status(200).json({ message: "Faq Page Question deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Faq Page Question",
      error: error.message,
    });
  }
};
