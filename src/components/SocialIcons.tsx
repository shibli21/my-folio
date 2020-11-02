import { Box, Link } from "@chakra-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import css from "../style/index.scss";

const SocialIcons = () => {
  const MotionBox = motion.custom(Box);

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      className={css.verticalLine}
    >
      <Link href="https://github.com/shibli21" isExternal aria-label="Github">
        <Box
          mt={8}
          mb={4}
          _hover={{
            transform: "scale(1.2)",
            transitionDuration: ".2s",
            color: "primary",
          }}
          as={FaGithub}
          size="25px"
        />
      </Link>
      <Link href="https://twitter.com/shibli21" isExternal aria-label="Twitter">
        <Box
          my={4}
          _hover={{
            transform: "scale(1.2)",
            transitionDuration: ".2s",
            color: "primary",
          }}
          size="25px"
          as={FaTwitter}
        />
      </Link>
      <Link
        href="https://twitter.com/shibli21"
        isExternal
        aria-label="Instagram"
      >
        <Box
          my={4}
          _hover={{
            transform: "scale(1.2)",
            transitionDuration: ".2s",
            color: "primary",
          }}
          size="25px"
          as={FaInstagram}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/syed-shibli-mahmud-0bb357163/"
        isExternal
        aria-label="Linkedin"
      >
        <Box
          my={4}
          _hover={{
            transform: "scale(1.2)",
            transitionDuration: ".2s",
            color: "primary",
          }}
          as={FaLinkedin}
          size="25px"
        />
      </Link>
    </MotionBox>
  );
};

export default SocialIcons;
