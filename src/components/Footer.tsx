import { Box, Flex, Theme, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useTheme } from "@chakra-ui/react";
import {
  GrReactjs,
  GrLinkedin,
  GrGithub,
  GrMail,
  GrInstagram,
} from "react-icons/gr";
import Divider from "./Divider";

interface FooterProps {
  setOpenContact: (open: boolean) => void;
}

export default function Footer({ setOpenContact }: FooterProps) {
  const { colors } = useTheme();

  const colorModeValue = useColorModeValue(
    colors.yellow[300],
    colors.gray[700],
  );

  return (
    <Box
      as="footer"
      bg={colorModeValue}
      pos="relative"
      w="full"
      py={20}
      marginTop="-1rem !important"
    >
      <Divider color={colorModeValue} invert />
      <Flex justify="center" gap={5}>
        <a
          href="https://www.linkedin.com/in/chris-haupt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrLinkedin size="2rem" color="white" />
        </a>
        <a
          href="https://www.github.com/erasebegin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrGithub size="2rem" color="white" />
        </a>
        <a
          href="https://www.instagram.com/christhaupt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrInstagram size="2rem" color="white" />
        </a>

        <Box as="button" onClick={() => setOpenContact(true)} cursor="pointer">
          <GrMail size="2rem" color="white" />
        </Box>
      </Flex>
      <FooterTextContainer>
        <p>
          Created using <b>React</b>
        </p>
        <GrReactjs size="2rem" />
        <p>
          Check out the source over on{" "}
          <a
            href="https://github.com/erasebegin/portfolio-2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </FooterTextContainer>
    </Box>
  );
}

const FooterTextContainer = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  color: white;

  p {
    margin-bottom: 0;
  }

  svg {
    margin: 0 0.5rem;
    color: ${(props) => props.theme.colors.white};
  }

  a {
    color: ${(props) => props.theme.colors.yellow};
  }

  @media (max-width: 700px) {
    flex-direction: column;

    svg {
      display: none;
    }
  }
`;
