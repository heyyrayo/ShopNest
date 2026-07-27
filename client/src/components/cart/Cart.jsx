import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";

import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import EmptyCart from "../../components/cart/EmptyCart";

import useCart from "../../hooks/useCart";

function Cart() {
  const {
    cartItems,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <section className="bg-slate-950 min-h-screen py-24">
      <Container>

        <SectionHeader
          badge="Shopping Cart"
          title="Your"
          highlight="Cart"
          description="Review your selected products before checkout."
        />

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                />
              ))}

            </div>

            <CartSummary
              totalItems={totalItems}
              totalPrice={totalPrice}
            />

          </div>
        )}

      </Container>
    </section>
  );
}

export default Cart;