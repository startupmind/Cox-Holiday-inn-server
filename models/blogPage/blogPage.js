const mongoose = require("mongoose");

const replySchema = new mongoose.Schema(
  {
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const commentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    replies: [replySchema],
  },
  { timestamps: true }
);

const blogPageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    imgOne: { type: String, required: true, trim: true },
    view: { type: String, required: true, trim: true },
    descriptionOne: { type: String, required: true, trim: true },
    imgTwo: { type: String, required: true, trim: true },
    descriptionTwo: { type: String, required: true, trim: true },
    comments: [commentSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("blogPage", blogPageSchema);
