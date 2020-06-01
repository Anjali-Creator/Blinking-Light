import React, { useState } from "react";
import BlinkingLight from "./BlinkingLight";
import { Controls, ControlsWrapper } from "./Controls";
import { Row, Col, Card } from "react-bootstrap";

const BlinkingLightOnDiv = () => {
  const [timer, setTimer] = useState(1);
  const [radius, setRadius] = useState(40);
  const [oncolor, setonColor] = useState("#FFF700");
  const [offcolor, setoffColor] = useState("#A69F9F");

  return (
    <Card>
      <Card.Header>Blinking Light on Div</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            {[
              {
                heading: "Div without background"
              },
              {
                heading: "Div with background",
                backgroundColor: "pink"
              }
            ].map(({ heading, backgroundColor }) => {
              return (
                <Row className="mb-3">
                  <Col className="text-center">
                    <p>{heading}</p>
                    <div style={{ backgroundColor }}>
                      <BlinkingLight
                        radius={radius}
                        colorOn={oncolor}
                        colorOff={offcolor}
                        time={timer}
                      />
                    </div>
                  </Col>
                </Row>
              );
            })}
          </Col>
          <ControlsWrapper>
            <Controls
              {...{
                timer,
                setTimer,
                radius,
                setRadius,
                oncolor,
                setonColor,
                offcolor,
                setoffColor
              }}
            />
          </ControlsWrapper>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default BlinkingLightOnDiv;
