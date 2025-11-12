import { useState, useEffect } from "react";
import QuestionApi from "../Hook/QuestionApi";

export default function QuestionCard({ val ,mark }) {
  const Api_question = QuestionApi();
  const [value, setValue] = useState(0);
  const [checkAns, setCheckAns] = useState("");
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);

  console.log(Api_question)

  useEffect(() => {
    if (Api_question.results && Api_question.results.length > 0) {
      const q = Api_question.results[value];
      const allOptions = [...q.incorrect_answers, q.correct_answer];
      const shuffled = allOptions.sort(() => Math.random() - 0.5);
      setOptions(shuffled);
    }
  }, [Api_question , value]);

  if (!Api_question.results || Api_question.results.length === 0) {
    return <h2 className="text-center">Loading.....</h2>;
  }

  const q = Api_question.results[value];

  const handleNext = () => {
    if (checkAns === q.correct_answer) {
      setScore((prev) => prev + 1);
      mark(score)
    }

    if (value + 1 === 10) {
      val(true);
    } else {
      setValue((prev) => prev + 1);
      setCheckAns("");
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl flex flex-col gap-4 max-w-md mx-auto border border-gray-300">
      <h2 className="text-gray-500 text-lg text-center">
        Question {value + 1} of 10
      </h2>

      <p
        className="text-xl text-center text-gray-800"
        dangerouslySetInnerHTML={{ __html: q.question }}
      />

      <div className="flex flex-col gap-3 mt-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setCheckAns(opt)}
            className={`flex items-center gap-4 p-3 rounded-lg border transition-all text-left ${
              checkAns === opt ? "bg-blue-100 border-blue-400" : "bg-gray-100 border-gray-300 hover:bg-blue-50"
            }`}
          >
            <span className="text-blue-600">{i + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: opt }}></span>
          </button>
        ))}
      </div>

      <div className="flex justify-end mt-2">
        <button
          onClick={handleNext}
          className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
}
