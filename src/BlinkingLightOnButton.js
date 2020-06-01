import React, { useState } from "react";
import BlinkingLight from "./BlinkingLight";
import { Controls, ControlsWrapper } from "./Controls";
import styled from "styled-components";
import { Row, Col, Card, Button } from "react-bootstrap";

const ButtonWrapper = styled.div`
  margin-bottom: 3px;
`;

const BlinkingLightOnButton = () => {
  const buttonVariants = ["success", "danger", "warning", "info", "dark"];

  const [timer, setTimer] = useState(1);
  const [radius, setRadius] = useState(5);
  const [oncolor, setonColor] = useState("#00FF00");
  const [offcolor, setoffColor] = useState("#FF0000");
  const ButtonWithLeftIcon = () => (
    <>
      <p>
        Button with <mark>left</mark> icon
      </p>
      {buttonVariants.map(variant => (
        <ButtonWrapper>
          <Button variant={variant}>
            <div>
              <BlinkingLight
                radius={radius}
                colorOn={oncolor}
                colorOff={offcolor}
                time={timer}
              />{" "}
              <span>Button - {variant}</span>
            </div>
          </Button>
        </ButtonWrapper>
      ))}
    </>
  );

  const ButtonWithRightIcon = () => (
    <>
      <p>
        Button with <mark>right</mark> icon
      </p>
      {buttonVariants.map(variant => (
        <ButtonWrapper>
          <Button variant={variant}>
            <div>
              <span>Button - {variant}</span>{" "}
              <BlinkingLight
                radius={radius}
                colorOn={oncolor}
                colorOff={offcolor}
                time={timer}
              />
            </div>
          </Button>
        </ButtonWrapper>
      ))}
    </>
  );
  return (
    <Card>
      <Card.Header>Blinking Light on Button</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Row>
              <Col>
                <ButtonWithLeftIcon />
              </Col>
              <Col>
                <ButtonWithRightIcon />
              </Col>
            </Row>
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

export default BlinkingLightOnButton;
