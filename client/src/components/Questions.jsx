import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Questions(props) {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const newArr = props.questions.filter((question) => {
      return question.fields.category === category;
    });
    setQuestion(newArr);
  }, [props.questions, index, category]);

  const handleQuestion = () => {
    if (index < question.length - 1) {
      //If correct run index
      setIndex(prev => prev + 1)
    }
      // nav to results page
    if (index === question.length - 1) {
      navigate("/");
    }
  }

  if (!question) return <h1>Loading</h1>;

  return (
    <div>
      { question[index].fields ?
        <>
        <div>
          <h3 key={question[index].id}>{question[index].fields.question}</h3>
          <button>{question[index].fields.answer1}</button>
          <button>{question[index].fields.answer2}</button>
          <button>{question[index].fields.answer3}</button>
          <button>{question[index].fields.answer4}</button>
        </div>
          <button onClick={handleQuestion}>Next Question</button>
        </>
        :
        <h1>You won!</h1>
      }
    </div>
  );
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
