"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTachometerAlt, FaBriefcase, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
  const pathname = usePathname();

  const linkClasses =
    "flex items-center gap-3 px-3 py-2 rounded-lg transition";
  const activeClasses = "bg-purple-100 text-purple-700 font-medium";

  const navItems = [
    { href: "/Dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { href: "/Jobs", label: "Jobs", icon: <FaBriefcase /> },
    { href: "/Reminder", label: "Reminders", icon: <FaBell /> },
    { href: "/Setting", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center py-6 border-b">
        <h1 className="text-2xl font-bold text-purple-600">Clok.</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${linkClasses} ${
              pathname === item.href
                ? activeClasses
                : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
            }`}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-4 py-4 border-t">
        <button className="flex items-center justify-center gap-2 w-full px-3 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
