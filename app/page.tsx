"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 rounded-2xl shadow-lg bg-white text-center">
        <h1 className="text-2xl font-bold text-black">
          Dashboard - Logged In ✅
        </h1>
      </div>
    </div>
  );
}
