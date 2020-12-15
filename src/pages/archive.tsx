import { Box, Text } from "@chakra-ui/react";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Logo from "../../public/logo.svg";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import Table from "../components/table";
export interface Data {
  cover: string;
  date: string;
  external: string;
  github: string;
  showInProjects: boolean;
  tech: Array<String>;
  title: string;
}

export interface ArchiveProjects {
  data: Data;
  markdownBody: string;
  slug: string;
}

interface ArchiveProps {
  archiveProjects: [ArchiveProjects];
}

const Archive = ({ archiveProjects }: ArchiveProps) => {
  return (
    <>
      <Head>
        <title>shibli | archive</title>
        <link rel="icon" href={Logo} type="image/x-icon" />
      </Head>
      <Container>
        <Main>
          <Box>
            <Box mt={6} cursor="pointer">
              <FaArrowLeft onClick={() => history.back()} />
            </Box>
            <Text fontSize="6xl" fontWeight="700">
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
  const archiveProjects = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value: any = values[index];
      const document = matter(value.default);
      return {
        data: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../content/projects", true, /\.md$/));

  return {
    props: {
      archiveProjects,
    },
  };
};
