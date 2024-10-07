import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    reactBlue: '#0A7EA4',
    javascriptYellow: '#F7DF1C'
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
