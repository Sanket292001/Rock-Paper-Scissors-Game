import React, { useContext } from "react";

//Context
import { MainContext } from "../Context/MainContext";

// reactstrap Components
import { Container } from "reactstrap";

// Sections
import UserSection from "../Sections/UserSection";
import ComputerSection from "../Sections/ComputerSection";

const Options = () => {
  const Context = useContext(MainContext);
  return (
    <Container
      className="text-center "
      style={{ marginTop: `20px` }}
      fluid={true}
    >
      <div style={{ display: `flex`, justifyContent: `space-around` }}>
        <h4 className="options-main-text">
          {Context.winnerName !== "Please select ROCK, PAPER or SCISSOR.."
            ? "Round Winner - "
            : null}
          {Context.winnerName}
        </h4>
      </div>
      <div className="main-container">
        <UserSection />
        <ComputerSection />
      </div>
    </Container>
  );
};

export default Options;
