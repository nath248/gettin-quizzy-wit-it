import "./App.css";
import { useEffect, useState } from "react";
import { grabQuestions } from "./services/index";
import { Routes, Route } from "react-router-dom";
import Questions from "./components/Questions";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const [questions, setQuestions] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getQuestions = async () => {
      const res = await grabQuestions();
      setQuestions(res);
    };
    getQuestions();
  }, [toggle]);

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="logo-img-div height">
          <img
            src="https://i.ibb.co/QDrJQys/logo-bkg.png"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="details">
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  questions={questions}
                  setScore={setScore}
                  setTotal={setTotal}
                />
              }
            />
            <Route
              path="/list/:category"
              element={
                <Questions
                  questions={questions}
                  index={index}
                  setIndex={setIndex}
                  score={score}
                  setScore={setScore}
                  total={total}
                  setTotal={setTotal}
                />
              }
            />
            <Route path="/new" element={<Form setToggle={setToggle} />} />
            <Route
              path="/results"
              element={
                <Results
                  score={score}
                  total={total}
                  setScore={setScore}
                  setTotal={setTotal}
                />
              }
            />
          </Routes>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
