import { Box, Flex, Image, Link, Tag, Text } from "@chakra-ui/core";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Card = ({ project }: any) => {
  if (!project) {
    return <h1>No project</h1>;
  }
  return (
    <Box>
      <Image
        src={project.frontmatter.cover && `${project.frontmatter.cover}`}
        alt={`${project.frontmatter.title}`}
      />
      <Flex justifyContent="space-between" my={2}>
        <Box>
          <Text fontSize="lg" mb={2}>
            {project.frontmatter.title}
          </Text>
        </Box>
        <Box>
          <Flex justify="center" pt={2}>
            {project.frontmatter.github && (
              <Link
                ml={2}
                href={project.frontmatter.github}
                isExternal
                aria-label={`${project.frontmatter.title}`}
              >
                <FaGithub size="20px" />
              </Link>
            )}
            {project.frontmatter.external && (
              <Link
                ml={2}
                href={project.frontmatter.external}
                isExternal
                aria-label={`${project.frontmatter.title}`}
              >
                <FaExternalLinkAlt size="20px" />
              </Link>
            )}
          </Flex>
        </Box>
      </Flex>
      <Flex>
        {project.frontmatter.tech &&
          project.frontmatter.tech.map((tech: string, i: number) => (
            <Tag fontSize="xs" mr={2} bg="primary" color="white" key={i}>
              {tech}
            </Tag>
          ))}
      </Flex>
    </Box>
  );
};

export default Card;
