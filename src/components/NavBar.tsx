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
import { motion, Variants } from "framer-motion";
import useIntro from "../hooks/useIntro";

const NavBar = () => {
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

  const NavLinks = (
    <>
      <MotionBox
        key="contact"
        variants={childVariants}
        pos="relative"
        fontSize={["25px", "25px", "inherit", "inherit"]}
      >
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
      </MotionBox>
      <MotionBox
        key="about"
        variants={childVariants}
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
      </MotionBox>
      <MotionBox
        key="work"
        variants={childVariants}
        pos="relative"
        ml={8}
        fontSize={["25px", "25px", "inherit", "inherit"]}
      >
        <Link
          className={css.navigationLink}
          as={ScrollLink}
          onClick={() => {
            onClose();

            if (Router.pathname !== "/") {
              Router.push("/");
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
      </MotionBox>
      <MotionBox
        key="resume"
        variants={childVariants}
        ml={8}
        fontSize={["25px", "25px", "inherit", "inherit"]}
      >
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
      </MotionBox>
    </>
  );

  return (
    <Box top={0} position="sticky" zIndex={100} bg="white">
      <Flex justifyContent="space-between" fontSize="xl" py={4}>
        <NextLink href="/">
          <MotionBox
            cursor="pointer"
            initial={showAnimation ? { x: -20, opacity: 0 } : undefined}
            animate={
              showAnimation
                ? {
                    x: 0,
                    opacity: 1,
                    transition: { delay: 0.5 },
                  }
                : undefined
            }
            key="logo"
          >
            <Logo />
          </MotionBox>
        </NextLink>
        <MotionFlex
          display={["none", "none", "inherit", "inherit"]}
          alignItems="center"
          variants={containerVariants}
          initial={showAnimation ? "exit" : undefined}
          animate={showAnimation ? "enter" : undefined}
          exit={showAnimation ? "exit" : undefined}
        >
          {NavLinks}
        </MotionFlex>
        <Box display={["block", "block", "none", "none"]}>
          <>
            <motion.div
              key="bar"
              initial={{ x: 20, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { delay: 0.5 },
              }}
            >
              <Box color="primary" onClick={onOpen}>
                <FaBars size="40px" />
              </Box>
            </motion.div>
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
