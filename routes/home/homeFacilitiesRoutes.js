const express = require("express");
const router = express.Router();
const FacilitiesPageController = require("../../controller/home/homeFacilitiesController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/create-facilities",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  FacilitiesPageController.createFacilitiesPage
);
router.get(
  "/get-all-facilities",
  FacilitiesPageController.getAllFacilitiesPages
);
router.get(
  "/facilities-page-by-id/:id",
  FacilitiesPageController.getFacilitiesPageById
);
router.put(
  "/update-facilities/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  FacilitiesPageController.updateFacilitiesPage
);
router.delete(
  "/delete-facilities/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  FacilitiesPageController.deleteFacilitiesPage
);

router.post(
  "/add-images-facility-to-facilities/:id/images",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  FacilitiesPageController.addFacilityImage
);
router.put(
  "/update-images-facility-to-facilities/:id/images/:imageId",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  FacilitiesPageController.updateFacilityImage
);

router.delete(
  "/delete-images-facility-to-facilities/:id/images/:imageId",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  FacilitiesPageController.deleteFacilityImage
);

module.exports = router;
