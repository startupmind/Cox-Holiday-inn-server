const express = require("express");
const UserController = require("../controller/userController");
const { verifyToken, checkRole } = require("../middleware/auth");

const router = express.Router();

router.post("/users", UserController.createUser);
router.post("/users/login", UserController.login);
router.post("/users/verify-otp", UserController.verifyOtp);
router.get("/users-all/", verifyToken, UserController.getAllUsers);
router.get("/users-by-id/:id", verifyToken, UserController.getUserById);
router.put(
  "/user/change-password/",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  UserController.changePassword
);
router.put("/users-update/:id", verifyToken, UserController.updateUserById);

module.exports = router;
