import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "../../components/ui/Container";
import ProductImage from "../../components/product-details/ProductImage";
import ProductInfo from "../../components/product-details/ProductInfo";
import QuantitySelector from "../../components/product-details/QuantitySelector";
import RelatedProducts from "../../components/product-details/RelatedProducts";

import { products } from "../../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = useMemo(() => {
    return products.find((item) => item.id === Number(id));
  }, [id]);

  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!product) {
    return (
      <section className="bg-slate-950 min-h-screen py-24">
        <Container>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 py-24 text-center">
            <h2 className="text-4xl font-bold text-white">
              Product Not Found
            </h2>

            <p className="mt-4 text-slate-400">
              The requested product does not exist.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <section className="bg-slate-950 min-h-screen py-24">
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <ProductImage />

          <ProductInfo
            product={product}
            quantitySelector={
              <QuantitySelector
                quantity={quantity}
                increase={increase}
                decrease={decrease}
              />
            }
          />

        </div>

        {relatedProducts.length > 0 && (
          <RelatedProducts
            products={relatedProducts}
          />
        )}

      </Container>
    </section>
  );
}

export default ProductDetails;