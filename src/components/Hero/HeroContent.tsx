import { Heading, Image, Stack } from '@chakra-ui/react'

interface HeroContentProps {
  showLogos: boolean
}

export default function HeroContent({ showLogos }: HeroContentProps) {
  return (
    <Stack
      mt={showLogos ? 200 : 150}
      transition="200ms ease-in-out"
      w={['95%', '600px']}
      mx="auto"
      align="center"
      pos="relative"
    >
      <Image
        src="/images/whiteboard-text/dad-jokes.svg"
        maxW={['190px', '200px', '300px']}
        pos="absolute"
        left={['50px', '20px', '-200px']}
        top={['-130px', '-100px', '-150px']}
        transform={['rotate(20deg)', 'rotate(0)', 'rotate(0)']}
        transition="transform 200ms ease-in"
        zIndex={2}
      />
      <Image
        src="/images/whiteboard-text/javascript-junkie.svg"
        maxW={['250px', '250px', '350px']}
        pos="absolute"
        right={['-20px', '0', '-250px']}
        top={['120px', '100px', '100px']}
        transform={['rotate(40deg)', 'rotate(0)', 'rotate(0)']}
        transition="transform 200ms ease-in"
        zIndex={2}
      />
      <Image
        src="/images/whiteboard-text/morning-person.svg"
        maxW={['180px', '200px', '300px']}
        pos="absolute"
        left={['10px', '50px', '-170px']}
        top="100px"
        transform={['rotate(-40deg)', 'rotate(0)', 'rotate(0)']}
        transition="transform 200ms ease-in"
        zIndex={2}
      />
      <Image
        src="/images/whiteboard-text/annoyingly-optimistic.svg"
        maxW={['250px', '300px', '400px']}
        pos="absolute"
        right={['-50px', '0', '-200px']}
        top={['-200px', '-150px', '-200px']}
        transform={['rotate(-40deg)', 'rotate(0)', 'rotate(0)']}
        transition="transform 200ms ease-in"
        zIndex={2}
      />
      <Image
        src="/images/whiteboard-text/cloud.svg"
        minW={['unset', 'unset', '500px']}
        maxW={['300px', '400px', 'unset']}
        pos="absolute"
        right={['50px', '100px', '0']}
        top={['-55px', '-80px', '-120px']}
        zIndex={0}
      />
      <Heading as="h1" fontSize={['4xl', '5xl', '4rem']} mb={3} color="blue.800" zIndex={1}>
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
  )
}
