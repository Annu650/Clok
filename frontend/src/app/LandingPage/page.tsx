"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FeedbackSection from "@/components/sections/Feedback";

export default function LandingPage() {
  
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full border-b bg-white fixed top-0 z-50"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600">Clok.</span>
          </div>

          {/* ✅ Navbar with smooth scroll */}
          <nav className="hidden md:flex gap-6 text-gray-600">
            <button onClick={() => scrollToSection("features")} className="hover:text-purple-600">
              Features
            </button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-purple-600">
              FAQ
            </button>
            <button onClick={() => scrollToSection("feedback")} className="hover:text-purple-600">
              Feedback
            </button>
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Sign Up Now
          </motion.button>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Your ultimate partner for precise time tracking and project management.
          </h1>
          <p className="text-gray-600">
            Easy setup. Team Collaboration. Smart Reminders.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 hover:cursor-pointer transition"
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          <Image
            src="/landing-illustration.png"
            alt="Hero Illustration"
            width={500}
            height={400}
            className="rounded-xl"
          />
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6"
          >
            Boost Your Productivity
          </motion.h2>
          <p className="text-gray-600 mb-12">
            Discover how Clok’s powerful features help you manage your time effectively and achieve your goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Job Tracking", desc: "Precisely manage job applications, track deadlines, and boost productivity." },
              { title: "Reminder Notifications", desc: "Never miss a deadline or meeting with smart notifications." },
              { title: "Cooling Period Alerts", desc: "Automatically detect application cooling periods to prevent burnout." },
              { title: "Easy Authentication", desc: "Secure and hassle-free login with modern authentication methods." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { q: "How does Clok send reminders?", a: "Clok sends both in-app and email reminders for your tasks and deadlines." },
              { q: "Can I integrate Clok with other tools?", a: "Yes, Clok supports integrations with popular tools like Slack, Google Calendar, and more." },
              { q: "Is my data secure?", a: "Absolutely! Clok uses industry-standard encryption and secure authentication methods." },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-6 rounded-xl shadow"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section id="feedback" className="scroll-mt-24">
        <FeedbackSection />
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border-t py-6 mt-auto"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Clok. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
