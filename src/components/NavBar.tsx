import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Image,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/core";
import React from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../public/logo.svg";
import css from "../style/nav.scss";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavLinks = (
    <>
      <Box pos="relative" fontSize={["25px", "25px", "inherit", "inherit"]}>
        <Link className={css.navigationLink} onClick={onClose}>
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={onClose}
          >
            Contact
          </ScrollLink>
        </Link>
      </Box>
      <Box
        pos="relative"
        ml={8}
        fontSize={["25px", "25px", "inherit", "inherit"]}
      >
        <Link className={css.navigationLink}>
          <ScrollLink
            onClick={onClose}
            activeClass="active"
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About me
          </ScrollLink>
        </Link>
      </Box>
      <Box
        pos="relative"
        ml={8}
        fontSize={["25px", "25px", "inherit", "inherit"]}
      >
        <Link className={css.navigationLink}>
          <ScrollLink
            onClick={onClose}
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
    </>
  );

  return (
    <Box top={0} position="sticky" zIndex={100} bg="white">
      <Flex justifyContent="space-between" fontSize="xl" py={8}>
        <Box>
          <Image src={Logo} h="40px" />
        </Box>
        <Flex display={["none", "none", "inherit", "inherit"]}>{NavLinks}</Flex>
        <Box display={["block", "block", "none", "none"]}>
          <>
            <Box color="primary" onClick={onOpen}>
              <FaBars size="40px" />
            </Box>
            <Drawer
              size="xs"
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton m={6}>
                  <Box color="primary">
                    <RiCloseFill size="60px" />
                  </Box>
                </DrawerCloseButton>
                <DrawerBody pt="150px">
                  <Stack spacing="24px" align="center">
                    {NavLinks}
                  </Stack>
                </DrawerBody>
                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
