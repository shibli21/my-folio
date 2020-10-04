import { Flex, Link } from "@chakra-ui/core";
import React from "react";

interface Props {}

const NavBar = (props: Props) => {
  return (
    <Flex justifyContent="flex-end" fontSize="xl" py={10}>
      <Link ml={8}>Contact</Link>
      <Link ml={8}>About me</Link>
      <Link ml={8}>Projects</Link>
    </Flex>
  );
};

export default NavBar;
