import { Box, Button, Flex, Link, Text } from "@chakra-ui/core";

export const Hero = (props) => (
  <Box h="100vh" pt={200}>
    <Flex flexDirection="column" justify="center">
      <Text fontSize="xl" fontWeight="700" color="primary">
        Hi, my name is
      </Text>
      <Text fontSize="6xl" fontWeight="700">
        Syed Shibli Mahmud.
      </Text>
      <Text fontSize="6xl">I build things for the web.</Text>
    </Flex>
    <Button
      variant="outline"
      borderColor="primary"
      color="primary"
      size="lg"
      _hover={{ bg: "primary", color: "white", textDecoration: "none" }}
      mt={8}
      as={Link}
      href="mailto:syedshiblimahmud@gmail.com"
    >
      Get In Touch
    </Button>
  </Box>
);
