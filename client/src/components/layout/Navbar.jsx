import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Cart", path: "/cart" },
];

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition"
        >
          ShopNest
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="transition hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/login"
            className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-white transition hover:bg-cyan-600"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;