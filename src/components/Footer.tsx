import {
  Box,
  Flex,
  Theme,
  useColorModeValue,
  Text,
  Link,
} from "@chakra-ui/react";
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
import { getDividerColor } from "../utils";

interface FooterProps {
  setOpenContact: (open: boolean) => void;
}

export default function Footer({ setOpenContact }: FooterProps) {
  const theme = useTheme();
  const shade = useColorModeValue("light", "dark");

  const chakraDividerColor = getDividerColor(
    "yellow",
    shade === "light" ? "100" : "800",
    theme,
  );

  return (
    <Box
      as="footer"
      bg={shade === "light" ? "yellow.400" : "gray.700"}
      pos="relative"
      w="full"
      pt={32}
      pb={20}
      marginTop="-1rem !important"
    >
      <Divider chakraProps={{ color: chakraDividerColor }} />
      <Flex justify="center" gap={5} pb={10}>
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
      <Flex justify="center" align="center" mt={3}>
        <Text mb={0}>
          Created using{" "}
          <strong style={{ color: theme.colors.reactBlue }}>React</strong>
        </Text>
        <Box mx={1}>
          <GrReactjs size="2rem" color={theme.colors.reactBlue} />
        </Box>
        <Text>
          Check out the source over on{" "}
          <Link
            href="https://github.com/erasebegin/portfolio-2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </Text>
      </Flex>
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
