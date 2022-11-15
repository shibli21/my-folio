import { AspectRatio, Box, Circle, Flex, Grid } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";
import ReactTyped from "react-typed";
import { MotionHeading, MotionText } from "./Motion";
import SocialContacts from "./SocialContact";

export const Hero = () => {
  const containerVariants: Variants = {
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delay: 0.1,
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
    <Box
      py={20}
      pb={[0, 20]}
      gap={10}
      id="contact"
      as={Grid}
      templateColumns={["1fr", "1fr", "1fr 1fr"]}
      alignItems="center"
    >
      <motion.div variants={containerVariants} initial="exit" animate="enter" exit="exit">
        <Flex flexDirection="column" justify="center">
          <MotionHeading variants={childVariants} fontSize={["3xl", "4xl", "2.7rem"]}>
            Syed Shibli Mahmud
          </MotionHeading>

          <MotionText fontWeight="400" key="subheading2" variants={childVariants}>
            <ReactTyped
              style={{
                fontSize: "1.5rem",
                fontFamily: "poppins",
              }}
              strings={[
                "I'm a full-stack web developer",
                "I'm an android developer",
                "I'm an ios developer",
                "I'm a react developer",
              ]}
              typeSpeed={50}
              backSpeed={50}
              backDelay={1}
              loop
              smartBackspace
            />
          </MotionText>
        </Flex>
        <motion.div key="socialContacts" variants={childVariants}>
          <SocialContacts />
        </motion.div>
      </motion.div>
      <Box p={[5, 0]} borderRadius="50%" overflow="hidden">
        <AspectRatio ratio={1}>
          <Image width={400} height={400} src="/shibli.JPG" alt="Syed shibli mahmud" priority />
        </AspectRatio>
      </Box>
    </Box>
  );
};
