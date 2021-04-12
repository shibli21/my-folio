import { Box, Grid, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <Box py="6rem" px={["0", "0", "0", "70px"]} id="aboutMe">
      <Text fontSize="4xl" mb={10} lineHeight={1} fontWeight="700">
        About me
      </Text>
      <Grid templateColumns={["1fr", "1fr ", "1fr 1fr", "1fr 1fr"]} columnGap={2} rowGap={10}>
        <Box alignSelf="center">
          <Text mb={1} fontSize="xl" color="gray.500" fontWeight="700">
            Hi there, I’m Shibli
          </Text>

          <Text mb={1} fontSize="xl">
            I am a cs student & a computer nerd. I am an incoming software engineer. Primarily interested in web
            development. I have experience of working with react, javascript, typescript python! Besides that, I have
            worked with react-native for app development
          </Text>

          {/* <Text mb={3} fontSize="lg">
            Here are a few technologies I've been working with recently:
          </Text>
          <Grid templateColumns="1fr 1fr" gap={2}>
            <HStack p={1} spacing={3}>
              <SiTypescript fontSize="20px" />
              <Text>Typescript</Text>
            </HStack>
            <HStack p={1} spacing={3}>
              <FaReact fontSize="20px" />
              <Text>React</Text>
            </HStack>
            <HStack p={1} spacing={3}>
              <FaNodeJs fontSize="20px" />
              <Text>Nodejs</Text>
            </HStack>
            <HStack p={1} spacing={3}>
              <GrGraphQl fontSize="20px" />
              <Text>GraphQl</Text>
            </HStack>
            <HStack p={1} spacing={3}>
              <FaCss3 fontSize="20px" />
              <Text>(S)CSS</Text>
            </HStack>
            <HStack p={1} spacing={3}>
              <FaHtml5 fontSize="20px" />
              <Text>HTML</Text>
            </HStack>
          </Grid> */}
        </Box>

        <Box
          maxW="350px"
          maxH="350px"
          pos="relative"
          border="10px solid"
          borderColor="primary"
          justifySelf="center"
          alignSelf="center"
        >
          <Box>
            <NextImage
              src="/me.jpg"
              height={350}
              width={350}
              alt="syed shibli mahmud"
              loading="eager"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default AboutMe;
