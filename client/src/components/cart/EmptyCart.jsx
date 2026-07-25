import { Link } from "react-router-dom";
import Button from "../ui/Button";

function EmptyCart() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 py-24 text-center">

      <h2 className="text-4xl font-bold text-white">
        Your Cart is Empty
      </h2>

      <p className="mt-4 text-slate-400">
        Looks like you haven't added any products yet.
      </p>

      <div className="mt-8 flex justify-center">
        <Button to="/products">
          Continue Shopping
        </Button>
      </div>

    </div>
  );
}

export default EmptyCart;