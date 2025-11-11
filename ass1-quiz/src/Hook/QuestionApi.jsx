import { useEffect, useState } from "react";

function QuestionApi(){

    const [Apidata , setApiData] = useState({})

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=30&type=multiple`)
        .then(resp => resp.json())
        .then(resp => setApiData(resp))
    } , [])

    return(Apidata)
}

export default QuestionApi
