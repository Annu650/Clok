import React from "react";
import { FaTachometerAlt, FaBriefcase, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center py-6 border-b">
        <h1 className="text-2xl font-bold text-purple-600">★ Logo</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-purple-50 hover:text-purple-600"
        >
          <FaTachometerAlt /> Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-purple-50 hover:text-purple-600"
        >
          <FaBriefcase /> Jobs
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-purple-50 hover:text-purple-600"
        >
          <FaBell /> Reminders
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-purple-50 hover:text-purple-600"
        >
          <FaCog /> Settings
        </a>
      </nav>

      {/* Logout Button */}
      <div className="px-4 py-4 border-t">
        <button className="flex items-center justify-center gap-2 w-full px-3 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
