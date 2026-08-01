const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// Configure Cloudinary as Multer's storage engine
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,

  params: {
    folder: "shopnest",

    allowed_formats: [
      "jpg",
      "jpeg",
      "png",
      "webp",
    ],

    transformation: [
      {
        width: 1000,
        crop: "limit",
      },
      {
        quality: "auto",
      },
      {
        fetch_format: "auto",
      },
    ],
  },
});

// Create Multer middleware
const upload = multer({
  storage: storage,
});

module.exports = upload;