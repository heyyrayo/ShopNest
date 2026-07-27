import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";

import ShippingForm from "../../components/checkout/ShippingForm";

function Checkout() {
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

          {/* Shipping Form */}

          <div className="lg:col-span-2">
            <ShippingForm />
          </div>

          {/* Order Summary */}

          <div>

            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8">

              <h2 className="text-3xl font-bold text-white">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Products
                  </span>

                  <span className="text-white">
                    Coming Soon
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Shipping
                  </span>

                  <span className="text-white">
                    —
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Tax
                  </span>

                  <span className="text-white">
                    —
                  </span>

                </div>

                <hr className="border-slate-700" />

                <div className="flex justify-between">

                  <span className="text-xl font-semibold text-white">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-cyan-400">
                    —
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Checkout;