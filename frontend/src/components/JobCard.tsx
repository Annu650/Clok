import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

interface JobCardProps {
  title: string;
  company: string;
  location?: string;
  deadline: string;
  status: string;
  link: string;
}

const statusColors: Record<string, string> = {
  "To Apply": "bg-gray-200 text-gray-800",
  "Applied": "bg-blue-200 text-blue-800",
  "Interview Scheduled": "bg-purple-200 text-purple-800",
  "Offer": "bg-green-200 text-green-800",
  "Rejected": "bg-red-200 text-red-800",
};

export default function JobCard({
  title,
  company,
  location,
  deadline,
  status,
  link,
}: JobCardProps) {
  return (
    <Card className="w-full shadow-sm rounded-2xl hover:shadow-lg transition">
  <CardHeader className="pb-2">
    <CardTitle className="text-lg font-semibold">{title}</CardTitle>
    <p className="text-sm text-gray-500">
      {company}{location && ` • ${location}`}
    </p>
  </CardHeader>

  <CardContent className="space-y-3">
    {/* Deadline */}
    <div className="flex items-center text-sm text-gray-600">
      <Calendar className="w-4 h-4 mr-2" />
      <span>Deadline: {deadline}</span>
    </div>

    {/* Status Badge */}
    <Badge className={`${statusColors[status] || "bg-gray-100 text-gray-700 border border-gray-300"}`}>
      {status}
    </Badge>

    {/* Actions */}
    <div className="flex justify-between gap-2 pt-2">
      <Button variant="outline" size="sm">View Details</Button>
      <Button variant="secondary" size="sm" asChild>
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
          <ExternalLink className="w-4 h-4 mr-1" /> Visit Posting
        </a>
      </Button>
    </div>
  </CardContent>
</Card>

  );
}
