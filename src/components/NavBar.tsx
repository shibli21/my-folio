import { Box, Flex, Link } from "@chakra-ui/core";
import React from "react";
import css from "../style/nav.scss";

const NavBar = () => {
  return (
    <Box top={0} position="sticky" zIndex={10} bg="white">
      <Flex justifyContent="flex-end" fontSize="xl" py={10}>
        <Box pos="relative" ml={8}>
          <Link className={css.navigationLink}>Contact</Link>
        </Box>
        <Box pos="relative" ml={8}>
          <Link className={css.navigationLink}>About me</Link>
        </Box>
        <Box pos="relative" ml={8}>
          <Link className={css.navigationLink}>Projects</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
