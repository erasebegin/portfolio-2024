import { ChakraTheme } from "@chakra-ui/react";

export const getDividerColor = (dividerColor: string, shade: string, theme: ChakraTheme): string => {
  if (dividerColor === "white") {
    return shade === "800" ? "#1A202C" : "#fff";
  }

  return theme.colors[dividerColor][shade];
};
