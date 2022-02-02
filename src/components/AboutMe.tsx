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
              Hello 👋 there, I’m Shibli
            </Text>
            <Text mb={1} textAlign="justify" fontSize={["lg", "xl"]}>
              I'm a computer nerd and a computer science student major. I'm really passionate about coding, software
              development, and web design.I have been working with react.js, javascript, and typescript for couple of
              years now. I have experience coding in node.
              <br />I have built a few complex apps in react and javascript so I am confident in my abilities to deliver
              great work.
              <br />
              <br />
              In addition to that i have been developing apps using Flutter for over a year now. With this experience I
              have created products that can be used to develop cross-platform mobile apps in less time. I love to learn
              new things and I'm always looking for new ways to do things.
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
