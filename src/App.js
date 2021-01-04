import React, { useState, useEffect } from "react";

//Context
import { MainContext } from "./Context/MainContext";

// Components
import Options from "./Components/Options";
import Header from "./Components/Header";
import { ToastContainer, toast } from "react-toastify";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HistorySection from "./Sections/HistorySection";

function App() {
  const [winnerName, setWinnerName] = useState(
    "Please select ROCK, PAPER or SCISSOR.."
  );
  const [userSelectedOption, setUserSelectedOption] = useState("-");
  const [compSelectedOption, setCompSelectedOption] = useState("-");
  const [compScore, setCompScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [userScoreHistoryList, setUserScoreHistoryList] = useState([]);
  const [positionVal, setPositionVal] = useState(toast.POSITION.TOP_RIGHT);

  useEffect(() => {
    if (
      localStorage.getItem("UserScore") &&
      localStorage.getItem("CompScore")
    ) {
      setUserScore(parseInt(localStorage.getItem("UserScore")));
      setCompScore(parseInt(localStorage.getItem("CompScore")));
      // console.log("Scores are Present");
    } else {
      // console.log("Scores are not Present");
    }

    if (localStorage.getItem("HistoryList")) {
      setUserScoreHistoryList(JSON.parse(localStorage.getItem("HistoryList")));
      // console.log("HistoryList is Present");
    } else {
      // console.log("HistoryList is not Present");
    }
  }, []);

  // resizeObserver
  const resizeObserver = new ResizeObserver(() => {
    if (window.innerWidth < 700) {
      setPositionVal(toast.POSITION.BOTTOM_RIGHT);
    } else {
      setPositionVal(toast.POSITION.TOP_RIGHT);
    }
  });

  resizeObserver.observe(document.querySelector("body"));

  return (
    <div>
      <MainContext.Provider
        value={{
          winnerName,
          userSelectedOption,
          compSelectedOption,
          compScore,
          userScore,
          userScoreHistoryList,
          positionVal,
          setWinnerName,
          setUserSelectedOption,
          setCompSelectedOption,
          setCompScore,
          setUserScore,
          setUserScoreHistoryList,
        }}
      >
        <Header />
        <Options />
        <HistorySection />
        <ToastContainer />
      </MainContext.Provider>
    </div>
  );
}

export default App;
