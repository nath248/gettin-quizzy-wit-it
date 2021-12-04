// import {useNavigate, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

function Cartoons(props) {

  // const navigate = useNavigate();
  // const params = useParams();
  // const [category, setCategory] = useState([]);

  // useEffect(() => {
  //   const findCategory = props.questions.filter(question => {
  //     params.category = question.fields.category;
  //     console.log(params.category);
  //   })
  //   setCategory(findCategory);
  // }, [])
  // const content = props.questions.map((question) => question.fields.category === "cartoon";
  // console.log(content);
  return (
    <div>
      {props.questions[0] ?
            <>
            <h3 key={props.questions.id}>{props.questions[0].fields.question}</h3>
              <button>{props.questions[0].fields.answer1}</button>
              <button>{props.questions[0].fields.answer2}</button>
              <button>{props.questions[0].fields.answer3}</button>
              <button>{props.questions[0].fields.answer4}</button>
        </>
        :
      null
      }
    </div>
  )
}

export default Cartoons;
