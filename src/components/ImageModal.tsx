import { useEffect, useState, MouseEvent } from 'react'
import BgBlur from './BgBlur'
import { Box, Button, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import TechIcon from './TechIcon'
import { FaTimes } from 'react-icons/fa'

export interface ModalContent {
  image?: string
  tech?: string[]
  list?: string[]
  description?: string
}

interface ImageModalProps {
  modalContent?: ModalContent
}

const ImageModal: React.FC<ImageModalProps> = ({ modalContent }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { image, tech, list, description } = modalContent ?? {}

  const modalBg = useColorModeValue('white', 'gray.500')
  const detailBg1 = useColorModeValue('blue.50', 'gray.700')
  const detailBg2 = useColorModeValue('blue.100', 'gray.600')

  useEffect(() => {
    if (!modalContent) return
    if (Object.keys(modalContent).length > 0) {
      setIsOpen(true)
    }
  }, [modalContent])

  const checkClose = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains('modal-container')) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Outer Container */}
      <Box
        onClick={checkClose}
        className="modal-container"
        position="fixed"
        top={0}
        left={0}
        height="100dvh"
        width="100dvw"
        zIndex={11}
        opacity={isOpen ? 1 : 0}
        pointerEvents={isOpen ? 'all' : 'none'}
        transition="all 200ms ease-out"
      >
        <BgBlur show={isOpen} onClick={() => setIsOpen(false)} />
        <Button
          onClick={() => setIsOpen(false)}
          zIndex={11}
          rounded="full"
          h="40px"
          w="40px"
          bg={detailBg2}
          mt={3}
        >
          <FaTimes />
        </Button>
        {/* Inner Container */}
        <Box
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          transition="ease-out"
          overflowY="auto"
          maxH={['800px', '80%']}
          w={['95%', '80%']}
          maxW="800px"
          shadow="lg"
          bg={modalBg}
          rounded="md"
          zIndex={11}
        >
          {modalContent?.image && (
            <Image
              w="full"
              h="full"
              maxH="500px"
              objectFit="cover"
              objectPosition="top"
              src={image}
              alt="project screenshot"
            />
          )}
          <Text px={3} py={5} borderTopWidth={5} borderTopColor="blue.100">
            {description}
          </Text>
          {list && (
            <Box p={5} pt={description ? 3 : 5}>
              <Flex justify="center" pb={10} gap={5}>
                {tech?.map((type, idx) => <TechIcon key={idx} type={type} labelColor="blue.300" />)}
              </Flex>
              {list?.map((item, index) => (
                <Text
                  key={index}
                  align="left"
                  bg={index % 2 === 0 ? detailBg1 : detailBg2}
                  p={3}
                  fontSize="md"
                  sx={{ a: { color: 'blue.500', textDecor: 'underline' } }}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </>
  )
}

export default ImageModal
