import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { HiCode, HiMail, HiX } from "react-icons/hi";

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
        left={["8%", "20%", "8%"]}
        top={["50%", "50%", "50%"]}
        transform={[
          showLogos ? "translate(-70%, -50%)" : "translate(0, -50%)",
          showLogos ? "translate(-70%, -50%)" : "translate(0, -50%)",
          showLogos ? "translate(-70%, -50%)" : "translate(0, -50%)",
        ]}
        transition="200ms ease-in"
        zIndex={3}
        w={[
          showLogos ? "140px" : "200px",
          showLogos ? "65px" : "80px",
          showLogos ? "140px" : "200px",
        ]}
      >
        <Flex gap={3} align="center" w="full">
          <HiCode size="2rem" />
          <Text display={["none", "none", "block"]} align="left">
            My skills
          </Text>
        </Flex>
      </Button>

      {/* Close Button */}
      {showLogos && (
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
          {/* <HiX size="1.5rem" color="blue" /> */}
        </Button>
      )}

      {/* Right Button - Say Hi */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        colorScheme="blue"
        pos="absolute"
        right={[
          showLogos ? "0%" : "10%",
          showLogos ? "12%" : "20%",
          showLogos ? "0%" : "10%",
        ]}
        top={["50%", "50%", "50%"]}
        transform={[
          "translate(0, -50%)",
          "translate(0, -50%)",
          "translate(0, -50%)",
        ]}
        zIndex={3}
        w={[
          showLogos ? "120px" : "200px",
          showLogos ? "65px" : "80px",
          showLogos ? "120px" : "200px",
        ]}
        transition="200ms ease-in"
      >
        <Flex gap={3} align="center" justify="end" w="full">
          <Text display={["none", "none", "block"]}>Say hi</Text>
          <HiMail size="2rem" />
        </Flex>
      </Button>
    </>
  );
}
