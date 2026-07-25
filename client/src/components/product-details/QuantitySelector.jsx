function QuantitySelector({
  quantity,
  increase,
  decrease,
}) {
  return (
    <div className="flex items-center gap-4">

      <button
        onClick={decrease}
        className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-white"
      >
        -
      </button>

      <span className="text-xl font-semibold text-white w-8 text-center">
        {quantity}
      </span>

      <button
        onClick={increase}
        className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-white"
      >
        +
      </button>

    </div>
  );
}

export default QuantitySelector;