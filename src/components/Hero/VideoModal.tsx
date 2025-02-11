import { AspectRatio, Box, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { FC } from 'react'
type Props = {
  onClose: () => void
  showVideoPlayer: boolean
}

const VideoModal: FC<Props> = ({ onClose, showVideoPlayer }) => {
  return (
    <Modal isOpen={showVideoPlayer} onClose={() => onClose()}>
      <ModalOverlay />
      <ModalContent minW="90vw" maxW="90vw">
        <AspectRatio ratio={[0.6, 16 / 9]} maxW="90vw">
          <Box
            as="video"
            src="./promo_vid_optimised.mp4"
            controls
            minW="90vw"
            maxW="1000px"
            autoPlay
            rounded="md"
          />
        </AspectRatio>
      </ModalContent>
    </Modal>
  )
}

export default VideoModal
