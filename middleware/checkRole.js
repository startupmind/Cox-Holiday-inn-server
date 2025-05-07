// Middleware to check user role (superAdmin or admin)
exports.checkRole = (roles) => {
  return (req, res, next) => {
    const userRole = req.user.role; // Assuming you store the role in the token or session

    // Check if the user role is in the allowed roles
    if (!roles.includes(userRole)) {
      return res
        .status(403)
        .json({
          message: "Access denied. You do not have the necessary permissions.",
        });
    }

    next();
  };
};
