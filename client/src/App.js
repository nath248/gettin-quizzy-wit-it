import './App.css';
import { useEffect, useState } from "react";
import { grabQuestions } from "./services/index";
import Questions from './components/Questions';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <Header />
      <Homepage />
      <Questions questions={questions} />
      <Footer />
    </div>
  );
}

export default App;
