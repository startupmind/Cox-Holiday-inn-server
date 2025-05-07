const express = require("express");
const router = express.Router();
const messageController = require("../../controller/message/messageController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post("/messages", messageController.createMessage);
router.get(
  "/messages-get-all",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  messageController.getAllMessages
);
router.get(
  "/messages-by-id/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  messageController.getMessageById
);
router.delete(
  "/messages-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  messageController.deleteMessage
);

module.exports = router;
