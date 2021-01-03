import React from "react";
import { Container } from "reactstrap";

import ScoreBoard from "./ScoreBoard";

const Header = () => {
  return (
    <Container fluid style={{ background: `#f9f9f9`, color: `#000` }}>
      <ScoreBoard />
    </Container>
  );
};

export default Header;
