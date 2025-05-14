const express = require("express");
const router = express.Router();
const featuresAmenitiesController = require("../../controller/projectDetails/featuresAmenitiesController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/features-amenities-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  featuresAmenitiesController.createFeaturesAmenities
);
router.get(
  "/features-amenities-all",
  featuresAmenitiesController.getAllFeaturesAmenities
);
router.get(
  "/features-amenities-by-id/:id",
  featuresAmenitiesController.getFeaturesAmenitiesById
);
router.put(
  "/features-amenities-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  featuresAmenitiesController.updateFeaturesAmenities
);
router.delete(
  "/features-amenities-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  featuresAmenitiesController.deleteFeaturesAmenities
);

module.exports = router;
