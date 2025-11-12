import React, { use, useState } from "react";
import UserForm from "./components/UserForm";
import Scoreboard from "./components/Scoreboard";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";



export default function App(nocount) {
  const [startQuiz , setStartQuiz] = useState(false)
  const [username , setUsername] = useState()
  const [count , setcount] = useState(false);
  const [marks , setMarks] = useState(0)

  console.log(nocount)


  const again = () => {
    setcount(false)
    setMarks(0)
  }
  return (

    
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-5 relative">
      
      {
        !startQuiz ? (
          <div className="w-full"  >
        <UserForm isStart={setStartQuiz} setNameis={setUsername} />
          </div>
        )
         :
        (
          !count ? (
            <div>
              <div className="absolute top-10 right-30">
                  <Scoreboard userName={username} />
              </div>
              
              <div className="w-full  ">
                <QuestionCard val={setcount}  mark={setMarks} />
              </div>
          </div>
          ) : (
            <Result corrAns={marks } tryAgain={again} />
          )
          
        )
      }
    
      {/* 
 */}

      
    </div>
  );
}
