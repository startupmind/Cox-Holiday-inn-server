const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    companyName: { type: String,  trim: true },
    industryName: { type: String, trim: true },
    email: { type: String, required: true, trim: true },
    contactNumber: { type: String, required: true, trim: true },
    subject: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("message", messageSchema);
