import { ChakraTheme } from "@chakra-ui/react";

export const getDividerColor = (
  dividerColor: string,
  shade: string,
  theme: ChakraTheme,
): string => {
  if (dividerColor === "white") {
    return shade === "800" ? "#1A202C" : "#fff";
  }

  if (dividerColor === "darkBlue") {
    return shade === "800" ? "hsl(220deg 45% 18%)" : "hsl(220deg 70% 80%)";
  }

  if (dividerColor === "lightBlue") {
    return shade === "800" ? "hsl(190deg 65% 22%)" : "hsl(190deg 85% 85%)";
  }

  const colorGroup = theme.colors[dividerColor];

  if (typeof colorGroup === "object" && colorGroup !== null && shade in colorGroup) {
    return colorGroup[shade as keyof typeof colorGroup] as string;
  }

  return "#000";
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

  if (sectionColor === "darkBlue") {
    if (shade === "dark") {
      return `linear-gradient(
        0deg,
        hsl(220deg 45% 18%) 0%,
        hsl(220deg 42% 18%) 8%,
        hsl(220deg 39% 18%) 17%,
        hsl(220deg 36% 18%) 25%,
        hsl(220deg 33% 17%) 33%,
        hsl(220deg 30% 17%) 42%,
        hsl(220deg 27% 17%) 50%,
        hsl(220deg 24% 16%) 58%,
        hsl(220deg 21% 16%) 67%,
        hsl(220deg 18% 16%) 75%,
        hsl(220deg 15% 15%) 83%,
        hsl(220deg 12% 15%) 92%,
        hsl(0deg 0% 21%) 100%
      );`;
    }

    return `linear-gradient(
      0deg,
      hsl(220deg 70% 80%) 0%,
      hsl(220deg 70% 82%) 8%,
      hsl(220deg 70% 84%) 17%,
      hsl(220deg 70% 86%) 25%,
      hsl(220deg 70% 88%) 33%,
      hsl(220deg 70% 90%) 42%,
      hsl(220deg 70% 92%) 50%,
      hsl(220deg 70% 94%) 58%,
      hsl(220deg 70% 96%) 67%,
      hsl(220deg 70% 97%) 75%,
      hsl(220deg 70% 98%) 83%,
      hsl(220deg 70% 99%) 92%,
      hsl(0deg 0% 100%) 100%
    );`;
  }

  if (sectionColor === "lightBlue") {
    if (shade === "dark") {
      return `linear-gradient(
        0deg,
        hsl(190deg 65% 22%) 0%,
        hsl(190deg 62% 22%) 8%,
        hsl(190deg 59% 21%) 17%,
        hsl(190deg 56% 21%) 25%,
        hsl(190deg 53% 20%) 33%,
        hsl(190deg 50% 20%) 42%,
        hsl(190deg 47% 19%) 50%,
        hsl(190deg 44% 19%) 58%,
        hsl(190deg 41% 18%) 67%,
        hsl(190deg 38% 18%) 75%,
        hsl(190deg 35% 17%) 83%,
        hsl(190deg 32% 17%) 92%,
        hsl(0deg 0% 21%) 100%
      );`;
    }

    return `linear-gradient(
      0deg,
      hsl(190deg 85% 85%) 0%,
      hsl(190deg 85% 86%) 8%,
      hsl(190deg 85% 87%) 17%,
      hsl(190deg 85% 88%) 25%,
      hsl(190deg 85% 89%) 33%,
      hsl(190deg 85% 90%) 42%,
      hsl(190deg 85% 91%) 50%,
      hsl(190deg 85% 92%) 58%,
      hsl(190deg 85% 93%) 67%,
      hsl(190deg 85% 94%) 75%,
      hsl(190deg 85% 95%) 83%,
      hsl(190deg 85% 96%) 92%,
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
