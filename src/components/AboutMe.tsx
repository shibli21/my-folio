import { Box, Grid, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <Box px={["0", "0", "0", "70px"]}>
      <Box my="6rem" id="aboutMe">
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
          </Box>
          <Box
            maxW="350px"
            maxH="350px"
            pos="relative"
            border="1px solid"
            borderColor="brandSecondary.300"
            justifySelf="center"
            alignSelf="center"
          >
            <Box>
              <NextImage
                src="/me2.jpeg"
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
    </Box>
  );
};

export default AboutMe;
