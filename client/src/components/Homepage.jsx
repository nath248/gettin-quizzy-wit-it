import { Link } from "react-router-dom";

function Homepage(props) {
  const reset = () => {
    props.setScore(0);
    props.setTotal(0);
  }

  return (
    <>
      <div className="content-div">
        <h1>Quizzes</h1>
        <Link to="/list/cartoon" onClick={reset}>90's Cartoon Quiz </Link>
        <Link to="/list/sitcoms" onClick={reset}>90's Sitcoms Quiz </Link>
        <Link to="/list/music" onClick={reset}>90's Music Quiz</Link>
      </div>
    </>
  )
}

export default Homepage;
