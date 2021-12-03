import './App.css';
import { useEffect, useState } from "react";
import { grabQuestions } from "./services/index";
import Questions from './components/Questions';

function App() {

  const [questions, setQuestions] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getQuestions = async () => {
      const res = await grabQuestions();
      setQuestions(res);
    }
    getQuestions();
  }, [toggle])

  return (
    <div className="App">
      <Questions questions={questions} />
    </div>
  );
}

export default App;
