const express = require("express");
const router = express.Router();
const roomController = require("../../controller/roomAndSuite/roomAndSuiteController");
const { verifyToken, checkRole } = require("../../middleware/auth");

// Room CRUD
router.post(
  "/room-and-suite-add",
  roomController.createRoom,
  verifyToken,
  checkRole(["admin", "superAdmin"])
);
router.get("/room-and-suite-all", roomController.getAllRooms);
router.get("/room-and-suite-by-id/:id", roomController.getRoomById);
router.put(
  "/room-and-suite-update/:id",
  roomController.updateRoom,
  verifyToken,
  checkRole(["admin", "superAdmin"])
);
router.delete(
  "/room-and-suite-delete/:id",
  roomController.deleteRoom,
  verifyToken,
  checkRole(["admin", "superAdmin"])
);

// Services Amenities
router.post(
  "/room-and-suite-amenities-add/:roomId/amenities",
  roomController.addServiceAmenity,
  verifyToken,
  checkRole(["admin", "superAdmin"])
);
router.put(
  "/room-and-suite-amenities-update/:roomId/amenities/:amenityId",
  roomController.updateServiceAmenity,
  verifyToken,
  checkRole(["admin", "superAdmin"])
);
router.delete(
  "/room-and-suite-amenities-delete/:roomId/amenities/:amenityId",
  roomController.deleteServiceAmenity,
  verifyToken,
  checkRole(["admin", "superAdmin"])
);

// Room Features
router.post(
  "/room-and-suite-features-add/:roomId/features",
  roomController.addRoomFeature,
  verifyToken,
  checkRole(["admin", "superAdmin"])
);
router.put(
  "/room-and-suite-features-update/:roomId/features/:featureId",
  roomController.updateRoomFeature,
  verifyToken,
  checkRole(["admin", "superAdmin"])
);
router.delete(
  "/room-and-suite-features-delete/:roomId/features/:featureId",
  roomController.deleteRoomFeature,
  verifyToken,
  checkRole(["admin", "superAdmin"])
);

router.get("/rooms/:roomId/amenities", roomController.getAllServiceAmenities);
router.get("/rooms/:roomId/features", roomController.getAllRoomFeatures);



module.exports = router;
