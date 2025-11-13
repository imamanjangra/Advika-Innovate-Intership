import  { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import Scoreboard from "./components/Scoreboard";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";

export default function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [username, setUsername] = useState("");
  const [count, setCount] = useState(false);
  const [marks, setMarks] = useState(0);



  useEffect(() => {
    const item = localStorage.getItem("username");
    try {
      if (item && item !== "undefined") {
        setUsername(JSON.parse(item));
        setStartQuiz(true);
      }
    } catch {
      setUsername("");
    }
    
  }, []);

  
  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(username));
  }, [username]);

  const again = () => {
    setCount(false);
    setMarks(0);
  };

  const logout_methode = () => {
    setCount(false);
    setMarks(0);
    localStorage.removeItem("username");
    setStartQuiz(false);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-200 flex flex-col items-center justify-center p-6 relative">
      { !startQuiz ? (
        <UserForm isStart={setStartQuiz} setNameis={setUsername} />
      ) : !count ? (
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
          <div className="fixed top-5 right-5">
            <Scoreboard userName={username} logout={logout_methode} />
          </div>
          <QuestionCard val={setCount} mark={setMarks} />
        </div>
      ) : (
        <Result corrAns={marks} tryAgain={again} />
      )}
    </div>
  );
}
