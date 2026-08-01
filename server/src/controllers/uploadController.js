const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Image uploaded successfully.",
      imageUrl: req.file.path,
    });
  } catch (error) {
    console.error("========== IMAGE UPLOAD ERROR ==========");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  uploadImage,
};