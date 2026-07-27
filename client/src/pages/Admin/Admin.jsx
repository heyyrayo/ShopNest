import { useEffect, useState } from "react";

import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";

import DashboardCard from "../../components/admin/DashboardCard";
import AdminMenuCard from "../../components/admin/AdminMenuCard";

import { getDashboard } from "../../services/adminService";

function Admin() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await getDashboard();
        setDashboard(response.dashboard);
      } catch (error) {
        console.error(error);

        alert(
          error.response?.data?.message ||
            "Failed to load dashboard."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <section className="bg-slate-950 min-h-screen py-24">
        <Container>
          <h1 className="text-center text-3xl text-white">
            Loading Dashboard...
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
          title="Dashboard"
          highlight="Overview"
          description="Manage your ShopNest store."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <DashboardCard
            title="Total Orders"
            value={dashboard.totalOrders}
            icon="📦"
          />

          <DashboardCard
            title="Revenue"
            value={`₹${dashboard.totalRevenue.toLocaleString()}`}
            icon="💰"
          />

          <DashboardCard
            title="Pending"
            value={dashboard.pendingOrders}
            icon="🕒"
          />

          <DashboardCard
            title="Delivered"
            value={dashboard.deliveredOrders}
            icon="✅"
          />

        </div>

        <div className="mt-16">

          <SectionHeader
            title="Management"
            highlight="Modules"
            description="Navigate to different admin sections."
            align="left"
          />

          <div className="grid gap-6 md:grid-cols-2">

            <AdminMenuCard
              title="Manage Orders"
              description="View and update customer orders."
              icon="📋"
              to="/admin/orders"
            />

            <AdminMenuCard
              title="Manage Products"
              description="View, edit and delete products."
              icon="📦"
              to="/admin/products"
            />

            <AdminMenuCard
              title="Create Product"
              description="Add a new product."
              icon="➕"
              to="/admin/products/create"
            />

            <AdminMenuCard
              title="Manage Users"
              description="Coming soon."
              icon="👤"
              to="/admin"
            />

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Admin;