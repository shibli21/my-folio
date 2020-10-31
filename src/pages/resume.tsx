import { Text } from "@chakra-ui/core";
import Head from "next/head";
import React from "react";
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
          <Text fontSize="6xl" height="200vh" fontWeight="700">
            Resume
          </Text>
        </Main>
      </Container>
    </>
  );
};

export default resume;
