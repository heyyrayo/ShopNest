import ProductGrid from "../products/ProductGrid";

function RelatedProducts({
  products,
}) {
  return (
    <section className="mt-24">

      <h2 className="text-3xl font-bold text-white mb-10">
        Related Products
      </h2>

      <ProductGrid
        products={products}
      />

    </section>
  );
}

export default RelatedProducts;