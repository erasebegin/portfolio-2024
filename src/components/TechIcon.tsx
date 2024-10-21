import { useState } from "react";
import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";
import { kebabToTitleCase } from "../utils";

interface IconProps {
  type: string;
  labelColor: string;
  labelTop?: boolean;
}

export default function Icon({ type, labelColor, labelTop = true }: IconProps) {
  const [show, setShow] = useState(false);

  return (
    <IconContainer
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      show={show}
      labelTop={labelTop}
    >
      <img src={`./images/logos/${type}.svg`} alt={`${type} icon`} />
      <Text bg={labelColor}>{kebabToTitleCase(type)}</Text>
    </IconContainer>
  );
}

interface IconContainerProps {
  show: boolean;
  labelTop: boolean;
}

const IconContainer = styled.div<IconContainerProps>`
  position: relative;

  img {
    max-height: 50px;
    max-width: 85px;
    margin: auto;

    @media (max-width: 500px) {
      max-height: 40px;
      max-width: 75px;
    }
  }

  p {
    font-size: 0.75rem;
    position: absolute;
    top: ${({ labelTop }) => (labelTop ? "-3rem" : "unset")};
    bottom: ${({ labelTop }) => (labelTop ? "unset" : "-3rem")};
    left: 50%;
    transform: translateX(-50%);
    color: white;
    padding: 0.5rem;
    padding-bottom: 0.5rem !important;
    border-radius: 0.5rem;
    transition: opacity 200ms;
    white-space: nowrap;

    @media (max-width: 500px) {
      font-size: 1rem;
    }

    ${({ show }) =>
      !show &&
      `
      opacity: 0;
      pointer-events: none;
    `};
  }
`;
