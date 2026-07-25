import { Link } from "react-router-dom";

function Button({
  children,
  variant = "primary",
  type = "button",
  fullWidth = false,
  disabled = false,
  onClick,
  to,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500";

  const variants = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-400",
    secondary:
      "bg-slate-800 border border-slate-700 text-white hover:border-cyan-500",
    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white",
    danger:
      "bg-red-600 text-white hover:bg-red-500",
    disabled:
      "bg-slate-700 text-slate-400 cursor-not-allowed",
  };

  const classes = `
    ${baseStyles}
    ${disabled ? variants.disabled : variants[variant]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;