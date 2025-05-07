const express = require("express");
const router = express.Router();
const socialLinkPageController = require("../../controller/socialLinkPage/socialLinkPageController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/social-link-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  socialLinkPageController.createSocialLinkPage
);
router.get("/social-link-all", socialLinkPageController.getAllSocialLinkPages);
router.get(
  "/social-link-by-id/:id",
  socialLinkPageController.getSocialLinkPageById
);
router.put(
  "/social-link-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  socialLinkPageController.updateSocialLinkPage
);

module.exports = router;
