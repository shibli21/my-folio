import {
  Box,
  Flex,
  Link,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Card = ({ project }: any) => {
  if (!project) {
    return <h1>No project</h1>;
  }
  return (
    <Box
      border="1px solid"
      borderColor={useColorModeValue("gray.200", "#30363d")}
      overflow="hidden"
      _hover={{
        boxShadow: "#fd3e60 -8px 8px",
        transition: "ease-in-out",
        transitionDuration: ".4s",
      }}
    >
      <Box borderBottom="3px solid" borderColor="gray.500">
        <NextImage
          src={project.frontmatter.cover && `${project.frontmatter.cover}`}
          alt={`${project.frontmatter.title}`}
          height="200"
          width="400"
          layout="responsive"
          loading="eager"
        />
      </Box>
      <Box px={5} py={5}>
        <Flex justifyContent="space-between">
          <Box>
            <Link
              href={
                project.frontmatter.external
                  ? project.frontmatter.external
                  : `#`
              }
              isExternal
            >
              <Text fontSize="lg" mb={2} fontWeight="semibold">
                {project.frontmatter.title}
              </Text>
            </Link>
          </Box>
          <Box>
            <Flex justify="center" pt={2}>
              {project.frontmatter.github && (
                <Link
                  _hover={{ color: "primary" }}
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
                  _hover={{ color: "primary" }}
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
        <Flex mt={2}>
          {project.frontmatter.tech &&
            project.frontmatter.tech.map((tech: string, i: number) => (
              <Tag
                fontSize="xs"
                fontWeight="semibold"
                mr={2}
                bg="primary"
                color="white"
                key={i}
                borderRadius={0}
                textTransform="uppercase"
              >
                {tech}
              </Tag>
            ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
