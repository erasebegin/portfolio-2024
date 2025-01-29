import { useState, useEffect } from "react";
import Divider from "../Divider";
import {
  Box,
  Flex,
  Heading,
  Stack,
  theme,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

interface HeroProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export default function Hero({ setIsOpen, isOpen }: HeroProps) {
  const [showLogos, setShowLogos] = useState<boolean>(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 400);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shade = useColorModeValue("light", "dark");
  const gradientLight =
    "linear-gradient(0deg, hsla(0, 0%, 100%, 1) 0%, hsla(202, 81%, 86%, 1) 100%);";
  const gradientDark =
    "linear-gradient(0deg, hsla(150, 2%, 22%, 1) 0%, hsla(215, 40%, 28%, 1) 100%);";

  return (
    <Box
      as="section"
      pos="relative"
      minH="100dvh"
      backgroundImage={shade === "light" ? gradientLight : gradientDark}
      pt={[5, 5, 20]}
      // overflow="hidden"
    >
      <Divider
        chakraProps={{
          display: ["none", "none", "block"],
          color:
            shade === "light" ? theme.colors.blue[200] : theme.colors.blue[900],
        }}
      />
      <Stack
        pt={[showLogos ? 15 : 0, showLogos ? 15 : 0, showLogos ? 150 : 50]}
        transition="200ms ease-in-out"
        pos="relative"
      >
        <Flex
          align="center"
          justify="center"
          pos="relative"
          minH={["400px", "400px", "auto"]}
          maxW="800px"
          mx="auto"
          w="full"
        >
          <HeroImage showLogos={showLogos} />
          <HeroButtons
            showLogos={showLogos}
            setShowLogos={setShowLogos}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </Flex>

        <HeroContent showLogos={showLogos} />
      </Stack>

      {/* <Flex
        pos="absolute"
        align="center"
        justify="center"
        bottom={5}
        w="full"
        gap={3}
        opacity={scrollOpacity * 0.4}
        transition="opacity 200ms"
      >
        <FaArrowAltCircleDown size="2rem" fill="#244f9e" />
        <Heading
          size="2xl"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          Keep scrollin'
        </Heading>
        <FaArrowAltCircleDown size="2rem" fill="#244f9e" />
      </Flex> */}
    </Box>
  );
}