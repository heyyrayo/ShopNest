function CartSummary({
  totalItems,
  totalPrice,
}) {
  console.log("CartSummary received:", {
    totalItems,
    totalPrice,
  });

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8 text-white">
      <h2>Cart Summary Debug</h2>

      <p>Total Items: {String(totalItems)}</p>

      <p>Total Price: {String(totalPrice)}</p>
    </div>
  );
}

export default CartSummary;