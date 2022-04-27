import { Flex, FlexProps, Grid, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  BrandTwitter,
} from "tabler-icons-react";

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
    mt={[10, 10, 20]}
    py="4rem"
    {...props}
  >
    <Text textAlign="center" fontSize="sm">
      Designed & developed by Syed Shibli Mahmud
    </Text>
    <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gap="20px" pt={4}>
      <Link
        _hover={hover}
        href="https://github.com/shibli21"
        isExternal
        aria-label="Github"
      >
        <BrandGithub size="20px" />
      </Link>
      <Link
        href="https://twitter.com/shibli21"
        isExternal
        aria-label="Twitter"
        _hover={hover}
      >
        <BrandTwitter size="20px" />
      </Link>
      <Link
        href="https://twitter.com/shibli21"
        isExternal
        aria-label="Instagram"
        _hover={hover}
      >
        <BrandInstagram size="20px" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/syed-shibli-mahmud-0bb357163/"
        isExternal
        aria-label="Linkedin"
        _hover={hover}
      >
        <BrandLinkedin size="20px" />
      </Link>
    </Grid>
  </Flex>
);
