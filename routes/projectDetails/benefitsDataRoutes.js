const express = require("express");
const router = express.Router();
const benefitsDataController = require("../../controller/projectDetails/benefitsDataController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/project-timeline-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  benefitsDataController.createBenefitsData
);
router.get("/project-timeline-all", benefitsDataController.getAllBenefitsData);
router.get("/project-by-id/:id", benefitsDataController.getBenefitsDataById);
router.put(
  "/project-timeline-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  benefitsDataController.updateBenefitsData
);
router.delete(
  "/project-timeline-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  benefitsDataController.deleteBenefitsData
);

module.exports = router;
