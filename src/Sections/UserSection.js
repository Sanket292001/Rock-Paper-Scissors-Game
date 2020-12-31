import React, { useState, useContext, useEffect } from "react";

import { Row, Col, Container } from "reactstrap";

// MainContext
import { MainContext } from "../Context/MainContext";
// Images
import rock from "../Images/rock.jpg";
import paper from "../Images/paper.jpg";
import scissor from "../Images/scissor.jpg";

const UserSection = () => {
  const Context = useContext(MainContext);
  const [result, setResult] = useState("-");

  useEffect(() => {
    if (Context.winnerName === "User") {
      Context.setUserScore(Context.userScore + 1);
    } else if (Context.winnerName === "Computer") {
      Context.setCompScore(Context.compScore + 1);
    }
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
    }

    console.log(`User - ${userOptName} and Comp - ${compOptName}`);

    if (userOptName === compOptName) {
      setResult(`User - ${userOptName} and Comp - ${compOptName}`);
      Context.setWinnerName("Tie");
      Context.setUserSelectedOption(`${userOptName}`);
      Context.setCompSelectedOption(`${compOptName}`);
    } else if (userOptName === "ROCK" && compOptName == "SCISSOR") {
      setResult(`User - ${userOptName} and Computer - ${compOptName} `);
      Context.setWinnerName("User");
      Context.setUserSelectedOption(`${userOptName}`);
      Context.setCompSelectedOption(`${compOptName}`);
    } else if (userOptName === "ROCK" && compOptName == "PAPER") {
      setResult(`User - ${userOptName} and Computer - ${compOptName}  `);
      Context.setWinnerName("Computer");
      Context.setUserSelectedOption(`${userOptName}`);
      Context.setCompSelectedOption(`${compOptName}`);
    } else if (userOptName === "PAPER" && compOptName == "ROCK") {
      setResult(`User - ${userOptName} and Computer - ${compOptName} `);
      Context.setWinnerName("User");
      Context.setUserSelectedOption(`${userOptName}`);
      Context.setCompSelectedOption(`${compOptName}`);
    } else if (userOptName === "PAPER" && compOptName == "SCISSOR") {
      setResult(`User - ${userOptName} and Computer - ${compOptName}  `);
      Context.setWinnerName("Computer");
      Context.setUserSelectedOption(`${userOptName}`);
      Context.setCompSelectedOption(`${compOptName}`);
    } else if (userOptName === "SCISSOR" && compOptName == "PAPER") {
      setResult(`User - ${userOptName} and Computer - ${compOptName} `);
      Context.setWinnerName("User");
      Context.setUserSelectedOption(`${userOptName}`);
      Context.setCompSelectedOption(`${compOptName}`);
    } else if (userOptName === "SCISSOR" && compOptName == "ROCK") {
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
    <Row>
      <Col xs="3">
        <img
          src={rock}
          name="ROCK"
          onClick={(e) => {
            handleClick(e.target.name);
            setUserImage(e.target.src);
          }}
          width="100%"
          height="25%"
        />
        <img
          src={paper}
          name="PAPER"
          onClick={(e) => {
            handleClick(e.target.name);
            setUserImage(e.target.src);
          }}
          width="100%"
          height="25%"
        />
        <img
          src={scissor}
          name="SCISSOR"
          onClick={(e) => {
            handleClick(e.target.name);
            setUserImage(e.target.src);
          }}
          width="100%"
          height="25%"
        />
      </Col>
      <Col xs="9">
        {Context.winnerName === "Please select ROCK, PAPER or SCISSOR.." ? (
          <img />
        ) : (
          <img src={userImage} width="90%" height="280px" />
        )}
      </Col>
    </Row>
  );
};

export default UserSection;
