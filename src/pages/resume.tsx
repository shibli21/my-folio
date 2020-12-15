import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Logo from "../../public/logo.svg";
import { Container } from "../components/Container";
import { Main } from "../components/Main";

const resume = () => {
  return (
    <>
      <Head>
        <title>shibli | resume</title>
        <link rel="icon" href={Logo} type="image/x-icon" />
      </Head>
      <Container>
        <Main>
          <Box>
            <Box mt={6} cursor="pointer">
              <FaArrowLeft onClick={() => history.back()} />
            </Box>
            <Text fontSize="6xl" height="200vh" fontWeight="700">
              Resume
            </Text>
          </Box>
        </Main>
      </Container>
    </>
  );
};

export default resume;
