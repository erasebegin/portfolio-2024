import { Heading, Image, Stack } from "@chakra-ui/react";

interface HeroContentProps {
  showLogos: boolean;
}

export default function HeroContent({ showLogos }: HeroContentProps) {
  return (
    <Stack
      mt={showLogos ? 200 : 150}
      transition="200ms ease-in-out"
      w={["95%", "600px"]}
      mx="auto"
      align="center"
      pos="relative"
    >
      <Image
        src="/images/whiteboard-text/dad-jokes.svg"
        maxW="300px"
        pos="absolute"
        left="-200px"
        top="-150px"
        zIndex={2}
      />
      <Image
        src="/images/whiteboard-text/javascript-junkie.svg"
        maxW="350px"
        pos="absolute"
        right="-250px"
        top="100px"
        zIndex={2}
      />
      <Image
        src="/images/whiteboard-text/morning-person.svg"
        maxW="300px"
        pos="absolute"
        left="-170px"
        top="100px"
        zIndex={2}
      />
      <Image
        src="/images/whiteboard-text/annoyingly-optimistic.svg"
        maxW="400px"
        pos="absolute"
        right="-200px"
        top="-150px"
        zIndex={2}
      />
      <Image
        src="/images/whiteboard-text/cloud.svg"
        minW={["unset","unset","600px"]}
        pos="absolute"
        right="0px"
        top="-120px"
        zIndex={0}
      />
      <Heading
        as="h1"
        fontSize={["4xl", "5xl", "4rem"]}
        mb={3}
        color="blue.800"
        zIndex={1}
      >
        Chris Haupt
      </Heading>
      {/* <Heading
        as="h3"
        size="md"
        maxW={700}
        fontWeight="400"
        pb={20}
        textAlign="center"
      >
        A collection of all the projects I've either owned or been a part of
        over the years, using mostly{" "}
        <Text as="strong" color="reactBlue">
          React
        </Text>{" "}
        and always{" "}
        <Text as="strong" color="javascriptYellow" fontSize="2xl">
          Javascript
        </Text>
        .
      </Heading> */}
    </Stack>
  );
}
