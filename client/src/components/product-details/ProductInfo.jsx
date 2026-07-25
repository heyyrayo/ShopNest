import Button from "../ui/Button";

function ProductInfo({
  product,
  quantitySelector,
}) {
  return (
    <div>

      <p className="text-cyan-400 font-medium">
        {product.category}
      </p>

      <h1 className="text-5xl font-bold text-white mt-3">
        {product.name}
      </h1>

      <p className="text-yellow-400 mt-4">
        ⭐ {product.rating} ({product.reviews} Reviews)
      </p>

      <p className="text-cyan-400 text-4xl font-bold mt-8">
        ₹{product.price.toLocaleString()}
      </p>

      <p className="text-slate-400 leading-relaxed mt-8">
        {product.description}
      </p>

      <div className="mt-8">

        <h3 className="text-white font-semibold mb-4">
          Quantity
        </h3>

        {quantitySelector}

      </div>

      <Button
        fullWidth
        className="mt-8"
      >
        Add to Cart
      </Button>

    </div>
  );
}

export default ProductInfo;