"use client";

import { useRouter } from "next/navigation";
import { logoutUser } from "../services/auth";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser();

    // Redirect to login
    router.push("/login");
  };

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-black">
        Dashboard
      </h1>

      <button
        onClick={handleLogout}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
