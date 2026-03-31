"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// Simple inline SVG icons matching the screenshot's style
const Icons = {
  Dashboard: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  Clients: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Pricing: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  ),
  Analytics: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  Users: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Integrations: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  ),
  Configurations: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { setIsOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const menu = [
    { name: "Dashboard", path: "/", icon: Icons.Dashboard },
    { name: "Clients", path: "/clients", icon: Icons.Clients },
    { name: "Pricing & Plans", path: "/pricing", icon: Icons.Pricing },
    { name: "Reporting & Analytics", path: "/analytics", icon: Icons.Analytics },
  ];

  const settings = [
    { name: "Users", path: "/settings/users", icon: Icons.Users },
    { name: "Integrations", path: "/settings/integrations", icon: Icons.Integrations },
    { name: "Configurations", path: "/settings/configurations", icon: Icons.Configurations },
  ];

  const NavContent = () => (
    <nav className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5 mb-2">
        <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <span className="text-white font-semibold text-[15px] tracking-tight">My App</span>
      </div>

      {/* Main nav */}
      <div className="px-2 space-y-0.5">
        {menu.map(({ name, path, icon: Icon }) => {
          const active = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] font-medium
                transition-all duration-150 group relative
                ${active
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
                }
              `}
            >
              {active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-blue-400 rounded-r-full" />
              )}
              <span className={active ? "text-blue-300" : "text-slate-500 group-hover:text-slate-300"}>
                <Icon />
              </span>
              {name}
            </Link>
          );
        })}
      </div>

      {/* Settings section */}
      <div className="px-2 mt-6">
        <p className="px-3 mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
          Settings
        </p>
        <div className="space-y-0.5">
          {settings.map(({ name, path, icon: Icon }) => {
            const active = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] font-medium
                  transition-all duration-150 group relative
                  ${active
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-blue-400 rounded-r-full" />
                )}
                <span className={active ? "text-blue-300" : "text-slate-500 group-hover:text-slate-300"}>
                  <Icon />
                </span>
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );

  return (
    <>
      {/* Desktop */}
      <div
        className="hidden md:flex w-56 h-screen fixed flex-col"
        style={{ background: "linear-gradient(180deg, #1e2a3a 0%, #1a2332 100%)" }}
      >
        <NavContent />
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-800 text-white p-2 rounded-md shadow-lg"
        aria-label="Open menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile backdrop */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-56 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ background: "linear-gradient(180deg, #1e2a3a 0%, #1a2332 100%)" }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
          aria-label="Close menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <NavContent />
      </div>
    </>
  );
}