import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import { getAllFilesFrontMatter } from "lib/mdx";
import { GetStaticProps } from "next";
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
    <Container>
      <Hero />
      <Projects data={featuredProjects} />
    </Container>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const projects: Project[] = await getAllFilesFrontMatter("projects");

  const featuredProjects = projects.filter((p) => p.featured).reverse();

  return { props: { featuredProjects } };
};
