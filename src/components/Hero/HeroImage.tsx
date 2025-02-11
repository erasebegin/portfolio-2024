import { Box, Flex, Icon, Image, Skeleton } from '@chakra-ui/react'
import { useState } from 'react'
import Logos from '../Logos'
import { BiPlayCircle } from 'react-icons/bi'

interface HeroImageProps {
  showLogos: boolean
  onOpenVideoPlayer: () => void
}

export default function HeroImage({ showLogos, onOpenVideoPlayer }: HeroImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Box pos="relative" zIndex="4">
      <Logos showLogos={showLogos} />
      <Box
        bg="blue.50"
        pos="absolute"
        top="0"
        rounded="full"
        w="full"
        h="full"
        border="solid"
        borderWidth={5}
        borderColor="blue.300"
      />
      <Skeleton
        isLoaded={imageLoaded}
        fadeDuration={1}
        rounded="full"
        startColor="gray.100"
        endColor="gray.300"
        boxSize={[
          showLogos ? '200px' : '300px',
          showLogos ? '200px' : '300px',
          showLogos ? '300px' : '400px',
        ]}
      >
        <Image
          pos="absolute"
          src="./images/promo_vid_preview.gif"
          loading="lazy"
          border="solid"
          borderWidth={5}
          borderColor="blue.300"
          alt="video preview showing a talking head"
          borderRadius="full"
          boxSize="100%"
          transition="200ms ease-in-out"
          objectFit="cover"
          ignoreFallback={false}
          crossOrigin="anonymous"
          onLoad={() => setImageLoaded(true)}
        />
        {/* VIDEO BUTTON OVERLAY */}
        <Flex
          pos="absolute"
          top="0"
          align="center"
          justify="center"
          bg="#00000055"
          w="full"
          h="full"
          rounded="full"
          opacity="0.5"
          transition="200ms ease-out"
          _hover={{ opacity: '1', transition: '200ms ease-in', svg: { fontSize: '3.5rem' } }}
          cursor="pointer"
          onClick={() => onOpenVideoPlayer()}
        >
          <Icon as={BiPlayCircle} color="blue.100" fontSize="3rem" />
        </Flex>
      </Skeleton>
    </Box>
  )
}
