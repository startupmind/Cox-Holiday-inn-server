const express = require("express");
const router = express.Router();
const investmentOpportunityController = require("../../controller/projectDetails/investmentOpportunityControllerProject");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/investment-opportunity-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  investmentOpportunityController.createInvestmentOpportunity
);
router.get(
  "/investment-opportunity-all",
  investmentOpportunityController.getAllInvestmentOpportunity
);
router.get(
  "/investment-opportunity-by-id/:id",
  investmentOpportunityController.getInvestmentOpportunityById
);
router.put(
  "/investment-opportunity-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  investmentOpportunityController.updateInvestmentOpportunity
);
router.delete(
  "/investment-opportunity-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  investmentOpportunityController.deleteInvestmentOpportunity
);

module.exports = router;
