import { ChakraTheme } from "@chakra-ui/react";

export const getDividerColor = (
  dividerColor: string,
  shade: string,
  theme: ChakraTheme,
): string => {
  if (dividerColor === "white") {
    return shade === "800" ? "#1A202C" : "#fff";
  }

  return theme.colors[dividerColor][shade];
};

export function getGradient(sectionColor: string) {
  if (sectionColor === "green") {
    return `linear-gradient(
    0deg,
    hsl(139deg 73% 87%) 0%,
    hsl(139deg 73% 88%) 8%,
    hsl(138deg 73% 89%) 17%,
    hsl(138deg 73% 90%) 25%,
    hsl(138deg 73% 91%) 33%,
    hsl(138deg 73% 93%) 42%,
    hsl(138deg 74% 94%) 50%,
    hsl(137deg 74% 95%) 58%,
    hsl(137deg 74% 96%) 67%,
    hsl(137deg 74% 97%) 75%,
    hsl(137deg 74% 98%) 83%,
    hsl(137deg 74% 99%) 92%,
    hsl(0deg 0% 100%) 100%
  );`;
  }

  if (sectionColor === "blue") {
    return `linear-gradient(
    0deg,
    hsl(202deg 81% 86%) 0%,
    hsl(202deg 81% 87%) 8%,
    hsl(202deg 80% 88%) 17%,
    hsl(202deg 80% 90%) 25%,
    hsl(202deg 80% 91%) 33%,
    hsl(202deg 80% 92%) 42%,
    hsl(202deg 80% 93%) 50%,
    hsl(203deg 80% 94%) 58%,
    hsl(203deg 80% 95%) 67%,
    hsl(203deg 80% 97%) 75%,
    hsl(203deg 80% 98%) 83%,
    hsl(203deg 80% 99%) 92%,
    hsl(0deg 0% 100%) 100%
  );`;
  }

  if (sectionColor === "yellow") {
    return `linear-gradient(
    0deg,
    hsl(58deg 97% 87%) 0%,
    hsl(58deg 98% 88%) 8%,
    hsl(58deg 99% 89%) 17%,
    hsl(57deg 100% 91%) 25%,
    hsl(57deg 100% 92%) 33%,
    hsl(57deg 100% 93%) 42%,
    hsl(57deg 100% 94%) 50%,
    hsl(57deg 100% 95%) 58%,
    hsl(57deg 100% 96%) 67%,
    hsl(57deg 100% 97%) 75%,
    hsl(57deg 100% 98%) 83%,
    hsl(57deg 100% 99%) 92%,
    hsl(0deg 0% 100%) 100%
  );`;
  }
}

export function kebabToTitleCase(str: string) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
