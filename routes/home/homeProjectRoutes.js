const express = require("express");
const router = express.Router();
const ProjectDisplayController = require("../../controller/home/homeProjectController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/create-project-handover",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  ProjectDisplayController.createHomeProject
);

router.get(
  "/get-all-project-handovers",
  ProjectDisplayController.getAllHomeProjects
);

router.get(
  "/get-project-handover/:id",
  ProjectDisplayController.getHomeProjectById
);

router.put(
  "/update-project-handover/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  ProjectDisplayController.updateHomeProject
);

router.delete(
  "/delete-project-handover/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  ProjectDisplayController.deleteHomeProject
);

module.exports = router;
