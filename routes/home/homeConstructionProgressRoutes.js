const express = require("express");
const router = express.Router();
const ConstructionProgressController = require("../../controller/home/homeConstructionProgressController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/create-progress",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  ConstructionProgressController.createProgress
);
router.get("/get-all-progress", ConstructionProgressController.getAllProgress);
router.get("/get-progress/:id", ConstructionProgressController.getProgressById);
router.put(
  "/update-progress/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  ConstructionProgressController.updateProgress
);

module.exports = router;
