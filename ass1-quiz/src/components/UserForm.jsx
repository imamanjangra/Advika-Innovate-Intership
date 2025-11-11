import React from "react";

export default function UserForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center gap-4 border border-gray-200 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">Welcome to the Quiz!</h1>
      <p className="text-gray-500 text-sm">Enter your name to start</p>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
      />

      <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
        Start Quiz
      </button>
    </div>
  );
}
