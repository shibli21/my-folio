import { Box, Link, Stack, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import useIntro from "../hooks/useIntro";
import { Github, Instagram, LinkedIn, Twitter } from "../theme/icons/icons";

const SocialIcons = () => {
  const MotionBox = motion.custom(Box);
  const showAnimation = useIntro();

  const [isLargerThan1280] = useMediaQuery("(max-width: 1200px)");

  const hover = {
    transform: "scale(1.1)",
    transitionDuration: ".2s",
    color: "primary",
  };

  return (
    <MotionBox
      initial={showAnimation ? { opacity: 0 } : undefined}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      position="fixed"
      left="70px"
      top="35vh"
      display={isLargerThan1280 ? "none" : "flex"}
    >
      <Stack spacing={10} flexDir="column">
        <Link href="https://github.com/shibli21" isExternal aria-label="Github">
          <Github _hover={hover} fontSize="25px" />
        </Link>
        <Link
          href="https://twitter.com/shibli21"
          isExternal
          aria-label="Twitter"
        >
          <Twitter _hover={hover} fontSize="25px" />
        </Link>
        <Link
          href="https://twitter.com/shibli21"
          isExternal
          aria-label="Instagram"
        >
          <Instagram _hover={hover} fontSize="25px" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/syed-shibli-mahmud-0bb357163/"
          isExternal
          aria-label="Linkedin"
        >
          <LinkedIn _hover={hover} fontSize="25px" />
        </Link>
      </Stack>
    </MotionBox>
  );
};

export default SocialIcons;
