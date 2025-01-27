import { useState } from "react";
import { ChakraProvider, Grid, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import Hero from "./components/Hero/index";
import Contact from "./components/Contact";
import Section from "./components/Section";
import BgBlur from "./components/BgBlur";
import sectionData, { ProjectSection } from "./data/sectionData";
import Footer from "./components/Footer";
import customTheme from "./chakra-globals";
import SectionFeatured from "./components/SectionFeatured";

const App: React.FC = () => {
  const [openContact, setOpenContact] = useState<boolean>(false);

  return (
    <ChakraProvider theme={customTheme}>
      <Grid textAlign="center" fontSize="xl">
        <ColorModeSwitcher
          justifySelf="flex-end"
          pos="fixed"
          aria-label="dark mode"
        />
        <Stack gap={0}>
          <Hero isOpen={openContact} setIsOpen={setOpenContact} />
          <BgBlur show={openContact} offset />
          <Contact isOpen={openContact} setIsOpen={setOpenContact} />
          {sectionData.map((section: ProjectSection, index: number) => {
            if (section.feature) {
              return <SectionFeatured key={index} sectionData={section} />;
            }
            return <Section key={index} sectionData={section} />;
          })}
          <Footer setOpenContact={setOpenContact} />
        </Stack>
      </Grid>
    </ChakraProvider>
  );
};

export default App;
