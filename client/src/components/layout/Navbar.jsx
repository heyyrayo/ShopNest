import { Link } from "react-router-dom";

import useCart from "../../hooks/useCart";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400"
        >
          ShopNest
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">

          <Link
            to="/"
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Cart ({cartCount})
          </Link>

        </nav>

        {/* Login */}
        <Link
          to="/login"
          className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-white transition-colors hover:bg-cyan-400"
        >
          Login
        </Link>

      </div>
    </header>
  );
}

export default Navbar;