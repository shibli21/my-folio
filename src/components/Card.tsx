import { Box, Flex, Image, Link, Tag, Text } from "@chakra-ui/core";
import React from "react";
const Card = (props) => {
  return (
    <Box>
      <Image src="https://bit.ly/2k1H1t6" />
      <Flex justifyContent="space-between" my={2}>
        <Box>
          <Text fontSize="xl" mb={2}>
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
        <Link>
          <Text fontSize="xl">Live demo</Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Card;
