import { Box, Flex, Link, Stack, Tag, Text } from "@chakra-ui/react";
import { Project } from "pages";
import React, { FC } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface CardProps {
  project: Project;
}

const Card: FC<CardProps> = ({ project: { cover, external, github, tech, title, description } }) => {
  return (
    <Stack
      justifyContent="space-between"
      _hover={{
        transform: "scale(1.05)",
        transition: "all 0.2s ease-in-out",
      }}
      cursor="default"
      border="1px solid"
      borderTop="4px"
      borderColor="tertiary"
      overflow="hidden"
      shadow="lg"
      px={5}
      py={5}
    >
      <Box>
        <Flex justifyContent="space-between">
          <Box>
            <Link href={external ? external : `#`} isExternal _hover={{ textDecor: "none" }}>
              <Text fontSize="lg" mb={2} fontWeight="semibold" _hover={{ color: "tertiary", textDecoration: "none" }}>
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
              borderRadius={0}
              textTransform="uppercase"
            >
              {tech}
            </Tag>
          ))}
      </Flex>
    </Stack>
  );
};

export default Card;
