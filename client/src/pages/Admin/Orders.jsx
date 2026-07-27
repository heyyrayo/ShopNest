import { useEffect, useState } from "react";

import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";

import OrdersTable from "../../components/admin/OrdersTable";

import { getAllOrders } from "../../services/adminService";

function Orders() {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getAllOrders();

        setOrders(response.orders);
      } catch (error) {
        console.error(error);

        alert(
          error.response?.data?.message ||
          "Failed to load orders."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <Container>
        <h1 className="text-center text-white text-3xl">
          Loading Orders...
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
          highlight="Orders"
          description="View all customer orders."
        />

        <OrdersTable
          orders={orders}
        />

      </Container>

    </section>
  );
}

export default Orders;