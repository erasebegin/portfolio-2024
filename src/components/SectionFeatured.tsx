import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import Divider from "./Divider";
import TechIcon from "./TechIcon";
import { ProjectSection } from "../data/sectionData";
import { getDividerColor, getGradient } from "../utils";

interface SectionProps {
  sectionData: ProjectSection;
}

export default function SectionFeatured({ sectionData }: SectionProps) {
  const { title, subtitle, color, dividerColor, sectionInfo, cards } =
    sectionData || {};

  const theme = useTheme();
  const shade = useColorModeValue("100", "800");

  const chakraDividerColor = getDividerColor(dividerColor, shade, theme);

  return (
    <Box
      as="section"
      pos="relative"
      w="full"
      pt={32}
      pb={16}
      px={10}
      backgroundImage={getGradient(color)}
    >
      <Divider chakraProps={{ color: chakraDividerColor }} />

      <Box>
        <Heading as="h2" size="lg" pb={3}>
          {title}
        </Heading>
        <Text as="b" fontWeight={400} fontSize="2xl" pb={3}>
          {sectionInfo?.duration}
        </Text>
        <Text maxW="700" align="center" mx="auto" pb={7}>
          {subtitle}
        </Text>
        <Flex
          w="full"
          h="full"
          maxW="1300px"
          rounded="lg"
          margin="auto"
          bg="white"
          shadow="lg"
          overflow="visible"
        >
          <Image
            src={cards[0].image}
            w="600px"
            h="1000px"
            objectFit="cover"
            objectPosition="-50px"
            rounded="md"
          />
          <Stack align="center" borderLeftWidth={2} borderLeftColor="gray.100">
            {sectionInfo && (
              <Stack
                align="center"
                justify="space-between"
                height="full"
                pt={5}
              >
                <Stack gap={3} px={10}>
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: sectionInfo?.description,
                    }}
                    sx={{
                      p: {
                        mb: 5,
                      },
                    }}
                    fontSize="md"
                    mb={5}
                    pt={5}
                  />
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
                    bg="#ffffff55"
                    borderRadius={5}
                  >
                    {sectionInfo?.tech.map((type) => (
                      <GridItem key={type}>
                        <TechIcon
                          type={type}
                          labelTop={false}
                          labelColor={`${color}.${
                            parseInt(shade) < 300
                              ? parseInt(shade) + 500
                              : parseInt(shade) - 400
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
