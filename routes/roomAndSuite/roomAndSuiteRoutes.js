const express = require("express");
const router = express.Router();
const roomController = require("../../controller/roomAndSuite/roomAndSuiteController");

// Room CRUD
router.post("/room-and-suite-add", roomController.createRoom);
router.get("/room-and-suite-all", roomController.getAllRooms);
router.get("/room-and-suite-by-id/:id", roomController.getRoomById);
router.put("/room-and-suite-update/:id", roomController.updateRoom);
router.delete("/room-and-suite-delete/:id", roomController.deleteRoom);

// Services Amenities
router.post("/room-and-suite-amenities-add/:roomId/amenities", roomController.addServiceAmenity);
router.put("/room-and-suite-amenities-update/:roomId/amenities/:amenityId", roomController.updateServiceAmenity);
router.delete("/room-and-suite-amenities-delete/:roomId/amenities/:amenityId", roomController.deleteServiceAmenity);

// Room Features
router.post("/room-and-suite-features-add/:roomId/features", roomController.addRoomFeature);
router.put("/room-and-suite-features-update/:roomId/features/:featureId", roomController.updateRoomFeature);
router.delete("/room-and-suite-features-delete/:roomId/features/:featureId", roomController.deleteRoomFeature);

module.exports = router;
