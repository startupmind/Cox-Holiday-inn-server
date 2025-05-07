const express = require("express");
const router = express.Router();
const timelineDataController = require("../../controller/projectDetails/timelineDataController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/timeline-data-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  timelineDataController.createTimelineData
);
router.get("/timeline-all", timelineDataController.getAllTimelineDatas);
router.get(
  "/timeline-data-by-id/:id",
  timelineDataController.getTimelineDataById
);
router.put(
  "/timeline-data-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  timelineDataController.updateTimelineData
);
router.delete(
  "/timeline-data-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  timelineDataController.deleteTimelineData
);

module.exports = router;
