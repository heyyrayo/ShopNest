import { Link } from "react-router-dom";

import Button from "../ui/Button";

function CheckoutActions({
  onPlaceOrder,
  loading = false,
}) {
  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <Button
        fullWidth
        onClick={onPlaceOrder}
        disabled={loading}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </Button>

      <Link to="/products">
        <Button
          fullWidth
          variant="secondary"
          className="mt-4"
        >
          Continue Shopping
        </Button>
      </Link>

    </div>
  );
}

export default CheckoutActions;