import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Questions(props) {
  const [question, setQuestion] = useState(null);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const newArr = props.questions.filter((question) => {
      return question.fields.category === category;
    });
    setQuestion(newArr);
  }, [props.questions, props.index, category]);

  const handleQuestion = () => {
    if (props.index < question.length - 1) {
      //If correct run index
      props.setIndex(prev => prev + 1)
    }
      // nav to results page
    if (props.index === question.length - 1) {
      navigate("/results");
      props.setIndex(0)
    }
  }

  if (!question) return <h1>Loading</h1>;

  const handleClick = (e) => {
    if (e.target.value === question[props.index].fields.correct) {
      props.setScore(props.score + 1);
      console.log(props.score);
    }
  }

  return (
    <div>
      { question[props.index].fields ?
        <>
        <div>
          <h3 key={question[props.index].id}>{question[props.index].fields.question}</h3>
            <button value={question[props.index].fields.answer1} onClick={handleClick}>{question[props.index].fields.answer1}</button>
          <button value={question[props.index].fields.answer2} onClick={handleClick}>{question[props.index].fields.answer2}</button>
          <button value={question[props.index].fields.answer3} onClick={handleClick}>{question[props.index].fields.answer3}</button>
          <button value={question[props.index].fields.answer4} onClick={handleClick}>{question[props.index].fields.answer4}</button>
        </div>
          <button onClick={handleQuestion}>Next Question</button>
        </>
        :
        null
      }
    </div>
  );
}

export default Questions;