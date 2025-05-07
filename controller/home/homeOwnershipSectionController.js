const OwnershipCard = require("../../models/home/homeOwnershipSection");

// Create Ownership Card
exports.createOwnershipCard = async (req, res) => {
  try {
    const { hue, caption, details } = req.body;

    const newCard = new OwnershipCard({ hue, caption, details });
    const savedCard = await newCard.save();

    res.status(201).json({
      message: "Ownership card created successfully",
      data: savedCard,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating ownership card",
      error: error.message,
    });
  }
};

// Get All Ownership Cards
exports.getAllOwnershipCards = async (req, res) => {
  try {
    const cards = await OwnershipCard.find().sort({ createdAt: -1 });
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching ownership cards",
      error: error.message,
    });
  }
};

// Get Single Ownership Card by ID
exports.getOwnershipCardById = async (req, res) => {
  try {
    const card = await OwnershipCard.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: "Ownership card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching ownership card",
      error: error.message,
    });
  }
};

// Update Ownership Card by ID
exports.updateOwnershipCard = async (req, res) => {
  try {
    const { id } = req.params;
    const { hue, caption, details } = req.body;

    const updatedCard = await OwnershipCard.findByIdAndUpdate(
      id,
      { hue, caption, details },
      { new: true, runValidators: true }
    );

    if (!updatedCard) {
      return res.status(404).json({ message: "Ownership card not found" });
    }

    res.status(200).json({
      message: "Ownership card updated successfully",
      data: updatedCard,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating ownership card",
      error: error.message,
    });
  }
};

// Delete Ownership Card by ID
exports.deleteOwnershipCard = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCard = await OwnershipCard.findByIdAndDelete(id);

    if (!deletedCard) {
      return res.status(404).json({ message: "Ownership card not found" });
    }

    res.status(200).json({
      message: "Ownership card deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting ownership card",
      error: error.message,
    });
  }
};

// Add Detail to Ownership Card
exports.addDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const card = await OwnershipCard.findById(id);
    if (!card) {
      return res.status(404).json({ message: "Ownership card not found" });
    }

    card.details.push({ text });
    const updatedCard = await card.save();

    res.status(201).json({
      message: "Detail added successfully",
      data: updatedCard,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding detail to ownership card",
      error: error.message,
    });
  }
};

// Update a Detail in Ownership Card
exports.updateDetail = async (req, res) => {
  try {
    const { id, detailId } = req.params;
    const { text } = req.body;

    const card = await OwnershipCard.findById(id);
    if (!card) {
      return res.status(404).json({ message: "Ownership card not found" });
    }

    const detail = card.details.id(detailId);
    if (!detail) {
      return res.status(404).json({ message: "Detail not found" });
    }

    detail.text = text;
    const updatedCard = await card.save();

    res.status(200).json({
      message: "Detail updated successfully",
      data: updatedCard,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating detail in ownership card",
      error: error.message,
    });
  }
};

// Delete a Detail from Ownership Card
exports.deleteDetail = async (req, res) => {
  try {
    const { id, detailId } = req.params;

    const card = await OwnershipCard.findById(id);
    if (!card) {
      return res.status(404).json({ message: "Ownership card not found" });
    }

    const detailExists = card.details.id(detailId);
    if (!detailExists) {
      return res.status(404).json({ message: "Detail not found" });
    }

    card.details = card.details.filter(
      (detail) => detail._id.toString() !== detailId
    );
    const updatedCard = await card.save();

    res.status(200).json({
      message: "Detail deleted successfully",
      data: updatedCard,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting detail from ownership card",
      error: error.message,
    });
  }
};
