import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import '@fontsource/nunito'

const theme = extendTheme({
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
  colors: {
    reactBlue: '#065C7A',
    javascriptYellow: '#F7DF1C',
    transparentWhite: "#FFFFFF55"
  },
  components: {
    Link: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: props.colorMode === "dark" ? "teal.200" : "teal",
      }),
    },
  },
});

export default theme;
