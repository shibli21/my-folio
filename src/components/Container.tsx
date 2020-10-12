import { Box, FlexProps, Link } from "@chakra-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import css from "../style/index.scss";
import NavBar from "./NavBar";

export const Container = (props: FlexProps) => {
  const MotionBox = motion.custom(Box);
  return (
    <Box position="relative">
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        mt={20}
        className={css.verticalLine}
        display={["none", "none", "none", "inherit"]}
      >
        <Link href="https://github.com/shibli21" isExternal aria-label="Github">
          <Box
            py={4}
            _hover={{
              transform: "scale(1.2)",
              transitionDuration: ".2s",
              color: "primary",
            }}
          >
            <FaGithub size="25px" />
          </Box>
        </Link>
        <Link
          href="https://twitter.com/shibli21"
          isExternal
          aria-label="Twitter"
        >
          <Box
            py={4}
            _hover={{
              transform: "scale(1.2)",
              transitionDuration: ".2s",
              color: "primary",
            }}
          >
            <FaTwitter size="25px" />
          </Box>
        </Link>
        <Link
          href="https://twitter.com/shibli21"
          isExternal
          aria-label="Instagram"
        >
          <Box
            py={4}
            _hover={{
              transform: "scale(1.2)",
              transitionDuration: ".2s",
              color: "primary",
            }}
          >
            <FaInstagram size="25px" />
          </Box>
        </Link>
        <Link
          href="https://www.linkedin.com/in/syed-shibli-mahmud-0bb357163/"
          isExternal
          aria-label="Linkedin"
        >
          <Box
            py={4}
            _hover={{
              transform: "scale(1.2)",
              transitionDuration: ".2s",
              color: "primary",
            }}
          >
            <FaLinkedin size="25px" />
          </Box>
        </Link>
      </MotionBox>
      <Box
        {...props}
        maxW="1024px"
        mx={[4, 8, "auto", "auto"]}
        fontFamily="system-ui"
      >
        <NavBar />
        {props.children}
      </Box>
    </Box>
  );
};
