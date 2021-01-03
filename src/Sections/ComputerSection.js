import React, { useContext, useState, useEffect } from "react";

import { MainContext } from "../Context/MainContext";

const ComputerSection = () => {
  const Context = useContext(MainContext);
  const [compImage, setCompImage] = useState(null);

  useEffect(() => {
    if (Context.compSelectedOption === "ROCK") {
      setCompImage("ROCK");
      // console.log("ROCK is selected");
    } else if (Context.compSelectedOption === "PAPER") {
      setCompImage("PAPER");
    } else if (Context.compSelectedOption === "SCISSOR") {
      setCompImage("SCISSOR");
    }
  }, [Context.compSelectedOption]);
  return (
    <div className="computer-section-container">
      <h4>Computer</h4>

      <div className="computer-section">
        {Context.winnerName === "Please select ROCK, PAPER or SCISSOR.." ? (
          <img
            className="selected-image"
            src={process.env.PUBLIC_URL + "/Images/blank.jpg"}
            alt="comp_selected_image"
            width="90%"
            height="280px"
          />
        ) : compImage === "ROCK" ? (
          <img
            className="selected-image"
            src={process.env.PUBLIC_URL + "/Images/rock.jpg"}
            alt="rock_image"
            width="90%"
            height="280px"
          />
        ) : compImage === "PAPER" ? (
          <img
            className="selected-image"
            src={process.env.PUBLIC_URL + "/Images/paper.jpg"}
            alt="paper_image"
            width="90%"
            height="280px"
          />
        ) : compImage === "SCISSOR" ? (
          <img
            className="selected-image"
            src={process.env.PUBLIC_URL + "/Images/scissor.jpg"}
            alt="scissors_image"
            width="90%"
            height="280px"
          />
        ) : (
          <img
            className="selected-image"
            src={process.env.PUBLIC_URL + "/Images/blank.jpg"}
            alt="user_selected_image"
            width="90%"
            height="280px"
          />
        )}
      </div>
    </div>
  );
};

export default ComputerSection;
