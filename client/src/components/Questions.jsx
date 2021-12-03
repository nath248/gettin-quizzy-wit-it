function Questions(props) {

  return (
    <div>
      {
        props.questions.map((question) => (
          question.fields.category === "cartoon" ?
            <>
            <h3 key={question.id}>{question.fields.question}</h3>
              <button>{question.fields.answer1}</button>
              <button>{question.fields.answer2}</button>
              <button>{question.fields.answer3}</button>
              <button>{question.fields.answer4}</button>
            </>
            :
            null
        ))
      }
    </div>
  )
}

export default Questions;