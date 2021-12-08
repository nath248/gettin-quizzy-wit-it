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

  const handleClick = (e) => {
    if (e.target.value === question[props.index].fields.correct) {
      props.setScore(props.score + 1);
      props.setTotal(question.length);
    }
    if (props.index < question.length - 1) {
      props.setIndex(prev => prev + 1)
    }
    if (props.index === question.length - 1) {
      navigate("/results");
      props.setIndex(0)
    }
  }

  if (!question) return <h1>Loading</h1>;

  return (
    <div className="quizzes-details height">
      <h1 className="layover res">Questions</h1>
      { question[props.index].fields ?
        <>
          <div className="quizzes-content">
            <h3 key={question[props.index].id}>{question[props.index].fields.question}</h3>
            <button value={question[props.index].fields.answer1} onClick={handleClick}>{question[props.index].fields.answer1}</button>
            <button value={question[props.index].fields.answer2} onClick={handleClick}>{question[props.index].fields.answer2}</button>
            <button value={question[props.index].fields.answer3} onClick={handleClick}>{question[props.index].fields.answer3}</button>
            <button value={question[props.index].fields.answer4} onClick={handleClick}>{question[props.index].fields.answer4}</button>
          </div>
        </>
        :
        null
      }
    </div>
  );
}

export default Questions;