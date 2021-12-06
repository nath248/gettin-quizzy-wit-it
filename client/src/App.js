import './App.css';
import { useEffect, useState } from "react";
import { grabQuestions } from "./services/index";
import { Routes, Route } from "react-router-dom";
import Questions from './components/Questions';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';


function App() {

  const [questions, setQuestions] = useState([]);
  const [toggle, setToggle] = useState(false);
  // const [index, setIndex] = useState(0);
  // const [question, setQuestion] = useState(null);

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
      <Routes>
        <Route path="/" element={<Homepage questions={questions} />} />
        <Route path="/list/:category" element={<Questions questions={questions} />} />
        <Route path="/new" element={<Form setToggle={setToggle} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
