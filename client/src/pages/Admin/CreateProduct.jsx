import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";

import ProductForm from "../../components/admin/ProductForm";

import { createProduct } from "../../services/adminService";

function CreateProduct() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleCreateProduct = async (productData) => {
    try {
      setLoading(true);

      const response = await createProduct(productData);

      alert(response.message);

      navigate("/admin/products");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to create product."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-950 min-h-screen py-24">

      <Container>

        <SectionHeader
          badge="Admin"
          title="Create"
          highlight="Product"
          description="Add a new product to your ShopNest store."
        />

        <ProductForm
          onSubmit={handleCreateProduct}
          loading={loading}
        />

      </Container>

    </section>
  );
}

export default CreateProduct;