const express = require("express");
const router = express.Router();
const rulesSectionController = require("../../controller/policyPage/rulesSectionController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/rules-pages-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  rulesSectionController.createRulesPage
);
router.get("/rules-pages-all", rulesSectionController.getAllRulesPages);
router.get("/rules-pages-by-id/:id", rulesSectionController.getRulesPageById);
router.put(
  "/rules-pages-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  rulesSectionController.updateRulesPage
);
router.delete(
  "/rules-pages-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  rulesSectionController.deleteRulesPage
);

module.exports = router;
