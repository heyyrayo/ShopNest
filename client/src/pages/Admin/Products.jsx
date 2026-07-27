import { useEffect, useState } from "react";

import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";

import ProductsTable from "../../components/admin/ProductsTable";

import {
  getAllProducts,
  deleteProduct,
} from "../../services/adminService";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();

      setProducts(response.products);
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to load products."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await deleteProduct(id);

      alert(response.message);

      setProducts((previousProducts) =>
        previousProducts.filter(
          (product) => product._id !== id
        )
      );
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to delete product."
      );
    }
  };

  if (loading) {
    return (
      <Container>
        <h1 className="text-center text-3xl text-white">
          Loading Products...
        </h1>
      </Container>
    );
  }

  return (
    <section className="bg-slate-950 min-h-screen py-24">
      <Container>

        <SectionHeader
          badge="Admin"
          title="Manage"
          highlight="Products"
          description="View all products in your store."
        />

        <ProductsTable
          products={products}
          onDelete={handleDelete}
        />

      </Container>
    </section>
  );
}

export default Products;