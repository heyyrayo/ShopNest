function Card({
  children,
  className = "",
  hover = true,
}) {
  const baseClasses =
    "bg-slate-900 border border-slate-800 rounded-3xl";

  const hoverClasses = hover
    ? "transition-all duration-300 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/40"
    : "";

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;