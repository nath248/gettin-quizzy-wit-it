import { useState, useEffect } from "react";

function Questions(props) {

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const newArr = props.questions.filter((question) => (
      question.fields.category === "cartoon"))
    setQuestion(newArr)
  }, [props.questions])
  

  return (
    <div>
      
      {question.map((filteredCategory) => (
        question.fields.category === "cartoon" ?
          <>
            <h3 key={filteredCategory.id}>{filteredCategory[index].fields.question}</h3>
            <button>{filteredCategory[index].fields.answer1}</button>
            <button>{filteredCategory[index].fields.answer2}</button>
            <button>{filteredCategory[index].fields.answer3}</button>
            <button>{filteredCategory[index].fields.answer4}</button>
          </>
          :
          null
      ))

      }
    </div>
  )
}

export default Questions;

// function Questions(props) {

//   return (
//     <div>
      
//       {props.questions.map((question) => (
//           question.fields.category === "cartoon" ?
//             <>
//               <h3 key={question.id}>{question.fields.question}</h3>
//               <button>{question.fields.answer1}</button>
//               <button>{question.fields.answer2}</button>
//               <button>{question.fields.answer3}</button>
//               <button>{question.fields.answer4}</button>
//             </>
          
//         :
//         null
//         ))
//       }
//     </div>
//   )
// }

// export default Questions;