"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function QuestionFormOneByOne() {
  const router = useRouter(); 
  const [question, setQuestion] = useState({
    text: "",
    options: ["", "", "", ""],
    correct: [],
  });

  const handleOptionChange = (index, value) => {
    const newOptions = [...question.options];
    newOptions[index] = value;
    setQuestion({ ...question, options: newOptions });
  };

  const toggleCorrectOption = (index) => {
    const newCorrect = question.correct.includes(index)
      ? question.correct.filter((i) => i !== index)
      : [...question.correct, index];
    setQuestion({ ...question, correct: newCorrect });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Question submitted:", question);
    router.push("/dashboard");
  };

  const isFormValid =
    question.text.trim() &&
    question.options.every((option) => option.trim()) &&
    question.correct.length > 0;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto w-full p-6 bg-white shadow-xl rounded-lg max-w-lg mx-auto transition-all duration-300 hover:shadow-2xl border border-blue-200 transform"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center uppercase tracking-widest bg-gradient-to-r from-black to-black text-transparent bg-clip-text">
        Add Your Question
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Question
        </label>
        <textarea
          value={question.text}
          onChange={(e) => setQuestion({ ...question, text: e.target.value })}
          className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg shadow bg-gray-50 resize-none"
          rows="2"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Options
        </label>
        {question.options.map((option, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mb-2 text-black bg-gradient-to-r from-white to-blue-50 p-2 rounded-lg shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-400 transition-all"
          >
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder={`Option ${index + 1}`}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none text-gray-700"
            />
            <input
              type="checkbox"
              checked={question.correct.includes(index)}
              onChange={() => toggleCorrectOption(index)}
              className="h-4 w-4 text-black border-gray-300 rounded"
            />
          </div>
        ))}
      </div>
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-3 text-black font-semibold rounded-lg border border-bg-blue-900 focus:outline-none transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl ${
          isFormValid
            ? "hover:from-blue-600 hover:to-purple-600"
            : "cursor-not-allowed opacity-50"
        }`}
      >
        Submit Question
      </button>
    </form>
  );
}
