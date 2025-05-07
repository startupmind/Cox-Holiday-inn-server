const express = require("express");
const router = express.Router();
const featuresAmenitiesController = require("../../controller/projectDetails/featuresAmenitiesController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/project-timeline-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  featuresAmenitiesController.createFeaturesAmenities
);
router.get(
  "/project-timeline-all",
  featuresAmenitiesController.getAllFeaturesAmenities
);
router.get(
  "/project-by-id/:id",
  featuresAmenitiesController.getFeaturesAmenitiesById
);
router.put(
  "/project-timeline-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  featuresAmenitiesController.updateFeaturesAmenities
);
router.delete(
  "/project-timeline-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  featuresAmenitiesController.deleteFeaturesAmenities
);

module.exports = router;
