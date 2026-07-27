import CheckoutInput from "./CheckoutInput";

import useCheckout from "../../hooks/useCheckout";

function ShippingForm() {
  const {
    shippingInfo,
    updateShippingInfo,
  } = useCheckout();

  const handleChange = (event) => {
    updateShippingInfo({
      ...shippingInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Shipping information saved successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
    >
      <h2 className="mb-8 text-3xl font-bold text-white">
        Shipping Information
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        <CheckoutInput
          label="Full Name"
          name="fullName"
          placeholder="John Doe"
          value={shippingInfo.fullName}
          onChange={handleChange}
        />

        <CheckoutInput
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={shippingInfo.email}
          onChange={handleChange}
        />

        <CheckoutInput
          label="Phone Number"
          name="phone"
          placeholder="+1 555 123 4567"
          value={shippingInfo.phone}
          onChange={handleChange}
        />

        <CheckoutInput
          label="City"
          name="city"
          placeholder="New York"
          value={shippingInfo.city}
          onChange={handleChange}
        />

        <CheckoutInput
          label="State"
          name="state"
          placeholder="New York"
          value={shippingInfo.state}
          onChange={handleChange}
        />

        <CheckoutInput
          label="ZIP Code"
          name="zipCode"
          placeholder="10001"
          value={shippingInfo.zipCode}
          onChange={handleChange}
        />

        <div className="md:col-span-2">
          <CheckoutInput
            label="Address"
            name="address"
            placeholder="123 Main Street"
            value={shippingInfo.address}
            onChange={handleChange}
          />
        </div>

        <div className="md:col-span-2">
          <CheckoutInput
            label="Country"
            name="country"
            placeholder="India"
            value={shippingInfo.country}
            onChange={handleChange}
          />
        </div>

      </div>

      <button
        type="submit"
        className="mt-10 w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
      >
        Save Shipping Information
      </button>
    </form>
  );
}

export default ShippingForm;