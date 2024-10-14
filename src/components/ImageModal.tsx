import { useEffect, useState, MouseEvent } from "react";
import styled from "@emotion/styled";
import BgBlur from "./BgBlur";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import TechIcon from "./TechIcon";

export interface ModalContent {
  image?: string;
  tech?: string[];
  list?: string[];
  description?: string;
}

interface ImageModalProps {
  modalContent?: ModalContent;
}

const ImageModal: React.FC<ImageModalProps> = ({ modalContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { image, tech, list, description } = modalContent ?? {};

  const modalBg = useColorModeValue("blue.100", "gray.500");
  const detailBg1 = useColorModeValue("blue.200", "gray.700");
  const detailBg2 = useColorModeValue("blue.300", "gray.600");

  useEffect(() => {
    if (!modalContent) return;
    if (Object.keys(modalContent).length > 0) {
      setIsOpen(true);
    }
  }, [modalContent]);

  const checkClose = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains("modal-container")) {
      setIsOpen(false);
    }
  };

  return (
    <ModalContainer
      onClick={checkClose}
      $isOpen={isOpen}
      className="modal-container"
    >
      <BgBlur show={isOpen} onClick={() => setIsOpen(false)} />
      <InnerContainer shadow="lg" bg={modalBg}>
        {modalContent?.image && (
          <img src={image} alt="website project screenshot" />
        )}
        <Text px={3} py={5}>
          {description}
        </Text>
        {list && (
          <Box p={5} pt={description ? 0 : 5}>
            <Flex justify="center" pb={5} gap={5}>
              {tech?.map((type, idx) => (
                <TechIcon key={idx} type={type} labelColor={detailBg2} />
              ))}
            </Flex>
            {list?.map((item, index) => (
              <Text
                key={index}
                align="left"
                bg={index % 2 === 0 ? detailBg1 : detailBg2}
                p={3}
                fontSize="md"
              >
                {item}
              </Text>
            ))}
          </Box>
        )}
      </InnerContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 11;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.$isOpen ? "all" : "none")};
  transition: all 200ms ease-out;
`;

const InnerContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 200ms ease-out;
  overflow-y: auto;
  max-height: 90%;
  width: 80%;
  max-width: 800px;
  border-radius: 5px;
  z-index: 11;

  @media (max-width: 700px) {
    width: 90%;
    max-height: 80%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ImageModal;
