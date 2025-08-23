import React from "react";
import JobCard from "@/components/JobCard";
import Sidebar from "@/components/common/Sidebar";
import { Button } from "@/components/ui/button"; // if using shadcn
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const jobs = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      deadline: "Aug 22, 2025",
      status: "Applied",
      link: "https://example.com/job1",
    },
    {
      title: "Product Manager",
      company: "InnovateCorp",
      location: "New York, NY",
      deadline: "Aug 27, 2025",
      status: "To Apply",
      link: "https://example.com/job2",
    },
  ];

  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Greeting */}
        <div className="mb-6">
          <p className="text-gray-500">{today}</p>
          <h1 className="text-2xl font-bold">Good Morning, Olivia Davis!</h1>
        </div>

        {/* Tabs + Add Button */}
        <div className="flex items-center justify-between mb-6">
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Jobs</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
              <TabsTrigger value="applied">Applied</TabsTrigger>
              <TabsTrigger value="interview">Interview</TabsTrigger>
              <TabsTrigger value="offer">Offer</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button className="ml-4">+ Add New Job</Button>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job, idx) => (
            <JobCard key={idx} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
}
