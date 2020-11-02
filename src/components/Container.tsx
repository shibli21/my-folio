import { Flex, FlexProps } from "@chakra-ui/core";
import React from "react";
import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";

export const Container = (props: FlexProps) => {
  return (
    <>
      <NavBar />
      <Flex
        boxSizing="border-box"
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        position="relative"
        {...props}
      >
        <SocialIcons />
        {props.children}
      </Flex>
    </>
  );
};
