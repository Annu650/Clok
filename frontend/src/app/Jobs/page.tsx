'use client'
import React, { useState } from "react";
import Sidebar from "@/components/common/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Jobs() {
  const [jobs, setJobs] = useState([
    {
      title: "Frontend Developer",
      company: "Innovate Solutions",
      link: "https://example.com",
      deadline: "Aug 31, 2025",
      status: "To Apply",
    },
    {
      title: "Backend Engineer",
      company: "DataFlow Inc.",
      link: "https://example.com",
      deadline: "Aug 26, 2025",
      status: "To Apply",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    link: "",
    deadline: "",
    status: "To Apply",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addJob = () => {
    setJobs([...jobs, formData]);
    setFormData({ title: "", company: "", link: "", deadline: "", status: "To Apply" });
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Job Posting Management</h1>

        {/* Add New Job */}
        <div className="bg-white shadow rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Add New Job Posting</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Input
              name="title"
              placeholder="e.g., Senior Software Engineer"
              value={formData.title}
              onChange={handleChange}
            />
            <Input
              name="company"
              placeholder="e.g., Tech Solutions Inc."
              value={formData.company}
              onChange={handleChange}
            />
            <Input
              name="link"
              placeholder="https://example.com/job-post"
              value={formData.link}
              onChange={handleChange}
              className="sm:col-span-2"
            />
            <Input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
            />
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
            >
              <option>To Apply</option>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button onClick={addJob}>Save Job</Button>
          </div>
        </div>

        {/* Existing Job Postings */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Existing Job Postings</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-2">Title</th>
                <th className="p-2">Company</th>
                <th className="p-2">Link</th>
                <th className="p-2">Deadline</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2">{job.title}</td>
                  <td className="p-2">{job.company}</td>
                  <td className="p-2 text-blue-600 underline">{job.link}</td>
                  <td className="p-2">{job.deadline}</td>
                  <td className="p-2">
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${job.status === "Applied"
                          ? "bg-blue-100 text-blue-700"
                          : job.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="p-2 flex gap-3">
                    <button className="text-blue-600 hover:underline">✏️</button>
                    <button className="text-red-600 hover:underline">🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
