import { Box, Button, Flex, Grid, Text } from "@chakra-ui/core";
import React from "react";
import css from "../style/index.scss";
import Card from "./Card";
import NextLink from "next/link";

const Projects = () => {
  return (
    <Box id="projects">
      <Flex flexDirection="column" mb={10}>
        <Text fontSize="4xl" fontWeight="700" className={css.line_projects}>
          Portfolio
        </Text>
        <Text fontSize="xl">Take a look at my latest projects</Text>
      </Flex>
      <Grid
        templateColumns={["1fr", "1fr 1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"]}
        gap={6}
      >
        <Card />
        <Card />
        <Card />
      </Grid>
      <Box textAlign="center" mt={10}>
        <NextLink href="/projects">
          <Button
            variant="outline"
            borderColor="primary"
            color="primary"
            size="lg"
            _hover={{ bg: "primary", color: "white", textDecoration: "none" }}
            mt={8}
          >
            View All
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
};

export default Projects;
