const categories = [
  "All",
  "Electronics",
  "Accessories",
  "Gaming",
  "Home & Living",
];

function ProductFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none focus:border-cyan-500"
    >
      {categories.map((category) => (
        <option
          key={category}
          value={category}
        >
          {category}
        </option>
      ))}
    </select>
  );
}

export default ProductFilter;