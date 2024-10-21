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

export function getGradient(sectionColor: string, shade: "light" | "dark") {
  if (sectionColor === "green") {
    if (shade === "dark") {
      return `linear-gradient(
        0deg,
        hsl(151deg 42% 23%) 0%,
        hsl(150deg 38% 23%) 8%,
        hsl(150deg 34% 23%) 17%,
        hsl(149deg 30% 23%) 25%,
        hsl(148deg 26% 23%) 33%,
        hsl(148deg 22% 23%) 42%,
        hsl(147deg 19% 23%) 50%,
        hsl(147deg 16% 23%) 58%,
        hsl(146deg 13% 22%) 67%,
        hsl(146deg 9% 22%) 75%,
        hsl(145deg 6% 22%) 83%,
        hsl(145deg 3% 22%) 92%,
        hsl(0deg 0% 21%) 100%
      );`;
    }

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
    if (shade === "dark") {
      return `linear-gradient(
        0deg,
        hsl(215deg 40% 28%) 0%,
        hsl(216deg 37% 28%) 8%,
        hsl(217deg 33% 27%) 17%,
        hsl(217deg 30% 27%) 25%,
        hsl(218deg 26% 26%) 33%,
        hsl(219deg 23% 26%) 42%,
        hsl(219deg 20% 25%) 50%,
        hsl(220deg 17% 25%) 58%,
        hsl(220deg 14% 24%) 67%,
        hsl(221deg 10% 23%) 75%,
        hsl(222deg 7% 23%) 83%,
        hsl(222deg 4% 22%) 92%,
        hsl(0deg 0% 21%) 100%
      );`;
    }

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
    if (shade === "dark") {
      return `linear-gradient(
        0deg,
        hsl(30deg 76% 26%) 0%,
        hsl(29deg 69% 26%) 8%,
        hsl(29deg 63% 26%) 17%,
        hsl(29deg 57% 25%) 25%,
        hsl(28deg 51% 25%) 33%,
        hsl(28deg 45% 25%) 42%,
        hsl(27deg 40% 24%) 50%,
        hsl(27deg 34% 24%) 58%,
        hsl(27deg 28% 24%) 67%,
        hsl(26deg 22% 23%) 75%,
        hsl(26deg 15% 23%) 83%,
        hsl(25deg 8% 22%) 92%,
        hsl(0deg 0% 21%) 100%
      );`;
    }

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
