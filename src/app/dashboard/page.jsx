
"use client";

import Layout from "@/components/Layout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaRegListAlt, FaLayerGroup } from "react-icons/fa";
import QuestionFormOneByOne from "@/components/QuestionFormOneByOne";
import QuestionFormBulk from "@/components/QuestionFormBulk";
import AssessmentDetails from "@/components/AssessmentDetails";

export default function Dashboard() {
  const router = useRouter();
  const [mode, setMode] = useState("");
  const [assessmentDetails, setAssessmentDetails] = useState(null);

  const resetAll = () => {
    setMode("");
    setAssessmentDetails(null);
  };

  const handleNavigation = (selectedMode) => {
    setMode(selectedMode);
    router.push(`/createassessment?mode=${selectedMode}`);
  };

  const handleDetailsSubmit = (data) => {
    setAssessmentDetails(data);
  };

  return (
    <Layout>
      <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center">
        <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-10">
            <h1 className="text-5xl font-bold text-gray-800 text-center mb-8 tracking-wide">
              Quiz Creator
            </h1>
            {!mode ? (
              <div className="flex justify-around items-center mb-10 space-x-6">
                <div
                  onClick={() => handleNavigation("one-by-one")}
                  className="cursor-pointer bg-gray-100 border border-gray-300 text-gray-700 hover:text-gray-800 hover:bg-blue-200 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center w-64 h-50"
                >
                  <FaRegListAlt className="text-5xl mb-4" />
                  <span className="text-xl font-semibold text-center">
                    One-by-One Upload
                  </span>
                </div>
                <div
                  onClick={() => handleNavigation("bulk")}
                  className="cursor-pointer bg-gray-100 border border-gray-300 text-gray-700 hover:text-gray-800 hover:bg-green-200 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center w-64 h-50"
                >
                  <FaLayerGroup className="text-5xl mb-4" />
                  <span className="text-xl font-semibold text-center">
                    Bulk Upload
                  </span>
                </div>
              </div>
            ) : !assessmentDetails ? (
              <AssessmentDetails  mode={mode} onDetailsSubmit={handleDetailsSubmit} />
            ) : mode === "one-by-one" ? (
              <QuestionFormOneByOne />
            ) : (
              <QuestionFormBulk />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
