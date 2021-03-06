import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Project } from "pages";
import React, { FC } from "react";
import Card from "./Card";

interface ProjectsProps {
  data: Project[];
}

const Projects: FC<ProjectsProps> = ({ data }) => {
  return (
    <Box id="projects">
      <Flex flexDirection="column" mb={10}>
        <Text fontSize="4xl" fontWeight="700">
          Projects
        </Text>
        <Text fontSize="xl">Take a look at my latest projects</Text>
      </Flex>
      <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap={6}>
        {data.map((project) => (
          <Card project={project} key={project.slug} />
        ))}
      </Grid>
      <Box textAlign="center" mt={10}>
        <NextLink href="/archive">
          <Button variant="outline" size="lg" mt={8}>
            View all
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
};

export default Projects;

// export const getStaticProps: GetStaticProps = async () => {};
