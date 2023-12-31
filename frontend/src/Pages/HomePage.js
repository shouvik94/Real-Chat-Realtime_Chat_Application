import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const HomePage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const userInformation = JSON.parse(localStorage.getItem("userInformation"));

    if (userInformation) navigate("/chats");
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        margin = "3.2rem 0 1rem 0"
        p={3}
        borderRadius="2xl"
        borderColor="black" borderWidth="1px"
        w="100%"
        bg="blackAlpha.800"
      >
        <Text
          color="red"
          fontSize="4xl"
          fontFamily="Raleway"
          fontWeight="bold"
        >
          REAL-CHAT
        </Text>
      </Box>
      <Box bg="red.50" w="100%" p={4} borderRadius="lg" borderColor="red" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded" colorScheme="orange" >
          <TabList mb="1em">
            <Tab fontWeight="bold">Login</Tab>
            <Tab fontWeight="bold">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
