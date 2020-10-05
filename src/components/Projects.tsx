import { Box, Flex, Grid, Text } from "@chakra-ui/core";
import React from "react";
import css from "../style/index.scss";
import Card from "./Card";

interface Props {}

const Projects = (props: Props) => {
  return (
    <Box>
      <Flex flexDirection="column" mb={10}>
        <Text fontSize="4xl" fontWeight="700" className={css.line_projects}>
          Portfolio
        </Text>
        <Text fontSize="xl">Take a look at my latest projects</Text>
      </Flex>
      <Grid templateColumns="1fr 1fr 1fr" gap={6}>
        <Card />
        <Card />
        <Card />
      </Grid>
    </Box>
  );
};

export default Projects;
