import { Box, Button, Flex, Link, Text } from "@chakra-ui/core";
import { AnimatePresence, motion, Variants } from "framer-motion";

export const Hero = () => {
  const MotionText = motion.custom(Text);

  const containerVariants: Variants = {
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
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
    <Box h="100vh" pt={[120, 150, 180, 200]}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={containerVariants}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <Flex flexDirection="column" justify="center">
            <MotionText
              fontSize={["sm", "md", "lg", "xl"]}
              fontWeight="700"
              color="primary"
              key="subheading"
              variants={childVariants}
            >
              Hi, my name is
            </MotionText>
            <MotionText
              fontSize={["3xl", "5xl", "5xl", "6xl"]}
              fontWeight="700"
              key="subheading"
              variants={childVariants}
            >
              Syed Shibli Mahmud.
            </MotionText>

            <MotionText
              fontSize={["3xl", "5xl", "5xl", "6xl"]}
              key="subheading"
              variants={childVariants}
            >
              I build things for the web.
            </MotionText>
          </Flex>
          <motion.div key="button" variants={childVariants}>
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
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};
