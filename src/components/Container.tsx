import { Box, FlexProps, Link } from "@chakra-ui/core";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import css from "../style/index.scss";

export const Container = (props: FlexProps) => {
  return (
    <Box position="relative">
      <Box mt={20} className={css.verticalLine} ml="auto">
        <Link href="https://github.com/shibli21" isExternal>
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
        <Link href="https://twitter.com/shibli21" isExternal>
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
        <Link href="https://twitter.com/shibli21" isExternal>
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
      <Box {...props} w="1000px" mx="auto" fontFamily="raleway">
        {props.children}
      </Box>
    </Box>
  );
};
