function ProductImage() {
  return (
    <div className="bg-slate-900 rounded-3xl h-[500px] flex items-center justify-center border border-slate-800">

      <div className="w-48 h-48 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 flex flex-col items-center justify-center">

        <div className="w-16 h-16 rounded-full bg-cyan-400 mb-6"></div>

        <div className="w-24 h-3 rounded-full bg-cyan-400 mb-3"></div>

        <div className="w-16 h-3 rounded-full bg-slate-500"></div>

      </div>

    </div>
  );
}

export default ProductImage;