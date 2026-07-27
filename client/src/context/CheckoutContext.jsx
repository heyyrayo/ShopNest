import { createContext, useMemo, useState } from "react";

export const CheckoutContext = createContext();

function CheckoutProvider({ children }) {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const updateShippingInfo = (data) => {
    setShippingInfo(data);
  };

  const clearCheckout = () => {
    setShippingInfo({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    });
  };

  const value = useMemo(
    () => ({
      shippingInfo,
      updateShippingInfo,
      clearCheckout,
    }),
    [shippingInfo]
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutProvider;