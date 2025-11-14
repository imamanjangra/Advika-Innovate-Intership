import { useState, useEffect } from "react";
import QuestionApi from "../Hook/QuestionApi";

export default function QuestionCard({ val, mark }) {
  const Api_question = QuestionApi();
  const [value, setValue] = useState(0);
  const [checkAns, setCheckAns] = useState("");
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const ques = Api_question?.[value];
  const [disable , setdisable] = useState(false)

  useEffect(() => {
    if (Api_question && Api_question.length > 0) {
      const q = Api_question[value];
      const allOptions = [...q.incorrectAnswers, q.correctAnswer];
      const mix = allOptions.sort(() => Math.random() - 0.5);
      setOptions(mix);

      if (initialLoading) {
        const timer = setTimeout(() => setInitialLoading(false), 800);
        return () => clearTimeout(timer);
      }
    }
  }, [Api_question, value]);

  const handleNext = () => {
    if (checkAns === ques.correctAnswer) {
      const newScore = score + 1;
      setScore(newScore);
      mark(newScore);
    }
    setdisable(false)

    if (value + 1 === 10) {
      val(true);
    } else {
      setValue((prev) => prev + 1);
      setCheckAns("");
    }
  };

  
  if (initialLoading || !Api_question || Api_question.length === 0) {
    return (
      <div className="bg-[#161B22] p-8 rounded-2xl flex flex-col gap-4 max-w-md mx-auto border border-gray-700 shadow-lg animate-fadeIn">
        <div className="h-6 w-32 bg-gray-700 rounded-md animate-pulse mx-auto"></div>
        <div className="h-6 w-3/4 bg-gray-700 rounded-md animate-pulse mx-auto mt-4"></div>

        <div className="flex flex-col gap-3 mt-5">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-10 bg-gray-800 rounded-md animate-pulse"
            ></div>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <div className="h-10 w-80 bg-gray-700 rounded-md animate-pulse"></div>
        </div>
      </div>
    );
  }


  return (
    <div className="bg-[#161B22] p-8 rounded-2xl flex flex-col gap-4 max-w-md mx-auto border border-gray-700 shadow-lg animate-fadeIn">
      <h2 className="text-gray-400 text-lg text-center">
        Question {value + 1} of 10
      </h2>

      <p className="text-xl text-center text-white">{ques?.question?.text}</p>

     <div className="flex flex-col gap-3 mt-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => {setCheckAns(opt); setdisable(true)}}
            disabled={disable}
            className={`p-3 rounded-lg border transition-all text-left ${
              opt == ques.correctAnswer && checkAns !== "" ? "bg-green-700 border-green-500" : checkAns == opt && checkAns !== ques.correctAnswer ? "bg-red-700 border-red-500" : "bg-[#0D1117] border-gray-700 hover:bg-[#1E2631]"
            }`}
          >
            <span className="text-gray-200">{opt}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-end mt-2">
        <button
          onClick={handleNext}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}
