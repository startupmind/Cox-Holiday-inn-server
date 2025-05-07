const express = require("express");
const router = express.Router();
const investmentOpportunityController = require("../../controller/investmentOpportunity/investmentOpportunityController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/gallery-pages-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  investmentOpportunityController.createInvestmentOpportunity
);
router.get(
  "/gallery-pages-all",
  investmentOpportunityController.getAllInvestmentOpportunity
);
router.get(
  "/gallery-pages-by-id/:id",
  investmentOpportunityController.getInvestmentOpportunityById
);
router.put(
  "/gallery-pages-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  investmentOpportunityController.updateInvestmentOpportunity
);

module.exports = router;
