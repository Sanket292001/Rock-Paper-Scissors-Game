import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import { toast } from "react-toastify";

const HistorySection = () => {
  const { userScoreHistoryList, setUserScoreHistoryList } = useContext(
    MainContext
  );
  const clearHistory = () => {
    try {
      if (localStorage.getItem("HistoryList")) {
        localStorage.removeItem("HistoryList");
        setUserScoreHistoryList([]);
        return toast("History Cleared Successfully..!", { type: "success" });
      } else {
        return toast("History Not Present..!", { type: "info" });
      }
    } catch (err) {
      return toast("History Cleared Unsuccessfully..!", { type: "error" });
    }
  };

  // console.log(userScoreHistoryList);
  return (
    <div className="history-container">
      <div className="history-heading">
        <span>History</span>
        <i
          className="fas fa-trash-alt"
          onClick={clearHistory}
          style={{ cursor: "pointer" }}
        >
          Clear All
        </i>
      </div>
      <table
        className="history-table"
        border="2"
        style={{ textAlign: "center" }}
      >
        <tbody>
          <tr>
            <th>Sr. No</th>
            <th>User Score</th>
            <th>Computer Score</th>
            <th>Date</th>
          </tr>
          {userScoreHistoryList.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.userScore}</td>
              <td>{item.compScore}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistorySection;
