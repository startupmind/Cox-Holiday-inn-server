const express = require("express");
const router = express.Router();
const blogPageController = require("../../controller/blogPage/blogPageController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/blogs-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  blogPageController.createBlogPage
);
router.get("/blogs-all", blogPageController.getAllBlogPages);
router.get("/blog-by-id/:id", blogPageController.getBlogPageById);
router.put(
  "/blog-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  blogPageController.updateBlogPage
);
router.delete(
  "/blog-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  blogPageController.deleteBlogPage
);
router.post("/blog-add-comment/:id/comments", blogPageController.addComment);
router.post(
  "/blog-replay/:blogId/comment/:commentId/reply",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  blogPageController.addReply
);

router.delete(
  "/blog-delete-comment/:blogId/comment/:commentId",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  blogPageController.deleteComment
);

router.delete(
  "/blog-delete-replay/:blogId/comment/:commentId/reply/:replyId",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  blogPageController.deleteReply
);

module.exports = router;
