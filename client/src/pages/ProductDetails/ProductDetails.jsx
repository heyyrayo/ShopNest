import { useState } from "react";
import { useParams } from "react-router-dom";

import Container from "../../components/ui/Container";
import ProductImage from "../../components/product-details/ProductImage";
import ProductInfo from "../../components/product-details/ProductInfo";
import QuantitySelector from "../../components/product-details/QuantitySelector";

import useProduct from "../../hooks/useProduct";

function ProductDetails() {
  const { id } = useParams();

  const {
    product,
    loading,
    error,
  } = useProduct(id);

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

  if (loading) {
    return (
      <section className="bg-slate-950 min-h-screen flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold">
          Loading Product...
        </h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-slate-950 min-h-screen flex items-center justify-center">
        <h2 className="text-red-500 text-3xl font-bold">
          {error}
        </h2>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="bg-slate-950 min-h-screen flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold">
          Product Not Found
        </h2>
      </section>
    );
  }

  return (
    <section className="bg-slate-950 min-h-screen py-24">
      <Container>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

          <ProductImage product={product} />

          <ProductInfo
            product={product}
            quantity={quantity}
            quantitySelector={
              <QuantitySelector
                quantity={quantity}
                increase={increase}
                decrease={decrease}
              />
            }
          />

        </div>

      </Container>
    </section>
  );
}

export default ProductDetails;