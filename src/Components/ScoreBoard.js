import React, { useContext } from "react";

// Context
import { MainContext } from "../Context/MainContext";

const ScoreBoard = () => {
  const Context = useContext(MainContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="mb-4 scoreboard-header">Score Board</h1>
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
    </div>
  );
};

export default ScoreBoard;
