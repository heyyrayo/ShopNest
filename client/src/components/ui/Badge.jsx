function Badge({
  children,
  color = "cyan",
}) {
  const colors = {
    cyan: "border-cyan-500 text-cyan-400",
    slate: "border-slate-600 text-slate-300",
    success: "border-green-500 text-green-400",
    danger: "border-red-500 text-red-400",
  };

  return (
    <span
      className={`
        inline-block
        border
        px-4
        py-2
        rounded-full
        text-xs
        font-semibold
        uppercase
        tracking-widest
        ${colors[color]}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;