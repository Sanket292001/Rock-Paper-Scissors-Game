import React, { useState, useContext } from "react";

// MainContext
import { MainContext } from "../Context/MainContext";

const UserSection = () => {
  const Context = useContext(MainContext);

  // useEffect(() => {
  //   if (Context.winnerName === "User") {
  //     Context.setUserScore(Context.userScore + 1);
  //   } else if (Context.winnerName === "Computer") {
  //     Context.setCompScore(Context.compScore + 1);
  //   }
  // }, [result]);

  const handleClick = (userOptName) => {
    // console.log("Clicked");
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
      Context.setWinnerName("Tie");
    } else if (userOptName === "ROCK" && compOptName === "SCISSOR") {
      Context.setWinnerName("User");
      Context.setUserScore(Context.userScore + 1);
    } else if (userOptName === "ROCK" && compOptName === "PAPER") {
      Context.setWinnerName("Computer");
      Context.setCompScore(Context.compScore + 1);
    } else if (userOptName === "PAPER" && compOptName === "ROCK") {
      Context.setWinnerName("User");
      Context.setUserScore(Context.userScore + 1);
    } else if (userOptName === "PAPER" && compOptName === "SCISSOR") {
      Context.setWinnerName("Computer");
      Context.setCompScore(Context.compScore + 1);
    } else if (userOptName === "SCISSOR" && compOptName === "PAPER") {
      Context.setWinnerName("User");
      Context.setUserScore(Context.userScore + 1);
    } else if (userOptName === "SCISSOR" && compOptName === "ROCK") {
      Context.setWinnerName("Computer");
      Context.setCompScore(Context.compScore + 1);
    } else {
      Context.setWinnerName("-");
    }

    Context.setUserSelectedOption(`${userOptName}`);
    Context.setCompSelectedOption(`${compOptName}`);
  };

  const [userImage, setUserImage] = useState(null);
  return (
    <div className="user-section-container">
      <h4>User</h4>
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
            src={process.env.PUBLIC_URL + "/Images/scissor_new.jpg"}
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
