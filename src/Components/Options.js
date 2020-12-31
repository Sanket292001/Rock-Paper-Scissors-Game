import React, { useState, useContext, useEffect } from "react";

//Context
import { MainContext } from "../Context/MainContext";

// reactstrap Components
import { Container, Card, CardBody, Col, Row } from "reactstrap";

// Sections
import UserSection from "../Sections/UserSection";
import ComputerSection from "../Sections/ComputerSection";

const Options = () => {
  const Context = useContext(MainContext);
  return (
    <Container className="text-center" style={{ padding: `20px` }}>
      <Row style={{ display: `flex`, justifyContent: `space-around` }}>
        <h4>{Context.winnerName}</h4>
      </Row>
      <Row
        style={{
          display: `flex`,
          justifyContent: `space-around`,
          marginTop: `10px`,
        }}
      >
        <Col>
          <h4>User Section</h4>
        </Col>
        <Col>
          <h4>Computer Section</h4>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <UserSection />
        </Col>
        <Col xs="6">
          <ComputerSection />
        </Col>
      </Row>
    </Container>
  );
};

export default Options;
