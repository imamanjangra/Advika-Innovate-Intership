import { useState } from "react";

export default function UserForm({ isStart, setNameis }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setNameis(name);
    isStart(true);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-[#161B22] p-8 rounded-xl shadow-lg flex flex-col items-center gap-5 w-full max-w-md mx-auto border border-gray-700">
        <h1 className="text-3xl font-bold text-white">Welcome to the Quiz</h1>
        <p className="text-gray-400 text-sm">Enter your name to begin</p>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-600 bg-[#0D1117] rounded-md focus:border-blue-500 focus:outline-none text-gray-200"
        />

        <button
          type="submit"
          className="mt-3 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all"
        >
          Start Quiz
        </button>
      </div>
    </form>
  );
}
