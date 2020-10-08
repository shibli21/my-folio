import { Box, Button, Flex, Link, Text } from "@chakra-ui/core";

export const Hero = () => (
  <Box h="100vh" pt={[120, 150, 180, 200]}>
    <Flex flexDirection="column" justify="center">
      <Text
        fontSize={["sm", "md", "lg", "xl"]}
        fontWeight="700"
        color="primary"
      >
        Hi, my name is
      </Text>

      <Text fontSize={["4xl", "5xl", "5xl", "6xl"]} fontWeight="700">
        Syed Shibli Mahmud.
      </Text>
      <Text fontSize={["4xl", "5xl", "5xl", "6xl"]}>
        I build things for the web.
      </Text>
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
