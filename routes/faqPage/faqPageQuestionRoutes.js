const express = require("express");
const router = express.Router();
const faqPageQuestionController = require("../../controller/faqPage/faqPageQuestionController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/faq-pages-question-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  faqPageQuestionController.createFaqPageQuestion
);
router.get(
  "/faq-pages-question-all",
  faqPageQuestionController.getAllFaqPageQuestions
);
router.get(
  "/faq-pages-question-by-id/:id",
  faqPageQuestionController.getFaqPageQuestionById
);
router.put(
  "/faq-pages-question-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  faqPageQuestionController.updateFaqPageQuestion
);
router.delete(
  "/faq-pages-question-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  faqPageQuestionController.deleteFaqPageQuestion
);

module.exports = router;
