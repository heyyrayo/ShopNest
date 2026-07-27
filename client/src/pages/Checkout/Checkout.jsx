import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";

import ShippingForm from "../../components/checkout/ShippingForm";
import OrderSummary from "../../components/checkout/OrderSummary";
import CheckoutActions from "../../components/checkout/CheckoutActions";

import useCart from "../../hooks/useCart";
import useCheckout from "../../hooks/useCheckout";

import { createOrder } from "../../services/orderService";

function Checkout() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    cartItems,
    totalPrice,
    clearCart,
  } = useCart();

  const {
    shippingInfo,
    clearCheckout,
  } = useCheckout();

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    try {
      setLoading(true);

      const itemsPrice = totalPrice;
      const shippingPrice = 0;
      const taxPrice = itemsPrice * 0.05;
      const totalOrderPrice =
        itemsPrice +
        shippingPrice +
        taxPrice;

      const orderItems = cartItems.map((item) => ({
        product: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));

      const response = await createOrder({
        orderItems,
        shippingAddress: shippingInfo,
        paymentMethod: "Cash on Delivery",
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice: totalOrderPrice,
      });

      alert(response.message);

      clearCart();

      clearCheckout();

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to place order."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-950 min-h-screen py-24">
      <Container>
        <SectionHeader
          badge="Checkout"
          title="Complete Your"
          highlight="Order"
          description="Enter your shipping information before placing your order."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ShippingForm />

            <CheckoutActions
              onPlaceOrder={handlePlaceOrder}
              loading={loading}
            />
          </div>

          <div>
            <OrderSummary />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Checkout;