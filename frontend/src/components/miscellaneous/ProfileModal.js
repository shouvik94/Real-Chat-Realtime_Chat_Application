import React from 'react';
import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";


const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered >
        <ModalOverlay />
        <ModalContent h="380px" bg="purple.800">
          <ModalHeader
            fontSize="40px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center"
            fontWeight="bold"
            color="red"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Avatar size="lg" name={user.name} borderColor="white" borderWidth="1px" bg="green" color="black"/>
            <Text
              fontSize={{ base: "28px", md: "30px" }} fontWeight="bold" color="green"
              fontFamily="Work sans"
            >
              Email: {user.email}

            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme='red'>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default ProfileModal;