import { Link } from "react-router-dom";

function Homepage(props) {
  const reset = () => {
    props.setScore(0);
    props.setTotal(0);
  };

  return (
    <>
      <div className="content-div height">
        <h1 className="layover res home">Quizzes</h1>
        <div className="quizzes height">
          <Link to="/list/cartoon" onClick={reset} className="links quiz-link">
            90's Cartoon Quiz
          </Link>
          <Link to="/list/sitcoms" onClick={reset} className="links quiz-link">
            90's Sitcoms Quiz
          </Link>
          <Link to="/list/music" onClick={reset} className="links quiz-link">
            90's Music Quiz
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;
