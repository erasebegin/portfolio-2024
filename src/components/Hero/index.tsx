import { useState } from 'react'
import Divider from '../Divider'
import {
  AspectRatio,
  Box,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  theme,
  useColorModeValue,
} from '@chakra-ui/react'
import HeroButtons from './HeroButtons'
import HeroImage from './HeroImage'
import HeroContent from './HeroContent'

interface HeroProps {
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean
}

export default function Hero({ setIsOpen, isOpen }: HeroProps) {
  const [showLogos, setShowLogos] = useState<boolean>(false)
  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false)

  const shade = useColorModeValue('light', 'dark')
  const gradientLight =
    'linear-gradient(0deg, hsla(0, 0%, 100%, 1) 0%, hsla(202, 81%, 86%, 1) 100%);'
  const gradientDark =
    'linear-gradient(0deg, hsla(150, 2%, 22%, 1) 0%, hsla(215, 40%, 28%, 1) 100%);'

  return (
    <Box
      as="section"
      pos="relative"
      minH={['900px', '900px', '1000px']}
      overflow="hidden"
      backgroundImage={shade === 'light' ? gradientLight : gradientDark}
      pt={[5, 5, 20]}
    >
      <Divider
        chakraProps={{
          display: ['none', 'none', 'block'],
          color: shade === 'light' ? theme.colors.blue[200] : theme.colors.blue[900],
        }}
      />
      <Stack
        pt={[showLogos ? 15 : 0, showLogos ? 15 : 0, showLogos ? 150 : 50]}
        transition="200ms ease-in-out"
        pos="relative"
      >
        <Flex
          align="center"
          justify="center"
          pos="relative"
          minH={['400px', '400px', 'auto']}
          maxW="800px"
          mx="auto"
          w="full"
        >
          <HeroImage showLogos={showLogos} setShowVideoPlayer={setShowVideoPlayer} />
          <HeroButtons
            showLogos={showLogos}
            setShowLogos={setShowLogos}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </Flex>
        <Modal isOpen={showVideoPlayer} onClose={() => setShowVideoPlayer(false)}>
          <ModalOverlay />
          <ModalContent minW="90vw" maxW="1000px">
            <Box
              as="video"
              src="./promo_vid_optimised.mp4"
              controls
              minW="90vw"
              maxW="1000px"
              autoPlay
              rounded="md"
            />
          </ModalContent>
        </Modal>

        <HeroContent showLogos={showLogos} />
      </Stack>
    </Box>
  )
}
