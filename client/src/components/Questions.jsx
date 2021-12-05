import { useState } from "react";

function Questions(props) {

  const [index, setIndex] = useState(0);


  return (
    <div>
      
      {props.question && props.questions.fields ?
        props.questions.filter((question) => (
          question.fields.category === "cartoon")).map((filteredCategory) => (
            <>
              <h3 key={filteredCategory.id}>{filteredCategory[index].fields.question}</h3>
              <button>{filteredCategory[index].fields.answer1}</button>
              <button>{filteredCategory[index].fields.answer2}</button>
              <button>{filteredCategory[index].fields.answer3}</button>
              <button>{filteredCategory[index].fields.answer4}</button>
            </>
          ))
        :
        null
      }
    </div>
  )
}

export default Questions;