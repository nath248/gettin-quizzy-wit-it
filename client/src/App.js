import './App.css';
import { useEffect, useState } from "react";
import { grabQuestions } from "./services/index";
import { Routes, Route } from "react-router-dom";
import Questions from './components/Questions';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import Cartoons from "./components/Cartoons";
import Sitcoms from "./components/Sitcoms";
import Music from "./components/Music";

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
      <Routes>
        <Route path="/" element={<Homepage questions={questions} />} />
        <Route path="/list" element={<Questions questions={questions} />} />
        <Route path="/cartoon" element={<Cartoons questions={questions} />} />
        <Route path="/sitcom" element={<Sitcoms questions={questions} />} />
        <Route path="/music" element={<Music questions={questions} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
