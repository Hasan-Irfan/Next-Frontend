"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Clients", path: "/clients" },
    { name: "Pricing", path: "/pricing" },
    { name: "Analytics", path: "/analytics" },
  ];

  const settings = [
    { name: "Users", path: "/settings/users" },
    { name: "Integrations", path: "/settings/integrations" },
    { name: "Configurations", path: "/settings/configurations" },
  ];

  return (
    <div className="w-64 h-screen bg-black text-white p-4 fixed">
      <h2 className="text-xl font-bold mb-6">My App</h2>

      {/* Main Menu */}
      <div className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block p-2 rounded ${
              pathname === item.path ? "bg-gray-700" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Settings */}
      <div className="mt-6">
        <p className="text-gray-400 text-sm mb-2">Settings</p>
        <div className="space-y-2">
          {settings.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block p-2 rounded ${
                pathname === item.path ? "bg-gray-700" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
