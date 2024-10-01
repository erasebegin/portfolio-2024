import { useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface BgBlurProps {
  show: boolean;
  onClick?: () => void;
  offset?: boolean;
}

export default function BgBlur({ show, onClick, offset }: BgBlurProps) {
  const bg = useColorModeValue("#ffffffAA", "#00000088");
  return (
    <StyledBgBlur $show={show} $bg={bg} $offset={offset} onClick={onClick} />
  );
}

interface StyledBgBlurProps {
  $show: boolean;
  $bg: string;
  $offset?: boolean;
}

const StyledBgBlur = styled.div<StyledBgBlurProps>`
  position: fixed;
  height: 100%;
  width: 100%;
  inset: ${(props) => (props.$offset ? "-2rem" : 0)} 0 0 0;
  opacity: 0;
  background: ${(props) => props.$bg};
  backdrop-filter: blur(2px);
  z-index: 10;
  pointer-events: none;
  transition: opacity 200ms ease-in;

  ${(props) =>
    props.$show &&
    `
      opacity: 1;
      pointer-events: initial;
      transition: opacity 200ms ease-in;
  `};
`;
