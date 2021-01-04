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

      return toast("Score Saved Successfully..!", {
        type: "success",
        position: Context.positionVal,
      });
    } catch (err) {
      return toast("Score Saved unsuccessfully..!", {
        type: "err",
        position: Context.positionVal,
      });
    }
  };

  const handleReset = (e) => {
    try {
      if (
        localStorage.getItem("UserScore") &&
        localStorage.getItem("CompScore")
      ) {
        localStorage.removeItem("UserScore");
        localStorage.removeItem("CompScore");
        Context.setWinnerName("Please select ROCK, PAPER or SCISSOR..");
        Context.setUserScore(0);
        Context.setCompScore(0);
        return toast("Score Reset Successfully..!", {
          type: "success",
          position: Context.positionVal,
        });
      } else if (Context.userScore !== 0 || Context.compScore !== 0) {
        Context.setWinnerName("Please select ROCK, PAPER or SCISSOR..");
        Context.setUserScore(0);
        Context.setCompScore(0);
        return toast("Score Reset Successfully..!", {
          type: "success",
          position: Context.positionVal,
        });
      } else {
        return toast("No Score To Reset..!", {
          type: "warning",
          position: Context.positionVal,
        });
      }
    } catch (err) {
      return toast("Score Reset Unsuccessfully..!", {
        type: "error",
        position: Context.positionVal,
      });
    }
  };

  const handleHistory = (e) => {
    const body = document.querySelector("body");
    const historyContainer = document.querySelector(".history-container");
    historyContainer.style.left = "0%";
    body.style.overflow = "hidden";
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
        <button onClick={(e) => handleHistory(e)}>History</button>
      </div>
    </div>
  );
};

export default ScoreBoard;
