import Button from "../ui/Button";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

function Newsletter() {
  return (
    <section className="bg-slate-900 py-24">
      <Container>

        <SectionHeader
          badge="Stay Updated"
          title="Join Our"
          highlight="Newsletter"
          description="Subscribe to receive exclusive deals, product launches, and shopping tips directly in your inbox."
        />

        <div className="max-w-3xl mx-auto">

          <form className="flex flex-col md:flex-row gap-4">

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-white placeholder-slate-400 outline-none focus:border-cyan-500"
            />

            <Button>
              Subscribe
            </Button>

          </form>

        </div>

      </Container>
    </section>
  );
}

export default Newsletter;