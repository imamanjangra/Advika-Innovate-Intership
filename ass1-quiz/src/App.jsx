import React from "react";
import UserForm from "./components/UserForm";
import Scoreboard from "./components/Scoreboard";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-5 relative">
      <div className="absolute top-10 right-30">
        <Scoreboard />
      </div>

      <div className="w-full ">
        <QuestionCard />
      </div>
    </div>
  );
}
