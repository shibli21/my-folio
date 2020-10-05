import { Box, Flex, Link } from "@chakra-ui/core";
import React from "react";

interface Props {}

const NavBar = (props: Props) => {
  return (
    <Box top={0} position="sticky" zIndex={10} bg="white">
      <Flex justifyContent="flex-end" fontSize="xl" py={10}>
        <Link ml={8}>Contact</Link>
        <Link ml={8}>About me</Link>
        <Link ml={8}>Projects</Link>
      </Flex>
    </Box>
  );
};

export default NavBar;
