import { Link } from "react-router-dom";

function Results(props) {


  return (
    <div>
      <h1>Results</h1>
      <p>You got {props.score} correct</p>
      <p>Want to add questions to this quiz? Click ADD below.</p>
      <Link to="/new">ADD</Link>
    </div>
  )
}

export default Results;
