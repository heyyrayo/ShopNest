const APP_NAME = "ShopNest";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center md:flex-row">
        <h2 className="text-lg font-semibold text-cyan-400">
          {APP_NAME}
        </h2>

        <p className="text-sm">
          © {currentYear} {APP_NAME}. All rights reserved.
        </p>

        <p className="text-sm">
          Built with React &amp; Node.js
        </p>
      </div>
    </footer>
  );
}

export default Footer;