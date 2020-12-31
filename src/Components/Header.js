import React from "react";
import { Container, Row, Col } from "reactstrap";

import ResultStatus from "./ResultStatus";
import ScoreBoard from "./ScoreBoard";

const Header = () => {
  return (
    <Container fluid style={{ background: `#f9f9f9`, color: `#000` }}>
      <Row>
        <Col>
          <ScoreBoard />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
