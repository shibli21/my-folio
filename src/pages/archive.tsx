import { Box, Text } from "@chakra-ui/react";
import { getAllFilesFrontMatter } from "lib/mdx";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Project } from "pages";
import React, { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import Table from "../components/table";

interface ArchiveProps {
  archiveProjects: Project[];
}

const Archive: FC<ArchiveProps> = ({ archiveProjects }) => {
  return (
    <>
      <Head>
        <title>archive | shibli</title>
      </Head>
      <Container>
        <Main>
          <Box>
            <Box mt={6} cursor="pointer" display="inline-block">
              <FaArrowLeft onClick={() => history.back()} />
            </Box>
            <Text fontSize="4xl" fontWeight="700">
              Archive
            </Text>
          </Box>
          <Text fontSize="xl">A big list of things I’ve worked on</Text>
          <Table data={archiveProjects} />
        </Main>
      </Container>
    </>
  );
};
export default Archive;

export const getStaticProps: GetStaticProps = async () => {
  const archiveProjects: Project[] = await getAllFilesFrontMatter("projects");

  return { props: { archiveProjects } };
};
