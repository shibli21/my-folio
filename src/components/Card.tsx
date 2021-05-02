import { Box, Flex, Link, Tag, Text, useColorModeValue } from "@chakra-ui/react";
import NextImage from "next/image";
import { Project } from "pages";
import React, { FC } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface CardProps {
  project: Project;
}

const Card: FC<CardProps> = ({ project: { cover, external, github, tech, title } }) => {
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
          src={cover && `${cover}`}
          alt={`${title}`}
          height={200}
          width={400}
          layout="responsive"
          loading="eager"
        />
      </Box>
      <Box px={5} py={5}>
        <Flex justifyContent="space-between">
          <Box>
            <Link href={external ? external : `#`} isExternal>
              <Text fontSize="lg" mb={2} fontWeight="semibold">
                {title}
              </Text>
            </Link>
          </Box>
          <Box>
            <Flex justify="center" pt={2}>
              {github && (
                <Link _hover={{ color: "primary" }} ml={2} href={github} isExternal aria-label={`${title}`}>
                  <FaGithub size="20px" />
                </Link>
              )}
              {external && (
                <Link _hover={{ color: "primary" }} ml={2} href={external} isExternal aria-label={`${title}`}>
                  <FaExternalLinkAlt size="20px" />
                </Link>
              )}
            </Flex>
          </Box>
        </Flex>
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
