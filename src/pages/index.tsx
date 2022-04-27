import { Hero } from "@/components/Hero";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import { Stack } from "@chakra-ui/react";
import { getAllFilesFrontMatter } from "lib/mdx";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

export interface Project {
  cover: string;
  date: string;
  external: string;
  github: string;
  showInProjects: boolean;
  tech: string[];
  title: string;
  slug: string;
  featured: boolean;
  description: string;
  order: number;
}

interface IndexProps {
  featuredProjects: Project[];
}

const Index: React.FC<IndexProps> = ({ featuredProjects }) => {
  return (
    <>
      <Head>
        <title>shibli</title>
      </Head>

      <Layout>
        <Stack spacing={20}>
          <Hero />
          <Projects data={featuredProjects} />
        </Stack>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const projects: Project[] = await getAllFilesFrontMatter("projects");

  const featuredProjects = projects.filter((p) => p.featured).reverse();

  return { props: { featuredProjects } };
};
