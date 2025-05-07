const express = require("express");
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const router = express.Router();

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); 
  },
});


const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Limit to 10MB
  },
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file type"), false); 
    }
  },
});

const username = process.env.CPANEL_USERNAME;
const password = process.env.CPANEL_PASS;
const url = process.env.CPANEL_URL;
const siteUrl = process.env.CPANEL_SITEURL;

router.post("/upload-image", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      throw new Error("File not provided");
    }
    const formData = new FormData();
    formData.append("file-1", fs.createReadStream(file.path));
    formData.append("dir", "/public_html/uploads");

    const response = await axios.post(url, formData, {
      auth: {
        username: username,
        password: password,
      },
      headers: {
        ...formData.getHeaders(),
      },
    });

    if (response.data.status !== 1) {
      throw new Error("Failed to upload file to cPanel: " + response.data.errors);
    }
    fs.unlinkSync(file.path);
    const imageUrl = `${siteUrl}/uploads/${path.basename(file.path)}`;
    res.json({
      success: true,
      message: "File uploaded successfully",
      url: imageUrl,
    });
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).json({
      success: false,
      message: "Failed to upload file",
      error: error.message,
    });
  }
});

module.exports = router;
