const express = require("express");
const router = express.Router();
const homeSeaViewController = require("../../controller/home/homeSeaViewController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/sea-view-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homeSeaViewController.createHomeSeaView
);
router.get("/sea-view-all", homeSeaViewController.getAllHomeSeaViews);
router.get("/sea-view-by-id/:id", homeSeaViewController.getHomeSeaViewById);
router.put(
  "/sea-view-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  homeSeaViewController.updateHomeSeaView
);

module.exports = router;
