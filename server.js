const express = require("express");
const cors = require("cors");
require("dotenv").config();
const http = require("http");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());

/** =================== MongoDB Connection Start =================== */
/** =================== MongoDB Connection Start =================== */
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
db.once("open", () => {
  console.log("Database connection OK");
});

/** =================== Middleware to Check DB Connection =================== */

/** =================== Routes Connection Start =================== */
const routes = require("./routes/allRoutes");
app.use("/api", routes);


/** =================== Routes Connection End =================== */

/** =================== Route Not Found Handling =================== */
app.use((req, res, next) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/** =================== Error Handling Middleware Start =================== */
app.use((err, req, res, next) => {
  console.error("Server error:", err);

  // Handle specific error types and add custom messages
  if (err.kind === "ObjectId") {
    return res.status(400).json({
      success: false,
      message: "Invalid ObjectId",
    });
  }

  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON payload",
    });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      errors: err.errors,
    });
  }

  if (err.status === 401) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access",
    });
  }

  if (err.status === 403) {
    return res.status(403).json({
      success: false,
      message: "Forbidden",
    });
  }

  if (err.status === 404) {
    return res.status(404).json({
      success: false,
      message: "Resource not found",
    });
  }

  if (err.status === 429) {
    return res.status(429).json({
      success: false,
      message: "Too Many Requests",
    });
  }

  if (err.status === 504) {
    return res.status(504).json({
      success: false,
      message: "Gateway Timeout",
    });
  }

  if (err.status === 507) {
    return res.status(507).json({
      success: false,
      message: "Insufficient Storage",
    });
  }

  if (err.status === 510) {
    return res.status(510).json({
      success: false,
      message: "Not Extended",
    });
  }

  if (err.status === 511) {
    return res.status(511).json({
      success: false,
      message: "Network Authentication Required",
    });
  }

  // Check if the server is offline
  if (err.code === "ENOTFOUND" || err.code === "ECONNREFUSED") {
    return res.status(503).json({
      success: false,
      message: "Service Unavailable: Server is offline or unreachable",
    });
  }

  // Generic server error handling
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});
/** =================== Error Handling Middleware End =================== */

/** =================== Start the Server =================== */
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
