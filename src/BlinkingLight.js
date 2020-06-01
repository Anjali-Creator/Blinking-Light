import React from "react";
import styled, { keyframes } from "styled-components";

const BlinkingCircle = ({ className, radius = 5 }) => {
  const size = radius * 2;

  return (
    <svg className={className} height={size} width={size}>
      <g>
        <circle className="bulb" cx={radius} cy={radius} r={radius} />
      </g>
    </svg>
  );
};

const animation = ({ colorOn = "yellow", colorOff = "grey" }) => keyframes`
  0%,49% {
    fill: ${colorOn};
  }
  50%,100% {
    fill: ${colorOff};
  }`;

const BlinkingLight = styled(BlinkingCircle)`
  display: inline;
  vertical-align: middle;
  circle.bulb {
    animation: ${props => animation(props)}
      ${props => (props.time ? `${props.time}s` : "1s")} infinite;
  }
`;

export default BlinkingLight;
