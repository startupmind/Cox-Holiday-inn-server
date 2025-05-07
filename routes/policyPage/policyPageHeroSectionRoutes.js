const express = require("express");
const router = express.Router();
const policyPageHeroSectionController = require("../../controller/policyPage/policyPageHeroSectionController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/policy-pages-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  policyPageHeroSectionController.createPolicyPage
);
router.get(
  "/policy-pages-all",
  policyPageHeroSectionController.getAllPolicyPages
);
router.get(
  "/policy-pages-by-id/:id",
  policyPageHeroSectionController.getPolicyPageById
);
router.put(
  "/policy-pages-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  policyPageHeroSectionController.updatePolicyPage
);

module.exports = router;
