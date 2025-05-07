const express = require("express");
const router = express.Router();
const homeContentController = require("../../controller/home/homeContentSectionController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/home-content-create",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homeContentController.createHomeContent
);
router.get("/home-content-all", homeContentController.getAllHomeContent);
router.get("/home-content-by-id/:id", homeContentController.getHomeContentById);
router.put(
  "/home-content-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homeContentController.updateHomeContent
);
router.delete(
  "/home-content-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homeContentController.deleteHomeContent
);
router.post(
  "/home-content-data-add/:id/data",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homeContentController.addDataItem
);
router.put(
  "/home-content-data-update/:id/data/:itemId",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homeContentController.updateDataItem
);
router.delete(
  "/home-content-data-delete/:id/data/:itemId",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homeContentController.deleteDataItem
);

module.exports = router;
