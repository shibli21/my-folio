import { Box, Flex, Image, Link, Tag, Text } from "@chakra-ui/core";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Card = () => {
  return (
    <Box>
      <Image src="https://bit.ly/2k1H1t6" />
      <Flex justifyContent="space-between" my={2}>
        <Box>
          <Text fontSize="lg" mb={2}>
            Weather app
          </Text>
          <Flex>
            <Tag fontSize="xs" mr={2} bg="primary" color="white">
              graphql
            </Tag>
            <Tag fontSize="xs" mr={2} bg="primary" color="white">
              graphql
            </Tag>
          </Flex>
        </Box>
        <Flex justify="center" pt={2}>
          <Link mr={2}>
            <FaGithub size="20px" />
          </Link>
          <Link>
            <FaExternalLinkAlt size="20px" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
