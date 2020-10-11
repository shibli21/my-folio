import { Box, Button, Flex, Link, Text } from "@chakra-ui/core";
import { motion } from "framer-motion";

export const Hero = () => {
  const MotionText = motion.custom(Text);
  const name = Array.from("Syed Shibli Mahmud");
  console.log("Hero -> name", name);

  // Add staggering effect to the children of the container
  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  };

  // Variants for animating each letter
  const letterVariants = {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
  };
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
        <MotionText
          width="100%"
          fontSize={["3xl", "5xl", "5xl", "6xl"]}
          fontWeight="700"
          background=""
          display="flex" // Set the display value to flex
          variants={containerVariants}
          initial={"before"}
          animate={"after"}
        >
          {name.map((letter, index) => (
            <MotionText
              key={index}
              variants={letterVariants}
              minW={letter === " " ? "15px" : "auto"}
            >
              {letter}
            </MotionText>
          ))}
        </MotionText>
        {/* <MotionText fontSize={["4xl", "5xl", "5xl", "6xl"]} fontWeight="700">
          Syed Shibli Mahmud.
        </MotionText> */}
        <MotionText fontSize={["3xl", "5xl", "5xl", "6xl"]}>
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
