import { Box, Button, Flex, Link, Text } from "@chakra-ui/core";
import { motion } from "framer-motion";

export const Hero = () => {
  const MotionText = motion.custom(Text);
  return (
    <Box h="100vh" pt={[120, 150, 180, 200]}>
      <Flex flexDirection="column" justify="center">
        <MotionText
          fontSize={["sm", "md", "lg", "xl"]}
          fontWeight="700"
          color="primary"
        >
          Hi, my name is
        </MotionText>

        <MotionText fontSize={["4xl", "5xl", "5xl", "6xl"]} fontWeight="700">
          Syed Shibli Mahmud.
        </MotionText>
        <MotionText fontSize={["4xl", "5xl", "5xl", "6xl"]}>
          I build things for the web.
        </MotionText>
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
};
