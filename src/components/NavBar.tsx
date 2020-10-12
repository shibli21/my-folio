import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/core";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import css from "../style/nav.scss";
import Logo from "./icons/Logo";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Router = useRouter();
  const NavLinks = (
    <>
      <Box pos="relative" fontSize={["25px", "25px", "inherit", "inherit"]}>
        <Link
          className={css.navigationLink}
          onClick={() => {
            onClose;
            if (Router.pathname !== "/") {
              Router.push("/");
            }
          }}
          as={ScrollLink}
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>
      </Box>
      <Box
        pos="relative"
        ml={8}
        fontSize={["25px", "25px", "inherit", "inherit"]}
      >
        <Link
          onClick={async () => {
            onClose();

            if (Router.pathname !== "/") {
              await Router.push("/");
              scroll.scrollTo(1500);
            }
          }}
          className={css.navigationLink}
          as={ScrollLink}
          activeClass="active"
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About
        </Link>
      </Box>
      <Box
        pos="relative"
        ml={8}
        fontSize={["25px", "25px", "inherit", "inherit"]}
      >
        <Link
          className={css.navigationLink}
          as={ScrollLink}
          onClick={async () => {
            onClose();

            if (Router.pathname !== "/") {
              await Router.push("/");
              scroll.scrollTo(850);
            }
          }}
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          Work
        </Link>
      </Box>
      <Box ml={8} fontSize={["25px", "25px", "inherit", "inherit"]}>
        <NextLink href="/resume">
          <Button
            onClick={onClose}
            variant="outline"
            borderColor="primary"
            color="primary"
            size="md"
            _hover={{ bg: "primary", color: "white", textDecoration: "none" }}
          >
            Resume
          </Button>
        </NextLink>
      </Box>
    </>
  );

  return (
    <Box top={0} position="sticky" zIndex={100} bg="white">
      <Flex justifyContent="space-between" fontSize="xl" py={4}>
        <NextLink href="/">
          <Box cursor="pointer">
            <Logo />
          </Box>
        </NextLink>
        <Flex
          display={["none", "none", "inherit", "inherit"]}
          alignItems="center"
        >
          {NavLinks}
        </Flex>
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
