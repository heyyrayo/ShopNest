import Button from "../ui/Button";
import useCart from "../../hooks/useCart";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* Product Info */}

        <div>

          <p className="text-cyan-400 text-sm">
            {item.category}
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            {item.name}
          </h2>

          <p className="mt-3 text-slate-400">
            {item.description}
          </p>

        </div>

        {/* Price & Quantity */}

        <div className="text-right">

          <p className="text-cyan-400 text-2xl font-bold">
            ₹{item.price.toLocaleString()}
          </p>

          {/* Quantity Controls */}

          <div className="mt-5 flex items-center justify-end gap-3">

            <Button
              onClick={() => decreaseQuantity(item._id)}
            >
              -
            </Button>

            <span className="text-xl font-semibold text-white w-8 text-center">
              {item.quantity}
            </span>

            <Button
              onClick={() => increaseQuantity(item._id)}
            >
              +
            </Button>

          </div>

          <p className="mt-5 text-yellow-400 font-semibold">
            Subtotal : ₹
            {(item.price * item.quantity).toLocaleString()}
          </p>

        </div>

      </div>

      <Button
        className="mt-8"
        onClick={() => removeFromCart(item._id)}
      >
        Remove
      </Button>

    </div>
  );
}

export default CartItem;