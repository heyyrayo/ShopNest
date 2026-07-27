import { useContext } from "react";
import { CheckoutContext } from "../context/CheckoutContext";

function useCheckout() {
  return useContext(CheckoutContext);
}

export default useCheckout;