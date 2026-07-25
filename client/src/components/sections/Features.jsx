import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const features = [
  {
    title: "Fast Delivery",
    description: "Receive your orders within 24–48 hours across the country.",
  },
  {
    title: "Secure Payments",
    description: "Multiple payment methods with 100% secure transactions.",
  },
  {
    title: "Premium Quality",
    description: "Every product is carefully selected before reaching our store.",
  },
];

function Features() {
  return (
    <section className="bg-slate-950 py-24">
      <Container>

        <SectionHeader
          badge="Why Choose Us"
          title="Why"
          highlight="ShopNest?"
          description="We're committed to delivering the best online shopping experience with quality products, secure payments, and fast delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {features.map((feature) => (

            <Card
              key={feature.title}
              className="p-8 text-center"
            >

              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">

                <div className="w-8 h-8 rounded-full bg-cyan-400" />

              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>

            </Card>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Features;