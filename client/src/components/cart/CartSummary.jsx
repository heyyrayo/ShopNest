import Button from "../ui/Button";

function CartSummary({
  cartTotal,
  clearCart,
}) {
  const shipping = cartTotal > 0 ? 199 : 0;
  const tax = Math.round(cartTotal * 0.18);
  const grandTotal = cartTotal + shipping + tax;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-2xl font-bold text-white">
        Order Summary
      </h2>

      <div className="mt-8 space-y-4">
        <div className="flex justify-between text-slate-300">
          <span>Subtotal</span>
          <span>₹{cartTotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-slate-300">
          <span>Shipping</span>
          <span>₹{shipping.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-slate-300">
          <span>Tax (18%)</span>
          <span>₹{tax.toLocaleString()}</span>
        </div>

        <hr className="border-slate-700" />

        <div className="flex justify-between text-2xl font-bold text-white">
          <span>Total</span>
          <span>₹{grandTotal.toLocaleString()}</span>
        </div>
      </div>

      <Button
        fullWidth
        className="mt-8"
      >
        Checkout
      </Button>

      <Button
        fullWidth
        variant="danger"
        className="mt-4"
        onClick={clearCart}
      >
        Clear Cart
      </Button>
    </div>
  );
}

export default CartSummary;