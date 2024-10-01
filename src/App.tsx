import { useState } from "react";
import { ChakraProvider, VStack, theme, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Section from "./components/Section";
import BgBlur from "./components/BgBlur";
import sectionData from "./data/sectionData";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [openContact, setOpenContact] = useState<boolean>(false);

  return (
    <ChakraProvider theme={theme}>
      <Grid textAlign="center" fontSize="xl" minH="100vh">
        <ColorModeSwitcher justifySelf="flex-end" pos="fixed" />
        <VStack spacing={8}>
          <Hero isOpen={openContact} setIsOpen={setOpenContact} />
          <BgBlur show={openContact} offset />
          <Contact isOpen={openContact} setIsOpen={setOpenContact} />
          {sectionData.map((section: any, index: number) => (
            <Section key={index} sectionData={section} />
          ))}
          <Footer setOpenContact={setOpenContact} />
        </VStack>
      </Grid>
    </ChakraProvider>
  );
};

export default App;
