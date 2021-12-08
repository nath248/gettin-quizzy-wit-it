import { Link } from "react-router-dom";
import Emoji from "./Emoji";

function Results(props) {
  const percent = (props.score / props.total) * 100;
  const reset = () => {
    props.setScore(0);
    props.setTotal(0);
  }

  return (
    <div className="results">
      <h1 className="layover res">Results</h1>
      <div className="results-content">
        {(percent > 0) ? 
          <p>{percent}%</p>
        :
          <p>0%</p>
        }
        {(percent >= 75) ?
          <p>Great Job! You're a Certified 90's Kid! <Emoji symbol="💯" /><Emoji symbol="🏆" /> You've got {props.score}/{props.total} questions correct</p>
         :
          <p>Better luck next time! <Emoji symbol="😧" /><Emoji symbol="😫" /><Emoji symbol="😭" /> You've got {props.score}/{props.total} questions correct</p>
        }
        
        <p>Want to add questions to this quiz? Click ADD below.</p>
        <Link to="/new" onClick={reset} className="links add-link">ADD</Link>
      </div>
    </div>
  )
}

export default Results;

// Resource for Emoji Set Up: https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7

