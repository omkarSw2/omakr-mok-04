import React from "react";
import { Box, HStack, Center, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box>
      <Center>
        <HStack gap={10}>
          <Link to="/sign-up">
            <Heading> Sign Up</Heading>
          </Link>
          <Link to="/sign-in">
            <Heading> Login </Heading>
          </Link>
          <Link to="/forum">
            <Heading> Forum</Heading>
          </Link>
        </HStack>
      </Center>
    </Box>
  );
};

export default Navbar;
