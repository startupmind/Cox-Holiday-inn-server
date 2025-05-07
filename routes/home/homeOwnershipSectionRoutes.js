const express = require("express");
const router = express.Router();
const OwnershipCardController = require("../../controller/home/homeOwnershipSectionController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/create-ownership-card",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  OwnershipCardController.createOwnershipCard
);

router.get(
  "/get-all-ownership-cards",
  OwnershipCardController.getAllOwnershipCards
);

router.get(
  "/get-ownership-card-by-id/:id",
  OwnershipCardController.getOwnershipCardById
);

router.put(
  "/update-ownership-card/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  OwnershipCardController.updateOwnershipCard
);

router.delete(
  "/delete-ownership-card/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  OwnershipCardController.deleteOwnershipCard
);

router.post(
  "/ownership-card-detail-add/:id/add-detail",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  OwnershipCardController.addDetail
);

router.put(
  "/ownership-card-detail-update/:id/update-detail/:detailId",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  OwnershipCardController.updateDetail
);

router.delete(
  "/ownership-card-detail-delete/:id/delete-detail/:detailId",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  OwnershipCardController.deleteDetail
);

module.exports = router;
