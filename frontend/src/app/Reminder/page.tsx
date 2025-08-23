"use client";
import Sidebar from "@/components/common/Sidebar";
import { useState } from "react";

export default function RemindersPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Notification Preferences */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-2">Notification Preferences</h2>
          <p className="text-sm text-gray-500 mb-4">
            In-app notifications are always enabled.
          </p>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="sr-only"
            />
            <div
              className={`w-10 h-6 flex items-center rounded-full p-1 transition ${
                emailNotifications ? "bg-purple-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                  emailNotifications ? "translate-x-4" : ""
                }`}
              />
            </div>
            <span className="text-sm">Receive Email Notifications</span>
          </label>
        </div>

        {/* Reminders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Reminders */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Upcoming Reminders</h2>
            <ul className="space-y-4">
              {[
                {
                  role: "Senior Frontend Developer",
                  company: "Tech Innovators Inc.",
                  date: "April 25, 2024 - 10:00 AM",
                  tag: "Interview Reminder",
                },
                {
                  role: "Product Manager",
                  company: "Global Solutions Corp.",
                  date: "April 28, 2024",
                  tag: "Application Deadline",
                },
                {
                  role: "UI/UX Designer",
                  company: "Creative Minds Agency",
                  date: "May 02, 2024 - 03:00 PM",
                  tag: "Portfolio Review",
                },
                {
                  role: "Data Scientist",
                  company: "Quant Insights Ltd.",
                  date: "May 05, 2024",
                  tag: "Follow-up Email",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.role}</p>
                    <p className="text-sm text-gray-500">{item.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded-lg mb-1">
                      {item.tag}
                    </span>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Past Reminders */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Past Reminders</h2>
            <ul className="space-y-4">
              {[
                {
                  role: "Junior Software Engineer",
                  company: "Startup X",
                  date: "March 15, 2024",
                  tag: "Application Deadline",
                },
                {
                  role: "Marketing Specialist",
                  company: "Brandify Digital",
                  date: "March 20, 2024",
                  tag: "Interview Follow-up",
                },
                {
                  role: "HR Coordinator",
                  company: "PeopleFirst Solutions",
                  date: "February 28, 2024",
                  tag: "Application Submitted",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.role}</p>
                    <p className="text-sm text-gray-500">{item.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded-lg mb-1">
                      {item.tag}
                    </span>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
