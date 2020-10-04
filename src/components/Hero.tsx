import { Text, Box, Flex, Grid, Image, Link } from "@chakra-ui/core";
import React from "react";
import css from "../style/index.scss";
import github from "../Public/iconfinder__github_2006660.svg";
import twitter from "../Public/iconfinder_Circled_Twitter_svg_5279123.svg";
import linkedin from "../Public/iconfinder_Circled_Linkedin_svg_5279114.svg";

export const Hero = () => (
  <Grid templateColumns="1fr 1fr" mt={"150px"}>
    <Flex flexDirection="column">
      <Text fontSize="4xl" fontWeight="700">
        Syed Shibli Mahmud
      </Text>
      <Text fontSize="xl" ml={"50px"} className={css.line}>
        Passionate JavaScript Developer
      </Text>
    </Flex>
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
  </Grid>
);
