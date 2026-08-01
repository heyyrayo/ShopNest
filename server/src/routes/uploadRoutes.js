const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const upload = require("../middleware/uploadMiddleware");
const { uploadImage } = require("../controllers/uploadController");

router.post(
  "/",
  protect,
  adminOnly,
  upload.single("image"),
  uploadImage
);

module.exports = router;