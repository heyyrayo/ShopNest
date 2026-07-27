import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";

import OrderInfo from "../../components/admin/OrderInfo";
import OrderProducts from "../../components/admin/OrderProducts";

import { getOrderById } from "../../services/adminService";

function OrderDetails() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await getOrderById(id);

        setOrder(response.order);
      } catch (error) {
        console.error(error);

        alert(
          error.response?.data?.message ||
            "Failed to load order."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <section className="bg-slate-950 min-h-screen py-24">
        <Container>
          <h1 className="text-center text-3xl text-white">
            Loading Order...
          </h1>
        </Container>
      </section>
    );
  }

  if (!order) {
    return (
      <section className="bg-slate-950 min-h-screen py-24">
        <Container>
          <h1 className="text-center text-3xl text-white">
            Order not found.
          </h1>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-slate-950 min-h-screen py-24">
      <Container>

        <div className="mb-8">

          <Link
            to="/admin/orders"
            className="text-cyan-400 hover:underline"
          >
            ← Back to Orders
          </Link>

        </div>

        <SectionHeader
          badge="Admin"
          title="Order"
          highlight="Details"
          description={`Order ID: ${order._id}`}
          align="left"
        />

        <div className="grid gap-8 lg:grid-cols-2">

          <OrderInfo
            order={order}
          />

          <OrderProducts
            items={order.orderItems}
          />

        </div>

      </Container>
    </section>
  );
}

export default OrderDetails;