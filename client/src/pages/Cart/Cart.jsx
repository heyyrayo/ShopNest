import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";

import EmptyCart from "../../components/cart/EmptyCart";
import CartList from "../../components/cart/CartList";
import CartSummary from "../../components/cart/CartSummary";

import useCart from "../../hooks/useCart";

function Cart() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <section className="bg-slate-950 min-h-screen py-24">
      <Container>
        <SectionHeader
          badge="Shopping Cart"
          title="Your"
          highlight="Cart"
          description="Review your selected products before proceeding to checkout."
        />

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Cart Items */}

            <div className="space-y-6 lg:col-span-2">
              <CartList
                items={cartItems}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            </div>

            {/* Order Summary */}

            <div>
              <CartSummary
                cartTotal={cartTotal}
                clearCart={clearCart}
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Cart;