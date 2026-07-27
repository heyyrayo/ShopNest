import { createContext, useMemo, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // ---------------- Add To Cart ----------------

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item._id === product._id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  // ---------------- Increase Quantity ----------------

  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ---------------- Decrease Quantity ----------------

  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.flatMap((item) => {
        if (item._id !== productId) {
          return item;
        }

        if (item.quantity === 1) {
          return [];
        }

        return {
          ...item,
          quantity: item.quantity - 1,
        };
      })
    );
  };

  // ---------------- Remove ----------------

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => item._id !== productId
      )
    );
  };

  // ---------------- Clear ----------------

  const clearCart = () => {
    setCartItems([]);
  };

  // ---------------- Totals ----------------

  const totalItems = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;