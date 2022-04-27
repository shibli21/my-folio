import { Link, Stack } from "@chakra-ui/react";
import React from "react";
import {
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  BrandTwitter,
} from "tabler-icons-react";
import useIntro from "../hooks/useIntro";
import { MotionBox } from "./Motion";

const SocialIcons = () => {
  const showAnimation = useIntro();

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
      __css={{
        display: "flex",
        "@media screen and (max-width: 1280px)": {
          display: "none",
        },
      }}
    >
      <Stack spacing={10} flexDir="column">
        <Link
          href="https://github.com/shibli21"
          isExternal
          aria-label="Github"
          _hover={hover}
        >
          <BrandGithub size="30px" />
        </Link>
        <Link
          href="https://twitter.com/shibli21"
          isExternal
          aria-label="Twitter"
          _hover={hover}
        >
          <BrandTwitter size="30px" />
        </Link>
        <Link
          href="https://www.instagram.com/__shelbyy____/"
          isExternal
          aria-label="Instagram"
          _hover={hover}
        >
          <BrandInstagram size="30px" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/shibli21"
          isExternal
          aria-label="Linkedin"
          _hover={hover}
        >
          <BrandLinkedin size="30px" />
        </Link>
      </Stack>
    </MotionBox>
  );
};

export default SocialIcons;
