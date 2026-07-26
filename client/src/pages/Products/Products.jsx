import { useMemo, useState } from "react";

import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";

import ProductGrid from "../../components/products/ProductGrid";
import SearchBar from "../../components/products/SearchBar";
import ProductFilter from "../../components/products/ProductFilter";
import SortDropdown from "../../components/products/SortDropdown";

import useProducts from "../../hooks/useProducts";

function Products() {
  const { products, loading, error } = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search
    if (search.trim()) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== "All") {
      filtered = filtered.filter(
        (product) => product.category === category
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return filtered;
  }, [products, search, category, sortBy]);

  if (loading) {
    return (
      <section className="bg-slate-950 min-h-screen flex items-center justify-center">
        <h2 className="text-white text-2xl font-semibold">
          Loading Products...
        </h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-slate-950 min-h-screen flex items-center justify-center">
        <h2 className="text-red-500 text-2xl font-semibold">
          {error}
        </h2>
      </section>
    );
  }

  return (
    <section className="bg-slate-950 min-h-screen py-24">
      <Container>

        <SectionHeader
          badge="Our Collection"
          title="Explore Our"
          highlight="Products"
          description="Discover premium products carefully selected for quality and performance."
        />

        {/* Controls */}

        <div className="flex flex-col lg:flex-row gap-4 mb-10">

          <div className="flex-1">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <ProductFilter
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <SortDropdown
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          />

        </div>

        {/* Product Count */}

        <p className="text-slate-400 mb-8">
          Showing{" "}
          <span className="text-cyan-400 font-semibold">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>

        {/* Products */}

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="rounded-3xl border border-slate-800 bg-slate-900 py-24 text-center">
            <h3 className="text-2xl font-semibold text-white">
              No Products Found
            </h3>

            <p className="mt-3 text-slate-400">
              Try changing your search or category.
            </p>
          </div>
        )}

      </Container>
    </section>
  );
}

export default Products;