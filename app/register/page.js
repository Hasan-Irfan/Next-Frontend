"use client";

import { useState } from "react";
import { registerUser } from "../../src/services/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async () => {
  //   const res = await registerUser({ email, password });
  //   alert(res.message || res.error);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔥 important if inside form

    console.log("REGISTER CLICKED"); // debug

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await registerUser({ email, password });

      console.log("API RESPONSE:", res);

      if (res.error) {
        alert(res.error);
      } else {
        alert(res.message || "Registered successfully");
      }

    } catch (err) {
      console.error("ERROR:", err);
      alert("Something went wrong");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Register
        </h1>

        <input
          className="w-full p-3 mb-4 border rounded-lg text-black"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 border rounded-lg text-black"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white p-3 rounded-lg hover:opacity-80 transition"
        >
          Register
        </button>
        <a href="/login" className="block mt-4 text-center text-sm text-gray-600 hover:underline">
          Already have an account? Login
        </a>
      </div>

    </div>
  );
}
