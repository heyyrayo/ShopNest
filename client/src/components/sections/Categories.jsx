const categories = [
  {
    name: "Electronics",
    description: "Latest gadgets, smartphones & smart devices",
  },
  {
    name: "Fashion",
    description: "Trending outfits, footwear & accessories",
  },
  {
    name: "Home & Living",
    description: "Furniture, décor & everyday essentials",
  },
  {
    name: "Accessories",
    description: "Premium essentials for your daily lifestyle",
  },
  {
    name: "Gaming",
    description: "Consoles, accessories & gaming gear",
  },
  {
    name: "Laptops",
    description: "Powerful machines for work & creativity",
  },
];

function Categories() {
  return (
    <section
      className="bg-slate-950 py-24"
      aria-labelledby="categories-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">

          <span className="inline-block border border-cyan-500 text-cyan-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Explore Collections
          </span>

          <h2
            id="categories-heading"
            className="text-4xl lg:text-5xl font-bold text-white"
          >
            Shop by{" "}
            <span className="text-cyan-400">
              Category
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed">
            Browse our carefully curated collections and discover products
            designed to match your lifestyle, interests, and everyday needs.
          </p>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category) => (

            <div
              key={category.name}
              className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center transition-all duration-300 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/40 cursor-pointer"
            >

              {/* Icon Placeholder */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">

                <div className="w-8 h-8 rounded-full bg-cyan-400" />

              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-3">
                {category.name}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed">
                {category.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;