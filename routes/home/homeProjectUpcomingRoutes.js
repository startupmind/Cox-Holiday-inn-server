const express = require("express");
const router = express.Router();
const ProjectDisplayController = require("../../controller/home/homeProjectController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/create-project-upcoming",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  ProjectDisplayController.createHomeProject
);

router.get(
  "/get-all-project-upcoming",
  ProjectDisplayController.getAllHomeProjects
);

router.get(
  "/get-project-upcoming/:id",
  ProjectDisplayController.getHomeProjectById
);

router.put(
  "/update-project-upcoming/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  ProjectDisplayController.updateHomeProject
);

router.delete(
  "/delete-project-upcoming/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  ProjectDisplayController.deleteHomeProject
);

module.exports = router;
