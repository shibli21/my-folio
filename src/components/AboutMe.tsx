import { Box, Grid, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import React, { FC } from "react";

const AboutMe: FC = () => {
  return (
    <Box>
      <Box my={[".5rem", "3rem"]} id="aboutMe">
        <Text fontSize="4xl" mb={10} lineHeight={1} fontWeight="700">
          About me
        </Text>
        <Grid templateColumns={["1fr", "1fr ", "1fr 1fr", "1fr 1fr"]} columnGap={10} rowGap={10}>
          <Box>
            <Text mb={1} fontSize="xl" color="tertiary" fontWeight="700">
              Hello 👋 there,
            </Text>
            <Text mb={1} textAlign="justify" fontSize={["lg", "xl"]}>
              Let me introduce myself as Shibli. As an enthusiastic and creative developer, I am passionate about the
              web and Android development using Flutter and React. I have built several complex apps in React and
              Flutter , so I am confident in my ability to deliver excellent results.
              <br />
              <br />
              I'm a fun person who enjoys nature, pets, and programming! I am always looking for new ways to accomplish
              tasks and I love learning new things.
            </Text>
          </Box>
          <Box
            alignSelf="center"
            sx={{
              img: {
                border: "2px solid #49c29a !important",
              },
            }}
            justifySelf={["center", "center", "right"]}
          >
            <NextImage
              src="/me2.jpeg"
              height={450}
              width={450}
              alt="syed shibli mahmud"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={`/_next/image?url=shibli&w=16&q=1`}
              className="image"
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutMe;
