const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹4,999",
    rating: "★★★★★",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹7,499",
    rating: "★★★★☆",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: "₹3,299",
    rating: "★★★★★",
  },
  {
    id: 4,
    name: "Ultra HD Monitor",
    price: "₹18,999",
    rating: "★★★★★",
  },
];

function FeaturedProducts() {
  return (
    <section
      className="bg-slate-950 py-24"
      aria-labelledby="featured-products-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}

        <div className="text-center mb-16">

          <span className="inline-block border border-cyan-500 text-cyan-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Featured Collection
          </span>

          <h2
            id="featured-products-heading"
            className="text-4xl lg:text-5xl font-bold text-white"
          >
            Featured{" "}
            <span className="text-cyan-400">
              Products
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed">
            Explore our handpicked premium collection carefully selected for
            quality, performance and everyday lifestyle.
          </p>

        </div>

        {/* Product Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (

            <div
              key={product.id}
              className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden transition-all duration-300 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/40"
            >

              {/* Product Placeholder */}

              <div className="h-56 bg-slate-800 flex items-center justify-center">

                <div className="w-32 h-32 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 flex flex-col items-center justify-center">

                  <div className="w-10 h-10 rounded-full bg-cyan-400 mb-4"></div>

                  <div className="w-16 h-2 bg-cyan-400 rounded-full mb-2"></div>

                  <div className="w-10 h-2 bg-slate-500 rounded-full"></div>

                </div>

              </div>

              {/* Product Info */}

              <div className="p-6">

                <p className="text-yellow-400 text-lg">
                  {product.rating}
                </p>

                <h3 className="text-white text-xl font-semibold mt-3">
                  {product.name}
                </h3>

                <p className="text-cyan-400 text-2xl font-bold mt-4">
                  {product.price}
                </p>

                <button
                  className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 transition-colors duration-200 text-white font-semibold py-3 rounded-xl"
                >
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;