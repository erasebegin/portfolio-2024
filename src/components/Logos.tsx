import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useMediaQuery } from "@chakra-ui/react";

interface LogosProps {
  showLogos: boolean;
}

interface CircleArrangementProps {
  $show: boolean;
  $isMobile: boolean;
}

export default function Logos({ showLogos }: LogosProps) {
  const [isMobile] = useMediaQuery("(max-width: 48em)");

  const logoArr = [
    "firebase",
    "react",
    "graphql",
    "chakra",
    "next-js",
    "jira",
    "sass",
    "github",
    "vue",
    "nuxt",
  ];

  return (
    <CircleArrangement $show={showLogos} $isMobile={isMobile}>
      {logoArr.map((logo, idx) => (
        <li key={`tech-logo-${idx}`}>
          <img src={`/images/logos/${logo}.svg`} alt={`${logo} logo`} />
          <p>{logo}</p>
        </li>
      ))}
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
  let rotation = options?.half ? 133 : 0;
  let angle = options?.half ? 180 / itemCount : 360 / itemCount;
  let divideBy = options?.toggle ? 1.2 : 2;
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
      return generateCircleLayout(10, "190px", "35px", { toggle: props.$show });
    }
    return generateCircleLayout(10, "300px", "50px", { toggle: props.$show });
  }}

  list-style: none;
  padding: 0;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
