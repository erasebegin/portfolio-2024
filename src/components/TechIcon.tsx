import { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { kebabToTitleCase } from "../utils";

interface IconProps {
  type: string;
  labelColor: string;
  labelTop?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Icon({ type, labelColor, labelTop = true, size = 'md'}: IconProps) {
  const [show, setShow] = useState(false);

  const sizeMap = {
    sm: {
      maxH: ['20px', '25px'],
      maxW: ['20px', '25px'],
      fontSize: ['10px', '12px'],
      top: ["-1rem", "-1.5rem"],
      bottom: ["-2rem", "-2.5rem"],
    },
    md: {
      maxH: ['30px', '35px'],
      maxW: ['30px', '35px'],
      fontSize: ['12px', '14px'],
      top: ["-1.5rem", "-2rem"],
      bottom: ["-2rem", "-2.5rem"],
    },
    lg: {
      maxH: ['40px', '45px'],
      maxW: ['40px', '45px'],
      fontSize: ['14px', '16px'],
      top: ["-2rem", "-2.5rem"],
      bottom: ["-2.5rem", "-3rem"],
    },
  }

  return (
    <Box
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      pos="relative"
    >
      <Image maxH={sizeMap[size].maxH} maxW={sizeMap[size].maxW} mx="auto" src={`./images/logos/${type}.svg`} alt={`${type} icon`} zIndex='1' />
      <Text
        fontSize={sizeMap[size].fontSize}
        opacity={show ? 1 : 0}
        pointerEvents="none"
        pos="absolute"
        top={labelTop ? sizeMap[size].top : "unset"}
        bottom={labelTop ? "unset" : sizeMap[size].bottom}
        left="50%"
        transform="translateX(-50%)"
        color="blue.900"
        px={2}
        // no idea why this is necessary. no idea where the 1rem of padding is coming from
        sx={{ paddingBottom: "3px !important", paddingTop: "3px !important" }}
        rounded="md"
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


