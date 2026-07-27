import Card from "../ui/Card";

function OrderInfo({ order }) {
  return (
    <Card className="p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Customer Information
      </h2>

      <div className="space-y-4">

        <div>
          <p className="text-sm text-slate-400">
            Name
          </p>

          <p className="text-lg font-medium text-white">
            {order.user?.name}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Email
          </p>

          <p className="text-lg font-medium text-white">
            {order.user?.email}
          </p>
        </div>

      </div>

      <hr className="my-8 border-slate-700" />

      <h2 className="mb-6 text-2xl font-bold text-white">
        Shipping Address
      </h2>

      <div className="space-y-3 text-slate-300">

        <p>{order.shippingAddress.fullName}</p>

        <p>{order.shippingAddress.address}</p>

        <p>
          {order.shippingAddress.city},{" "}
          {order.shippingAddress.state}
        </p>

        <p>{order.shippingAddress.country}</p>

        <p>{order.shippingAddress.zipCode}</p>

        <p>{order.shippingAddress.phone}</p>

      </div>

      <hr className="my-8 border-slate-700" />

      <div className="flex items-center justify-between">

        <span className="text-lg text-slate-400">
          Payment Method
        </span>

        <span className="font-semibold text-cyan-400">
          {order.paymentMethod}
        </span>

      </div>

      <div className="mt-6 flex items-center justify-between">

        <span className="text-lg text-slate-400">
          Order Status
        </span>

        <span className="font-semibold text-cyan-400">
          {order.orderStatus}
        </span>

      </div>

      <div className="mt-6 flex items-center justify-between">

        <span className="text-xl font-bold text-white">
          Total
        </span>

        <span className="text-2xl font-bold text-cyan-400">
          ₹{order.totalPrice.toLocaleString()}
        </span>

      </div>

    </Card>
  );
}

export default OrderInfo;