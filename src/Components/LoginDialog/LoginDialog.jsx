import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Store/Slices/AuthSlice";
import { closeLogin, openSignup } from "../../Store/Slices/UiSlice";

const LoginDialog = () => {
  const dispatch = useDispatch();
  const { loginOpen } = useSelector((state) => state.ui);
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!loginOpen) return null; // hidden when closed

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px] relative">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <p className="text-sm mt-4 text-gray-600">
          Don’t have an account?{" "}
          <button
            className="text-blue-600 underline"
            onClick={() => {
              dispatch(closeLogin());
              dispatch(openSignup());
            }}
          >
            Sign Up
          </button>
        </p>

        <button
          onClick={() => dispatch(closeLogin())}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default LoginDialog;
