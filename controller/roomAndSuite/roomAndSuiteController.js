const Room = require("../../models/roomAndSuite/roomAndSuite");

// Create a new room
exports.createRoom = async (req, res) => {
  try {
    const room = new Room(req.body);
    const savedRoom = await room.save();
    res.status(201).json(savedRoom);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all rooms
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single room by ID
exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ error: "Room not found" });
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update entire room
exports.updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedRoom) return res.status(404).json({ error: "Room not found" });
    res.status(200).json(updatedRoom);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete room
exports.deleteRoom = async (req, res) => {
  try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    if (!deletedRoom) return res.status(404).json({ error: "Room not found" });
    res.status(200).json({ message: "Room deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a service amenity
exports.addServiceAmenity = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    if (!room) return res.status(404).json({ error: "Room not found" });

    room.servicesAmenities.push(req.body);
    await room.save();
    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a service amenity by ID
exports.updateServiceAmenity = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    if (!room) return res.status(404).json({ error: "Room not found" });

    const amenity = room.servicesAmenities.id(req.params.amenityId);
    if (!amenity) return res.status(404).json({ error: "Amenity not found" });

    amenity.set(req.body);
    await room.save();
    res.status(200).json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a service amenity by ID
exports.deleteServiceAmenity = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    const amenity = room.servicesAmenities.id(req.params.amenityId);
    if (!amenity) {
      return res.status(404).json({ message: "Amenity not found" });
    }

    room.servicesAmenities.pull(req.params.amenityId);
    await room.save();

    res.status(200).json({ message: "Amenity deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting amenity",
      error: error.message,
    });
  }
};

// Add a room feature
exports.addRoomFeature = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    if (!room) return res.status(404).json({ error: "Room not found" });

    room.roomFeatures.push(req.body);
    await room.save();
    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a room feature by ID
exports.updateRoomFeature = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    if (!room) return res.status(404).json({ error: "Room not found" });

    const feature = room.roomFeatures.id(req.params.featureId);
    if (!feature) return res.status(404).json({ error: "Feature not found" });

    feature.set(req.body);
    await room.save();
    res.status(200).json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a room feature by ID
exports.deleteRoomFeature = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    const feature = room.roomFeatures.id(req.params.featureId);
    if (!feature) {
      return res.status(404).json({ message: "Feature not found" });
    }

    room.roomFeatures.pull(req.params.featureId);
    await room.save();

    res.status(200).json({ message: "Feature deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting feature",
      error: error.message,
    });
  }
};

exports.getAllServiceAmenities = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    const amenities = room.servicesAmenities || [];
    res.status(200).json(amenities);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving service amenities",
      error: error.message,
    });
  }
};

exports.getAllRoomFeatures = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    const features = room.roomFeatures || [];
    res.status(200).json(features);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving room features",
      error: error.message,
    });
  }
};
