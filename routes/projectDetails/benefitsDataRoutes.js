const express = require("express");
const router = express.Router();
const benefitsDataController = require("../../controller/projectDetails/benefitsDataController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/benefits-data-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  benefitsDataController.createBenefitsData
);
router.get("/benefits-data-all", benefitsDataController.getAllBenefitsData);
router.get("/benefits-data-by-id/:id", benefitsDataController.getBenefitsDataById);
router.put(
  "/benefits-data-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  benefitsDataController.updateBenefitsData
);
router.delete(
  "/benefits-data-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  benefitsDataController.deleteBenefitsData
);

module.exports = router;
