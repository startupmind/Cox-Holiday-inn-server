const express = require("express");
const router = express.Router();
const recentMilestonesController = require("../../controller/projectDetails/recentMilestonesController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/recent-milestones-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  recentMilestonesController.createRecentMilestones
);
router.get(
  "/recent-milestones-all",
  recentMilestonesController.getAllRecentMilestones
);
router.get(
  "/recent-milestones-by-id/:id",
  recentMilestonesController.getRecentMilestonesById
);
router.put(
  "/recent-milestones-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  recentMilestonesController.updateRecentMilestones
);
router.delete(
  "/recent-milestones-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  recentMilestonesController.deleteRecentMilestones
);

module.exports = router;
