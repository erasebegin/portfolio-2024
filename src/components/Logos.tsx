import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useMediaQuery, Text, Box } from "@chakra-ui/react";
import { logoArr } from "../data/logos";
import { useState } from "react";
import { kebabToTitleCase } from "../utils";

interface LogosProps {
  showLogos: boolean;
}

interface CircleArrangementProps {
  $show: boolean;
  $isMobile: boolean;
  $totalLogos: number;
}

export default function Logos({ showLogos }: LogosProps) {
  const [isMobile] = useMediaQuery("(max-width: 48em)");
  const [currentHovered, setCurrentHovered] = useState<string>();
  const totalNumberOfLogos = logoArr?.length || 0;

  return (
    <CircleArrangement
      $show={showLogos}
      $isMobile={isMobile}
      $totalLogos={totalNumberOfLogos}
    >
      {logoArr.map((logo, idx) => {
        return (
          <li key={`tech-logo-${idx}`}>
            <Box
              pos="relative"
              onMouseOver={() => setCurrentHovered(logo)}
              onMouseOut={() => setCurrentHovered("")}
            >
              <img src={`/images/logos/${logo}.svg`} alt={`${logo} logo`} />
              <Text
                pointerEvents="none"
                pos="absolute"
                opacity={logo === currentHovered ? 1 : 0}
                transition="200ms ease-in"
                bg="green.100"
                left={idx < totalNumberOfLogos / 2 ? "-50%" : "50%"}
                bottom="-40px"
                rounded="md"
                px={2}
              >
                {kebabToTitleCase(logo)}
              </Text>
            </Box>
          </li>
        );
      })}
    </CircleArrangement>
  );
}

interface GenerateCircleLayoutOptions {
  half?: boolean;
  toggle?: boolean;
}

function generateCircleLayout(
  itemCount: number,
  circleSize: string,
  itemSize: string,
  options?: GenerateCircleLayoutOptions,
) {
  let rotation = options?.half ? 127 : 20;
  const angle = options?.half ? 180 / itemCount : 360 / itemCount;
  const divideBy = options?.toggle ? 1.2 : 2;
  let transformationString = "";

  for (let i = 0; i < itemCount + 1; i++) {
    rotation += angle;
    transformationString += `
      &:nth-of-type(${i}) {
        transform: rotate(${rotation}deg) translate(${
          parseInt(circleSize) / divideBy
        }px) rotate(${rotation * -1}deg);
        transition: 200ms;
      }
    `;
  }

  return css`
    width: ${circleSize};
    height: ${circleSize};

    img {
      width: ${itemSize};
      height: ${itemSize};

      &:hover {
        transform: scale(1.2);
        transition: 200ms ease-in-out;
      }
    }

    > * {
      display: block;
      position: absolute;
      top: 33%;
      left: 33%;
      margin: ${parseInt(itemSize) / 2}px;
      ${transformationString}
    }

    p {
      font-size: 1rem;
      white-space: nowrap;
    }
  `;
}

const CircleArrangement = styled.ul<CircleArrangementProps>`
  ${(props) => {
    if (props.$isMobile) {
      return generateCircleLayout(props.$totalLogos, "190px", "35px", {
        toggle: props.$show,
      });
    }
    return generateCircleLayout(props.$totalLogos, "250px", "50px", {
      toggle: props.$show,
    });
  }}

  list-style: none;
  padding: 0;
  border-radius: 50%;
  position: absolute;
  left: 47%;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
