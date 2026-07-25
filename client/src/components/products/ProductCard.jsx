import { Link } from "react-router-dom";

import Button from "../ui/Button";
import Card from "../ui/Card";

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="block">
      <Card className="overflow-hidden h-full">

        {/* Product Image */}

        <div className="h-60 bg-slate-800 flex items-center justify-center">

          <div className="w-32 h-32 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 flex flex-col items-center justify-center">

            <div className="w-10 h-10 rounded-full bg-cyan-400 mb-4"></div>

            <div className="w-16 h-2 rounded-full bg-cyan-400 mb-2"></div>

            <div className="w-10 h-2 rounded-full bg-slate-500"></div>

          </div>

        </div>

        {/* Product Info */}

        <div className="p-6">

          <p className="text-cyan-400 text-sm mb-2">
            {product.category}
          </p>

          <h3 className="text-2xl font-semibold text-white">
            {product.name}
          </h3>

          <p className="mt-3 text-slate-400 text-sm">
            {product.description}
          </p>

          <div className="mt-6 flex items-center justify-between">

            <div>

              <p className="text-cyan-400 text-2xl font-bold">
                ₹{product.price.toLocaleString()}
              </p>

              <p className="text-yellow-400 mt-1">
                ★ {product.rating}
              </p>

            </div>

          </div>

          <Button
            fullWidth
            className="mt-6"
          >
            View Product
          </Button>

        </div>

      </Card>
    </Link>
  );
}

export default ProductCard;