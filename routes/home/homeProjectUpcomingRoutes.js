const express = require("express");
const router = express.Router();
const homeProjectUpcomingController = require("../../controller/home/homeProjectUpcomingController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/create-project-upcoming",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homeProjectUpcomingController.createHomeProjectUpcoming
);

router.get(
  "/get-all-project-upcoming",
  homeProjectUpcomingController.getAllHomeProjectUpcomings
);

router.get(
  "/get-project-upcoming/:id",
  homeProjectUpcomingController.getHomeProjectUpcomingById
);

router.put(
  "/update-project-upcoming/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homeProjectUpcomingController.updateHomeProjectUpcoming
);

router.delete(
  "/delete-project-upcoming/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homeProjectUpcomingController.deleteHomeProjectUpcoming
);

module.exports = router;
