import Button from "../ui/Button";
import useCart from "../../hooks/useCart";

function ProductInfo({
  product,
  quantity,
  quantitySelector,
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <p className="text-cyan-400 font-medium">
        {product.category}
      </p>

      <h1 className="mt-3 text-5xl font-bold text-white">
        {product.name}
      </h1>

      <p className="mt-4 text-yellow-400">
        ★ {product.rating} ({product.reviews} Reviews)
      </p>

      <p className="mt-8 text-4xl font-bold text-cyan-400">
        ₹{product.price.toLocaleString()}
      </p>

      <p className="mt-8 leading-relaxed text-slate-400">
        {product.description}
      </p>

      <div className="mt-8">
        <h3 className="mb-4 font-semibold text-white">
          Quantity
        </h3>

        {quantitySelector}
      </div>

      <Button
        fullWidth
        className="mt-8"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductInfo;