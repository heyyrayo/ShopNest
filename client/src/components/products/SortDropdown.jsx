const sortOptions = [
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Price: Low to High",
    value: "price-asc",
  },
  {
    label: "Price: High to Low",
    value: "price-desc",
  },
  {
    label: "Highest Rated",
    value: "rating",
  },
];

function SortDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none focus:border-cyan-500"
    >
      {sortOptions.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SortDropdown;