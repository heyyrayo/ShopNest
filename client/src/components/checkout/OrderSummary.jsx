import useCart from "../../hooks/useCart";

function OrderSummary() {
  const {
    cartItems,
    totalItems,
    totalPrice,
  } = useCart();

  const shipping = totalItems > 0 ? 0 : 0;

  const tax = totalPrice * 0.05;

  const grandTotal = totalPrice + shipping + tax;

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white">
        Order Summary
      </h2>

      {cartItems.length === 0 ? (
        <p className="mt-6 text-slate-400">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="mt-8 space-y-5">

            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex justify-between"
              >
                <div>
                  <h3 className="font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-400">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p className="font-semibold text-cyan-400">
                  ₹
                  {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}

          </div>

          <hr className="my-8 border-slate-700" />

          <div className="space-y-4">

            <div className="flex justify-between">
              <span className="text-slate-400">
                Items
              </span>

              <span className="text-white">
                {totalItems}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Subtotal
              </span>

              <span className="text-white">
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Shipping
              </span>

              <span className="text-green-400">
                Free
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Tax (5%)
              </span>

              <span className="text-white">
                ₹{tax.toFixed(2)}
              </span>
            </div>

          </div>

          <hr className="my-8 border-slate-700" />

          <div className="flex justify-between">

            <span className="text-2xl font-bold text-white">
              Total
            </span>

            <span className="text-3xl font-bold text-cyan-400">
              ₹{grandTotal.toFixed(2)}
            </span>

          </div>
        </>
      )}

    </div>
  );
}

export default OrderSummary;