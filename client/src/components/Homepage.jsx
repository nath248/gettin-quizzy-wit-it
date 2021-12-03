import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Homepage(props) {
  const navigate = useNavigate();
  const params = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const findCategory = props.questions.filter(question => {
      params.category = question.fields.category;
      console.log(params.category);
    })
    setCategory(findCategory);
  }, [])

  return (
    <>
      <div className="img-div">
        <img src="https://i.ibb.co/QDrJQys/logo-bkg.png" alt="logo" className="logo" width="230" height="200" />
      </div>
      <div className="content-div">
        <h1>Quizzes</h1>
        <Link to="/cartoon">90's Cartoon Quiz</Link>
        <Link to="/sitcoms">90's Sitcoms Quiz</Link>
        <Link to="/music">90's Music Quiz</Link>
      </div>
    </>
  )
}

export default Homepage;
