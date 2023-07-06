import React from 'react';
import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";

const UserListItem = ({user, handleFunction }) => { //user !notLoggedIn //selected to chat userId
  //const { user } = ChatState();

  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#fce7c7"
      _hover={{
        background: "#a16c6c",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar mr={2} size="sm" cursor="pointer" name={user.name}/>
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize="xs"> <b>Email : </b> {user.email} </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;