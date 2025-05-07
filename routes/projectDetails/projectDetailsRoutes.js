const express = require("express");
const router = express.Router();
const projectDetailsController = require("../../controller/projectDetails/projectDetailsController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/project-details-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  projectDetailsController.createProjectDetails
);
router.get(
  "/project-details-all",
  projectDetailsController.getAllProjectDetails
);
router.get(
  "/project-details-by-id/:id",
  projectDetailsController.getProjectDetailsById
);
router.put(
  "/project-details-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  projectDetailsController.updateProjectDetails
);

module.exports = router;
