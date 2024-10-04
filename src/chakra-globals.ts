import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Link: {
      color: "red.100",
    },
  },
});

export default theme;
