import { Box, FlexProps } from "@chakra-ui/core";
import React from "react";

export const Container = (props: FlexProps) => {
  return <Box {...props} w="1100px" mx="auto" fontFamily="raleway" />;
};
