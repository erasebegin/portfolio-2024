import { BiLinkExternal } from "react-icons/bi";
import {
  Text,
  Flex,
  Button,
  Image,
  Heading,
  Stack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

interface PortfolioCardProps {
  data: {
    title: string;
    description: string;
    image: string;
    repoUrl?: string;
    demoUrl?: string;
    modal?: string[];
    tech?: string[];
    year?: string | number;
  };
  setModalContent: (content: {
    list?: string[];
    image: string;
    tech?: string[];
    description?: string;
  }) => void;
  sectionColor: string;
  columns: number;
  showInfo: boolean;
}

export default function PortfolioCard({
  data,
  setModalContent,
  sectionColor,
  columns,
  showInfo
}: PortfolioCardProps) {
  const { title, description, image, repoUrl, demoUrl, modal, tech, year } =
    data ?? {};

  const cardBg = useColorModeValue("white", "gray.900");

  function handleClick() {
    setModalContent({ list: modal, image, tech, description });
  }

  return (
    <Stack
      bg={cardBg}
      pos="relative"
      rounded="md"
      overflow="hidden"
      h={showInfo ? "350px" : "100px"}
      w={showInfo ? "full" : "100px"}
      shadow="md"
      transition="100ms ease-in"
    >
      <Image
        h={showInfo ? "180px" : "100px"}
        w={showInfo ? "full" : "100px"}
        src={image}
        alt="site screenshot"
        objectFit="cover"
        objectPosition={showInfo ? "50%, 20%" : "50%, 50%"}
        cursor="pointer"
        borderBottom={showInfo ? "1px" : "none"}
        borderColor={sectionColor}
        onClick={handleClick}
              transition="100ms ease-in"
      />
      {year && (
        <Text
          bg={sectionColor}
          color="white"
          opacity={showInfo ? "1" : "0"}
          transition="100ms ease-in"
          maxH={showInfo ? "unset" : "0"}
          fontWeight="500"
          pos="absolute"
          top={showInfo ? "134": "0"}
          right="0"
          p={2}
          borderRadius="10px 0 0 0"
        >
          {year}
        </Text>
      )}

      {/* CARD BOTTOM */}
      <Stack flex="1" p={showInfo ? 5 : 0} gap={3} h="full" justify="space-between" maxH={showInfo ? "10000px" : "0px"} overflow="hidden">
        <Heading as="h5" size={showInfo ? "sm" : "0px"} overflow="hidden" pb={3}>
          {title}
        </Heading>
        <Flex justify="center" align="end" w="full" gap={3}>
          {demoUrl && (
            <a href={demoUrl} rel="noopener noreferrer" target="_blank">
              <Button color="primary" type="button">
                <Icon as={BiLinkExternal} mr={columns >= 5 ? 0 : 3} />
                {columns >= 5 ? "" : "View"}
              </Button>
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} rel="noopener noreferrer" target="_blank">
              <Button type="button">Repo</Button>
            </a>
          )}
          {modal && (
            <Button onClick={handleClick} type="button">
              Info
            </Button>
          )}
        </Flex>
      </Stack>
    </Stack>
  );
}
