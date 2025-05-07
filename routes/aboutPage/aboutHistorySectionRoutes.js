const express = require("express");
const router = express.Router();
const aboutHistorySectionController = require("../../controller/aboutPage/aboutHistorySectionController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/history-pages-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  aboutHistorySectionController.createHistoryPage
);
router.get(
  "/history-pages-all",
  aboutHistorySectionController.getAllHistoryPages
);
router.get(
  "/history-pages-by-id/:id",
  aboutHistorySectionController.getHistoryPageById
);
router.put(
  "/history-pages-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  aboutHistorySectionController.updateHistoryPage
);
router.delete(
  "/history-pages-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  aboutHistorySectionController.deleteHistoryPage
);

module.exports = router;
