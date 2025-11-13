

export default function Result({ corrAns, tryAgain }) {
  

 

  return (
    <div className="bg-[#161B22] p-10 rounded-lg shadow-lg text-center border border-gray-700 max-w-md mx-auto text-gray-200">
      <h2 className="text-2xl font-bold text-green-500">Quiz Completed!</h2>
      <p className="text-lg mt-2">
        You scored <span className="text-blue-400 font-semibold">{corrAns} / 10</span>
      </p>
      <p className="text-gray-400 text-sm mt-1">
        Great job! You answered {corrAns} correctly.
      </p>

      <button
        onClick={tryAgain}
        className="mt-5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium"
      >
        Try Again
      </button>

    </div>
  );
}
