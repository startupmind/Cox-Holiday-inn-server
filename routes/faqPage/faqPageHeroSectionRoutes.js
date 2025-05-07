const express = require("express");
const router = express.Router();
const faqPageHeroSectionController = require("../../controller/faqPage/faqPageHeroSectionController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/faq-pages-hero-section-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  faqPageHeroSectionController.createFaqPageHeroSection
);
router.get(
  "/faq-pages-hero-section-all",
  faqPageHeroSectionController.getAllFaqPageHeroSections
);
router.get(
  "/faq-pages-hero-section-by-id/:id",
  faqPageHeroSectionController.getFaqPageHeroSectionById
);
router.put(
  "/faq-pages-hero-section-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  faqPageHeroSectionController.updateFaqPageHeroSection
);

module.exports = router;
