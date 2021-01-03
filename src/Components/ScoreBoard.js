import React, { useContext } from "react";

// Context
import { MainContext } from "../Context/MainContext";

const ScoreBoard = () => {
  const Context = useContext(MainContext);
  const handleSave = (e) => {
    // console.log("Save Button Pressed");
    localStorage.setItem("UserScore", Context.userScore);
    localStorage.setItem("CompScore", Context.compScore);
  };

  const handleReset = (e) => {
    // console.log("Reset Button Pressed");
    Context.setWinnerName("Please select ROCK, PAPER or SCISSOR..");
    Context.setUserScore(0);
    Context.setCompScore(0);
    localStorage.removeItem("UserScore");
    localStorage.removeItem("CompScore");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="mb-4 scoreboard-header-text">Score Board</h1>
      <div className="scoreboard-score-container">
        <div className="user-score">
          <h3 className="mb2">User</h3>
          <h1>{Context.userScore}</h1>
        </div>
        <div className="computer-score">
          <h3>Computer</h3>
          <h1>{Context.compScore}</h1>
        </div>
      </div>
      <div className="scoreboard-header">
        <button onClick={(e) => handleSave(e)}>Save</button>
        <button onClick={(e) => handleReset(e)}>Reset</button>
      </div>
    </div>
  );
};

export default ScoreBoard;
