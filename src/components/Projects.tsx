import { Box, Button, Grid, HStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Project } from "pages";
import React, { FC } from "react";
import { FaArrowRight } from "react-icons/fa";
import Card from "./Card";

interface ProjectsProps {
  data: Project[];
}

const Projects: FC<ProjectsProps> = ({ data }) => {
  return (
    <Box id="projects">
      <HStack alignItems="center" justifyContent="space-between">
        <Text fontSize={["3xl", "4xl"]} fontWeight="700">
          Projects
        </Text>
        <Box textAlign="center">
          <NextLink href="/archive">
            <Button size={"sm"} rightIcon={<FaArrowRight />}>
              View all
            </Button>
          </NextLink>
        </Box>
      </HStack>
      <Text fontSize={["lg", "xl"]} mb={10}>
        Take a look at my latest projects
      </Text>
      <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap={6}>
        {data.map((project) => (
          <Card project={project} key={project.slug} />
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;

// export const getStaticProps: GetStaticProps = async () => {};
