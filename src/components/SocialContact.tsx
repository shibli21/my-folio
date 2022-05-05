import { HStack, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import {
  BrandFacebook,
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  BrandTwitter,
} from "tabler-icons-react";

type Props = {
  isSmall?: boolean;
};

const SocialContacts = ({ isSmall }: Props) => {
  const hover = {
    transform: "scale(1.1)",
    transitionDuration: ".2s",
    color: "primary",
  };

  const size = isSmall ? "24px" : "30px";

  return (
    <>
      <HStack spacing={2} mt={4}>
        <Tooltip label="github">
          <Link
            href="https://github.com/shibli21"
            isExternal
            aria-label="Github"
            _hover={hover}
          >
            <BrandGithub size={size} />
          </Link>
        </Tooltip>
        <Tooltip label="twitter">
          <Link
            href="https://twitter.com/shibli21"
            isExternal
            aria-label="Twitter"
            _hover={hover}
          >
            <BrandTwitter size={size} />
          </Link>
        </Tooltip>
        <Tooltip label="instagram">
          <Link
            href="https://www.instagram.com/__shelbyy____/"
            isExternal
            aria-label="Instagram"
            _hover={hover}
          >
            <BrandInstagram size="30px" />
          </Link>
        </Tooltip>
        <Tooltip label="linkedin">
          <Link
            href="https://www.linkedin.com/in/shibli21/"
            isExternal
            aria-label="Linkedin"
            _hover={hover}
          >
            <BrandLinkedin size={size} />
          </Link>
        </Tooltip>
        <Tooltip label="facebook">
          <Link
            href="https://www.facebook.com/shibli21"
            isExternal
            aria-label="Facebook"
            _hover={hover}
          >
            <BrandFacebook size={size} />
          </Link>
        </Tooltip>
      </HStack>
    </>
  );
};

export default SocialContacts;
