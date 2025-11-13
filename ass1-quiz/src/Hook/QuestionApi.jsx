import { useEffect, useState } from "react";

function QuestionApi(){

    const [Apidata , setApiData] = useState({})

    useEffect(() => {
        fetch(`https://the-trivia-api.com/v2/questions?limit=10&difficulty=easy&type=text_choice`)
        .then(resp => resp.json())
        .then(resp => setApiData(resp))
    } , [])

    return(Apidata)
}

export default QuestionApi
