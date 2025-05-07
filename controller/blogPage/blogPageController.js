const BlogPage = require("../../models/blogPage/blogPage");

// Create a Blog Page
exports.createBlogPage = async (req, res) => {
  try {
    const blogPage = new BlogPage(req.body);
    const savedBlogPage = await blogPage.save();
    res.status(201).json({
      message: "Blog Page created successfully",
      data: savedBlogPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating Blog Page",
      error: error.message,
    });
  }
};

// Get All Blog Pages
exports.getAllBlogPages = async (req, res) => {
  try {
    const blogPages = await BlogPage.find().sort({ createdAt: -1 });
    res.status(200).json(blogPages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Blog Pages",
      error: error.message,
    });
  }
};

// Get Single Blog Page by ID and Increment View Count
exports.getBlogPageById = async (req, res) => {
  try {
    const blogPage = await BlogPage.findById(req.params.id).sort({
      createdAt: -1,
    });
    if (!blogPage) {
      return res.status(404).json({ message: "Blog Page not found" });
    }

    // Increment view count
    blogPage.view = (parseInt(blogPage.view) + 1).toString();
    await blogPage.save();

    res.status(200).json(blogPage);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Blog Page",
      error: error.message,
    });
  }
};

// Update a Blog Page
exports.updateBlogPage = async (req, res) => {
  try {
    const updatedBlogPage = await BlogPage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBlogPage) {
      return res.status(404).json({ message: "Blog Page not found" });
    }
    res.status(200).json({
      message: "Blog Page updated successfully",
      data: updatedBlogPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Blog Page",
      error: error.message,
    });
  }
};

// Delete a Blog Page
exports.deleteBlogPage = async (req, res) => {
  try {
    const deletedBlogPage = await BlogPage.findByIdAndDelete(req.params.id);
    if (!deletedBlogPage) {
      return res.status(404).json({ message: "Blog Page not found" });
    }
    res.status(200).json({ message: "Blog Page deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Blog Page",
      error: error.message,
    });
  }
};

// Add a Comment to a Blog Page
exports.addComment = async (req, res) => {
  try {
    const blogPage = await BlogPage.findById(req.params.id);
    if (!blogPage) {
      return res.status(404).json({ message: "Blog Page not found" });
    }

    const comment = {
      fullName: req.body.fullName,
      message: req.body.message,
      replies: [],
    };

    blogPage.comments.push(comment);
    const updatedBlogPage = await blogPage.save();

    res.status(201).json({
      message: "Comment added successfully",
      data: updatedBlogPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding comment",
      error: error.message,
    });
  }
};

// Add a Reply to a Comment
exports.addReply = async (req, res) => {
  try {
    const blogPage = await BlogPage.findById(req.params.blogId);
    if (!blogPage) {
      return res.status(404).json({ message: "Blog Page not found" });
    }

    const comment = blogPage.comments.id(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const reply = {
      message: req.body.message,
    };

    comment.replies.push(reply);
    const updatedBlogPage = await blogPage.save();

    res.status(201).json({
      message: "Reply added successfully",
      data: updatedBlogPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding reply",
      error: error.message,
    });
  }
};

// Delete a Comment
exports.deleteComment = async (req, res) => {
  try {
    const blogPage = await BlogPage.findById(req.params.blogId);
    if (!blogPage) {
      return res.status(404).json({ message: "Blog Page not found" });
    }

    const commentIndex = blogPage.comments.findIndex(
      (comment) => comment.id.toString() === req.params.commentId
    );
    if (commentIndex === -1) {
      return res.status(404).json({ message: "Comment not found" });
    }

    blogPage.comments.splice(commentIndex, 1);
    const updatedBlogPage = await blogPage.save();

    res.status(200).json({
      message: "Comment deleted successfully",
      data: updatedBlogPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting comment",
      error: error.message,
    });
  }
};

// Delete a Reply
exports.deleteReply = async (req, res) => {
  try {
    const blogPage = await BlogPage.findById(req.params.blogId);
    if (!blogPage) {
      return res.status(404).json({ message: "Blog Page not found" });
    }

    const comment = blogPage.comments.id(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const replyIndex = comment.replies.findIndex(
      (reply) => reply.id.toString() === req.params.replyId
    );
    if (replyIndex === -1) {
      return res.status(404).json({ message: "Reply not found" });
    }

    comment.replies.splice(replyIndex, 1);
    const updatedBlogPage = await blogPage.save();

    res.status(200).json({
      message: "Reply deleted successfully",
      data: updatedBlogPage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting reply",
      error: error.message,
    });
  }
};
