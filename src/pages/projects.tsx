import { Container } from "@/components/Container";
import { Box, Stack, Text } from "@chakra-ui/react";
import { getAllFilesFrontMatter } from "lib/mdx";
import { GetStaticProps } from "next";
import { Project } from "pages";
import React, { FC } from "react";
import Table from "../components/table";

interface ArchiveProps {
  archiveProjects: Project[];
}

const Archive: FC<ArchiveProps> = ({ archiveProjects }) => {
  return (
    <Container>
      <Stack spacing={6}>
        <Box py={[4, 4, 10]}>
          <Text fontSize="4xl" fontWeight="700">
            Archive
          </Text>
          <Text fontSize="xl">A big list of things I’ve worked on</Text>
        </Box>
        <Table data={archiveProjects} />
      </Stack>
    </Container>
  );
};
export default Archive;

export const getStaticProps: GetStaticProps = async () => {
  const archiveProjects: Project[] = await getAllFilesFrontMatter("projects");

  return { props: { archiveProjects } };
};
