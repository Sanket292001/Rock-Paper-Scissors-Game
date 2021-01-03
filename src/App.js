import React, { useState, useEffect } from "react";

//Context
import { MainContext } from "./Context/MainContext";

// Components
import Options from "./Components/Options";
import Header from "./Components/Header";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [winnerName, setWinnerName] = useState(
    "Please select ROCK, PAPER or SCISSOR.."
  );
  const [userSelectedOption, setUserSelectedOption] = useState("-");
  const [compSelectedOption, setCompSelectedOption] = useState("-");
  const [compScore, setCompScore] = useState(0);
  const [userScore, setUserScore] = useState(0);

  useEffect(() => {
    if (
      localStorage.getItem("UserScore") &&
      localStorage.getItem("CompScore")
    ) {
      setUserScore(parseInt(localStorage.getItem("UserScore")));
      setCompScore(parseInt(localStorage.getItem("CompScore")));
      console.log("Local Storage Present");
    } else {
      console.log("Local Storage Not Present");
    }
  }, []);
  return (
    <div>
      <MainContext.Provider
        value={{
          winnerName,
          userSelectedOption,
          compSelectedOption,
          compScore,
          userScore,
          setWinnerName,
          setUserSelectedOption,
          setCompSelectedOption,
          setCompScore,
          setUserScore,
        }}
      >
        <Header />
        <Options />
      </MainContext.Provider>
    </div>
  );
}

export default App;
