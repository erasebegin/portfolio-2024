import { useState } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import {
  Box,
  Button,
  ChakraTheme,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  useTheme,
} from '@chakra-ui/react'
import Card from './Card'
import ImageModal, { ModalContent } from './ImageModal'
import Divider from './Divider'
import TechIcon from './TechIcon'
import { ProjectSection } from '../data/sectionData'
import { getDividerColor, getGradient } from '../utils'

interface SectionProps {
  sectionData: ProjectSection
}

export default function Section({ sectionData }: SectionProps) {
  const { cards, title, subtitle, color, dividerColor, sectionInfo, columns } = sectionData || {}

  const [modalContent, setModalContent] = useState<ModalContent>()
  const [showInfo, setShowInfo] = useState(false)
  const theme = useTheme() as ChakraTheme
  const shade = useColorModeValue('light', 'dark')

  const chakraDividerColor = getDividerColor(
    dividerColor || 'blue',
    shade === 'light' ? '100' : '800',
    theme
  )

  return (
    <Box
      as="section"
      pos="relative"
      w="full"
      px={[5, 10, 10]}
      overflowX="hidden"
      backgroundImage={getGradient(color, shade)}
      marginTop="0 !important"
      _last={{ pb: 20 }}
    >
      <ImageModal modalContent={modalContent} />
      <Divider chakraProps={{ color: chakraDividerColor }} />
      <Stack
        w="full"
        maxW="1200px"
        align="center"
        marginTop="0 !important"
        pt={36}
        pb={10}
        margin="auto"
        gap={3}
      >
        <Heading as="h2" size="lg">
          {title}
        </Heading>
        <Text as="b" fontWeight={400} fontSize="2xl" pl={5}>
          {sectionInfo?.duration}
        </Text>
        <Text maxW="700">{subtitle}</Text>
        {sectionInfo && (
          <Stack align="center" pb={3}>
            <Box
              textAlign="center"
              maxH={showInfo ? '10000px' : '0'}
              opacity={showInfo ? 1 : 0}
              pb={'0'}
              overflow="hidden"
              transition="400ms ease-in-out"
              sx={{
                p: {
                  maxWidth: '700px',
                  pb: '1rem',
                },
                h4: {
                  fontWeight: 'bold',
                },
              }}
            >
              <Text align="center" fontSize="md" mb={5}>
                {sectionInfo?.description}
              </Text>
            </Box>
          </Stack>
        )}
        {sectionInfo && sectionInfo.tech.length > 0 && (
          <Flex
            alignItems="center"
            justifyContent="center"
            wrap="wrap"
            rowGap={5}
            gap={3}
            bg="#ffffff55"
            p={5}
            borderRadius="md"
          >
            {sectionInfo?.tech.map((type) => (
              <GridItem key={type}>
                <TechIcon
                  size={showInfo ? 'md' : 'sm'}
                  type={type}
                  labelColor={getDividerColor(
                    dividerColor || 'blue',
                    shade === 'light' ? '100' : '800',
                    theme
                  )}
                />
              </GridItem>
            ))}
          </Flex>
        )}
        <Grid
          gap={5}
          templateColumns={[
            showInfo ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)',
            'repeat(4, 1fr)',
            `repeat(5, 1fr)`,
            `repeat(${columns || 3}, 1fr)`,
          ]}
          gridAutoRows="1fr"
          pt={5}
        >
          {cards.map((cardData, index) => (
            <Card
              key={`main-section-card-${index}`}
              showInfo={showInfo}
              data={cardData}
              columns={columns || 3}
              sectionColor={getDividerColor(
                dividerColor || 'blue',
                shade === 'light' ? '100' : '800',
                theme
              )}
              setModalContent={setModalContent}
            />
          ))}
        </Grid>
        <Button
          mt={5}
          mb={10}
          onClick={() => setShowInfo(!showInfo)}
          bg={getDividerColor(dividerColor || 'blue', shade === 'light' ? '100' : '800', theme)}
          _hover={{ bg: getDividerColor(dividerColor || 'blue', '200', theme) }}
          color={shade === 'dark' ? 'blue.50' : 'blue.900'}
        >
          More info
          <Icon
            as={IoMdArrowDropright}
            w="1.5rem"
            h="1.5rem"
            transform={showInfo ? 'rotate(-90deg)' : 'rotate(90deg)'}
            transition="400ms ease-in-out"
          />
        </Button>
      </Stack>
    </Box>
  )
}
