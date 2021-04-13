import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import MenuItems from "@/components/MenuItems";
import useIntro from "@/hooks/useIntro";
import css from "@/style/nav.scss";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay } from "@chakra-ui/modal";
import { Variants } from "framer-motion";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import { LogoShibli } from "theme/icons/icons";
import { MotionBox, MotionFlex } from "./Motion";

const NavBar = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
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
          <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <Box
              cursor="pointer"
              className={css.navigationLink}
              backgroundImage={backgroundImage}
              onClick={() => {
                onClose;
                if (router.pathname !== "/") {
                  router.push("/");
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
          <ScrollLink activeClass="active" to="aboutMe" spy={true} smooth={true} duration={500}>
            <Box
              cursor="pointer"
              onClick={async () => {
                onClose();
                if (router.pathname !== "/") {
                  await router.push("/");
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
          <ScrollLink activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            <Box
              cursor="pointer"
              className={css.navigationLink}
              onClick={() => {
                onClose();

                if (router.pathname !== "/") {
                  router.push("/");
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
    </>
  );

  return (
    <Box top={0} position="sticky" as="header" zIndex={100} boxShadow="xs" bg={useColorModeValue("white", "gray.800")}>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" maxW="1024px" mx="auto">
        <NextLink href="/">
          <MotionBox
            cursor="pointer"
            initial={showAnimation ? "enter" : "exit"}
            animate={showAnimation ? "exit" : "exit"}
            variants={logo}
            key="logo"
          >
            <LogoShibli />
          </MotionBox>
        </NextLink>
        <MotionFlex
          display={["none", "none", "inherit", "inherit"]}
          align="center"
          justify="center"
          variants={containerVariants}
          initial={showAnimation ? "exit" : "enter"}
          animate={showAnimation ? "enter" : "enter"}
          exit={showAnimation ? "exit" : "enter"}
        >
          {NavLinks}
        </MotionFlex>
        <Box display={["block", "block", "none", "none"]}>
          <>
            <MotionBox
              initial={showAnimation ? "enter" : "exit"}
              animate={showAnimation ? "exit" : "exit"}
              variants={bar}
              key="bar"
            >
              <Box color="primary" onClick={onOpen}>
                <FaBars size="35px" />
              </Box>
            </MotionBox>
            <Drawer size="xs" isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton m={4}>
                  <Box color="primary">
                    <RiCloseFill size="50px" />
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
