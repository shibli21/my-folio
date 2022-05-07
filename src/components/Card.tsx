import {
  Box,
  Flex,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Projects as ProjectsType } from "contentlayer/generated";
import NextLink from "next/link";
import React, { FC } from "react";
import { BrandGithub, ExternalLink } from "tabler-icons-react";
interface CardProps {
  project: ProjectsType;
}

const Card: FC<CardProps> = ({
  project: { external, github, tech, title, description, slug },
}) => {
  return (
    <Stack
      as={LinkBox}
      justifyContent="space-between"
      cursor="default"
      border="1px solid"
      borderTop="4px"
      borderColor="primary"
      overflow="hidden"
      shadow="lg"
      borderRadius="lg"
      h="100%"
      px={5}
      py={5}
    >
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
                <Text
                  fontSize="lg"
                  mb={2}
                  fontWeight="semibold"
                  _hover={{ color: "tertiary" }}
                >
                  {title}
                </Text>
              </LinkOverlay>
            </NextLink>
          </Box>

          <Box>
            <Flex justify="center" align="baseline" pt={2}>
              {github && (
                <Link
                  _hover={{ color: "primary" }}
                  ml={2}
                  href={github}
                  isExternal
                  aria-label={`${title}`}
                >
                  <BrandGithub size="20px" />
                </Link>
              )}
              {external && (
                <Link
                  _hover={{ color: "primary" }}
                  ml={2}
                  href={external}
                  isExternal
                  aria-label={`${title}`}
                >
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
  );
};

export default Card;
