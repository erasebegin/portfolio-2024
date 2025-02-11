import { useState } from 'react'
import Divider from '../Divider'
import { Box, Flex, Stack, theme, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import HeroButtons from './HeroButtons'
import HeroImage from './HeroImage'
import HeroContent from './HeroContent'
import VideoModal from './VideoModal'

interface HeroProps {
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean
}

export default function Hero({ setIsOpen, isOpen }: HeroProps) {
  const [showLogos, setShowLogos] = useState<boolean>(false)
  const { onOpen, onClose, isOpen: videoModalIsOpen } = useDisclosure()

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
          <HeroImage showLogos={showLogos} onOpenVideoPlayer={onOpen} />
          <HeroButtons
            showLogos={showLogos}
            setShowLogos={setShowLogos}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </Flex>

        <VideoModal onClose={onClose} showVideoPlayer={videoModalIsOpen} />
        <HeroContent showLogos={showLogos} />
      </Stack>
    </Box>
  )
}
