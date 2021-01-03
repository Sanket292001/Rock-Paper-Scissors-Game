import React, { useContext } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
// Context
import { MainContext } from "../Context/MainContext";

const ScoreBoard = () => {
  const Context = useContext(MainContext);

  const handleSave = (e) => {
    try {
      const date = new Date();
      const dateStr = date.toString().split(" ").slice(0, 5).join(" ");

      const data = {
        id: nanoid(36),
        userScore: Context.userScore,
        compScore: Context.compScore,
        date: "" + dateStr,
      };

      Context.setUserScoreHistoryList([...Context.userScoreHistoryList, data]);
      localStorage.setItem("UserScore", Context.userScore);
      localStorage.setItem("CompScore", Context.compScore);
      localStorage.setItem(
        "HistoryList",
        JSON.stringify([...Context.userScoreHistoryList, data])
      );

      return toast("Score Saved Successfully..!", { type: "success" });
    } catch (err) {
      return toast("Score Saved unsuccessfully..!", { type: "err" });
    }
  };

  const handleReset = (e) => {
    try {
      localStorage.removeItem("UserScore");
      localStorage.removeItem("CompScore");

      Context.setWinnerName("Please select ROCK, PAPER or SCISSOR..");
      Context.setUserScore(0);
      Context.setCompScore(0);

      return toast("Score Removed Successfully..!", { type: "success" });
    } catch (err) {
      return toast("Score Removed Unsuccessfully..!", { type: "error" });
    }
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
      <div className="scoreboard-footer">
        <button onClick={(e) => handleSave(e)}>Save</button>
        <button onClick={(e) => handleReset(e)}>Reset</button>
      </div>
    </div>
  );
};

export default ScoreBoard;
