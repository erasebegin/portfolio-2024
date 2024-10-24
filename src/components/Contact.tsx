import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { GiLetterBomb } from "react-icons/gi";
import { HiX } from "react-icons/hi";

interface ContactProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Contact({ isOpen, setIsOpen }: ContactProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const bg = useColorModeValue("white", "gray.700");

  return (
    <Box
      pos="fixed"
      top="40%"
      left="50%"
      transform={isOpen ? "translate(-50%, -50%)" : "translate(100vw, -50%)"}
      transition="200ms ease-in-out"
      zIndex="20"
    >
      <Box
        p={10}
        minW={["300px", "400px", "500px"]}
        borderWidth="1px"
        borderColor="blue.200"
        borderTopWidth="15px"
        borderTopColor="blue.300"
        bg={bg}
        borderRadius={10}
        shadow="lg"
        zIndex="10"
      >
        <Button
          onClick={() => setIsOpen(false)}
          pos="absolute"
          right={2}
          top={-10}
          colorScheme="blue"
          h="50"
          pt={3}
          zIndex={-1}
        >
          <Stack justify="start" h="full">
            <HiX />
          </Stack>
        </Button>
        <Heading as="h2" size="lg" mb={5}>
          Get in touch
        </Heading>
        <form action="https://formspree.io/f/meqpkeej" method="POST">
          <Stack gap={3} align="center">
            <FormControl>
              <FormLabel htmlFor="name" hidden>
                Name
              </FormLabel>
              <Input
                id="name"
                placeholder="Name"
                type="text"
                name="name"
                _placeholder={{ color: "gray.400" }}
                variant="flushed"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email" hidden>
                Email
              </FormLabel>
              <Input
                id="email"
                placeholder="Email"
                type="email"
                name="email"
                _placeholder={{ color: "gray.400" }}
                variant="flushed"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message" hidden>
                Message
              </FormLabel>
              <Textarea
                id="message"
                placeholder="Message"
                name="message"
                _placeholder={{ color: "gray.400" }}
                variant="flushed"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </FormControl>
            <Button
              colorScheme="blue"
              disabled={!email || !message}
              type="submit"
            >
              <GiLetterBomb size="2rem" />
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
