import { postQuestion } from "../services/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form(props) {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");

  const nav = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newQuestion = {
      question,
      category,
      answer1,
      answer2,
      answer3,
      answer4,
    }
    
    const res = await postQuestion(newQuestion);
    props.setToggle(prevToggle => !prevToggle);
    if (res) {
      nav("/");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="question" name="question" value={question} onChange={(e) => setQuestion(e.target.value)}/>
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="">--Please choose a category--</option>
          <option value="cartoon">cartoon</option>
          <option value="sitcoms">sitcoms</option>
          <option value="music">music</option>
        </select>
        <input type="text" placeholder="answer1" name="answer1" value={answer1} onChange={(e) => setAnswer1(e.target.value)}/>
        <input type="text" placeholder="answer2" name="answer2" value={answer2} onChange={(e) => setAnswer2(e.target.value)}/>
        <input type="text" placeholder="answer3" name="answer3" value={answer3} onChange={(e) => setAnswer3(e.target.value)}/>
        <input type="text" placeholder="answer4" name="answer4" value={answer4} onChange={(e) => setAnswer4(e.target.value)}/>
        <button type="submit">ADD</button>
      </form>
    </div>
  )
}

export default Form;
