import { Box, FlexProps, Link } from "@chakra-ui/core";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import css from "../style/index.scss";

export const Container = (props: FlexProps) => {
  return (
    <Box position="relative">
      <Box
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
      </Box>
      <Box
        {...props}
        maxW="1024px"
        mx={[8, 8, "auto", "auto"]}
        fontFamily="raleway"
      >
        {props.children}
      </Box>
    </Box>
  );
};
