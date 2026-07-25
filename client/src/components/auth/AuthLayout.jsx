import Container from "../ui/Container";

function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <section className="flex min-h-screen items-center bg-slate-950 py-20">
      <Container>
        <div className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-xl">

          <h1 className="text-center text-4xl font-bold text-white">
            {title}
          </h1>

          <p className="mt-4 text-center text-slate-400">
            {subtitle}
          </p>

          <div className="mt-8">
            {children}
          </div>

        </div>
      </Container>
    </section>
  );
}

export default AuthLayout;