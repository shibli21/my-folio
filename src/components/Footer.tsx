import { Flex, FlexProps, Grid, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Github, Instagram, LinkedIn, Twitter } from "../theme/icons/icons";

const hover = {
  transform: "scale(1.1)",
  transitionDuration: ".2s",
  color: "primary",
};

export const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    flexDir="column"
    justify="center"
    align="center"
    py="4rem"
    {...props}
  >
    <Text textAlign="center" fontSize="sm">
      Designed & developed by Syed Shibli Mahmud
    </Text>
    <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gap="20px" pt={4}>
      <Link href="https://github.com/shibli21" isExternal aria-label="Github">
        <Github _hover={hover} />
      </Link>
      <Link href="https://twitter.com/shibli21" isExternal aria-label="Twitter">
        <Twitter _hover={hover} />
      </Link>
      <Link
        href="https://twitter.com/shibli21"
        isExternal
        aria-label="Instagram"
      >
        <Instagram _hover={hover} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/syed-shibli-mahmud-0bb357163/"
        isExternal
        aria-label="Linkedin"
      >
        <LinkedIn _hover={hover} />
      </Link>
    </Grid>
  </Flex>
);
