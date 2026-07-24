import { Link } from "react-router-dom";

const trustCards = [
  { title: "10K+ Customers", subtitle: "Trusted Worldwide" },
  { title: "Fast Delivery", subtitle: "24–48 Hours" },
  { title: "Secure Payment", subtitle: "100% Protected" },
];

const illustrationCards = [
  { bg: "bg-cyan-950", accent: "bg-cyan-500" },
  { bg: "bg-slate-800", accent: "bg-slate-500" },
  { bg: "bg-slate-800", accent: "bg-cyan-400" },
  { bg: "bg-cyan-950", accent: "bg-cyan-300" },
];

function Hero() {
  return (
    <section
      className="bg-slate-950 text-white min-h-[90vh] flex items-center"
      aria-label="Hero Section"
    >
      <div className="max-w-7xl mx-auto w-full px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="flex flex-col gap-8">

          {/* Badge */}
          <div className="inline-flex self-start">
            <span className="border border-cyan-500 text-cyan-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
              Trusted by 10,000+ Happy Customers
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Shop Smarter.
            <br />
            <span className="text-cyan-400">
              Live Better.
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
            Discover premium products with secure payments, lightning-fast
            delivery, and unbeatable prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <Link
              to="/products"
              className="bg-cyan-500 hover:bg-cyan-400 transition-colors duration-200 text-white font-semibold px-8 py-3 rounded-xl text-center"
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="border border-slate-600 hover:border-cyan-500 hover:text-white transition-colors duration-200 text-slate-300 font-semibold px-8 py-3 rounded-xl text-center"
            >
              Explore Products
            </Link>

          </div>

          {/* Trust Cards */}
          <div className="flex flex-wrap gap-4 pt-4">

            {trustCards.map(({ title, subtitle }) => (
              <div
                key={title}
                className="bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-colors rounded-xl px-5 py-4 flex flex-col min-w-[150px]"
              >
                <span className="font-bold text-xl">
                  {title}
                </span>

                <span className="text-slate-400 text-sm mt-1">
                  {subtitle}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Right Illustration */}
        <div
          className="flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="relative w-full max-w-md aspect-square">

            {/* Outer Card */}
            <div className="absolute inset-0 rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl" />

            {/* Decorative Cards */}
            <div className="absolute inset-6 grid grid-cols-2 grid-rows-2 gap-4 p-2">

              {illustrationCards.map(({ bg, accent }, index) => (
                <div
                  key={index}
                  className={`${bg} rounded-2xl p-4 flex flex-col justify-end gap-2`}
                >
                  <div className={`${accent} h-1.5 w-8 rounded-full`} />
                  <div className="bg-slate-600 h-1.5 w-12 rounded-full" />
                  <div className="bg-slate-600 h-1.5 w-10 rounded-full" />
                </div>
              ))}

            </div>

            {/* Center Brand */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

              <div className="bg-cyan-500 border border-cyan-300 rounded-2xl px-6 py-3 shadow-xl">

                <span className="text-white font-bold tracking-wide text-sm">
                  ShopNest
                </span>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;