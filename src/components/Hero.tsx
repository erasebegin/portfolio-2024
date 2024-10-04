import { useState } from "react";
import { HiMail, HiCode, HiX } from "react-icons/hi";
import Divider from "./Divider";
import Logos from "./Logos";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/react";
import HeroSvg from "./HeroSvg";

interface HeroProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export default function Hero({ setIsOpen, isOpen }: HeroProps) {
  const [showLogos, setShowLogos] = useState<boolean>(false);

  const theme = useTheme();

  return (
    <Box minH="800px">
      <Divider color={theme.colors.blue[100]} />
      <Stack
        pt={[showLogos ? 15 : 0, showLogos ? 15 : 0, showLogos ? 150 : 50]}
        transition="200ms ease-in-out"
        pos="relative"
      >
        <HeroSvg
          side="left"
          display={["none", "none", "none", "initial"]}
          aria-label="frontend developer"
          pos="absolute"
          bottom="280px"
          left="300px"
          maxW="300px"
        />

        <HeroSvg
          side="right"
          display={["none", "none", "none", "initial"]}
          aria-label="morning person, javascript junkie"
          pos="absolute"
          bottom="160px"
          right="18%"
          maxW="300px"
        />

        <Flex
          align="center"
          justify="center"
          pos="relative"
          direction={["column", "column", "row"]}
        >
          <Button
            onClick={() => setShowLogos(!showLogos)}
            colorScheme="blue"
            pr={[3, 3, 50]}
            pt={[3, 3, 1]}
            pb={1}
            transform={[
              showLogos ? "translateY(103%)" : "translateY(35%)",
              showLogos ? "translateY(103%)" : "translateY(35%)",
              showLogos ? "translateX(100%)" : "translateX(2rem)",
            ]}
            zIndex="3"
            h={[120, 120, 10]}
          >
            <Flex
              gap={[1, 1, 3]}
              align="center"
              justify={["start", "start", "center"]}
              h="100%"
              direction={["column", "column", "row"]}
            >
              <HiCode size="2rem" />
              <Text
                maxW={showLogos ? 0 : 70}
                overflow="hidden"
                transition="200ms"
              >
                My skills
              </Text>
            </Flex>
          </Button>

          <Button
            onClick={() => setShowLogos(false)}
            pos="absolute"
            left={["80%", "80%", "48%"]}
            top={[0, 0, showLogos ? "-2rem" : "0.5rem"]}
            h={[10, 10, 20]}
            colorScheme="blue"
            transition="200ms ease-in-out"
            opacity={[showLogos ? 1 : 0, showLogos ? 1 : 0, 1]}
          >
            <Stack justify="start" height="100%" pt={3}>
              <HiX />
            </Stack>
          </Button>

          <Box pos="relative" zIndex="4">
            {/*<Logos showLogos={showLogos} />*/}
            <Image
              src="./images/me-aibg.jpg"
              alt="headshot, face turned to side, background is balck-and-white"
              borderRadius="full"
              maxW={300}
              maxH={300}
              boxSize={[
                showLogos ? "200px" : "300px",
                showLogos ? "200px" : "300px",
                showLogos ? "300px" : "400px",
              ]}
              transition="200ms ease-in-out"
              objectFit="cover"
            />
          </Box>

          <Button
            onClick={() => setIsOpen(!isOpen)}
            pos={[
              showLogos ? "absolute" : "initial",
              showLogos ? "absolute" : "initial",
              "initial",
            ]}
            top={["14px", "14px", "unset"]}
            left={["15%", "15%", "unset"]}
            colorScheme="blue"
            pl={[showLogos ? 3 : 5, showLogos ? 3 : 5, showLogos ? "40px" : 50]}
            pr={[showLogos ? 3 : 5, showLogos ? 3 : 5, showLogos ? 1 : 5]}
            py={[showLogos ? 1 : 3]}
            zIndex="3"
            transform={[
              "translateY(-30%)",
              "translateY(-30%)",
              "translateX(-2rem)",
            ]}
            h={[showLogos ? "auto" : 120, showLogos ? "auto" : 120, 10]}
          >
            <Flex
              gap={[0, 0, 3]}
              align={["center", "center"]}
              justify={["end", "end", "center"]}
              h="100%"
              direction={["column", "column", "row"]}
            >
              <HiMail size="2rem" />
              <Text
                maxW={showLogos ? 0 : 70}
                maxH={showLogos ? 0 : 70}
                overflow="hidden"
                transition="200ms"
              >
                Say hi
              </Text>
            </Flex>
          </Button>
        </Flex>

        <Stack
          px={3}
          pt={showLogos ? 150 : 50}
          transition="200ms ease-in-out"
          align="center"
        >
          <Heading as="h1" size={["3xl", "4xl"]} mb={3}>
            Chris Haupt's
          </Heading>
          <Heading as="h2" size="2xl" mb={10}>
            Portfolio
          </Heading>
          <Heading
            as="h3"
            size="lg"
            maxW={700}
            fontWeight="400"
            pb={20}
            textAlign="center"
          >
            A collection of my frontend projects created over the years using
            mostly <b>React</b>.
          </Heading>
        </Stack>
      </Stack>
    </Box>
  );
}
