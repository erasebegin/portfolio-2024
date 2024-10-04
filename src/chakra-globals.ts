import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: props.colorMode === "dark" ? "teal.200" : "teal",
      }),
    },
  },
});

export default theme;
