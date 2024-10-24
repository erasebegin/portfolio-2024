import { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { kebabToTitleCase } from "../utils";

interface IconProps {
  type: string;
  labelColor: string;
  labelTop?: boolean;
}

export default function Icon({ type, labelColor, labelTop = true }: IconProps) {
  const [show, setShow] = useState(false);

  return (
    <Box
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      pos="relative"
    >
      <Image maxH={['40px', '50px']} maxW={['40px', '50px']} mx="auto" src={`./images/logos/${type}.svg`} alt={`${type} icon`} zIndex='1' />
      <Text
        fontSize={["sm", "md"]}
        opacity={show ? 1 : 0}
        pointerEvents="none"
        pos="absolute"
        top={labelTop ? ["-2rem", "-3rem"] : "unset"}
        bottom={labelTop ? "unset" : ["-2rem", "-3rem"]}
        left="50%"
        transform="translateX(-50%)"
        color="white"
        p={1}
        rounded="sm"
        transition="opacity 200ms ease-in"
        whiteSpace="nowrap"
        bg={labelColor}
        zIndex='2'
      >
        {kebabToTitleCase(type)}
      </Text>
    </Box>
  );
}


