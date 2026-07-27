import { useEffect, useState } from "react";

import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";

import { getMyOrders } from "../../services/orderService";

function Profile() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getMyOrders();

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
      <section className="bg-slate-950 min-h-screen py-24">
        <Container>
          <h1 className="text-center text-3xl text-white">
            Loading Orders...
          </h1>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-slate-950 min-h-screen py-24">
      <Container>

        <SectionHeader
          badge="Profile"
          title="My"
          highlight="Orders"
          description="View all your previous orders."
        />

        {orders.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">

            <h2 className="text-3xl font-bold text-white">
              No Orders Yet
            </h2>

            <p className="mt-4 text-slate-400">
              Start shopping to see your orders here.
            </p>

          </div>
        ) : (
          <div className="space-y-6">

            {orders.map((order) => (
              <div
                key={order._id}
                className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6"
              >

                <div className="flex flex-col gap-3 md:flex-row md:justify-between">

                  <div>
                    <p className="text-sm text-slate-400">
                      Order ID
                    </p>

                    <h3 className="font-semibold text-white">
                      {order._id}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Status
                    </p>

                    <h3 className="font-semibold text-cyan-400">
                      {order.orderStatus}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Total
                    </p>

                    <h3 className="font-semibold text-white">
                      ₹{order.totalPrice.toLocaleString()}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Date
                    </p>

                    <h3 className="font-semibold text-white">
                      {new Date(
                        order.createdAt
                      ).toLocaleDateString()}
                    </h3>
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </Container>
    </section>
  );
}

export default Profile;