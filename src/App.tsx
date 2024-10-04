import { useState } from "react";
import { ChakraProvider, Grid, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Section from "./components/Section";
import BgBlur from "./components/BgBlur";
import sectionData, { Project } from "./data/sectionData";
import Footer from "./components/Footer";
import customTheme from "./chakra-globals";

const App: React.FC = () => {
  const [openContact, setOpenContact] = useState<boolean>(false);

  return (
    <ChakraProvider theme={customTheme}>
      <Grid textAlign="center" fontSize="xl" minH="100vh">
        <ColorModeSwitcher
          justifySelf="flex-end"
          pos="fixed"
          aria-label="dark mode"
        />
        <Stack gap={0}>
          <Hero isOpen={openContact} setIsOpen={setOpenContact} />
          <BgBlur show={openContact} offset />
          <Contact isOpen={openContact} setIsOpen={setOpenContact} />
          {sectionData.map((section: Project, index: number) => (
            <Section key={index} sectionData={section} />
          ))}
          <Footer setOpenContact={setOpenContact} />
        </Stack>
      </Grid>
    </ChakraProvider>
  );
};

export default App;
