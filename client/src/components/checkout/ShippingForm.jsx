import { useState } from "react";

import CheckoutInput from "./CheckoutInput";

function ShippingForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Shipping Information:", form);

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
          value={form.fullName}
          onChange={handleChange}
        />

        <CheckoutInput
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={handleChange}
        />

        <CheckoutInput
          label="Phone Number"
          name="phone"
          placeholder="+1 555 123 4567"
          value={form.phone}
          onChange={handleChange}
        />

        <CheckoutInput
          label="City"
          name="city"
          placeholder="New York"
          value={form.city}
          onChange={handleChange}
        />

        <CheckoutInput
          label="State"
          name="state"
          placeholder="New York"
          value={form.state}
          onChange={handleChange}
        />

        <CheckoutInput
          label="ZIP Code"
          name="zipCode"
          placeholder="10001"
          value={form.zipCode}
          onChange={handleChange}
        />

        <div className="md:col-span-2">

          <CheckoutInput
            label="Address"
            name="address"
            placeholder="123 Main Street"
            value={form.address}
            onChange={handleChange}
          />

        </div>

        <div className="md:col-span-2">

          <CheckoutInput
            label="Country"
            name="country"
            placeholder="United States"
            value={form.country}
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