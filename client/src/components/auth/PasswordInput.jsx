import { useState } from "react";

function PasswordInput({
  value,
  onChange,
  placeholder = "Password",
  name = "password",
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 pr-16 text-white placeholder-slate-400 outline-none focus:border-cyan-500"
      />

      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordInput;