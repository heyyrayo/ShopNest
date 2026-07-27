import { useEffect, useState } from "react";

import Button from "../ui/Button";

function ProductForm({
  onSubmit,
  loading,
  initialData = null,
}) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    image: "",
    featured: false,
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        description:
          initialData.description || "",
        category:
          initialData.category || "",
        brand: initialData.brand || "",
        price: initialData.price || "",
        stock: initialData.stock || "",
        image:
          initialData.images?.[0] || "",
        featured:
          initialData.featured || false,
      });
    }
  }, [initialData]);

  const handleChange = (event) => {
    const {
      name,
      value,
      checked,
      type,
    } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      name: form.name,
      description: form.description,
      category: form.category,
      brand: form.brand,
      price: Number(form.price),
      stock: Number(form.stock),
      images: form.image
        ? [form.image]
        : [],
      featured: form.featured,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-8"
    >
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Product Name
        </label>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-white outline-none focus:border-cyan-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Description
        </label>

        <textarea
          rows="5"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-white outline-none focus:border-cyan-500"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Category
          </label>

          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-white outline-none focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Brand
          </label>

          <input
            type="text"
            name="brand"
            value={form.brand}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-white outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Price
          </label>

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            min="0"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-white outline-none focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Stock
          </label>

          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            required
            min="0"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-white outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Image URL
        </label>

        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="https://..."
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-white outline-none focus:border-cyan-500"
        />
      </div>

      <label className="flex items-center gap-3 text-white">
        <input
          type="checkbox"
          name="featured"
          checked={form.featured}
          onChange={handleChange}
        />

        Featured Product
      </label>

      <Button
        type="submit"
        fullWidth
        disabled={loading}
      >
        {loading
          ? initialData
            ? "Updating..."
            : "Creating..."
          : initialData
          ? "Update Product"
          : "Create Product"}
      </Button>
    </form>
  );
}

export default ProductForm;