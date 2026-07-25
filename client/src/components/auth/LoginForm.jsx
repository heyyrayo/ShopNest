import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import PasswordInput from "./PasswordInput";
import useAuth from "../../hooks/useAuth";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    login({
      name: "Amit",
      email: form.email,
    });

    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white placeholder-slate-400 outline-none focus:border-cyan-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Password
        </label>

        <PasswordInput
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        fullWidth
      >
        Login
      </Button>

      <p className="text-center text-slate-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-cyan-400 hover:underline"
        >
          Register
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;