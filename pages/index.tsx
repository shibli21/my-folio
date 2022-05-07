import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import { pick } from "contentlayer/client";
import { allProjects, Projects as ProjectsType } from "contentlayer/generated";
import { GetStaticProps } from "next";
import React from "react";

interface IndexProps {
  projects: ProjectsType[];
}

const Index: React.FC<IndexProps> = ({ projects }) => {
  return (
    <Container>
      <Hero />
      <Resume />
      <Projects projects={projects} />
    </Container>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const projects = allProjects.map((project) =>
    pick(project, [
      "title",
      "image",
      "slug",
      "github",
      "external",
      "description",
      "publishedAt",
      "tech",
      "featured",
    ])
  );

  return { props: { projects: JSON.parse(JSON.stringify(projects)) } };
};
