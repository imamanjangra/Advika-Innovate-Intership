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

  useEffect(() => {
    if (Api_question && Api_question.length > 0) {
      const q = Api_question[value];
      const allOptions = [...q.incorrectAnswers, q.correctAnswer];
      const mix = allOptions.sort(() => Math.random() - 0.5);
      setOptions(mix);

      
      if (initialLoading) {
        const timer = setTimeout(() => setInitialLoading(false), 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [Api_question , value]);

  const handleNext = () => {
    if (checkAns === ques.correctAnswer) {
      const newScore = score + 1;
      setScore(newScore);
      mark(newScore);
    }

    if (value + 1 === 10) {
      val(true);
    } else {
      setValue((prev) => prev + 1);
      setCheckAns("");
    }
  };

  if (initialLoading || !Api_question || Api_question.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400 mt-4 text-lg">Preparing your quiz...</p>
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
            onClick={() => setCheckAns(opt)}
            className={`flex items-center gap-3 p-3 rounded-lg border transition-all text-left ${
              checkAns === opt
                ? "bg-blue-900 border-blue-500"
                : "bg-[#0D1117] border-gray-700 hover:bg-[#1E2631]"
            }`}
          >
            <span className="text-blue-400">{i + 1}.</span>
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
