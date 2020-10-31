import { Text } from "@chakra-ui/core";
import Head from "next/head";
import React from "react";
import Logo from "../../public/logo.svg";
import { Container } from "../components/Container";
import { Main } from "../components/Main";

const Archive = () => {
  return (
    <>
      <Head>
        <title>shibli | archive</title>
        <link rel="icon" href={Logo} type="image/x-icon" />
      </Head>
      <Container>
        <Main>
          <Text fontSize="6xl" fontWeight="700">
            Archive
          </Text>
          <Text fontSize="xl">A big list of things I’ve worked on</Text>
        </Main>
      </Container>
    </>
  );
};

export default Archive;
