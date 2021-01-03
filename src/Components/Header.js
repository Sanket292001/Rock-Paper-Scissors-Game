import React from "react";
import { Container } from "reactstrap";

import ScoreBoard from "./ScoreBoard";

const Header = () => {
  return (
    <Container className="header" fluid={true}>
      <ScoreBoard />
    </Container>
  );
};

export default Header;
