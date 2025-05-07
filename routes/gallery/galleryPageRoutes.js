const express = require("express");
const router = express.Router();
const galleryPageController = require("../../controller/gallery/galleryPageController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/gallery-pages-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  galleryPageController.createGalleryPage
);
router.get("/gallery-pages-all", galleryPageController.getAllGalleryPages);
router.get(
  "/gallery-pages-by-id/:id",
  galleryPageController.getGalleryPageById
);
router.put(
  "/gallery-pages-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  galleryPageController.updateGalleryPage
);
router.delete(
  "/gallery-pages-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  galleryPageController.deleteGalleryPage
);

module.exports = router;
