import { Box, Grid, HStack, Link, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";

const AboutMe = () => {
  return (
    <Box py="6rem" px={["0", "0", "0", "70px"]} id="aboutMe">
      <Text fontSize="4xl" mb={10} lineHeight={1} fontWeight="700">
        About me
      </Text>
      <Grid
        templateColumns={["1fr", "1fr ", "1fr 1fr", "1fr 1fr"]}
        columnGap={2}
        rowGap={10}
      >
        <Box>
          <Text mb={1} color="gray.500">
            Nice to meet you
          </Text>
          <Text mb={1} fontSize="2xl" fontWeight="700">
            Hi there, I’m Shibli
          </Text>
          <Text mb={1} fontSize="xl">
            I work as a fullstack developer. Currently, I’m completing my under
            graduation from
            <Link
              color="primary"
              href="http://www.sec.ac.bd/"
              isExternal
              ml={2}
            >
              sylhet engineering college.
            </Link>
          </Text>
          <Text mb={3} fontSize="lg">
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
          </Grid>
        </Box>
        <Box
          justifySelf="center"
          border="3px solid"
          borderColor="primary"
          mt="30px"
          mr="30px"
          p="-3px"
        >
          <Box maxW="350px" maxH="350px" transform={"translate(20px,-20px)"}>
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
