import {
  Box,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import SocialContacts from "./SocialContact";

export default function Footer() {
  return (
    <Box
      color={useColorModeValue("gray.700", "gray.200")}
      borderTopWidth={1}
      borderStyle={"solid"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Heading size="md">Syed Shibli Mahmud</Heading>
        <HStack spacing={6}>
          <NextLink href="/">Home</NextLink>
          <NextLink href="/projects">Blog</NextLink>
        </HStack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Shibli. All rights reserved</Text>
          <SocialContacts isSmall />
        </Container>
      </Box>
    </Box>
  );
}
