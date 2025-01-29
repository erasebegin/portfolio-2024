import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { HiCode, HiMail } from "react-icons/hi";

interface HeroButtonsProps {
  showLogos: boolean;
  setShowLogos: (show: boolean) => void;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export default function HeroButtons({
  showLogos,
  setShowLogos,
  setIsOpen,
  isOpen,
}: HeroButtonsProps) {
  return (
    <>
      {/* Left Button - My Skills */}
      <Button
        onClick={() => setShowLogos(!showLogos)}
        colorScheme="blue"
        pos="absolute"
        left={["50%", "20%", "8%"]}
        top={[showLogos ? "17%" : "5%", "50%", "50%"]}
        transform={[
          showLogos
            ? "translate(-50%, 0%) rotate(90deg)"
            : "translate(-50%, 0%) rotate(90deg)",
          showLogos ? "translate(-70%, -50%)" : "translate(0, -50%)",
          showLogos ? "translate(-70%, -50%)" : "translate(0, -50%)",
        ]}
        transition="50ms ease-in"
        zIndex={3}
        w={[
          showLogos ? "50px" : "50px",
          showLogos ? "65px" : "80px",
          showLogos ? "140px" : "200px",
        ]}
        pl={[1, 3, 3]}
      >
        <Flex gap={3} align="center" w="full">
          <Icon
            as={HiCode}
            fontSize="2rem"
            opacity={showLogos ? 0 : 1}
            transition="opacity 200ms ease-in"
            transform={["rotate(90deg)", "rotate(0)", "rotate(0)"]}
          />
          <Icon
            as={FaTimes}
            fontSize="1.5rem"
            transform={["rotate(90deg)", "rotate(0)", "rotate(0)"]}
            pos="absolute"
            opacity={showLogos ? 1 : 0}
            transition="opacity 200ms ease-in"
            ml={1}
          />
          <Text display={["none", "none", "block"]} align="left">
            My skills
          </Text>
        </Flex>
      </Button>

      {/* Close Button */}
      {/* {showLogos && (
        <Button
          onClick={() => setShowLogos(false)}
          pos="absolute"
          left="50%"
          top={["0", "45%", "28%"]}
          transform="translate(-50%, -150%)"
          colorScheme="blue"
          zIndex={2}
          bg="none"
          p={0}
          pb={8}
          h={"80px"}
          _hover={{ bg: "blue.500", svg: { color: "white" } }}
          border="1px"
          borderColor="blue.800"
          rounded="full"
        >
          <Icon as={HiX} color="blue.800" />
        </Button>
      )} */}

      {/* Right Button - Say Hi */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        colorScheme="blue"
        pos="absolute"
        pl={[1, 3, 3]}
        right={[
          showLogos ? "50%" : "50%",
          showLogos ? "12%" : "20%",
          showLogos ? "0%" : "10%",
        ]}
        top={[showLogos ? "73%":"86%", "50%", "50%"]}
        transform={[
          showLogos
            ? "translate(50%, 0%) rotate(-90deg)"
            : "translate(50%, 0%) rotate(-90deg)",
          "translate(0, -50%)",
          "translate(0, -50%)",
        ]}
        zIndex={3}
        w={[
          showLogos ? "50px" : "50px",
          showLogos ? "65px" : "80px",
          showLogos ? "120px" : "200px",
        ]}
        transition="50ms ease-in"
      >
        <Flex gap={3} align="center" justify="end" w="full">
          <Text display={["none", "none", "block"]}>Say hi</Text>
          <Icon
            as={HiMail}
            fontSize="2rem"
            transform={["rotate(90deg)", "rotate(0)", "rotate(0)"]}
          />
        </Flex>
      </Button>
    </>
  );
}
