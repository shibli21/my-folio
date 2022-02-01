import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import MenuItems from "@/components/MenuItems";
import useIntro from "@/hooks/useIntro";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { Button, Center, Fade, Link as ChakraLink } from "@chakra-ui/react";
import { Variants } from "framer-motion";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { HiDownload } from "react-icons/hi";
import { LogoShibli } from "theme/icons/icons";
import HamMenu from "./HamMenu";
import { MotionBox, MotionFlex } from "./Motion";
import NavLink from "./NavLink";

const NavBar: FC = () => {
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

  const scrollTo = async (divId: string) => {
    onClose();
    if (router.pathname !== "/") {
      await router.push("/");
      window.location.href = divId;
    } else {
      window.location.href = divId;
    }
  };

  const NavLinks = (
    <>
      <MenuItems>
        <DarkModeSwitch />
      </MenuItems>
      <MenuItems>
        <MotionBox key="contact" variants={childVariants} pos="relative">
          <NavLink onClick={() => scrollTo("#contact")}>Contact</NavLink>
        </MotionBox>
      </MenuItems>
      <MenuItems>
        <MotionBox key="about" variants={childVariants} pos="relative">
          <NextLink href="/about">
            <NavLink>About</NavLink>
          </NextLink>
        </MotionBox>
      </MenuItems>
      <MenuItems>
        <MotionBox key="work" variants={childVariants} pos="relative">
          <NavLink onClick={() => scrollTo("#projects")}>Projects</NavLink>
        </MotionBox>
      </MenuItems>
      <MenuItems>
        <MotionBox key="work" variants={childVariants} pos="relative">
          <Button
            as={ChakraLink}
            size="sm"
            leftIcon={<HiDownload />}
            href="/pdf/shibli-resume.pdf"
            download
            colorScheme="brand"
          >
            CV
          </Button>
          {/* <NavLink onClick={() => scrollTo("#projects")}>Work</NavLink> */}
        </MotionBox>
      </MenuItems>
    </>
  );

  return (
    <>
      <Box top={0} position="sticky" as="header" zIndex={100} boxShadow="xs" bg={useColorModeValue("white", "#09141b")}>
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
          <Box display={["block", "block", "none", "none"]} zIndex={9999999999}>
            <>
              <MotionBox
                initial={showAnimation ? "enter" : "exit"}
                animate={showAnimation ? "exit" : "exit"}
                variants={bar}
                key="bar"
              >
                <HamMenu
                  onClick={() => (isOpen ? onClose() : onOpen())}
                  isOpen={isOpen}
                  lineProps={{
                    stroke: isOpen ? "white" : "#a277ff",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  style={{ marginLeft: "2rem", zIndex: 999999999 }}
                />
              </MotionBox>
            </>
          </Box>
        </Flex>
        <Fade in={isOpen}>
          <Box bg="#49c29a" top={0} left={0} w="100vw" h="100vh" pos="fixed" pointerEvents={!isOpen ? "none" : "auto"}>
            <Center alignItems="center" h="100%">
              <Stack alignItems="center" spacing={5}>
                {NavLinks}
              </Stack>
            </Center>
          </Box>
        </Fade>
      </Box>
    </>
  );
};

export default NavBar;
