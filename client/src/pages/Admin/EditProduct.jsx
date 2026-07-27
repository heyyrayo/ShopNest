import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";

import ProductForm from "../../components/admin/ProductForm";

import {
  getProductById,
  updateProduct,
} from "../../services/adminService";

function EditProduct() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response =
          await getProductById(id);

        setProduct(response.product);
      } catch (error) {
        console.error(error);

        alert(
          error.response?.data?.message ||
            "Failed to load product."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async (data) => {
    try {
      setLoading(true);

      const response =
        await updateProduct(id, data);

      alert(response.message);

      navigate("/admin/products");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to update product."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading && !product) {
    return (
      <section className="bg-slate-950 min-h-screen py-24">
        <Container>

          <h1 className="text-center text-3xl text-white">
            Loading Product...
          </h1>

        </Container>
      </section>
    );
  }

  return (
    <section className="bg-slate-950 min-h-screen py-24">

      <Container>

        <SectionHeader
          badge="Admin"
          title="Edit"
          highlight="Product"
          description="Update product information."
        />

        <ProductForm
          initialData={product}
          onSubmit={handleUpdate}
          loading={loading}
        />

      </Container>

    </section>
  );
}

export default EditProduct;