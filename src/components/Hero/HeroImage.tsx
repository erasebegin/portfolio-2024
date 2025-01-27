import { Box, Image, Skeleton } from "@chakra-ui/react";
import { useState } from "react";
import Logos from "../Logos";

interface HeroImageProps {
  showLogos: boolean;
}

export default function HeroImage({ showLogos }: HeroImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box pos="relative" zIndex="4">
      <Logos showLogos={showLogos} />
      <Skeleton
        isLoaded={imageLoaded}
        fadeDuration={1}
        borderRadius="full"
        startColor="gray.100"
        endColor="gray.300"
        boxSize={[
          showLogos ? "200px" : "300px",
          showLogos ? "200px" : "300px",
          showLogos ? "300px" : "400px",
        ]}
      >
        <Image
          src="./images/me-shell-crop.jpeg"
          fallbackSrc="./images/me-shell-crop-blur.png"
          loading="lazy"
          border="solid"
          borderWidth={5}
          borderColor="blue.300"
          alt="headshot, looking at the camera, light streaming in from stained glass window behind"
          borderRadius="full"
          boxSize="100%"
          transition="200ms ease-in-out"
          objectFit="cover"
          ignoreFallback={false}
          crossOrigin="anonymous"
          onLoad={() => setImageLoaded(true)}
        />
      </Skeleton>
    </Box>
  );
}