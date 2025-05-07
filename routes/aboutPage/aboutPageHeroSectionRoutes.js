const express = require("express");
const router = express.Router();
const aboutPageHeroSectionController = require("../../controller/aboutPage/aboutPageHeroSectionController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/about-pages-hero-section-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  aboutPageHeroSectionController.createAboutPageHeroSection
);
router.get(
  "/about-pages-hero-section-all",
  aboutPageHeroSectionController.getAllAboutPageHeroSections
);
router.get(
  "/about-pages-hero-section-by-id/:id",
  aboutPageHeroSectionController.getAboutPageHeroSectionById
);
router.put(
  "/about-pages-hero-section-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  aboutPageHeroSectionController.updateAboutPageHeroSection
);

module.exports = router;
