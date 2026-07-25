import Badge from "./Badge";

function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = "center",
}) {
  return (
    <div
      className={`${
        align === "center"
          ? "text-center"
          : "text-left"
      } mb-16`}
    >
      {badge && (
        <div className="mb-5">
          <Badge>{badge}</Badge>
        </div>
      )}

      <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-cyan-400">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-5 text-slate-300 text-lg leading-relaxed max-w-2xl ${
            align === "center"
              ? "mx-auto"
              : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;