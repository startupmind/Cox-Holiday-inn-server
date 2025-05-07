const express = require("express");
const router = express.Router();
const contactPageController = require("../../controller/contactPage/contactPageController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/contact-pages-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  contactPageController.createContactPage
);
router.get("/contact-pages-all", contactPageController.getAllContactPages);
router.get(
  "/contact-pages-by-id/:id",
  contactPageController.getContactPageById
);
router.put(
  "/contact-pages-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  contactPageController.updateContactPage
);


module.exports = router;
