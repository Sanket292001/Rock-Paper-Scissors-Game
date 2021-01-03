import React, { useState, useContext, useEffect } from "react";

// MainContext
import { MainContext } from "../Context/MainContext";

const UserSection = () => {
  const Context = useContext(MainContext);
  const [result, setResult] = useState("-");

  useEffect(() => {
    // result = result;
    if (Context.winnerName === "User") {
      Context.setUserScore(Context.userScore + 1);
    } else if (Context.winnerName === "Computer") {
      Context.setCompScore(Context.compScore + 1);
    }
    // console.log(result);
  }, [result]);

  const handleClick = (userOptName) => {
    const compID = Math.floor(Math.random() * 3) + 1;
    let compOptName = "";
    switch (compID) {
      case 1:
        compOptName = "ROCK";
        break;
      case 2:
        compOptName = "PAPER";
        break;
      case 3:
        compOptName = "SCISSOR";
        break;
      default:
        break;
    }

    // console.log(`User - ${userOptName} and Comp - ${compOptName}`);

    if (userOptName === compOptName) {
      setResult(`User - ${userOptName} and Comp - ${compOptName}`);
      Context.setWinnerName("Tie");
      Context.setUserSelectedOption(`${userOptName}`);
      Context.setCompSelectedOption(`${compOptName}`);
    } else if (userOptName === "ROCK" && compOptName === "SCISSOR") {
      setResult(`User - ${userOptName} and Computer - ${compOptName} `);
      Context.setWinnerName("User");
      Context.setUserSelectedOption(`${userOptName}`);
      Context.setCompSelectedOption(`${compOptName}`);
    } else if (userOptName === "ROCK" && compOptName === "PAPER") {
      setResult(`User - ${userOptName} and Computer - ${compOptName}  `);
      Context.setWinnerName("Computer");
      Context.setUserSelectedOption(`${userOptName}`);
      Context.setCompSelectedOption(`${compOptName}`);
    } else if (userOptName === "PAPER" && compOptName === "ROCK") {
      setResult(`User - ${userOptName} and Computer - ${compOptName} `);
      Context.setWinnerName("User");
      Context.setUserSelectedOption(`${userOptName}`);
      Context.setCompSelectedOption(`${compOptName}`);
    } else if (userOptName === "PAPER" && compOptName === "SCISSOR") {
      setResult(`User - ${userOptName} and Computer - ${compOptName}  `);
      Context.setWinnerName("Computer");
      Context.setUserSelectedOption(`${userOptName}`);
      Context.setCompSelectedOption(`${compOptName}`);
    } else if (userOptName === "SCISSOR" && compOptName === "PAPER") {
      setResult(`User - ${userOptName} and Computer - ${compOptName} `);
      Context.setWinnerName("User");
      Context.setUserSelectedOption(`${userOptName}`);
      Context.setCompSelectedOption(`${compOptName}`);
    } else if (userOptName === "SCISSOR" && compOptName === "ROCK") {
      setResult(`User - ${userOptName} and Computer - ${compOptName}  `);
      Context.setWinnerName("Computer");
      Context.setUserSelectedOption(`${userOptName}`);
      Context.setCompSelectedOption(`${compOptName}`);
    } else {
      Context.setWinnerName("-");
    }
  };

  const [userImage, setUserImage] = useState(null);
  return (
    <div className="user-section-container">
      <h4>User Section</h4>
      <div className="user-section">
        <div className="user-section-images">
          <img
            src={process.env.PUBLIC_URL + "/Images/rock.jpg"}
            name="ROCK"
            alt="rock_image"
            onClick={(e) => {
              handleClick(e.target.name);
              setUserImage(e.target.src);
            }}
            width="100%"
            height="25%"
          />
          <img
            src={process.env.PUBLIC_URL + "/Images/paper.jpg"}
            name="PAPER"
            alt="paper_image"
            onClick={(e) => {
              handleClick(e.target.name);
              setUserImage(e.target.src);
            }}
            width="100%"
            height="25%"
          />
          <img
            src={process.env.PUBLIC_URL + "/Images/scissor.jpg"}
            name="SCISSOR"
            alt="scissor_image"
            onClick={(e) => {
              handleClick(e.target.name);
              setUserImage(e.target.src);
            }}
            width="100%"
            height="25%"
          />
        </div>
        <div className="user-section-main-image" xs="9">
          {Context.winnerName === "Please select ROCK, PAPER or SCISSOR.." ? (
            <img
              className="selected-image"
              src={process.env.PUBLIC_URL + "/Images/blank.jpg"}
              alt="user_selected_image"
              width="90%"
              height="280px"
            />
          ) : (
            <img
              className="selected-image"
              src={userImage}
              alt="user_selected_image"
              width="90%"
              height="280px"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSection;
