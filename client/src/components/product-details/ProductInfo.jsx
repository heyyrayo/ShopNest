import useCart from "../../hooks/useCart";
import Button from "../ui/Button";

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
      <p className="text-cyan-400 text-sm uppercase tracking-wider">
        {product.category}
      </p>

      <h1 className="mt-3 text-5xl font-bold text-white">
        {product.name}
      </h1>

      <p className="mt-6 text-slate-400 leading-8">
        {product.description}
      </p>

      <div className="mt-8">
        <p className="text-4xl font-bold text-cyan-400">
          ₹{product.price.toLocaleString()}
        </p>

        <p className="mt-2 text-yellow-400">
          ★ {product.rating}
        </p>
      </div>

      <div className="mt-10">
        {quantitySelector}
      </div>

      <Button
        fullWidth
        className="mt-8"
        onClick={handleAddToCart}
      >
        Add To Cart
      </Button>
    </div>
  );
}

export default ProductInfo;