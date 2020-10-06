import { Box, FlexProps, Image, Link } from "@chakra-ui/core";
import React from "react";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";
import twitter from "../../public/twitter.svg";
import css from "../style/index.scss";

export const Container = (props: FlexProps) => {
  return (
    <Box position="relative">
      <Box mt={20} className={css.verticalLine} ml="auto">
        <Link href="https://github.com/shibli21" isExternal>
          <Image h={"30px"} mt={10} mb={10} src={github} alt="" />
        </Link>
        <Link href="https://twitter.com/shibli21" isExternal>
          <Image h={"30px"} mb={10} src={twitter} alt="" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/syed-shibli-mahmud-0bb357163/"
          isExternal
        >
          <Image h={"30px"} mb={10} src={linkedin} alt="" />
        </Link>
      </Box>
      <Box {...props} w="1000px" mx="auto" fontFamily="raleway">
        {props.children}
      </Box>
    </Box>
  );
};
