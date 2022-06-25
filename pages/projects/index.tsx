import { Container } from "@/components/Container";
import Title from "@/components/Title";
import { Box, Flex, Grid, Link, LinkBox, LinkOverlay, Stack, Tag, Text } from "@chakra-ui/react";
import { pick } from "contentlayer/client";
import { allProjects, Projects as ProjectsType } from "contentlayer/generated";
import { GetStaticProps } from "next";
import Image from "next/image";
import NextLink from "next/link";
import React, { FC } from "react";
import { BrandGithub, ExternalLink } from "tabler-icons-react";

interface IProjectProps {
  projects: ProjectsType[];
}

const Project: FC<IProjectProps> = ({ projects }) => {
  return (
    <Container>
      <Stack spacing={6}>
        <Box py={[4, 4, 10]}>
          <Title>Projects</Title>
          <Text fontSize="xl">A big list of things I’ve worked on</Text>
        </Box>
        {projects
          .sort(function (b, a) {
            return Number(a.featured) - Number(b.featured);
          })
          .sort((a, b) => {
            return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
          })
          .map((project) => (
            <Card {...project} key={project.slug} />
          ))}
      </Stack>
    </Container>
  );
};
export default Project;

export const getStaticProps: GetStaticProps = async () => {
  const projects = allProjects.map((project) =>
    pick(project, ["title", "image", "slug", "github", "external", "description", "publishedAt", "tech", "featured"])
  );

  return { props: { projects: JSON.parse(JSON.stringify(projects)) } };
};

interface ICardProps {
  title: string;
  image: string;
  slug: string;
  github?: string;
  external?: string;
  description?: string;
  publishedAt: string;
  tech?: string[];
  featured?: boolean;
}

const Card = ({ description, external, github, image, slug, tech, title }: ICardProps) => {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1.5fr"]}
      as={LinkBox}
      justifyContent="space-between"
      cursor="default"
      border="1px solid"
      borderTop="4px"
      borderColor="primary"
      overflow="hidden"
      shadow="lg"
      borderRadius="lg"
    >
      <Image
        src={image}
        alt={title}
        height={900}
        width={1600}
        layout="responsive"
        objectFit="cover"
        objectPosition="top"
        priority
      />
      <Stack h="100%" px={5} py={5}>
        <Box>
          <Flex justifyContent="space-between">
            <Box>
              <NextLink href={`/projects/${slug}`} passHref>
                <LinkOverlay
                  _hover={{
                    textDecor: "none",
                    color: "primary",
                    transition: "color 0.2s ease-in-out",
                  }}
                >
                  <Text fontSize="lg" mb={2} fontWeight="semibold" _hover={{ color: "tertiary" }}>
                    {title}
                  </Text>
                </LinkOverlay>
              </NextLink>
            </Box>
            <Box>
              <Flex justify="center" align="baseline" pt={2}>
                {github && (
                  <Link _hover={{ color: "primary" }} ml={2} href={github} isExternal aria-label={`${title}`}>
                    <BrandGithub size="20px" />
                  </Link>
                )}
                {external && (
                  <Link _hover={{ color: "primary" }} ml={2} href={external} isExternal aria-label={`${title}`}>
                    <ExternalLink size="20px" />
                  </Link>
                )}
              </Flex>
            </Box>
          </Flex>
          <Text fontSize="sm" my={3} fontWeight="semibold">
            {description}
          </Text>
        </Box>
        <Flex mt={2}>
          {tech &&
            tech.map((tech: string, i: number) => (
              <Tag
                fontSize="xs"
                fontWeight="semibold"
                mr={2}
                bg="primary"
                color="white"
                key={i}
                textTransform="uppercase"
              >
                {tech}
              </Tag>
            ))}
        </Flex>
      </Stack>
    </Grid>
  );
};
