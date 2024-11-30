
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AssessmentDetails({ onDetailsSubmit, mode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const modeFromQuery = searchParams.get("mode");
  const currentMode = mode || modeFromQuery;

  if (!currentMode) {
    throw new Error("Mode is required in AssessmentDetails.");
  }

  const [assessment, setAssessment] = useState({
    name: "",
    category: "",
    duration: "15",
    difficulty: "Easy",
    relatedJobs: [],
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onDetailsSubmit) {
      onDetailsSubmit(assessment);
    }
    if (currentMode === "one-by-one") {
      router.push("/createquesone");
    } else {
      router.push("/createquesbulk");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-white shadow-xl rounded-lg w-full max-w-3xl mx-auto"
    >
      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">
          Assessment Name
        </label>
        <input
          type="text"
          value={assessment.name}
          onChange={(e) =>
            setAssessment({ ...assessment, name: e.target.value })
          }
          className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
          placeholder="Enter assessment name"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2 text-lg font-semibold text-gray-700">
            Category
          </label>
          <input
            type="text"
            value={assessment.category}
            onChange={(e) =>
              setAssessment({ ...assessment, category: e.target.value })
            }
            className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
            placeholder="Enter category"
          />
        </div>
        <div>
          <label className="block mb-2 text-lg font-semibold text-gray-700">
            Duration (minutes)
          </label>
          <input
            type="number"
            value={assessment.duration}
            onChange={(e) =>
              setAssessment({ ...assessment, duration: e.target.value })
            }
            className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">
          Difficulty
        </label>
        <select
          value={assessment.difficulty}
          onChange={(e) =>
            setAssessment({ ...assessment, difficulty: e.target.value })
          }
          className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">
          Description
        </label>
        <textarea
          value={assessment.description}
          onChange={(e) =>
            setAssessment({ ...assessment, description: e.target.value })
          }
          className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
          rows="5"
          placeholder="Provide a brief description"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        Save Assessment
      </button>
    </form>
  );
}
