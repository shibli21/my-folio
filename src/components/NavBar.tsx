import {
  Box,
  Button,
  ChakraProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import useIntro from "../hooks/useIntro";
import css from "../style/nav.scss";
import { DarkModeSwitch } from "./DarkModeSwitch";
import Logo from "./icons/Logo";
import MenuItems from "./MenuItems";

const NavBar = (props: ChakraProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Router = useRouter();
  const MotionBox = motion.custom(Box);
  const MotionFlex = motion.custom(Flex);
  const showAnimation = useIntro();

  const containerVariants: Variants = {
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: { x: -300, opacity: 0 },
  };

  const childVariants: Variants = {
    enter: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -20,
      opacity: 0,
    },
  };

  const logo: Variants = {
    enter: { x: -20, opacity: 0 },
    exit: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };
  const bar: Variants = {
    enter: { x: 20, opacity: 0 },
    exit: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const backgroundImage = useColorModeValue(
    "linear-gradient(to right,#fd6581,#fd3e60 50%,rgba(0, 0, 0, 0.781) 60%)",
    "linear-gradient(to right,#fd6581,#fd3e60 50%,white 60%)"
  );

  const NavLinks = (
    <>
      <MenuItems>
        <DarkModeSwitch />
      </MenuItems>
      <MenuItems>
        <MotionBox key="contact" variants={childVariants} pos="relative">
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Box
              cursor="pointer"
              className={css.navigationLink}
              backgroundImage={backgroundImage}
              onClick={() => {
                onClose;
                if (Router.pathname !== "/") {
                  Router.push("/");
                }
              }}
            >
              Contact
            </Box>
          </ScrollLink>
        </MotionBox>
      </MenuItems>
      <MenuItems>
        <MotionBox key="about" variants={childVariants} pos="relative">
          <ScrollLink
            activeClass="active"
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Box
              cursor="pointer"
              onClick={async () => {
                onClose();

                if (Router.pathname !== "/") {
                  await Router.push("/");
                  scroll.scrollTo(1500);
                }
              }}
              backgroundImage={backgroundImage}
              className={css.navigationLink}
            >
              About
            </Box>
          </ScrollLink>
        </MotionBox>
      </MenuItems>
      <MenuItems>
        <MotionBox key="work" variants={childVariants} pos="relative">
          <ScrollLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <Box
              cursor="pointer"
              className={css.navigationLink}
              onClick={() => {
                onClose();

                if (Router.pathname !== "/") {
                  Router.push("/");
                  scroll.scrollTo(850);
                }
              }}
              backgroundImage={backgroundImage}
            >
              Work
            </Box>
          </ScrollLink>
        </MotionBox>
      </MenuItems>
      <MenuItems>
        <MotionBox key="resume" variants={childVariants}>
          <NextLink href="/resume">
            <Button onClick={onClose} variant="outline" size="md">
              Resume
            </Button>
          </NextLink>
        </MotionBox>
      </MenuItems>
    </>
  );

  return (
    <Box
      top={0}
      position="sticky"
      zIndex={100}
      boxShadow="xs"
      bg={!isDark ? "#FFFFFF" : "#1A202C"}
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        maxW="1024px"
        mx="auto"
        {...props}
      >
        <NextLink href="/">
          <MotionBox
            cursor="pointer"
            initial={showAnimation ? "enter" : undefined}
            animate={showAnimation ? "exit" : undefined}
            variants={logo}
            key="logo"
          >
            <Logo />
          </MotionBox>
        </NextLink>
        <MotionFlex
          display={["none", "none", "inherit", "inherit"]}
          align="center"
          justify="center"
          variants={containerVariants}
          initial={showAnimation ? "exit" : undefined}
          animate={showAnimation ? "enter" : undefined}
          exit={showAnimation ? "exit" : undefined}
        >
          {NavLinks}
        </MotionFlex>
        <Box display={["block", "block", "none", "none"]}>
          <>
            <MotionBox
              initial={showAnimation ? "enter" : undefined}
              animate={showAnimation ? "exit" : undefined}
              variants={bar}
              key="bar"
            >
              <Box color="primary" onClick={onOpen}>
                <FaBars size="40px" />
              </Box>
            </MotionBox>
            <Drawer
              size="xs"
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton m={4}>
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
