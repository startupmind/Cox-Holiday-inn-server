const express = require("express");
const router = express.Router();
const benefitsMaterialityController = require("../../controller/investmentOpportunity/benefitsMaterialityController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/benefits-materiality-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  benefitsMaterialityController.createBenefitsMateriality
);
router.get(
  "/benefits-materiality-all",
  benefitsMaterialityController.getAllBenefitsMateriality
);
router.get(
  "/benefits-materiality-by-id/:id",
  benefitsMaterialityController.getBenefitsMaterialityById
);
router.put(
  "/benefits-materiality-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  benefitsMaterialityController.updateBenefitsMateriality
);
router.delete(
  "/benefits-materiality-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  benefitsMaterialityController.deleteBenefitsMateriality
);

module.exports = router;
