const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; 

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next(); 
  } catch (error) {
    console.error("JWT verification error:", error);
    return res.status(400).json({
      success: false,
      message: "Invalid token.",
    });
  }
};

// Middleware to check user role (superAdmin or admin)
exports.checkRole = (roles) => {
  return (req, res, next) => {
    const userRole = req.user.role; 

    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: "Access denied. You do not have the necessary permissions." });
    }

    next();
  };
};




