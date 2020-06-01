import React from "react";
import BlinkingLightOnButton from "./BlinkingLightOnButton";
import BlinkingLightOnDiv from "./BlinkingLightOnDiv";

import { Container, Row, Col } from "react-bootstrap";

const App = () => (
  <Container>
    <Row className="mt-3">
      <Col>
        <BlinkingLightOnButton />
      </Col>
    </Row>
    <Row className="mt-3 mb-3">
      <Col>
        <BlinkingLightOnDiv />
      </Col>
    </Row>
  </Container>
);

export default App;
