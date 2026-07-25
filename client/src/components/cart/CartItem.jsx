import Button from "../ui/Button";

function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Product Details */}
        <div>
          <p className="text-sm text-cyan-400">
            {item.category}
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {item.name}
          </h3>

          <p className="mt-2 text-slate-400">
            ₹{item.price.toLocaleString()}
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="h-10 w-10 rounded-xl bg-slate-800 text-white transition hover:bg-slate-700"
          >
            -
          </button>

          <span className="w-8 text-center text-lg font-semibold text-white">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="h-10 w-10 rounded-xl bg-slate-800 text-white transition hover:bg-slate-700"
          >
            +
          </button>
        </div>

        {/* Price & Remove */}
        <div className="text-right">
          <p className="text-2xl font-bold text-cyan-400">
            ₹{(item.price * item.quantity).toLocaleString()}
          </p>

          <Button
            variant="danger"
            className="mt-4"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;