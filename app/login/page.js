"use client";

import { useState } from "react";
import { loginUser } from "../../src/services/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const res = await loginUser({ email, password });

    if (res.token) {
      localStorage.setItem("token", res.token);
      router.push("/");
    } else {
      alert(res.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Login
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
          Login
        </button>
      </div>
    </div>
  );
}
