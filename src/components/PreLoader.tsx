import { Box, Flex, Image } from "@chakra-ui/react";
import { motion as Motion } from "framer-motion";
import React from "react";
import Logo from "../../public/logo.svg";

interface PreLoaderProps {}

const PreLoader: React.FC<PreLoaderProps> = () => {
  return (
    <Box h="100vh" w="100%">
      <Flex justify="center" align="center" h="100vh" bg="primary">
        <Motion.div
          animate={{
            rotate: 360,
            scale: 0,
          }}
          transition={{ duration: 3 }}
        >
          <Image src={Logo} h="100px" alt="preloader" />
        </Motion.div>
      </Flex>
    </Box>
  );
};

export default PreLoader;
