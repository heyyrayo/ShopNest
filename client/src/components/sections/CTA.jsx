import Button from "../ui/Button";
import Container from "../ui/Container";

function CTA() {
  return (
    <section className="bg-slate-950 py-24">
      <Container>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">

          <h2 className="text-4xl font-bold text-white">
            Ready to Start Shopping?
          </h2>

          <p className="mt-5 text-slate-300 max-w-2xl mx-auto text-lg">
            Explore thousands of premium products carefully selected for quality,
            style, and performance.
          </p>

          <div className="mt-8 flex justify-center">

            <Button to="/products">
              Shop Now
            </Button>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default CTA;