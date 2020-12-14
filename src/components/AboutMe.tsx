import {
  Box,
  Grid,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";

const AboutMe = () => {
  return (
    <Box py="6rem" px={["0", "0", "0", "70px"]} id="aboutMe">
      <Text fontSize="4xl" mb={10} fontWeight="700">
        About me
      </Text>
      <Grid
        templateColumns={["1fr", "1fr ", "1fr 1fr", "1fr 1fr"]}
        columnGap={2}
        rowGap={4}
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
          <Stack isInline spacing={"80px"}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={SiTypescript} color="primary" />
                Typescript
              </ListItem>
              <ListItem>
                <ListIcon as={FaHtml5} color="primary" />
                HTML
              </ListItem>

              <ListItem>
                <ListIcon as={FaCss3} color="primary" />
                (S)CSS
              </ListItem>
            </List>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaReact} color="primary" />
                React
              </ListItem>
              <ListItem>
                <ListIcon as={FaNodeJs} color="primary" />
                Nodejs
              </ListItem>
              <ListItem>
                <ListIcon as={GrGraphQl} color="primary" />
                Graphql
              </ListItem>
            </List>
          </Stack>
        </Box>
        <Box
          justifySelf="center"
          color="primary"
          backgroundImage={`radial-gradient(currentColor 1px, transparent 0.5px)`}
          backgroundSize={`calc(15 * 0.5px) calc(15 * 0.5px)`}
          mt="30px"
          mr="30px"
        >
          <Box transform={"translate(30px,-30px)"}>
            <NextImage
              src="/me.jpg"
              height="350"
              width="350"
              alt="syed shibli mahmud"
              loading="eager"
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default AboutMe;
