import Button from "../ui/Button";
import Card from "../ui/Card";

function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden">

      {/* Product Image */}
      <div className="h-60 bg-slate-800 flex items-center justify-center">

        <div className="w-32 h-32 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 flex flex-col items-center justify-center">

          <div className="w-10 h-10 rounded-full bg-cyan-400 mb-4"></div>

          <div className="w-16 h-2 rounded-full bg-cyan-400 mb-2"></div>

          <div className="w-10 h-2 rounded-full bg-slate-500"></div>

        </div>

      </div>

      {/* Product Details */}

      <div className="p-6">

        <p className="text-sm text-cyan-400 mb-2">
          {product.category}
        </p>

        <h3 className="text-2xl font-semibold text-white">
          {product.name}
        </h3>

        <p className="mt-3 text-slate-400 text-sm">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-6">

          <div>

            <p className="text-cyan-400 font-bold text-2xl">
              ₹{product.price.toLocaleString()}
            </p>

            <p className="text-yellow-400 text-sm mt-1">
              ⭐ {product.rating} ({product.reviews})
            </p>

          </div>

        </div>

        <Button
          fullWidth
          className="mt-6"
        >
          Add to Cart
        </Button>

      </div>

    </Card>
  );
}

export default ProductCard;