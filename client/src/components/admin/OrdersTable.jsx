import { Link } from "react-router-dom";

import Card from "../ui/Card";

function OrdersTable({ orders }) {
  return (
    <Card className="overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-800">

            <tr>

              <th className="p-4 text-left text-white">
                Customer
              </th>

              <th className="p-4 text-left text-white">
                Status
              </th>

              <th className="p-4 text-left text-white">
                Total
              </th>

              <th className="p-4 text-left text-white">
                Date
              </th>

              <th className="p-4 text-center text-white">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (
              <tr
                key={order._id}
                className="border-t border-slate-800"
              >

                <td className="p-4 text-white">
                  {order.user?.name}
                </td>

                <td className="p-4 text-cyan-400">
                  {order.orderStatus}
                </td>

                <td className="p-4 text-white">
                  ₹{order.totalPrice.toLocaleString()}
                </td>

                <td className="p-4 text-slate-300">
                  {new Date(
                    order.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="p-4 text-center">

                  <Link
                    to={`/admin/orders/${order._id}`}
                    className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-400"
                  >
                    View
                  </Link>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </Card>
  );
}

export default OrdersTable;