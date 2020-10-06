import { Box, Grid, Image, List, ListItem, Text } from "@chakra-ui/core";
import React from "react";

interface Props {}

const AboutMe = (props: Props) => {
  return (
    <Box my={"100px"} maxW="800px" mx="auto">
      <Text fontSize="4xl" mb={10} fontWeight="700">
        About me
      </Text>
      <Grid templateColumns="1fr 1fr">
        <Box>
          <Image
            src="/me.jpg"
            h="300px"
            loading="lazy"
            objectFit="cover"
            alt="syed shibli mahmud"
          />
        </Box>
        <Box>
          <Text mb={1}>Hello! I'm Shibli, a CS student.</Text>
          <Text mb={3}>
            Here are a few technologies I've been working with recently:
          </Text>
          <Grid templateColumns="1fr 1fr">
            <List spacing={3}>
              <ListItem>Typescript</ListItem>
              <ListItem>HTML</ListItem>
              <ListItem>(S)CSS</ListItem>
            </List>
            <List spacing={3}>
              <ListItem>React</ListItem>
              <ListItem>Nodejs</ListItem>
              <ListItem>Graphql</ListItem>
            </List>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default AboutMe;
