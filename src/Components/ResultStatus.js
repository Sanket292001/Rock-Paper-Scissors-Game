import React, { useState, useContext } from "react";

// Context
import { MainContext } from "../Context/MainContext";
import { Container, Row, Col } from "reactstrap";

const ResultStatus = () => {
  const Context = useContext(MainContext);

  return (
    <Container fluid className="text-center">
      <h1 className="mb-4">Result</h1>
      <Row>
        <Col>
          <h3>User</h3>
          <h4>{Context.userSelectedOption}</h4>
        </Col>
        <Col>
          <h3>Computer</h3>
          <h4>{Context.compSelectedOption}</h4>
        </Col>
        <Col>
          <h3>Winner</h3>
          <h4>{Context.winnerName}</h4>
        </Col>
      </Row>
      <h3>{Context.winnerStatus}</h3>
    </Container>
  );
};

export default ResultStatus;
