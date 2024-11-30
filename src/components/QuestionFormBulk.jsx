
"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function QuestionFormBulk() {
  const router = useRouter();
  const [questions, setQuestions] = useState([
    { text: "", options: ["", "", "", ""], correct: [] },
  ]);
  const questionsContainerRef = useRef(null);

  const addNewQuestion = () => {
    if (questions.length < 50) {
      setQuestions([
        ...questions,
        { text: "", options: ["", "", "", ""], correct: [] },
      ]);
      setTimeout(() => {
        questionsContainerRef.current?.scrollTo(0, questionsContainerRef.current.scrollHeight);
      }, 0);
    }
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[oIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (qIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].text = value;
    setQuestions(updatedQuestions);
  };

  const toggleCorrectOption = (qIndex, oIndex) => {
    const updatedQuestions = [...questions];
    const correctOptions = updatedQuestions[qIndex].correct.includes(oIndex)
      ? updatedQuestions[qIndex].correct.filter((i) => i !== oIndex)
      : [...updatedQuestions[qIndex].correct, oIndex];
    updatedQuestions[qIndex].correct = correctOptions;
    setQuestions(updatedQuestions);
  };

  const isQuestionComplete = (question) => {
    return (
      question.text.trim() !== "" &&
      question.options.every((option) => option.trim() !== "")
    );
  };

  const handleSubmit = () => {
    console.log("Bulk Questions Submitted:", questions);
    router.push("/dashboard");
  };

  return (
    <div className="max-w-6xl mx-auto w-full p-6 bg-gradient-to-br from-gray-100 to-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Add Questions
      </h2>
      <div
        ref={questionsContainerRef}
        className="space-y-6 overflow-y-auto h-[60vh] p-4 rounded-md shadow-inner"
      >
        {questions.map((question, qIndex) => (
          <div
            key={qIndex}
            className="p-5 bg-gradient-to-r from-white to-blue-50 border border-gray-200 rounded-lg shadow-lg space-y-4"
          >
            <div className="flex items-center justify-between">
              <label className="text-lg font-medium text-gray-700">
                Question {qIndex + 1}
              </label>
              <AiOutlineCheckCircle
                className={`${
                  isQuestionComplete(question) && question.correct.length > 0
                    ? "text-green-500"
                    : "text-gray-300"
                } text-xl`}
              />
            </div>
            <textarea
              value={question.text}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-black text-base"
              rows="3"
              placeholder="Enter the question here..."
            ></textarea>
            <div className="space-y-3">
              <label className="block text-base font-medium text-gray-700">
                Options
              </label>
              {question.options.map((option, oIndex) => (
                <div key={oIndex} className="flex items-center space-x-4">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleOptionChange(qIndex, oIndex, e.target.value)
                    }
                    className="flex-1 p-2 border border-gray-300 rounded-md text-black text-sm"
                    placeholder={`Option ${oIndex + 1}`}
                  />
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={question.correct.includes(oIndex)}
                      onChange={() => toggleCorrectOption(qIndex, oIndex)}
                      className="h-4 w-4 text-blue-500 focus:ring-blue-400 rounded"
                      disabled={!isQuestionComplete(question)}
                    />
                    <span className="text-sm text-gray-600">Correct</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={addNewQuestion}
          className={`flex items-center px-4 py-2 text-sm font-semibold rounded-md border ${
            questions.length < 50
              ? "border-blue-500 text-blue-500 hover:bg-blue-100"
              : "border-gray-300 bg-gray-300 text-gray-500 cursor-not-allowed"
          } transition-all`}
          disabled={questions.length >= 50}
        >
          <FiPlusCircle className="mr-2 text-lg" />
          {questions.length < 50
            ? `Add New Question (${questions.length}/50)`
            : "Question Limit Reached"}
        </button>
        <button
          onClick={handleSubmit}
          className="flex items-center px-4 py-2 text-sm font-semibold rounded-md border border-green-500 text-green-500 hover:bg-green-100 transition-all"
        >
          <AiOutlineCheckCircle className="mr-2 text-lg" />
          Submit All Questions
        </button>
      </div>
    </div>
  );
}
