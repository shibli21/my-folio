import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React from "react";
import { MotionText } from "./Motion";

export const Hero = () => {
  const containerVariants: Variants = {
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 0.5,
      },
    },
    exit: { x: -300, opacity: 0 },
  };

  const childVariants: Variants = {
    enter: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -20,
      opacity: 0,
    },
  };

  return (
    <Box h="100vh" maxH="600px" pt={[100, 150, 180, 200]} id="contact">
      <motion.div variants={containerVariants} initial="exit" animate="enter" exit="exit">
        <Flex flexDirection="column" justify="center">
          <MotionText
            fontSize={["xl", "xl", "xl", "2xl"]}
            fontWeight="700"
            color="primary"
            mb={2}
            key="subheading1"
            variants={childVariants}
          >
            Hello 👋 , I'm
          </MotionText>
          <MotionText
            fontSize={["3xl", "5xl", "5xl", "6xl"]}
            mb={2}
            lineHeight="1"
            fontWeight="700"
            key="heading"
            variants={childVariants}
          >
            Syed Shibli Mahmud.
          </MotionText>

          <MotionText
            fontSize={["md", "md", "lg", "xl"]}
            fontWeight="600"
            key="subheading2"
            color="tertiary"
            mb={2}
            variants={childVariants}
          >
            Full-stack & Mobile Application developer
          </MotionText>
          <MotionText
            fontSize={["lg", "lg", "xl", "2xl"]}
            fontWeight="600"
            key="subheading2"
            lineHeight="1.2"
            variants={childVariants}
            w={["100%", "100%", "100%", "90%"]}
          >
            Building things for the web with TypeScript, React, and Next.js and mobile applications with Dart and
            Flutter are my passions
            {/* Building web applications with TypeScript, React, and Next.js, and mobile apps with
            Dart and Flutter are my specialties */}
          </MotionText>
        </Flex>
        <motion.div key="button" variants={childVariants}>
          <Button colorScheme="brand" size="md" mt={8} as={Link} href="mailto:syedshiblimahmud@gmail.com">
            Get In Touch
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};
