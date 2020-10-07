import { Box, Flex, Link } from "@chakra-ui/core";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import css from "../style/nav.scss";

const NavBar = () => {
  return (
    <Box top={0} position="sticky" zIndex={100} bg="white">
      <Flex justifyContent="flex-end" fontSize="xl" py={10}>
        <Box pos="relative" ml={8}>
          <Link className={css.navigationLink}>
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </ScrollLink>
          </Link>
        </Box>
        <Box pos="relative" ml={8}>
          <Link className={css.navigationLink}>
            <ScrollLink
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About me
            </ScrollLink>
          </Link>
        </Box>
        <Box pos="relative" ml={8}>
          <Link className={css.navigationLink}>
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Projects
            </ScrollLink>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
