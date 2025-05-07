const express = require("express");
const router = express.Router();
const aboutTeamMemberController = require("../../controller/aboutPage/aboutTeamMemberController");
const { verifyToken, checkRole } = require("../../middleware/auth");

router.post(
  "/team-member-add",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  aboutTeamMemberController.createTeamMember
);
router.get("/team-member-all", aboutTeamMemberController.getAllTeamMembers);
router.get(
  "/team-member-by-id/:id",
  aboutTeamMemberController.getTeamMemberById
);
router.put(
  "/team-member-update/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  aboutTeamMemberController.updateTeamMember
);
router.delete(
  "/team-member-delete/:id",
  verifyToken,
  checkRole(["admin", "superAdmin"]),
  aboutTeamMemberController.deleteTeamMember
);

module.exports = router;
