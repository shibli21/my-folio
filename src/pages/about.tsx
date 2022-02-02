import AboutMe from "@/components/AboutMe";
import { Container } from "@/components/Container";
import { Main } from "@/components/Main";
import Timeline from "@/components/Timeline";
import { Box, Icon } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>about | shibli</title>
      </Head>
      <Container>
        <Main>
          <Box>
            <Icon
              fontSize="22px"
              mt={6}
              onClick={() => history.back()}
              cursor="pointer"
              as={FaArrowLeft}
              _hover={{ color: "tertiary" }}
            />

            <AboutMe />
            <Timeline />
          </Box>
        </Main>
      </Container>
    </>
  );
};

export default resume;
