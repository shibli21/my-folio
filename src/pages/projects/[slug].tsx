import { MDXComponents } from "components/MDXComponents";
import { allProjects, Projects } from "contentlayer/generated";
import ProjectLayout from "layouts/project";
import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";

export default function Project({ project }: { project: Projects }) {
  const Component = useMDXComponent(project.body.code);

  return (
    <ProjectLayout project={project}>
      <Component components={MDXComponents} />
    </ProjectLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const project = allProjects.find((project) => project.slug === params.slug);

  return { props: { project } };
}
