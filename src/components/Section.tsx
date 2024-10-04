import { useState } from "react";
import styled from "@emotion/styled";
import { IoMdArrowDropright } from "react-icons/io";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import Card from "./Card";
import ImageModal from "./ImageModal";
import Divider from "./Divider";
import TechIcon from "./TechIcon";
import { Project } from "../data/sectionData";

interface SectionProps {
  sectionData: Project;
}

interface CardData {
  title: string;
  description: string;
  image: string;
  tech?: string[];
}

export default function Section({ sectionData }: SectionProps) {
  const {
    cards,
    title,
    subtitle,
    color,
    dividerColor,
    dividerAlt,
    sectionInfo,
    columns,
  } = sectionData || {};

  const [modalContent, setModalContent] = useState<CardData | {}>({});
  const [showInfo, setShowInfo] = useState(false);
  const theme = useTheme();
  const shade = useColorModeValue("100", "800");

  const convertDividerColor = (): string => {
    if (dividerColor === "white") {
      return shade === "800" ? "#1A202C" : "#fff";
    }

    return theme.colors[dividerColor][shade];
  };

  return (
    <Box
      as="section"
      pos="relative"
      w="full"
      px={10}
      bg={`${color}.${shade}`}
      marginTop="0 !important"
      _last={{ pb: 20 }}
    >
      <Divider color={convertDividerColor()} alt={dividerAlt} />
      <Stack
        w="full"
        maxW="1200px"
        align="center"
        marginTop="0 !important"
        py={20}
        margin="auto"
        gap={3}
      >
        <ImageModal modalContent={modalContent} />
        <Heading as="h2" size="lg">
          {title}
        </Heading>
        <Text maxW="600">{subtitle}</Text>
        {sectionInfo && (
          <Stack align="center" pb={5}>
            <SectionInfoBody showInfo={showInfo}>
              <Heading as="h3" size="md" fontWeight="300" mb={3}>
                {sectionInfo?.duration}
              </Heading>
              <Text align="left" fontSize="md" mb={5}>
                {sectionInfo?.description}
              </Text>
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
            <Button onClick={() => setShowInfo(!showInfo)} colorScheme={color}>
              More info
              <Icon
                as={IoMdArrowDropright}
                w="1.5rem"
                h="1.5rem"
                transform={showInfo ? "rotate(-90deg)" : "rotate(90deg)"}
                transition="400ms ease-in-out"
              />
            </Button>
          </Stack>
        )}
        <Grid
          gap={5}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            `repeat(2, 1fr)`,
            `repeat(${columns || 3}, 1fr)`,
          ]}
          gridAutoRows="1fr"
        >
          {cards.map((cardData, index) => (
            <Card
              key={`main-section-card-${index}`}
              data={cardData}
              sectionColor={`${color}.${
                parseInt(shade) < 300
                  ? parseInt(shade) + 500
                  : parseInt(shade) - 400
              }`}
              setModalContent={setModalContent}
            />
          ))}
        </Grid>
      </Stack>
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
    max-width: 600px;
    padding-bottom: 1rem;
  }

  h4 {
    font-weight: bold;
  }
`;
