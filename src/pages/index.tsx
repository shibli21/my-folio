import AboutMe from "@/components/AboutMe";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Main } from "@/components/Main";
import Projects from "@/components/Projects";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
interface IndexProps {
  title: string;
  description: string;
  featuredProjects: any;
}

const Index: React.FC<IndexProps> = ({ featuredProjects }) => {
  return (
    <>
      <Head>
        <title>shibli</title>
      </Head>

      <Container>
        <Main>
          <Hero />
          <Projects data={featuredProjects} />
          <AboutMe />
        </Main>
      </Container>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const featuredProjects = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value: any = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../content/featured", true, /\.md$/));

  return {
    props: {
      featuredProjects,
    },
  };
};
