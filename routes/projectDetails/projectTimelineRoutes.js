const express = require("express");
const router = express.Router();
const projectTimelineController = require("../../controller/projectDetails/projectTimelineController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/project-timeline-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  projectTimelineController.createProjectTimeline
);
router.get(
  "/project-timeline-all",
  projectTimelineController.getAllProjectTimelines
);
router.get(
  "/project-by-id/:id",
  projectTimelineController.getProjectTimelineById
);
router.put(
  "/project-timeline-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  projectTimelineController.updateProjectTimeline
);
router.delete(
  "/project-timeline-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  projectTimelineController.deleteProjectTimeline
);

module.exports = router;
