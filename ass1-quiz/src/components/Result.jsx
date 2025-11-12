import React from "react";

export default function Result({corrAns , tryAgain}) {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md text-center border border-gray-200 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-green-600">Quiz Completed!</h2>

      <p className="text-lg text-gray-700 mt-2">
        You scored <span className="text-blue-600 font-semibold">{corrAns} / 10</span>
      </p>

      <p className="text-gray-500 text-sm mt-1">
        Great job! You answered {corrAns} questions correctly.
      </p>

      <button
      onClick={tryAgain}
      className="mt-5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
        Try Again
      </button>
    </div>
  );
}
