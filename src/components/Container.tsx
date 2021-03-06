import { Flex, FlexProps } from "@chakra-ui/react";
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
        minH="calc(100vh - 20rem)"
        {...props}
      >
        <SocialIcons />
        {props.children}
      </Flex>
    </>
  );
};
