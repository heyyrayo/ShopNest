import { Link } from "react-router-dom";

import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const { cartCount } = useCart();

  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();

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
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Cart ({cartCount})
          </Link>

        </nav>

        {/* Authentication */}

        <div className="flex items-center gap-4">

          {isAuthenticated ? (
            <>
              <span className="text-slate-300">
                Hello,{" "}
                <span className="font-semibold text-cyan-400">
                  {user.name}
                </span>
              </span>

              <button
                onClick={logout}
                className="rounded-xl bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-white transition hover:bg-cyan-400"
            >
              Login
            </Link>
          )}

        </div>

      </div>
    </header>
  );
}

export default Navbar;