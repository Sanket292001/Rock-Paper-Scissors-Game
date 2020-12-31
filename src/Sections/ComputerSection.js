import React, { useContext, useState, useEffect } from "react";
import { Row, Col } from "reactstrap";

import { MainContext } from "../Context/MainContext";
// Images
import rock from "../Images/rock.jpg";
import paper from "../Images/paper.jpg";
import scissor from "../Images/scissor.jpg";

const ComputerSection = () => {
  const Context = useContext(MainContext);
  const [compImage, setCompImage] = useState(null);

  useEffect(() => {
    if (Context.compSelectedOption === "ROCK") {
      setCompImage("ROCK");
      console.log("ROCK is selected");
    } else if (Context.compSelectedOption === "PAPER") {
      setCompImage("PAPER");
    } else if (Context.compSelectedOption === "SCISSOR") {
      setCompImage("SCISSOR");
    }
  }, [Context.compSelectedOption]);
  return (
    <Row style={{ display: `flex`, justifyContent: `space-around` }}>
      <Col xs="9">
        {compImage === "ROCK" ? (
          <img src={rock} width="90%" height="280px" />
        ) : compImage === "PAPER" ? (
          <img src={paper} width="90%" height="280px" />
        ) : compImage === "SCISSOR" ? (
          <img src={scissor} width="90%" height="280px" />
        ) : (
          <img />
        )}
      </Col>
      {/* <Col xs="3">
        <img src={rock} width="100%" height="25%" />
        <img src={paper} width="100%" height="25%" />
        <img src={scissor} width="100%" height="25%" />
      </Col> */}
    </Row>
  );
};

export default ComputerSection;
