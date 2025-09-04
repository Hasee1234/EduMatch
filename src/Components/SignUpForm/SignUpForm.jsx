import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../features/auth/authSlice";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    dispatch(signupUser({ email, password }));
  };

  return (
    <form
      onSubmit={handleSignup}
      className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Sign Up</h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 mb-3 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 mb-3 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full border p-2 mb-3 rounded"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? "Creating Account..." : "Sign Up"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default SignupForm;
