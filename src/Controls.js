import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import styled from "styled-components";

export const ControlsWrapper = styled(Col)`
  border-left: 2px solid grey;
`;

export const Controls = ({
  timer,
  setTimer,
  radius,
  setRadius,
  oncolor,
  setonColor,
  offcolor,
  setoffColor
}) => (
  <>
    {[
      {
        label: "Radius:",
        type: "number",
        min: 1,
        value: radius,
        onChange: event => setRadius(event.target.value)
      },
      {
        label: "Time:",
        type: "number",
        min: "0.1",
        step: "0.1",
        value: timer,
        onChange: event => setTimer(event.target.value)
      },
      {
        label: "On Color:",
        type: "color",
        value: oncolor,
        onChange: event => setonColor(event.target.value)
      },
      {
        label: "Off Color:",
        type: "color",
        value: offcolor,
        onChange: event => setoffColor(event.target.value)
      }
    ].map(({ label, type, min, step, value, onChange }) => (
      <Form.Group as={Row}>
        <Form.Label column md={3}>
          {label}
        </Form.Label>
        <Col md={9}>
          <Form.Control
            type={type}
            min={min}
            value={value}
            onChange={onChange}
            step={step}
          />
        </Col>
      </Form.Group>
    ))}
  </>
);
