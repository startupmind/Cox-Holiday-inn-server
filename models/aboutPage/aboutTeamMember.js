const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema(
  {
    image: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    designation: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("teamMember", teamMemberSchema);
