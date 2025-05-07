const InvestmentOpportunity = require("../../models/investmentOpportunity/investmentOpportunity");

// Create a Investment Opportunity
exports.createInvestmentOpportunity = async (req, res) => {
  try {
    const investmentOpportunity = new InvestmentOpportunity(req.body);
    const savedInvestmentOpportunity = await investmentOpportunity.save();
    res.status(201).json({
      message: "Investment Opportunity created successfully",
      data: savedInvestmentOpportunity,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Investment Opportunity",
      error: error.message,
    });
  }
};

// Get All Investment Opportunity
exports.getAllInvestmentOpportunity = async (req, res) => {
  try {
    const investmentOpportunity = await InvestmentOpportunity.find().sort({
      createdAt: -1,
    });
    res.status(200).json(investmentOpportunity);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Investment Opportunity",
      error: error.message,
    });
  }
};

// Get Single Investment Opportunity by ID
exports.getInvestmentOpportunityById = async (req, res) => {
  try {
    const investmentOpportunity = await InvestmentOpportunity.findById(
      req.params.id
    ).sort({ createdAt: -1 });
    if (!investmentOpportunity) {
      return res
        .status(404)
        .json({ message: "Investment Opportunity not found" });
    }
    res.status(200).json(investmentOpportunity);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Investment Opportunity",
      error: error.message,
    });
  }
};

// Update a Investment Opportunity
exports.updateInvestmentOpportunity = async (req, res) => {
  try {
    const updatedInvestmentOpportunity =
      await InvestmentOpportunity.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
    if (!updatedInvestmentOpportunity) {
      return res
        .status(404)
        .json({ message: "Investment Opportunity not found" });
    }
    res.status(200).json({
      message: "Investment Opportunity updated successfully",
      data: updatedInvestmentOpportunity,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Investment Opportunity",
      error: error.message,
    });
  }
};
