const express = require("express");
const router = express.Router();
const homePartnerSectionController = require("../../controller/home/homePartnerSectionController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/partners-pages-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homePartnerSectionController.createPartnerPage
);
router.get(
  "/partners-pages-all",
  homePartnerSectionController.getAllPartnerPages
);
router.get(
  "/partners-pages-by-id/:id",
  homePartnerSectionController.getPartnerPageById
);
router.put(
  "/partners-pages-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homePartnerSectionController.updatePartnerPage
);
router.delete(
  "/partners-pages-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homePartnerSectionController.deletePartnerPage
);

module.exports = router;
