import { useState } from "react";
import QuestionApi from "../Hook/QuestionApi";

export default function QuestionCard() {
  const Api_question = QuestionApi();
  console.log(Api_question);

  if (!Api_question.results || Api_question.results.length === 0) {
    return <h2>Loading.....</h2>;
  } 
    const q = Api_question.results?.[0];
    let options = [...q?.incorrect_answers, q?.correct_answer];
    options.sort(() => Math.random() - 0.5);
    console.log(options);
 

  return (
    <div className="bg-white p-8 rounded-2xl flex flex-col gap-4 max-w-md mx-auto border border-gray-300">
      <h2 className="text-gray-500 text-lg text-center">
        Question 1 of 10
      </h2>

      <p className="text-xl text-center text-gray-800">
        {q.question}
      </p>

      <div className="flex flex-col gap-3 mt-3">
        {options.map((opt, i) => (
          <button
            key={i}
            className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg border border-gray-300 hover:bg-blue-100 transition-all text-left"
          >
            <span className="text-blue-600 ">{i}</span>
            <span>{opt}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-end mt-2 ">
        <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-all">
          Next
        </button>
      </div>
    </div>
  );
}
