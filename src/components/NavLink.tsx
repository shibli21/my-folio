import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";

const NavLink = (props: BoxProps) => {
  const backgroundImage = useColorModeValue(
    "linear-gradient(to right,#fd6581,#fd3e60 50%,rgba(0, 0, 0, 0.781) 60%)",
    "linear-gradient(to right,#fd6581,#fd3e60 50%,white 60%)"
  );

  return <Box cursor="pointer" __css={navigationLinkStyle} backgroundImage={backgroundImage} {...props}></Box>;
};

export default NavLink;

//style

const navigationLinkStyle = {
  fontWeight: 700,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  transition: "all 0.4s cubic-bezier(0, 0, 0.23, 1)",
  backgroundSize: "300% 100%",
  backgroundPosition: "100%",
  _after: {
    position: "absolute",
    display: "block",
    transform: "scaleX(0)",
    bottom: "0",
    left: "0",
    background: "linear-gradient(319.11deg, #fd3e60 0%, #fd6581 100%)",
    width: "100%",
    content: '""',
    height: "2px",
    transition: ["transform 250ms ease-in-out", "transform 250ms ease-in-out, transform 250ms ease-in-out"],
    transformOrigin: "100% 50%",
  },
  _hover: {
    backgroundPosition: "0%",
    backgroundSize: "340% 100%",
    _after: {
      backgroundImage: [
        "gradient(linear, left top, right top, from(#fd6581), to(#fd3e60))",
        "linear-gradient(to right, #fd6581, #fd3e60 100%)",
      ],
      transform: "scaleX(1)",
      transformOrigin: "0 50%",
    },
  },
};
