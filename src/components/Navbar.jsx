"use client";

import { useRouter } from "next/navigation";
import { logoutUser } from "../services/auth";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser();
    router.push("/login");
  };

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between pl-16 pr-6 md:pl-6">
      <h1 className="text-lg font-semibold text-black">Dashboard</h1>

      <button
        onClick={handleLogout}
        className="bg-black text-white px-4 py-2 rounded text-sm"
      >
        Logout
      </button>
    </div>
  );
}