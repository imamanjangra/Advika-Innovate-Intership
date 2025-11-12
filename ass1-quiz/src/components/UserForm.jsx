import React, { useState } from "react";

export default function UserForm({isStart , setNameis}) {
  const [name , setName] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(name)
    setNameis(name)
    isStart(true)
    setName("")
  }
  return (
    <form 
    onSubmit={handleSubmit}
    >
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center gap-4 border border-gray-200 w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to the Quiz!</h1>
        <p className="text-gray-500 text-sm">Enter your name to start</p>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
        />

        <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
          Start Quiz
        </button>
      </div>
    </form>
  );
}
