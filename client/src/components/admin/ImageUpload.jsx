import { useState } from "react";

import { uploadProductImage } from "../../services/adminService";

function ImageUpload({ imageUrl, setImageUrl }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const [preview, setPreview] = useState(
    imageUrl || ""
  );

  const [uploading, setUploading] =
    useState(false);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setSelectedImage(file);

    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      return alert("Please choose an image.");
    }

    try {
      setUploading(true);

      const response =
        await uploadProductImage(
          selectedImage
        );

      setImageUrl(response.imageUrl);

      alert(
        "Image uploaded successfully!"
      );
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to upload image."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-5">

      <div>

        <label className="mb-2 block text-sm text-slate-300">
          Product Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-white"
        />

      </div>

      {preview && (
        <div className="overflow-hidden rounded-2xl border border-slate-700">

          <img
            src={preview}
            alt="Preview"
            className="h-72 w-full object-cover"
          />

        </div>
      )}

      <button
        type="button"
        onClick={handleUpload}
        disabled={uploading}
        className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:opacity-60"
      >
        {uploading
          ? "Uploading..."
          : "Upload Image"}
      </button>

      {imageUrl && (
        <div className="rounded-xl border border-green-600 bg-green-900/20 p-4 text-sm text-green-400">

          ✅ Image uploaded successfully.

        </div>
      )}

    </div>
  );
}

export default ImageUpload;