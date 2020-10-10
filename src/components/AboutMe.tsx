import {
  Box,
  Grid,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/core";
import React from "react";
import { BsFillSquareFill } from "react-icons/bs";

const AboutMe = () => {
  return (
    <Box
      my={"140px"}
      maxW={["100%", "100%", "900px", "900px"]}
      mx="auto"
      id="aboutMe"
    >
      <Text fontSize="4xl" mb={10} fontWeight="700">
        About me
      </Text>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"]}
        columnGap={2}
        rowGap={4}
      >
        <Box>
          <Text mb={1} color="GrayText">
            Nice to meet you
          </Text>
          <Text mb={1} fontSize="4xl" fontWeight="700">
            Hi there, I’m Shibli
          </Text>
          <Text mb={1} fontSize="xl">
            I work as a fullstack developer.
          </Text>
          <Text mb={1} fontSize="xl">
            Currently, I’m completing my under graduation from
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
                <ListIcon color="primary">
                  <BsFillSquareFill size="30px" />
                </ListIcon>
                Typescript
              </ListItem>
              <ListItem>
                <ListIcon color="primary">
                  <BsFillSquareFill size="30px" />
                </ListIcon>
                HTML
              </ListItem>

              <ListItem>
                <ListIcon color="primary">
                  <BsFillSquareFill size="30px" />
                </ListIcon>
                (S)CSS
              </ListItem>
            </List>
            <List spacing={3}>
              <ListItem>
                <ListIcon color="primary">
                  <BsFillSquareFill size="30px" />
                </ListIcon>
                React
              </ListItem>{" "}
              <ListItem>
                <ListIcon color="primary">
                  <BsFillSquareFill size="30px" />
                </ListIcon>
                Nodejs
              </ListItem>
              <ListItem>
                <ListIcon color="primary">
                  <BsFillSquareFill size="30px" />
                </ListIcon>
                Graphql
              </ListItem>
            </List>
          </Stack>
        </Box>
        <Box justifySelf={["center", "initial", "center", "center"]}>
          <Image
            src="/me.jpg"
            h="300px"
            loading="lazy"
            objectFit="cover"
            alt="syed shibli mahmud"
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default AboutMe;