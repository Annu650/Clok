'use client'

import React, { useState } from "react";
import Sidebar from "@/components/common/Sidebar";
import { Input } from "@/components/ui/input"; // if using shadcn
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function Setting() {
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-2">Profile & Settings</h1>
        <p className="text-gray-500 mb-6">
          Manage your account details and notification preferences.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Account Management */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Account Management</h2>
            <p className="text-sm text-gray-500 mb-4">
              Update your email address and password.
            </p>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="john.doe@example.com"
                disabled
                className="bg-gray-100"
              />
              <Input type="email" placeholder="Enter new email address" />
              <Input type="password" placeholder="Enter current password" />
              <Input type="password" placeholder="Enter new password" />
            </div>
            <Button className="mt-6 w-full">Save Changes</Button>
          </div>

          {/* Notification Preferences */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
            <p className="text-sm text-gray-500 mb-4">
              Control how you receive notifications.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-500">
                  Receive job deadline reminders and updates via email.
                </p>
              </div>
              <Switch
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
