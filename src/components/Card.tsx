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
}

export default function PortfolioCard({
  data,
  setModalContent,
  sectionColor,
  columns,
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
      h="350"
      shadow="md"
    >
      <Image
        h="180"
        w="full"
        src={image}
        alt="site screenshot"
        objectFit="cover"
        objectPosition="50%, 20%"
        cursor="pointer"
        borderBottom="1px"
        borderColor={sectionColor}
        onClick={handleClick}
      />
      {year && (
        <Text
          bg={sectionColor}
          color="white"
          fontWeight="500"
          pos="absolute"
          top="134"
          right="0"
          p={2}
          borderRadius="10px 0 0 0"
        >
          {year}
        </Text>
      )}

      {/* CARD BOTTOM */}
      <Stack flex="1" p="5" gap={3} h="full" justify="space-between">
        <Heading as="h5" size="md" pb={3}>
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
