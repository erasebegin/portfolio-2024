import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import TechIcon from "./TechIcon";
import { ProjectSection } from "../data/sectionData";
import { getGradient } from "../utils";
import { useState } from "react";

interface SectionProps {
  sectionData: ProjectSection;
}

export default function SectionFeatured({ sectionData }: SectionProps) {
  const [readMore, setReadMore] = useState(false);
  const { title, subtitle, color, sectionInfo, cards } = sectionData || {};
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  const shade = useColorModeValue("light", "dark");

  return (
    <Box
      as="section"
      pos="relative"
      w="full"
      pt={32}
      pb={16}
      px={[1, 10]}
      backgroundImage={getGradient(color, shade)}
    >
      <Box>
        <Heading as="h2" size="2xl" pb={3}>
          {title}
        </Heading>
        <Heading as="h3" fontWeight={500} fontSize="xl" pb={3} px={3}>
          {sectionInfo?.duration}
        </Heading>
        <Text maxW="700" align="center" mx="auto" pb={7} px={3}>
          {subtitle}
        </Text>
        <Flex
          w="full"
          h="full"
          direction={["column", "row"]}
          maxW="1300px"
          rounded="lg"
          overflow="hidden"
          margin="auto"
          bg={shade === "light" ? "white" : "gray.700"}
          shadow="lg"
        >
          <Image
            src={cards[0].image}
            w={["full", "600px"]}
            h={["400px", "1000px"]}
            objectFit="cover"
            objectPosition={["0", "-50px"]}
            bg="white"
          />
          <Stack align="center" borderLeftWidth={2} borderLeftColor="gray.100">
            {sectionInfo && (
              <Stack
                align="center"
                justify="space-between"
                height="full"
                pt={5}
              >
                <Stack gap={3} px={[3, 10]}>
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: sectionInfo?.description,
                    }}
                    fontSize="md"
                    mb={5}
                    pt={5}
                    noOfLines={!isMobile || readMore ? undefined : 5}
                    transition="all 200ms ease-in-out"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    sx={{
                      p: {
                        pb: !isMobile || readMore ? 3 : 0,
                      },
                      "p:last-child": {
                        pb: 0,
                      },
                    }}
                  />
                  {isMobile && (
                    <Button onClick={() => setReadMore(!readMore)}>
                      Read {readMore ? "less" : "more"}...
                    </Button>
                  )}
                  <Button
                    as={Link}
                    href="https://www.savicase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="green.400"
                    color="white"
                    _hover={{ bg: "green.300" }}
                  >
                    View Project
                  </Button>
                  <Grid
                    templateColumns={[
                      "repeat(4, 1fr)",
                      "repeat(5, 1fr)",
                      "repeat(6, 1fr)",
                    ]}
                    templateRows="auto"
                    alignItems="center"
                    justifyContent="center"
                    rowGap={5}
                    p={3}
                    mb={3}
                    bg={shade === "dark" ? "transparentWhite" : "gray.50"}
                    rounded={5}
                  >
                    {sectionInfo?.tech.map((type) => (
                      <GridItem key={type}>
                        <TechIcon
                          type={type}
                          labelTop={false}
                          labelColor={`${color}.${
                            shade === "light" ? 400 : 800
                          }`}
                        />
                      </GridItem>
                    ))}
                  </Grid>
                </Stack>
                <Image src={cards[0].image2} w="full" objectFit="cover" />
              </Stack>
            )}
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}
