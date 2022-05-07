import {
  Avatar,
  Box,
  Container as ChakraContainer,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Projects } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import type { PropsWithChildren } from "react";
import { Clock } from "tabler-icons-react";
import { Container } from "../components/Container";

export default function ProjectLayout({
  children,
  project,
}: PropsWithChildren<{ project: Projects }>) {
  return (
    <Container>
      <ChakraContainer p={0} maxW="container.md">
        <Flex
          as="article"
          flexDirection="column"
          alignItems="start"
          justify="center"
          w="full"
          mx="auto"
          mb={4}
        >
          <Heading mb={4}>{project.title}</Heading>
          <Flex
            fontSize="sm"
            justify="space-between"
            direction={["column", "row"]}
            w="full"
          >
            <Flex alignItems="center">
              <Avatar size="xs" src="/shibli_sq.png" />
              <Text ml={2}>
                {"Syed Shibli Mahmud / "}
                {format(parseISO(project.publishedAt), "MMMM dd, yyyy")}
              </Text>
            </Flex>
            <HStack mt={1} pl={7}>
              <Clock size="16px" />
              <Text>{project.readingTime.text}</Text>
            </HStack>
          </Flex>
          <Box w="full" mt={4}>
            {children}
          </Box>
        </Flex>
      </ChakraContainer>
    </Container>
  );
}
