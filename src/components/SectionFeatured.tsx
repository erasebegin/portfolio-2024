import styled from "@emotion/styled";
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
import { getDividerColor } from "../utils";

interface SectionProps {
  sectionData: ProjectSection;
}

export default function SectionFeatured({ sectionData }: SectionProps) {
  const { title, subtitle, color, dividerColor, sectionInfo, columns, cards } =
    sectionData || {};

  const theme = useTheme();
  const shade = useColorModeValue("100", "800");

  const chakraDividerColor = getDividerColor(dividerColor, shade, theme);

  return (
    <Box
      as="section"
      pos="relative"
      pt={32}
      w="full"
      px={10}
      bg={`${color}.${shade}`}
    >
      <Divider chakraProps={{ color: chakraDividerColor }} />

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
        maxW="1300px"
        justify="space-between"
        align="center"
        rounded="lg"
        margin="auto"
        gap={7}
        bg="green.50"
        shadow="lg"
      >
        <Image
          src={cards[0].image}
          w="600px"
          h="1000px"
          objectFit="cover"
          objectPosition="-100px"
          rounded="md"
        />
        <Stack maxW="500px">
          {sectionInfo && (
            <Stack align="center" pb={5}>
              <SectionInfoBody showInfo={true}>
                <Box
                  dangerouslySetInnerHTML={{ __html: sectionInfo?.description }}
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
                  p={5}
                  borderRadius={5}
                >
                  {sectionInfo?.tech.map((type) => (
                    <GridItem key={type}>
                      <TechIcon
                        type={type}
                        labelColor={`${color}.${
                          parseInt(shade) < 300
                            ? parseInt(shade) + 500
                            : parseInt(shade) - 400
                        }`}
                      />
                    </GridItem>
                  ))}
                </Grid>
              </SectionInfoBody>
            </Stack>
          )}
        </Stack>
        <Grid
          gap={5}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            `repeat(2, 1fr)`,
            `repeat(${columns || 3}, 1fr)`,
          ]}
          gridAutoRows="1fr"
        ></Grid>
      </Flex>
    </Box>
  );
}

interface SectionInfoBodyProps {
  showInfo: boolean;
}

const SectionInfoBody = styled.div<SectionInfoBodyProps>`
  text-align: center;
  max-height: ${(props) => (props.showInfo ? "1000px" : 0)};
  opacity: ${(props) => (props.showInfo ? 1 : 0)};
  padding-bottom: ${(props) => (props.showInfo ? "1rem" : 0)};
  overflow: hidden;
  transition: 400ms ease-in-out;

  p {
    max-width: 700px;
    padding-bottom: 1rem;
  }

  h4 {
    font-weight: bold;
  }
`;
