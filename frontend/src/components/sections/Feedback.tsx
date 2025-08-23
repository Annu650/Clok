"use client";
import { useState } from "react";

export default function FeedbackSection() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    console.log("Feedback submitted:", feedback);
    setSubmitted(true);
    setFeedback("");
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">We Value Your Feedback</h2>
        <p className="text-gray-600 mb-6">
          Help us improve Clok by sharing your experience and suggestions.
        </p>

        {submitted ? (
          <p className="text-green-600 font-medium">
            ✅ Thank you for your feedback!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              rows={4}
              placeholder="Write your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
