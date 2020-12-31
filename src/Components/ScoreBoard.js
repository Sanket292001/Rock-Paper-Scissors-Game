import React, { useState, useContext } from "react";

// Context
import { MainContext } from "../Context/MainContext";

// reactstrap Components
import { Container, Row, Col } from "reactstrap";

const ScoreBoard = () => {
  const Context = useContext(MainContext);
  return (
    <Container fluid className="text-center" style={{ height: `25%` }}>
      <h1 className="mb-4">Score Board</h1>
      <Row className="text-center">
        <Col xs={4} className="offset-2">
          <h3 className="mb2">User</h3>
          <h1>{Context.userScore}</h1>
        </Col>
        <Col xs={4}>
          <h3>Computer</h3>
          <h1>{Context.compScore}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ScoreBoard;
